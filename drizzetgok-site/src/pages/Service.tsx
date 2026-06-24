import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace,
  Smile, Star, Wand2, Clock, Calendar, CheckCircle, ArrowRight,
  ChevronRight, MessageCircle, Home as HomeIcon, BookOpen
} from 'lucide-react';
import { getServiceBySlug, SERVICES } from '../lib/services-data';
import { GUIDES } from '../lib/guides-data';
import { useSeo } from '../hooks/useSeo';
import Navigation from '../sections/Navigation';

const ICONS = { Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace, Smile, Star, Wand2 };

const Service = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useSeo({
    // Yerel niyet: "[Hizmet] Beylikdüzü" kelime sırası öne çekildi (Search Console verisi:
    // "beylikdüzü dudak dolgusu/botoks" yüksek gösterim alıyor). İlk sinonim korunur.
    title: service
      ? `${service.title} Beylikdüzü ${service.synonyms.length ? '(' + service.synonyms[0] + ')' : ''} | Dr. İzzet Gök`
      : 'Hizmet bulunamadı',
    description: service
      ? `${service.shortDescription} Beylikdüzü, Bahçeşehir ve Avcılar bölgesinde Dr. İzzet Gök ile.`
      : undefined,
    canonical: service ? `https://www.drizzetgok.com/hizmetlerimiz/${service.slug}` : undefined,
  });

  useEffect(() => {
    if (!service) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-jsonld';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: service.title,
      alternateName: service.synonyms,
      description: service.longDescription,
      procedureType: 'https://schema.org/NoninvasiveProcedure',
      bodyLocation: 'Yüz',
      preparation: service.process[0] || 'Konsültasyon',
      followup: service.process[service.process.length - 1] || 'Kontrol',
      url: `https://www.drizzetgok.com/hizmetlerimiz/${service.slug}`,
      image: 'https://www.drizzetgok.com/images/dr-portrait.jpg',
      provider: { '@id': 'https://www.drizzetgok.com/#clinic' },
    });
    document.head.appendChild(script);

    const breadcrumb = document.createElement('script');
    breadcrumb.type = 'application/ld+json';
    breadcrumb.id = 'service-breadcrumb';
    breadcrumb.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.drizzetgok.com/' },
        { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://www.drizzetgok.com/hizmetlerimiz' },
        { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.drizzetgok.com/hizmetlerimiz/${service.slug}` },
      ],
    });
    document.head.appendChild(breadcrumb);

    return () => {
      document.getElementById('service-jsonld')?.remove();
      document.getElementById('service-breadcrumb')?.remove();
    };
  }, [service]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = ICONS[service.iconName];
  const relatedGuide = GUIDES.find((g) => g.relatedServiceSlug === service.slug);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero — sade açık zemin; renk kimliği ikon kutusunda */}
      <section className="relative bg-gradient-to-b from-white via-slate-50 to-white pt-32 md:pt-36 pb-12 border-b border-slate-100">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-base text-slate-400 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-emerald-600 transition-colors">
              <HomeIcon className="w-4 h-4" /> <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/hizmetler" className="hover:text-emerald-600 transition-colors">Hizmetler</Link>
          </nav>
          <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
            <Icon className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-[1.1]">{service.title}</h1>
          {service.synonyms.length > 0 && (
            <p className="text-base text-slate-500 mb-4">Diğer adları: {service.synonyms.join(' · ')}</p>
          )}
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b border-slate-100 bg-slate-50 py-8">
        <div className="max-w-3xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="text-base text-slate-500">Süre</p>
              <p className="font-semibold text-lg text-slate-800">{service.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="text-base text-slate-500">Etki Süresi</p>
              <p className="font-semibold text-lg text-slate-800">{service.resultDuration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="text-base text-slate-500">Hizmet Bölgeleri</p>
              <p className="font-semibold text-lg text-slate-800">Beylikdüzü, Bahçeşehir, Avcılar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-slate-900 mb-4">Nedir?</h2>
          <p className="text-[1.1875rem] leading-[1.8] text-slate-700 mb-6">{service.longDescription}</p>

          {relatedGuide && (
            <Link
              to={`/rehber/${relatedGuide.slug}`}
              className="group flex items-center gap-4 mb-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-5 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:scale-[1.01] transition-all"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold text-white/90 mb-0.5">
                  📖 Ücretsiz Detaylı Rehber · {relatedGuide.readingMinutes} dk okuma
                </p>
                <h3 className="font-bold text-lg text-white leading-snug">{relatedGuide.title}</h3>
                <p className="text-base text-white/85 line-clamp-1">{relatedGuide.excerpt}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-slate-900 mb-4">Hangi Bölgelere/Sorunlara Uygulanır?</h2>
          <ul className="space-y-2.5 mb-12">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700">{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-slate-900 mb-4">Faydaları</h2>
          <ul className="space-y-2.5 mb-12">
            {service.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-700">{b}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-slate-900 mb-4">Uygulama Süreci</h2>
          <ol className="space-y-3 mb-12">
            {service.process.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-9 h-9 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-lg text-slate-700 pt-1">{p}</span>
              </li>
            ))}
          </ol>

          {service.faq.length > 0 && (
            <>
              <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
              <div className="space-y-4 mb-12">
                {service.faq.map((f, i) => (
                  <article key={i} className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-lg text-slate-800 mb-2">{f.q}</h3>
                    <p className="text-base leading-relaxed text-slate-600">{f.a}</p>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* CTA */}
          <div className={`bg-gradient-to-r ${service.color} rounded-3xl p-8 md:p-12 text-center`}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              {service.shortTitle} için Ücretsiz Konsültasyon
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Detaylı değerlendirme ve size özel tedavi planı için WhatsApp üzerinden hemen ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/905524228485"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile İletişim
              </a>
              {relatedGuide && (
                <Link
                  to={`/rehber/${relatedGuide.slug}`}
                  className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/15 transition"
                >
                  <BookOpen className="w-5 h-5" />
                  Önce Rehberi Oku
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50 border-t border-slate-100" aria-labelledby="related-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="related-heading" className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            İlgili Hizmetler
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.filter(s => s.slug !== service.slug).slice(0, 3).map((s) => {
              const SIcon = ICONS[s.iconName];
              return (
                <Link
                  key={s.slug}
                  to={`/hizmetlerimiz/${s.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center text-white mb-3`}>
                    <SIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-base text-slate-500 mb-2 line-clamp-2">{s.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-base text-emerald-600 font-semibold">
                    Detaya bak <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
