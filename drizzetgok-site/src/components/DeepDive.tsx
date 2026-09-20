import { useEffect, useState } from 'react';
import { X, Layers, ChevronRight } from 'lucide-react';

// Bir "uydu" (derinleşme konusu) tanımı
export type DeepDiveSection = {
  slug: string;              // /rehber/<slug> — ileride ayrı sayfa/modal URL'i
  title: string;             // SEO-dostu başlık (aranan sorguya göre)
  ready: boolean;            // içeriği hazır mı (değilse "yakında")
  body?: React.ReactNode;    // modal içinde gösterilecek içerik (hazırsa)
  subItems?: { title: string }[]; // alt-url'ler (ileride)
};

// "Doğal Estetik Rehberi (Detaylı)" — "BU REHBERDE" kutusuyla aynı formatta,
// ama satırlar tıklanınca %95 modal açar.
export function DeepDiveList({ sections }: { sections: DeepDiveSection[] }) {
  const [open, setOpen] = useState<DeepDiveSection | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <nav aria-label="Detaylı bölümler" className="mb-12 bg-slate-50 border border-slate-100 rounded-2xl p-6">
      <p className="text-base font-bold uppercase tracking-wide text-emerald-600 mb-3 flex items-center gap-2">
        <Layers className="w-5 h-5" /> Doğal Estetik Rehberi (Detaylı)
      </p>
      <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {sections.map((s, i) => (
          <li key={s.slug} className="flex gap-2 text-base">
            <span className="text-emerald-400 font-semibold">{String(i + 1).padStart(2, '0')}</span>
            {s.ready ? (
              <button
                onClick={() => setOpen(s)}
                className="group text-left text-slate-600 hover:text-emerald-700 flex items-center gap-1"
              >
                <span className="group-hover:underline">{s.title}</span>
                <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ) : (
              <span className="text-slate-400">{s.title} <span className="text-xs">(yakında)</span></span>
            )}
          </li>
        ))}
      </ol>

      {/* %95 MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center p-2 sm:p-4"
          onClick={() => setOpen(null)}
        >
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
                onClick={() => setOpen(null)}
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
      )}
    </nav>
  );
}
