import { ArrowRight, Calendar, Award, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              17 Yıllık Deneyim
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Doğal Güzelliğiniz İçin{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Profesyonel Bakım
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Medikal estetik alanında 17 yıllık deneyimle, etik ve doğal yaklaşımla 
              güzelliğinizi ön plana çıkarıyoruz. Size özel tedavi planları ile 
              sağlıklı ve doğal bir görünüm elde edin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://wa.me/905524228485"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Calendar className="w-5 h-5" />
                <span>Randevu Al</span>
              </a>
              <a
                href="#hizmetler"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-medium transition-all hover:border-emerald-300"
              >
                <span>Hizmetlerimiz</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Sertifikalı Uzman</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Award className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">17+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">1000+ Mutlu Hasta</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                <picture>
                  <source srcSet="/images/dr-portrait.webp" type="image/webp" />
                  <img
                    src="/images/dr-portrait.jpg"
                    alt="Dr. İzzet Gök — Beylikdüzü Medikal Estetik Hekimi, 17 yıllık deneyim"
                    className="w-full h-full object-cover"
                    width="800"
                    height="1000"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Deneyim</p>
                    <p className="font-bold text-slate-800">17 Yıl</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Güven</p>
                    <p className="font-bold text-slate-800">%100</p>
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

export default Hero;
