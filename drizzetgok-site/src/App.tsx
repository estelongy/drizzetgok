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
import NotFound from './pages/NotFound';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
