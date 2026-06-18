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

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-500 to-cyan-500 pt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 1.5px, transparent 1.5px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px, 28px 28px',
        }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 pt-8 pb-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-white/80 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <HomeIcon className="w-3.5 h-3.5" /> <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white font-medium">Rehber</span>
          </nav>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full mb-5">
            <Lightbulb className="w-3.5 h-3.5" /> Bilgi Rehberleri
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">Medikal Estetik Rehberi</h1>
          <p className="text-lg text-white/95 drop-shadow max-w-2xl">
            Bilimsel dayanaklı, anlaşılır ve tarafsız bilgi. Uygulamaları merak ediyor ama nereden başlayacağınızı
            bilmiyorsanız, buradan başlayın.
          </p>
        </div>
      </section>

      {/* Liste */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {GUIDES.length === 0 ? (
            <p className="text-center text-slate-500">Yakında yeni rehberler eklenecek.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDES.map((g) => (
                <Link
                  key={g.slug}
                  to={`/rehber/${g.slug}`}
                  className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-cyan-200 transition-all"
                >
                  <div className={`h-2 bg-gradient-to-r ${g.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 mb-3">
                      <BookOpen className="w-3.5 h-3.5" /> {g.heroEyebrow}
                    </span>
                    <h2 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors">
                      {g.title}
                    </h2>
                    <p className="text-sm text-slate-500 line-clamp-3 mb-4 flex-1">{g.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {g.readingMinutes} dk</span>
                      <span className="inline-flex items-center gap-1 text-cyan-600 font-medium">
                        Oku <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
