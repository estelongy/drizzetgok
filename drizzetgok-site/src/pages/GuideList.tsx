import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, ArrowRight, Clock, Lightbulb, BookOpen } from 'lucide-react';
import { GUIDES } from '../lib/guides-data';
import type { GuideData } from '../lib/guides-data';
import { useSeo } from '../hooks/useSeo';
import Navigation from '../sections/Navigation';

// Kategori gösterim sırası — listede bu sırayla bölümlenir.
// Listede olmayan (yeni) kategoriler en sona, ekleniş sırasıyla düşer.
const CATEGORY_ORDER = ['Botoks', 'Dolgu', 'Yüz Germe', 'Cilt & Yenileme'];

// Rehberleri kategoriye göre grupla, kategorileri CATEGORY_ORDER sırasına diz.
function groupGuidesByCategory(guides: GuideData[]): [string, GuideData[]][] {
  const groups = new Map<string, GuideData[]>();
  for (const g of guides) {
    const cat = g.category || 'Diğer';
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat)!.push(g);
  }
  return [...groups.entries()].sort(([a], [b]) => {
    const ia = CATEGORY_ORDER.indexOf(a);
    const ib = CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
  });
}

const GuideList = () => {
  useSeo({
    title: 'Medikal Estetik Rehberi — Botoks, Dolgu ve Daha Fazlası | Dr. İzzet Gök',
    description:
      'Botoks, dolgu ve medikal estetik uygulamaları hakkında bilimsel dayanaklı, anlaşılır rehberler. Dr. İzzet Gök kontrolünde, güvenilir bilgi.',
    canonical: 'https://www.drizzetgok.com/rehber',
  });

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero — sade açık zemin (üst beyaz, nav ile çakışmaz) */}
      <section className="relative bg-gradient-to-b from-white via-emerald-50/50 to-white pt-32 md:pt-36 pb-16 border-b border-slate-100">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-base text-slate-400 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-emerald-600 transition-colors">
              <HomeIcon className="w-4 h-4" /> <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-500 font-medium">Rehber</span>
          </nav>
          <span className="inline-flex items-center gap-1.5 text-base font-semibold text-emerald-700 bg-white border border-emerald-100 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            <Lightbulb className="w-4 h-4" /> Bilgi Rehberleri
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-[1.1]">Medikal Estetik Rehberi</h1>
          <p className="text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
            Bilimsel dayanaklı, anlaşılır ve tarafsız bilgi. Uygulamaları merak ediyor ama nereden başlayacağınızı
            bilmiyorsanız, buradan başlayın.
          </p>
        </div>
      </section>

      {/* Liste — kategoriye göre gruplu */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {GUIDES.length === 0 ? (
            <p className="text-center text-lg text-slate-500">Yakında yeni rehberler eklenecek.</p>
          ) : (
            <div className="space-y-16">
              {groupGuidesByCategory(GUIDES).map(([category, guides]) => (
                <div key={category}>
                  <div className="flex items-center gap-3 mb-7">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">{category}</h2>
                    <span className="text-base font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {guides.length}
                    </span>
                    <div className="flex-1 h-px bg-slate-100" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((g) => (
                      <Link
                        key={g.slug}
                        to={`/rehber/${g.slug}`}
                        className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all"
                      >
                        <div className={`h-2 bg-gradient-to-r ${g.color}`} />
                        <div className="p-6 flex flex-col flex-1">
                          <span className="inline-flex items-center gap-1.5 text-base font-semibold text-emerald-600 mb-3">
                            <BookOpen className="w-4 h-4" /> {g.heroEyebrow}
                          </span>
                          <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                            {g.title}
                          </h3>
                          <p className="text-base text-slate-500 line-clamp-3 mb-4 flex-1 leading-relaxed">{g.excerpt}</p>
                          <div className="flex items-center justify-between text-base text-slate-400 pt-2 border-t border-slate-50">
                            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {g.readingMinutes} dk</span>
                            <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                              Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default GuideList;
