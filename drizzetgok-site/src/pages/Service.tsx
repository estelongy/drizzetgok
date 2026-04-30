import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace,
  Smile, Star, Wand2, Clock, Calendar, CheckCircle, ArrowLeft, MessageCircle
} from 'lucide-react';
import { getServiceBySlug } from '../lib/services-data';
import { useSeo } from '../hooks/useSeo';
import Navigation from '../sections/Navigation';

const ICONS = { Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace, Smile, Star, Wand2 };

const Service = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useSeo({
    title: service
      ? `${service.title} ${service.synonyms.length ? '(' + service.synonyms.slice(0, 2).join(' / ') + ')' : ''} | Dr. İzzet Gök Beylikdüzü`
      : 'Hizmet bulunamadı',
    description: service?.shortDescription,
    canonical: service ? `https://www.drizzetgok.com/hizmetlerimiz/${service.slug}` : undefined,
  });

  useEffect(() => {
    if (!service) return;
    // Inject MedicalProcedure JSON-LD per service
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

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${service.color} pt-32 pb-16 px-4`}>
        <div className="max-w-5xl mx-auto">
          <Link to="/#hizmetler" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Tüm Hizmetler
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white flex-shrink-0">
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
              {service.synonyms.length > 0 && (
                <p className="text-white/80 text-sm mb-4">
                  Diğer adları: {service.synonyms.join(' · ')}
                </p>
              )}
              <p className="text-lg text-white/90 max-w-2xl">{service.intro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b border-slate-100 bg-slate-50 py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-emerald-500" />
            <div>
              <p className="text-xs text-slate-500">Süre</p>
              <p className="font-semibold text-slate-800">{service.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-emerald-500" />
            <div>
              <p className="text-xs text-slate-500">Etki Süresi</p>
              <p className="font-semibold text-slate-800">{service.resultDuration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-500" />
            <div>
              <p className="text-xs text-slate-500">Hizmet Bölgeleri</p>
              <p className="font-semibold text-slate-800">Beylikdüzü, Bahçeşehir, Avcılar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Nedir?</h2>
          <p className="text-slate-600 leading-relaxed mb-12">{service.longDescription}</p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4">Hangi Bölgelere/Sorunlara Uygulanır?</h2>
          <ul className="space-y-2 mb-12">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mb-4">Faydaları</h2>
          <ul className="space-y-2 mb-12">
            {service.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mb-4">Uygulama Süreci</h2>
          <ol className="space-y-3 mb-12">
            {service.process.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-700 pt-1">{p}</span>
              </li>
            ))}
          </ol>

          {service.faq.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Sıkça Sorulan Sorular</h2>
              <div className="space-y-4 mb-12">
                {service.faq.map((f, i) => (
                  <article key={i} className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-slate-800 mb-2">{f.q}</h3>
                    <p className="text-slate-600">{f.a}</p>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* CTA */}
          <div className={`bg-gradient-to-r ${service.color} rounded-3xl p-8 md:p-12 text-center`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {service.shortTitle} için Ücretsiz Konsültasyon
            </h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Detaylı değerlendirme ve size özel tedavi planı için WhatsApp üzerinden hemen ulaşın.
            </p>
            <a
              href="https://wa.me/905524228485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-medium hover:shadow-2xl transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile İletişim
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
