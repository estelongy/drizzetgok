import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Navigation from '../sections/Navigation';
import { useSeo } from '../hooks/useSeo';

function Home() {
  useSeo({
    title: 'Dr. İzzet Gök | Beylikdüzü Medikal Estetik — Botoks, Dolgu, Mezoterapi, PRP',
    description: 'Beylikdüzü İstanbul\'da 17 yıllık deneyim ile etik ve doğal medikal estetik. Botoks, dolgu, mezoterapi, PRP, kimyasal peeling ve cilt bakımı. Ücretsiz konsültasyon.',
    canonical: 'https://www.drizzetgok.com/',
  });

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
