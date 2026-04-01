import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ana Sayfa', href: '#anasayfa' },
    { label: 'Hakkımda', href: '#hakkimda' },
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#anasayfa" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">İG</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                Dr. İzzet Gök
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-emerald-600 ${
                  isScrolled ? 'text-slate-700' : 'text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+905524228485"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Randevu Al</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg mt-2 p-4 mb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+905524228485"
                className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-xl font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Randevu Al</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
