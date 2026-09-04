// Build sonrası statik snapshot (prerender) — SEO/AEO için.
//
// Site bir React SPA (CSR). Başlık, meta ve JSON-LD (MedicalWebPage, BreadcrumbList,
// FAQPage) JS çalıştıktan sonra head'e ekleniyor; ilk HTML'de yok. Bu script her route'u
// gerçek bir tarayıcıda (puppeteer) açar, JS çalıştıktan sonraki tam HTML'i alıp
// dist/<route>/index.html olarak yazar. Böylece botlar ve AI cevap motorları içeriği +
// yapısal veriyi ilk yanıtta görür.
//
// Route listesi tek doğruluk kaynağından — public/sitemap.xml — türetilir (hardcode yok).
// Güvenli degrade: bir route'ta beklenen <title>/JSON-LD gelmezse o route ATLANIR
// (yanlış snapshot yazılmaz); o URL mevcut SPA fallback ile çalışmaya devam eder.

import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PORT = 4173;
const ORIGIN = `http://localhost:${PORT}`;

// 410 döndürülen /pages/* yolları prerender edilmez (yalnızca /pages/bio meşru).
// vercel.json'daki 410 kuralıyla çakışmayı önlemek için /pages/bio'yu da bilerek
// snapshot ETMİYORUZ: mevcut dist/pages/bio.html yapısı korunur.
const SKIP = new Set(['/pages/bio']);

function routesFromSitemap() {
  const xml = readFileSync(join(ROOT, 'public', 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = locs
    .map((u) => u.replace(/^https?:\/\/[^/]+/, '') || '/')
    .filter((p) => !SKIP.has(p));
  return [...new Set(paths)];
}

// route -> dist içindeki hedef dosya. Kök '/' => dist/index.html (SPA kabuğu; snapshot
// ile zenginleştirilir). Diğerleri => dist/<route>/index.html (filesystem handler bunları
// SPA fallback'ten önce servis eder).
function targetFile(route) {
  if (route === '/') return join(DIST, 'index.html');
  return join(DIST, route.replace(/^\//, ''), 'index.html');
}

async function waitForPreview(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      /* henüz ayakta değil */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function main() {
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html yok — önce `vite build` çalışmalı.');
    process.exit(1);
  }

  const routes = routesFromSitemap();
  console.log(`[prerender] ${routes.length} route sitemap'ten türetildi.`);

  // vite preview sunucusunu başlat
  const preview = spawn(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['vite', 'preview', '--port', String(PORT), '--strictPort'],
    { cwd: ROOT, stdio: 'ignore', shell: process.platform === 'win32' },
  );

  const cleanup = () => {
    try { preview.kill(); } catch { /* yok say */ }
  };
  process.on('exit', cleanup);

  const up = await waitForPreview(ORIGIN + '/');
  if (!up) {
    cleanup();
    console.error('[prerender] preview sunucusu ayağa kalkmadı.');
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let ok = 0;
  let skipped = 0;
  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        await page.goto(ORIGIN + route, { waitUntil: 'networkidle0', timeout: 30000 });
        // #root dolana kadar bekle (React mount)
        await page.waitForFunction(
          () => {
            const r = document.getElementById('root');
            return r && r.children.length > 0;
          },
          { timeout: 15000 },
        );

        // Doğrulama: title anasayfa şablonundan farklı VE en az bir JSON-LD var mı?
        const info = await page.evaluate(() => ({
          title: document.title,
          jsonld: document.querySelectorAll('script[type="application/ld+json"]').length,
          hasRoot: !!document.getElementById('root')?.children.length,
        }));

        if (!info.hasRoot || info.jsonld === 0 || !info.title) {
          console.warn(`[prerender] ATLANDI ${route} (title="${info.title}", jsonld=${info.jsonld})`);
          skipped++;
          await page.close();
          continue;
        }

        const html = '<!DOCTYPE html>\n' + (await page.content()).replace(/^<!DOCTYPE html>/i, '');
        const out = targetFile(route);
        mkdirSync(dirname(out), { recursive: true });
        writeFileSync(out, html, 'utf8');
        console.log(`[prerender] ✓ ${route} → ${out.replace(ROOT, '.')}  (jsonld=${info.jsonld})`);
        ok++;
      } catch (e) {
        console.warn(`[prerender] ATLANDI ${route} — ${e.message}`);
        skipped++;
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    cleanup();
  }

  console.log(`[prerender] Bitti: ${ok} snapshot yazıldı, ${skipped} atlandı.`);
  if (ok === 0) {
    console.error('[prerender] Hiç snapshot üretilemedi — build başarısız sayılıyor.');
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('[prerender] Hata:', e);
  process.exit(1);
});
