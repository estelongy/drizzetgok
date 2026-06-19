import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, ArrowRight, Clock, Lightbulb, BookOpen } from 'lucide-react';
import { GUIDES } from '../lib/guides-data';
import { useSeo } from '../hooks/useSeo';
import Navigation from '../sections/Navigation';

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

      {/* Liste */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {GUIDES.length === 0 ? (
            <p className="text-center text-lg text-slate-500">Yakında yeni rehberler eklenecek.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDES.map((g) => (
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
                    <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                      {g.title}
                    </h2>
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
          )}
        </div>
      </section>
    </main>
  );
};

export default GuideList;
