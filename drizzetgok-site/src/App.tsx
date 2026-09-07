import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Service from './pages/Service';
import Guide from './pages/Guide';
import GuideList from './pages/GuideList';
import BeylikduzuDudakDolgusu from './pages/BeylikduzuDudakDolgusu';
import BeylikduzuBotoks from './pages/BeylikduzuBotoks';
import BeylikduzuSiviYuzGerme from './pages/BeylikduzuSiviYuzGerme';
import NotFound from './pages/NotFound';

// gtag global (Google Ads gtag.js index.html'de yüklenir).
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Anasayfa bölüm route'ları kendi scroll'unu (scrollIntoView) Home içinde yönetir.
const SECTION_PATHS = new Set(['/anasayfa', '/hakkimda', '/hizmetler', '/sss', '/iletisim']);

// Her route değişiminde sayfayı en üste al (Service/Guide/GuideList vb. için).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (SECTION_PATHS.has(pathname)) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

// Google Ads dönüşüm izleme: herhangi bir WhatsApp/Randevu (wa.me) linkine tıklama
// dönüşüm olarak gönderilir. Tek global dinleyici tüm butonları kapsar (11 dosyaya
// dokunmadan); capture aşamasında yakalanır, böylece yeni sekme açılmadan önce çalışır.
function ConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href*="wa.me/"]');
      if (!link) return;
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: 'AW-18433594915/AOtYCJGmzvAcEKOs6dVE' });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConversionTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anasayfa" element={<Home section="anasayfa" />} />
        <Route path="/hakkimda" element={<Home section="hakkimda" />} />
        <Route path="/hizmetler" element={<Home section="hizmetler" />} />
        <Route path="/sss" element={<Home section="sss" />} />
        <Route path="/iletisim" element={<Home section="iletisim" />} />
        <Route path="/pages/bio" element={<Bio />} />
        <Route path="/hizmetlerimiz/:slug" element={<Service />} />
        <Route path="/rehber" element={<GuideList />} />
        <Route path="/rehber/:slug" element={<Guide />} />
        <Route path="/beylikduzu-dudak-dolgusu" element={<BeylikduzuDudakDolgusu />} />
        <Route path="/beylikduzu-botoks" element={<BeylikduzuBotoks />} />
        <Route path="/beylikduzu-sivi-yuz-germe" element={<BeylikduzuSiviYuzGerme />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
