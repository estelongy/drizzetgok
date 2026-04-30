import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import Navigation from '../sections/Navigation';
import { useSeo } from '../hooks/useSeo';

function Home() {
  useSeo({
    title: 'Dr. İzzet Gök | Beylikdüzü, Bahçeşehir, Avcılar Medikal Estetik — Botoks, Dolgu, Mezoterapi, PRP',
    description: 'Beylikdüzü, Bahçeşehir, Başakşehir, Avcılar, Esenyurt, Yakuplu, Büyükçekmece ve Küçükçekmece\'ye hizmet veren İstanbul medikal estetik kliniği. 17 yıllık deneyim. Ücretsiz konsültasyon.',
    canonical: 'https://www.drizzetgok.com/',
  });

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
