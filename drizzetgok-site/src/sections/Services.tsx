import {
  Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace,
  Smile, Star, Wand2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../lib/services-data';

const ICONS = { Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace, Smile, Star, Wand2 };

const Services = () => {
  return (
    <section id="hizmetler" className="py-20 md:py-32 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Hizmetlerimiz
          </span>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Profesyonel <span className="text-emerald-500">Medikal Estetik</span> Hizmetler
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Botoks (botox / Btx), dolgu (filler), dudak dolgusu, sıvı yüz germe, full face estetik, mezoterapi, PRP,
            kimyasal peeling ve cilt bakımı — modern teknikler ve onaylı ürünlerle, size özel çözümler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.iconName];
            return (
              <article
                key={service.slug}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                {/* Decorative header — gradient + pattern + icon */}
                <div className={`relative h-44 bg-gradient-to-br ${service.color} overflow-hidden`}>
                  {/* Soft pattern overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />
                  {/* Glow blobs */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>
                  {/* Service short title pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs uppercase tracking-wider text-white/90 font-semibold bg-black/15 backdrop-blur px-2.5 py-1 rounded-full">
                      {service.shortTitle}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  {service.synonyms.length > 0 && (
                    <p className="text-xs text-slate-400 mb-3 uppercase tracking-wide">
                      {service.synonyms.slice(0, 2).join(' · ')}
                    </p>
                  )}
                  <p className="text-slate-600 mb-4 flex-1">{service.shortDescription}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-slate-100">
                    <Link
                      to={`/hizmetlerimiz/${service.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      <span>Detayını Gör</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href="https://wa.me/905524228485"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-emerald-600"
                      aria-label={`${service.shortTitle} için WhatsApp`}
                    >
                      Bilgi Al
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Size Özel Tedavi Planı
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Ücretsiz konsültasyon ile ihtiyaçlarınıza en uygun tedavi planını birlikte oluşturalım.
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
