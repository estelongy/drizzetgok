import { Star, Quote, ExternalLink } from 'lucide-react';
import { reviews, REVIEW_SUMMARY } from '../lib/reviews-data';

/** Google'ın çok renkli "G" rozeti. */
const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6 flex-shrink-0" aria-hidden="true">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
  </svg>
);

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} / 5 yıldız`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`}
        aria-hidden="true"
      />
    ))}
  </div>
);

const Reviews = () => {
  if (reviews.length === 0) return null;

  return (
    <section id="yorumlar" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-base font-medium mb-4">
            Hasta Deneyimleri
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            İşlem değil, <span className="text-emerald-500">çözüm</span> sunuyoruz
          </h2>

          {/* Aggregate */}
          <div className="inline-flex flex-col items-center gap-2">
            <Stars rating={5} />
            <p className="text-slate-600">
              <span className="font-bold text-slate-800">{REVIEW_SUMMARY.averageRating.toFixed(1)}</span>
              {REVIEW_SUMMARY.totalCount > 0 && (
                <> / 5 — <span className="font-semibold">{REVIEW_SUMMARY.totalCount}</span> Google değerlendirmesine göre</>
              )}
            </p>
            <div className="flex items-center gap-1.5 text-slate-400 text-base">
              <GoogleG />
              <span>Google'da doğrulanmış yorumlar</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex flex-col bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars rating={review.rating} />
                <GoogleG />
              </div>
              <Quote className="w-7 h-7 text-emerald-200 mb-3" aria-hidden="true" />
              <p className="text-slate-700 leading-relaxed flex-1 text-left">{review.text}</p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-semibold text-slate-800">{review.author}</span>
                {review.date && <span className="text-slate-400 text-base">{review.date}</span>}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={REVIEW_SUMMARY.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-slate-200 rounded-full font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-md transition-all"
          >
            <GoogleG />
            Google'da tüm yorumları gör
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
