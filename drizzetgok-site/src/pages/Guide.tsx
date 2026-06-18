import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock, Calendar, ChevronRight, Home as HomeIcon, ArrowRight,
  MessageCircle, CheckCircle, XCircle, Info, Lightbulb, ShieldCheck,
} from 'lucide-react';
import { getGuideBySlug, GUIDES, type GuideBlock } from '../lib/guides-data';
import { getServiceBySlug } from '../lib/services-data';
import { useSeo } from '../hooks/useSeo';
import Navigation from '../sections/Navigation';
import BotoxMechanism from '../components/diagrams/BotoxMechanism';
import BotoxFaceMap from '../components/diagrams/BotoxFaceMap';

const DIAGRAMS = { BotoxMechanism, BotoxFaceMap };

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'prose':
      return (
        <div className="mb-12">
          {block.heading && <h2 className="text-2xl font-bold text-slate-800 mb-4">{block.heading}</h2>}
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-600 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      );

    case 'image':
      return (
        <figure className="mb-12 -mx-4 md:mx-0">
          <picture>
            {block.webp && <source srcSet={block.webp} type="image/webp" />}
            <img
              src={block.src}
              alt={block.alt}
              loading="lazy"
              className="w-full md:rounded-3xl object-cover max-h-[460px]"
            />
          </picture>
          {block.caption && (
            <figcaption className="text-sm text-slate-500 mt-3 text-center px-4">{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'diagram': {
      const Diagram = DIAGRAMS[block.component];
      return (
        <figure className="mb-12 bg-slate-50 rounded-3xl border border-slate-100 p-6 md:p-8">
          <Diagram />
          {block.caption && (
            <figcaption className="text-sm text-slate-500 mt-4 text-center max-w-2xl mx-auto">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case 'list':
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{block.heading}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {block.items.map((it, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-cyan-200 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{it.title}</h3>
                    <p className="text-sm text-slate-600">{it.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'timeline':
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{block.heading}</h2>
          <ol className="relative border-l-2 border-cyan-100 ml-3 space-y-6">
            {block.steps.map((s, i) => (
              <li key={i} className="ml-6">
                <span className="absolute -left-[11px] w-5 h-5 bg-cyan-500 rounded-full ring-4 ring-white" />
                <span className="inline-block text-xs font-bold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full mb-1">
                  {s.when}
                </span>
                <h3 className="font-semibold text-slate-800">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case 'comparison':
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{block.heading}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <h3 className="flex items-center gap-2 font-semibold text-emerald-800 mb-4">
                <CheckCircle className="w-5 h-5" /> {block.leftTitle}
              </h3>
              <ul className="space-y-2">
                {block.left.map((l, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-emerald-500 mt-0.5">✓</span> {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
              <h3 className="flex items-center gap-2 font-semibold text-rose-800 mb-4">
                <XCircle className="w-5 h-5" /> {block.rightTitle}
              </h3>
              <ul className="space-y-2">
                {block.right.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-rose-500 mt-0.5">!</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );

    case 'myths':
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{block.heading}</h2>
          <div className="space-y-3">
            {block.items.map((m, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5">
                <p className="flex items-start gap-2 text-slate-500 italic mb-2">
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" /> {m.myth}
                </p>
                <p className="flex items-start gap-2 text-slate-800 font-medium">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /> {m.truth}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'callout': {
      const Icon = block.tone === 'warn' ? ShieldCheck : Info;
      const cls = block.tone === 'warn'
        ? 'bg-amber-50 border-amber-200 text-amber-900'
        : 'bg-cyan-50 border-cyan-200 text-cyan-900';
      return (
        <div className={`mb-12 border rounded-2xl p-6 ${cls}`}>
          <h3 className="flex items-center gap-2 font-semibold mb-2">
            <Icon className="w-5 h-5" /> {block.title}
          </h3>
          <p className="text-sm opacity-90">{block.text}</p>
        </div>
      );
    }

    case 'faq':
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{block.heading}</h2>
          <div className="space-y-4">
            {block.items.map((f, i) => (
              <article key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2">{f.q}</h3>
                <p className="text-slate-600">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

const Guide = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;
  const relatedService = guide?.relatedServiceSlug ? getServiceBySlug(guide.relatedServiceSlug) : undefined;

  useSeo({
    title: guide ? guide.metaTitle : 'Rehber bulunamadı',
    description: guide?.excerpt,
    canonical: guide ? `https://www.drizzetgok.com/rehber/${guide.slug}` : undefined,
  });

  useEffect(() => {
    if (!guide) return;
    const faqBlock = guide.blocks.find((b) => b.type === 'faq');

    const article = document.createElement('script');
    article.type = 'application/ld+json';
    article.id = 'guide-jsonld';
    article.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      headline: guide.title,
      description: guide.excerpt,
      datePublished: guide.updated,
      dateModified: guide.updated,
      inLanguage: 'tr-TR',
      url: `https://www.drizzetgok.com/rehber/${guide.slug}`,
      author: { '@type': 'Person', name: 'Dr. İzzet Gök' },
      publisher: { '@id': 'https://www.drizzetgok.com/#clinic' },
    });
    document.head.appendChild(article);

    const breadcrumb = document.createElement('script');
    breadcrumb.type = 'application/ld+json';
    breadcrumb.id = 'guide-breadcrumb';
    breadcrumb.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.drizzetgok.com/' },
        { '@type': 'ListItem', position: 2, name: 'Rehber', item: 'https://www.drizzetgok.com/rehber' },
        { '@type': 'ListItem', position: 3, name: guide.title, item: `https://www.drizzetgok.com/rehber/${guide.slug}` },
      ],
    });
    document.head.appendChild(breadcrumb);

    let faqScript: HTMLScriptElement | null = null;
    if (faqBlock && faqBlock.type === 'faq') {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = 'guide-faq';
      faqScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqBlock.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      document.getElementById('guide-jsonld')?.remove();
      document.getElementById('guide-breadcrumb')?.remove();
      document.getElementById('guide-faq')?.remove();
    };
  }, [guide]);

  if (!guide) return <Navigate to="/" replace />;

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${guide.color} pt-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 1.5px, transparent 1.5px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px, 28px 28px',
        }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 pt-8 pb-14">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-white/80 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <HomeIcon className="w-3.5 h-3.5" /> <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white font-medium">Rehber</span>
          </nav>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full mb-5">
            <Lightbulb className="w-3.5 h-3.5" /> {guide.heroEyebrow}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            {guide.title}
          </h1>
          <p className="text-lg text-white/95 drop-shadow mb-6">{guide.excerpt}</p>
          <div className="flex items-center gap-5 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {guide.readingMinutes} dk okuma</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Güncel</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {guide.blocks.map((block, i) => <Block key={i} block={block} />)}

          {/* CTA */}
          <div className={`bg-gradient-to-r ${guide.color} rounded-3xl p-8 md:p-12 text-center mt-4`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Sorularınız mı var?</h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Size özel değerlendirme ve tedavi planı için Dr. İzzet Gök ile WhatsApp üzerinden iletişime geçin.
            </p>
            <a href="https://wa.me/905524228485" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-medium hover:shadow-2xl transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp ile İletişim
            </a>
          </div>

          {/* İlgili hizmet */}
          {relatedService && (
            <Link to={`/hizmetlerimiz/${relatedService.slug}`}
              className="group flex items-center justify-between gap-4 mt-6 bg-white border border-slate-100 rounded-2xl p-5 hover:border-cyan-200 hover:shadow-lg transition-all">
              <div>
                <p className="text-xs text-slate-500 mb-1">İlgili hizmet</p>
                <h3 className="font-bold text-slate-800">{relatedService.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-1">{relatedService.shortDescription}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </article>
    </main>
  );
};

export default Guide;
export { GUIDES };
