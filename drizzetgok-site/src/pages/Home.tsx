import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Navigation from '../sections/Navigation';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
