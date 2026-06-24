import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock, Calendar, ChevronRight, Home as HomeIcon, ArrowRight,
  MessageCircle, CheckCircle, XCircle, Info, Lightbulb, ShieldCheck,
  Microscope, BookOpen, ExternalLink, List, HelpCircle,
  Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace, Smile, Star, Wand2,
} from 'lucide-react';
import { getGuideBySlug, GUIDES, type GuideBlock, type GuideData } from '../lib/guides-data';
import { getServiceBySlug } from '../lib/services-data';
import { useSeo } from '../hooks/useSeo';
import Navigation from '../sections/Navigation';
import BotoxMechanism from '../components/diagrams/BotoxMechanism';
import BotoxFaceMap from '../components/diagrams/BotoxFaceMap';

const DIAGRAMS = { BotoxMechanism, BotoxFaceMap };
const SERVICE_ICONS = { Syringe, Droplets, Sparkles, Zap, FlaskConical, ScanFace, Smile, Star, Wand2 };

// Türkçe karakter dostu slug (başlık anchor / içindekiler için)
function slugify(s: string) {
  return s
    .replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİI]/g, 'i')
    .replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function blockHeading(b: GuideBlock): string | null {
  if (b.type === 'prose') return b.heading ?? null;
  if (b.type === 'list' || b.type === 'timeline' || b.type === 'comparison' || b.type === 'myths' || b.type === 'faq' || b.type === 'sources') {
    return b.heading;
  }
  return null;
}

const H2 = 'font-serif text-2xl md:text-[1.75rem] font-bold text-slate-900 leading-snug scroll-mt-24';

// Okuma ilerleme çubuğu
function ReadingProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setWidth(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-[width] duration-75 ease-out" style={{ width: `${width}%` }} />
    </div>
  );
}

function Block({ block, dropCap }: { block: GuideBlock; dropCap?: boolean }) {
  switch (block.type) {
    case 'prose':
      return (
        <div className="mb-12">
          {block.heading && <h2 id={slugify(block.heading)} className={`${H2} mb-5`}>{block.heading}</h2>}
          {block.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-[1.1875rem] leading-[1.8] text-slate-700 mb-5 ${
                dropCap && i === 0
                  ? 'first-letter:float-left first-letter:font-serif first-letter:text-[3.5rem] first-letter:font-bold first-letter:leading-[0.78] first-letter:mr-3 first-letter:mt-1 first-letter:text-emerald-600'
                  : ''
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      );

    case 'image':
      return (
        <figure className="mb-12 -mx-4 md:mx-0">
          <picture>
            {block.webp && <source srcSet={block.webp} type="image/webp" />}
            <img src={block.src} alt={block.alt} loading="lazy" className="w-full md:rounded-3xl object-cover max-h-[460px]" />
          </picture>
          {block.caption && (
            <figcaption className="text-base text-slate-500 mt-3 text-center px-4 italic">{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'diagram': {
      const Diagram = DIAGRAMS[block.component];
      return (
        <figure className="mb-12 bg-slate-50 rounded-3xl border border-slate-100 p-6 md:p-8">
          <Diagram />
          {block.caption && (
            <figcaption className="text-base text-slate-500 mt-4 text-center max-w-2xl mx-auto italic">{block.caption}</figcaption>
          )}
        </figure>
      );
    }

    case 'list':
      return (
        <div className="mb-12">
          <h2 id={slugify(block.heading)} className={`${H2} mb-6`}>{block.heading}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {block.items.map((it, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-emerald-200 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{it.title}</h3>
                    <p className="text-base leading-relaxed text-slate-600">{it.text}</p>
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
          <h2 id={slugify(block.heading)} className={`${H2} mb-6`}>{block.heading}</h2>
          <ol className="relative border-l-2 border-emerald-100 ml-3 space-y-6">
            {block.steps.map((s, i) => (
              <li key={i} className="ml-6">
                <span className="absolute -left-[11px] w-5 h-5 bg-emerald-500 rounded-full ring-4 ring-white" />
                <span className="inline-block text-base font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-1.5">{s.when}</span>
                <h3 className="font-semibold text-lg text-slate-800">{s.title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case 'comparison':
      return (
        <div className="mb-12">
          <h2 id={slugify(block.heading)} className={`${H2} mb-6`}>{block.heading}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
              <h3 className="flex items-center gap-2 font-semibold text-lg text-emerald-800 mb-4">
                <CheckCircle className="w-5 h-5" /> {block.leftTitle}
              </h3>
              <ul className="space-y-2.5">
                {block.left.map((l, i) => (
                  <li key={i} className="flex items-start gap-2 text-base text-slate-700"><span className="text-emerald-500 mt-0.5">✓</span> {l}</li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
              <h3 className="flex items-center gap-2 font-semibold text-lg text-rose-800 mb-4">
                <XCircle className="w-5 h-5" /> {block.rightTitle}
              </h3>
              <ul className="space-y-2.5">
                {block.right.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-base text-slate-700"><span className="text-rose-500 mt-0.5">!</span> {r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );

    case 'myths':
      return (
        <div className="mb-12">
          <h2 id={slugify(block.heading)} className={`${H2} mb-6`}>{block.heading}</h2>
          <div className="space-y-3">
            {block.items.map((m, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5">
                <p className="flex items-start gap-2 text-lg text-slate-800 font-semibold mb-2">
                  <HelpCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" /> {m.myth}
                </p>
                <p className="flex items-start gap-2 text-base leading-relaxed text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /> {m.truth}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'callout': {
      const Icon = block.tone === 'warn' ? ShieldCheck : Info;
      const cls = block.tone === 'warn' ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900';
      return (
        <div className={`mb-12 border rounded-2xl p-6 ${cls}`}>
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-2">
            <Icon className="w-5 h-5" /> {block.title}
          </h3>
          <p className="text-base leading-relaxed opacity-90">{block.text}</p>
        </div>
      );
    }

    case 'science':
      return (
        <details className="group mb-12 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
          <summary className="flex items-center gap-3 cursor-pointer select-none p-5 font-semibold text-lg text-slate-800 hover:bg-slate-100 transition-colors list-none">
            <span className="w-9 h-9 flex-shrink-0 bg-slate-800 text-white rounded-lg flex items-center justify-center">
              <Microscope className="w-5 h-5" />
            </span>
            <span className="flex-1">{block.title ?? 'Bilimsel arka plan'}</span>
            <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" />
          </summary>
          <div className="px-5 pb-5 pt-1 border-t border-slate-200">
            {block.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-slate-600 leading-relaxed mt-3">{p}</p>
            ))}
          </div>
        </details>
      );

    case 'sources':
      return (
        <div className="mb-12 border-t border-slate-100 pt-8">
          <h2 id={slugify(block.heading)} className="flex items-center gap-2 font-serif text-xl font-bold text-slate-900 mb-4 scroll-mt-24">
            <BookOpen className="w-5 h-5 text-slate-400" /> {block.heading}
          </h2>
          <ul className="space-y-2">
            {block.items.map((s, i) => (
              <li key={i} className="text-base text-slate-500 leading-relaxed">
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-start gap-1 text-emerald-600 hover:text-emerald-700 hover:underline">
                    {s.label} <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 mt-1" />
                  </a>
                ) : s.label}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'faq':
      return (
        <div className="mb-12">
          <h2 id={slugify(block.heading)} className={`${H2} mb-6`}>{block.heading}</h2>
          <div className="space-y-4">
            {block.items.map((f, i) => (
              <article key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">{f.q}</h3>
                <p className="text-base leading-relaxed text-slate-600">{f.a}</p>
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
  const RelatedIcon = relatedService ? SERVICE_ICONS[relatedService.iconName] : null;

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

  // İlgili rehberler — küratörlü (relatedGuides) ya da aynı kategoriden otomatik
  const relatedGuides = (
    guide.relatedGuides && guide.relatedGuides.length
      ? guide.relatedGuides
      : GUIDES.filter((g) => g.category === guide.category && g.slug !== guide.slug).map((g) => g.slug)
  )
    .map((s) => getGuideBySlug(s))
    .filter((g): g is GuideData => !!g && g.slug !== guide.slug)
    .slice(0, 3);

  const firstProseIndex = guide.blocks.findIndex((b) => b.type === 'prose');
  const toc = guide.blocks
    .map((b) => blockHeading(b))
    .filter((h): h is string => !!h)
    .map((h) => ({ title: h, id: slugify(h) }));

  return (
    <main className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />

      {/* Hero — sade, açık zemin (üst beyaz, nav ile çakışmaz) */}
      <section className="relative bg-gradient-to-b from-white via-emerald-50/50 to-white pt-32 md:pt-36 pb-16 border-b border-slate-100">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-base text-slate-400 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-emerald-600 transition-colors">
              <HomeIcon className="w-4 h-4" /> <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/rehber" className="hover:text-emerald-600 transition-colors">Rehber</Link>
          </nav>
          <span className="inline-flex items-center gap-1.5 text-base font-semibold text-emerald-700 bg-white border border-emerald-100 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            <Lightbulb className="w-4 h-4" /> {guide.heroEyebrow}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-[1.1]">
            {guide.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">{guide.excerpt}</p>
          <div className="flex items-center justify-center gap-2 mb-4 text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-slate-700">
              <span className="font-semibold text-slate-900">Dr. İzzet Gök</span> tarafından hazırlandı
            </span>
          </div>
          <div className="flex items-center justify-center gap-5 text-base text-slate-400">
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {guide.readingMinutes} dk okuma</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Güncelleme: {new Date(guide.updated).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-16 px-4 text-left">
        <div className="max-w-2xl mx-auto">
          {/* İçindekiler */}
          {toc.length > 2 && (
            <nav aria-label="İçindekiler" className="mb-12 bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <p className="text-base font-bold uppercase tracking-wide text-emerald-600 mb-3 flex items-center gap-2">
                <List className="w-5 h-5" /> Bu rehberde
              </p>
              <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {toc.map((t, i) => (
                  <li key={t.id} className="flex gap-2 text-base">
                    <span className="text-emerald-400 font-semibold">{String(i + 1).padStart(2, '0')}</span>
                    <a href={`#${t.id}`} className="text-slate-600 hover:text-emerald-700 hover:underline">{t.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {guide.blocks.map((block, i) => (
            <Block key={i} block={block} dropCap={i === firstProseIndex} />
          ))}

          {/* CTA */}
          <div className={`bg-gradient-to-r ${guide.color} rounded-3xl p-8 md:p-12 text-center mt-4`}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">Sorularınız mı var?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Size özel değerlendirme ve tedavi planı için Dr. İzzet Gök ile WhatsApp üzerinden iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://wa.me/905524228485" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition">
                <MessageCircle className="w-5 h-5" /> WhatsApp ile İletişim
              </a>
              {relatedService && (
                <Link to={`/hizmetlerimiz/${relatedService.slug}`}
                  className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/15 transition">
                  {relatedService.shortTitle} Hizmeti <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          {/* İlgili hizmet — belirgin kart */}
          {relatedService && (
            <Link to={`/hizmetlerimiz/${relatedService.slug}`}
              className="group flex items-center gap-4 mt-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5 hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all">
              {RelatedIcon && (
                <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white">
                  <RelatedIcon className="w-7 h-7" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-emerald-700 mb-0.5">İlgili hizmet</p>
                <h3 className="font-bold text-xl text-slate-900 leading-snug">{relatedService.title}</h3>
                <p className="text-base text-slate-600 line-clamp-1">{relatedService.shortDescription}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-emerald-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          {/* İlgili rehberler — rehberler arası iç linkleme (konu kümesi) */}
          {relatedGuides.length > 0 && (
            <section className="mt-12" aria-label="İlgili rehberler">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-slate-400" /> İlgili rehberler
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedGuides.map((rg) => (
                  <Link key={rg.slug} to={`/rehber/${rg.slug}`}
                    className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-emerald-200 transition-all">
                    <div className={`h-1.5 bg-gradient-to-r ${rg.color}`} />
                    <div className="p-5 flex flex-col flex-1">
                      <span className="inline-flex items-center gap-1.5 text-base font-semibold text-emerald-600 mb-1.5">
                        <BookOpen className="w-4 h-4" /> {rg.category}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-slate-900 leading-snug mb-1 group-hover:text-emerald-700 transition-colors">{rg.title}</h4>
                      <p className="text-base text-slate-500 line-clamp-2 flex-1 leading-relaxed">{rg.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-base mt-3">
                        Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
};

export default Guide;
export { GUIDES };
