// Rehber görsellerini WebP'ye çevirir (fallback olarak orijinaller kalır).
// Geniş görseller makul bir genişliğe küçültülür (kolon ~672px, 1.5x retina = ~1100px yeter).
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.resolve('public/images');
const MAX_W = 1100;
const QUALITY = 82;

const targets = [
  'masseter-anatomi.png',
  'masseter-enjeksiyon.jpg',
  'hiperhidroz-genel.png',
  'hiperhidroz-koltukalti.jpg',
  'hiperhidroz-palmar.jpg',
  'hiperhidroz-botox.png',
  'hiperhidroz-el.png',
];

for (const file of targets) {
  const src = path.join(DIR, file);
  const out = path.join(DIR, file.replace(/\.(png|jpe?g)$/i, '.webp'));
  const meta = await sharp(src).metadata();
  const resize = meta.width > MAX_W ? { width: MAX_W } : null;
  await sharp(src).resize(resize).webp({ quality: QUALITY }).toFile(out);
  const [a, b] = await Promise.all([stat(src), stat(out)]);
  console.log(
    `${file.padEnd(28)} ${(a.size / 1024).toFixed(0).padStart(5)}KB -> ` +
    `${path.basename(out).padEnd(28)} ${(b.size / 1024).toFixed(0).padStart(5)}KB` +
    (resize ? `  (${meta.width}->${MAX_W}px)` : '')
  );
}
console.log('bitti.');
