import { useEffect } from 'react';
import { X, Layers, MousePointerClick, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Bir "uydu" (derinleşme konusu) tanımı
export type DeepDiveSection = {
  slug: string;              // /rehber/<slug> — ayrı sayfa + modal URL'i
  title: string;             // SEO-dostu başlık (aranan sorguya göre)
  ready: boolean;            // içeriği hazır mı (değilse "yakında")
  body?: React.ReactNode;    // modal/sayfa içinde gösterilecek içerik (hazırsa)
  matchHeading?: string;     // pillar'daki hangi özet başlığına bağlı (o blok da tıklanabilir olur)
  metaTitle?: string;        // ayrı sayfa <title>
  excerpt?: string;          // ayrı sayfa meta description
  subItems?: { title: string }[];
};

// "Doğal Estetik Rehberi (Detaylı)" listesi — "BU REHBERDE" ile aynı formatta.
// Tıklama, dışarıdan verilen onOpen ile pillar-seviyesindeki modal'ı açar.
export function DeepDiveList({
  sections,
  onOpen,
}: {
  sections: DeepDiveSection[];
  onOpen: (s: DeepDiveSection) => void;
}) {
  return (
    <nav aria-label="Detaylı bölümler" className="mb-12 bg-slate-50 border border-slate-100 rounded-2xl p-6">
      <p className="text-base font-bold uppercase tracking-wide text-emerald-600 mb-3 flex items-center gap-2">
        <Layers className="w-5 h-5" /> Doğal Estetik Rehberi (Detaylı)
      </p>
      <ol className="space-y-3">
        {sections.map((s, i) => (
          <li key={s.slug} className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-emerald-400 font-semibold">{String(i + 1).padStart(2, '0')}</span>
            {s.ready ? (
              <>
                <button
                  onClick={() => onOpen(s)}
                  className="text-slate-700 font-medium mr-1 text-left hover:text-emerald-700 hover:underline transition-colors"
                >
                  {s.title}
                </button>
                <button
                  onClick={() => onOpen(s)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <MousePointerClick className="w-4 h-4" /> Tıkla Aç
                </button>
                <Link
                  to={`/rehber/${s.slug}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-emerald-300 px-3 py-1.5 rounded-full transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Farklı Sayfada Aç
                </Link>
              </>
            ) : (
              <span className="text-slate-400">{s.title} <span className="text-xs">(yakında)</span></span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// %95 modal — pillar tarafından render edilir; açık uydu (open) verildiğinde görünür.
export function DeepDiveModal({
  open,
  onClose,
}: {
  open: DeepDiveSection | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center p-2 sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl my-[2.5vh] max-h-[95vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 rounded-t-3xl">
          <span className="inline-flex items-center gap-2 text-emerald-700 font-medium text-sm">
            <Layers className="w-4 h-4" /> Detaylı Bölüm
          </span>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>
        <div className="px-6 sm:px-10 py-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">{open.title}</h2>
          <div className="text-[1.1875rem] leading-[1.8] text-slate-700 [text-wrap:pretty] space-y-5 max-w-[60ch]">
            {open.body ?? <p>{open.title}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
