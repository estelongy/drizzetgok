import { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Reviews from '../sections/Reviews';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import Navigation from '../sections/Navigation';
import { useSeo } from '../hooks/useSeo';

interface HomeProps {
  section?: string;
}

const SECTION_SEO: Record<string, { title: string; description: string; canonical: string }> = {
  hakkimda: {
    title: 'Hakkımda — Dr. İzzet Gök | Beylikdüzü Medikal Estetik Hekimi',
    description: '17 yıllık medikal estetik deneyimi, etik ve doğal yaklaşımıyla Beylikdüzü\'nde hizmet veren Dr. İzzet Gök hakkında detaylı bilgi. Felsefemiz ve uzmanlık alanlarımız.',
    canonical: 'https://www.drizzetgok.com/hakkimda',
  },
  hizmetler: {
    title: 'Hizmetler — Botoks, Dolgu, Dudak Dolgusu, Sıvı Yüz Germe, Mezoterapi | Dr. İzzet Gök',
    description: 'Beylikdüzü\'nde botoks (botox / Btx), yüz dolgu (filler), dudak dolgusu, sıvı yüz germe, full face estetik, mezoterapi, PRP ve cilt bakımı uygulamaları. Tüm medikal estetik hizmetlerin detayı.',
    canonical: 'https://www.drizzetgok.com/hizmetler',
  },
  iletisim: {
    title: 'İletişim & Randevu — Dr. İzzet Gök Beylikdüzü Medikal Estetik',
    description: 'Dr. İzzet Gök kliniğine WhatsApp, telefon veya kliniğe gelerek ulaşabilir, ücretsiz konsültasyon randevusu alabilirsiniz. Beylikdüzü, İstanbul. Pazartesi-Cumartesi 10:00-18:00.',
    canonical: 'https://www.drizzetgok.com/iletisim',
  },
  sss: {
    title: 'Sıkça Sorulan Sorular — Botoks, Dolgu, Mezoterapi | Dr. İzzet Gök',
    description: 'Botoks etki süresi, dolgu ağrılı mı, konsültasyon ücretli mi gibi medikal estetik hakkında sıkça sorulan soruların cevapları. Dr. İzzet Gök Beylikdüzü.',
    canonical: 'https://www.drizzetgok.com/sss',
  },
};

const DEFAULT_SEO = {
  title: 'Dr. İzzet Gök | Beylikdüzü, Bahçeşehir, Avcılar Medikal Estetik — Botoks, Dolgu, Mezoterapi, PRP',
  description: 'Beylikdüzü, Bahçeşehir, Başakşehir, Avcılar, Esenyurt, Yakuplu, Büyükçekmece, Küçükçekmece ile Kocaeli (Gebze, Darıca, Çayırova, Dilovası) bölgelerine hizmet veren medikal estetik kliniği. 17 yıllık deneyim. Ücretsiz konsültasyon.',
  canonical: 'https://www.drizzetgok.com/',
};

function Home({ section }: HomeProps) {
  const seo = section && SECTION_SEO[section] ? SECTION_SEO[section] : DEFAULT_SEO;
  useSeo(seo);

  // Path-based section scroll (clean URLs without #)
  useEffect(() => {
    if (!section) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const el = document.getElementById(section);
    if (el) {
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
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}

export default Home;
