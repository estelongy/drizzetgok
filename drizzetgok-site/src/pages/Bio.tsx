import { 
  Globe, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Syringe,
  Clock,
  Instagram,
  Facebook
} from 'lucide-react';

const Bio = () => {
  const links = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Online Randevu Al',
      href: 'https://www.doktortakvimi.com/izzet-gok',
      color: 'bg-emerald-500 hover:bg-emerald-600'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp'tan Yazın",
      href: 'https://wa.me/905524228485',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Hemen Ara',
      href: 'tel:+905524228485',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Klinik Konumu',
      href: 'https://maps.app.goo.gl/5wG7EhGQkanN1vuv5',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: <Syringe className="w-6 h-6" />,
      title: 'Hizmetlerimiz',
      href: 'https://www.drizzetgok.com/#hizmetler',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      href: 'https://instagram.com/drizzetgok',
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: 'Facebook',
      href: 'https://facebook.com/drizzetgok',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">İG</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Dr. İzzet Gök</h1>
          <p className="text-slate-600 mb-2">Medikal Estetik | 17 Yıllık Deneyim</p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Etik & Doğal
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-3 mb-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-4 w-full p-4 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-md ${link.color}`}
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                {link.icon}
              </div>
              <span className="flex-1 text-center">{link.title}</span>
            </a>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4 text-slate-700">
            <MapPin className="w-5 h-5 text-emerald-500" />
            <span className="font-medium">Beylikdüzü, İstanbul</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <Clock className="w-5 h-5 text-emerald-500" />
            <span>Pazartesi-Cumartesi: 10:00 - 18:00</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-400 text-sm">
          <p>© 2026 Dr. İzzet Gök</p>
          <p className="mt-1">Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
