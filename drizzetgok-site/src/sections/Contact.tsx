import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle,
  Instagram,
  Facebook,
  Mail,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adres',
      content: 'Beylikdüzü, İstanbul',
      href: 'https://maps.google.com/?q=Beylikdüzü,İstanbul'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      content: '+90 552 422 84 85',
      href: 'tel:+905524228485'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '+90 552 422 84 85',
      href: 'https://wa.me/905524228485'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi-Cumartesi: 10:00 - 18:00',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: 'https://instagram.com/drizzetgok',
      color: 'hover:bg-pink-500 hover:text-white'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      href: 'https://facebook.com/drizzetgok',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'E-posta',
      href: 'mailto:info@drizzetgok.com',
      color: 'hover:bg-red-500 hover:text-white'
    }
  ];

  return (
    <section id="iletisim" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Bizimle <span className="text-emerald-500">İletişime</span> Geçin
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Sorularınız için bize ulaşabilir, randevu alabilir veya kliniğimizi ziyaret edebilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">İletişim Bilgileri</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 mb-1">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-800 font-medium hover:text-emerald-600 transition-colors flex items-center gap-2"
                      >
                        {item.content}
                        {item.href.startsWith('http') && <ExternalLink className="w-4 h-4" />}
                      </a>
                    ) : (
                      <p className="text-slate-800 font-medium">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-slate-800 mb-4">Sosyal Medya</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center transition-all ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Hızlı İşlemler</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/905524228485"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-green-50 hover:bg-green-100 rounded-2xl transition-colors group"
              >
                <div className="w-14 h-14 bg-green-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-800">WhatsApp'tan Yazın</p>
                  <p className="text-slate-600">Hızlı yanıt için WhatsApp üzerinden ulaşın</p>
                </div>
              </a>

              <a
                href="tel:+905524228485"
                className="flex items-center gap-4 p-6 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors group"
              >
                <div className="w-14 h-14 bg-blue-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-800">Hemen Ara</p>
                  <p className="text-slate-600">Telefon ile doğrudan iletişime geçin</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Beylikdüzü,İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-red-50 hover:bg-red-100 rounded-2xl transition-colors group"
              >
                <div className="w-14 h-14 bg-red-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-800">Yol Tarifi Al</p>
                  <p className="text-slate-600">Kliniğimize kolayca ulaşın</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">İG</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">Dr. İzzet Gök</p>
                <p className="text-sm text-slate-500">Medikal Estetik</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#anasayfa" className="text-slate-600 hover:text-emerald-600 transition-colors">Ana Sayfa</a>
              <a href="#hakkimda" className="text-slate-600 hover:text-emerald-600 transition-colors">Hakkımda</a>
              <a href="#hizmetler" className="text-slate-600 hover:text-emerald-600 transition-colors">Hizmetler</a>
              <a href="#iletisim" className="text-slate-600 hover:text-emerald-600 transition-colors">İletişim</a>
              <a href="#/bio" className="text-slate-600 hover:text-emerald-600 transition-colors">Linkler</a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-sm">© 2026 Dr. İzzet Gök</p>
              <p className="text-slate-400 text-xs">Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
