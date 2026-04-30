import { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import Navigation from '../sections/Navigation';
import { useSeo } from '../hooks/useSeo';

interface HomeProps {
  section?: string;
}

function Home({ section }: HomeProps) {
  useSeo({
    title: 'Dr. İzzet Gök | Beylikdüzü, Bahçeşehir, Avcılar Medikal Estetik — Botoks, Dolgu, Mezoterapi, PRP',
    description: 'Beylikdüzü, Bahçeşehir, Başakşehir, Avcılar, Esenyurt, Yakuplu, Büyükçekmece, Küçükçekmece ile Kocaeli (Gebze, Darıca, Çayırova, Dilovası) bölgelerine hizmet veren medikal estetik kliniği. 17 yıllık deneyim. Ücretsiz konsültasyon.',
    canonical: 'https://www.drizzetgok.com/',
  });

  // Path-based section scroll (clean URLs without #)
  useEffect(() => {
    if (!section) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      // Wait one frame so layout is ready
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [section]);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  );
}

export default Home;
