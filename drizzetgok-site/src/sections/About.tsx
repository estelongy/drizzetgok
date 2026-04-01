import { Award, Heart, Shield, Sparkles, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Etik Yaklaşım',
      description: 'Hasta sağlığı ve memnuniyeti her zaman önceliğimizdir.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Doğal Sonuçlar',
      description: 'Yüz hatlarınıza uygun, doğal görünümlü estetik çözümler.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Güvenli Tedavi',
      description: 'Onaylı ürünler ve steril ortamda güvenli uygulamalar.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Uzman Kadro',
      description: 'Alanında uzman, deneyimli ve sertifikalı ekibimiz.'
    }
  ];

  const stats = [
    { value: '17+', label: 'Yıllık Deneyim' },
    { value: '1000+', label: 'Mutlu Hasta' },
    { value: '50+', label: 'Estetik Uygulama' },
    { value: '100%', label: 'Hasta Memnuniyeti' }
  ];

  return (
    <section id="hakkimda" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Hakkımda
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Estetikte <span className="text-emerald-500">Etik ve Doğal</span> Yaklaşım
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            17 yıllık medikal estetik deneyimimle, her hastama özel çözümler sunuyor. 
            Amacım, doğal güzelliğinizi ön plana çıkarırken sağlığınızı korumak.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl">
              <p className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">{stat.value}</p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Felsefemiz: Doğal Güzellik
              </h3>
              <p className="text-emerald-100 text-lg mb-6">
                Her yüz benzersizdir. Amacımız, yapay görünümler yerine, 
                sizin doğal güzelliğinizi ortaya çıkarmak. Estetik uygulamalarda 
                doğallık ve denge ilkemizdir.
              </p>
              <ul className="space-y-3">
                {[
                  'Kişiye özel tedavi planları',
                  'Doğal görünümlü sonuçlar',
                  'Hasta odaklı yaklaşım',
                  'Sürekli destek ve takip'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
