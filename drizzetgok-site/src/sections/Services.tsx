import { 
  Syringe, 
  Sparkles, 
  Zap, 
  Droplets, 
  FlaskConical, 
  ScanFace,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Syringe className="w-8 h-8" />,
      title: 'Botoks Uygulamaları',
      description: 'Kırışıklık tedavisi, terleme tedavisi ve kas spazmları için güvenli botoks uygulamaları.',
      features: ['Mimik kırışıklıkları', 'Terleme tedavisi', 'Kas spazmları'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Dolgu Uygulamaları',
      description: 'Yüz hatlarınıza hacim kazandıran, doğal görünümlü hyaluronik asit dolgu uygulamaları.',
      features: ['Dudak dolgusu', 'Yanak dolgusu', 'Çene hattı'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Mezoterapi',
      description: 'Cildinize ihtiyacı olan vitamin ve mineralleri enjekte eden canlandırıcı tedavi.',
      features: ['Yüz mezoterapisi', 'Saç mezoterapisi', 'Vücut mezoterapisi'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'PRP Tedavisi',
      description: 'Kendi kanınızdan elde edilen trombositten zengin plazma ile cilt yenileme.',
      features: ['Cilt gençleştirme', 'Saç dökülmesi', 'Yara iyileşmesi'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Kimyasal Peeling',
      description: 'Cildin üst tabakasını yenileyerek pürüzsüz ve parlak bir görünüm sağlayan tedavi.',
      features: ['Akne tedavisi', 'Leke tedavisi', 'Cilt yenileme'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: <ScanFace className="w-8 h-8" />,
      title: 'Cilt Bakımı',
      description: 'Profesyonel ürünler ve tekniklerle derinlemesine cilt bakımı ve temizliği.',
      features: ['Derin temizlik', 'Nemlendirme', 'Anti-aging'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="hizmetler" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Profesyonel <span className="text-emerald-500">Estetik</span> Hizmetler
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Modern teknikler ve onaylı ürünlerle, size özel estetik çözümler sunuyoruz. 
            Her tedavi öncesinde detaylı konsültasyon yapıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/905524228485"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                <span>Bilgi Al</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Size Özel Tedavi Planı
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Ücretsiz konsültasyon ile ihtiyaçlarınıza en uygun tedavi planını birlikte oluşturalım. 
              WhatsApp üzerinden bize ulaşabilirsiniz.
            </p>
            <a
              href="https://wa.me/905524228485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
            >
              <span>Ücretsiz Konsültasyon</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
