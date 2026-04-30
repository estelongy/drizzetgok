import { Link } from 'react-router-dom';
import { Home, MessageCircle } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

const NotFound = () => {
  useSeo({
    title: 'Sayfa bulunamadı (404) | Dr. İzzet Gök',
    description: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya WhatsApp üzerinden bize ulaşın.',
    canonical: 'https://www.drizzetgok.com/',
  });

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4">
      <div className="max-w-md text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl mb-8 shadow-xl">
          <span className="text-white text-4xl font-bold">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Sayfa bulunamadı
        </h1>
        <p className="text-slate-600 mb-8">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönebilir veya bizimle iletişime geçebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition"
          >
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
          <a
            href="https://wa.me/905524228485"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-6 py-3 rounded-full font-medium transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
