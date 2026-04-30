import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Botoks uygulaması ne kadar sürede etki gösterir?',
    a: 'Botoks etkisi genellikle 3-7 gün içinde görünmeye başlar, tam etki 14 gün sonra ortaya çıkar ve ortalama 4-6 ay sürer. Düzenli uygulama ile etkinin kalıcılığı artar.'
  },
  {
    q: 'Dolgu uygulaması ağrılı mıdır?',
    a: 'Hyaluronik asit dolgular lokal anestezik içerir. Uygulama öncesi krem anestezi ile rahatsızlık minimuma indirilir. Çoğu hasta sadece hafif bir basınç hisseder.'
  },
  {
    q: 'Konsültasyon ücretli mi?',
    a: 'Hayır. Dr. İzzet Gök kliniğinde ilk konsültasyon ücretsizdir. WhatsApp veya telefon ile randevu alabilir, kliniğe geldiğinizde size özel tedavi planı oluşturulur.'
  },
  {
    q: 'Klinik nerede, nasıl ulaşırım?',
    a: 'Klinik Beylikdüzü, İstanbul\'da yer almaktadır; Bahçeşehir, Başakşehir, Avcılar, Esenyurt, Yakuplu, Büyükçekmece, Küçükçekmece ile Kocaeli (Gebze, Darıca, Çayırova, Dilovası) bölgelerine kolay ulaşım sağlar. Pazartesi-Cumartesi 10:00-18:00 saatleri arasında hizmet veriyoruz.'
  },
  {
    q: 'Mezoterapi sonrası ne kadar sürede normal yaşama dönülür?',
    a: 'Mezoterapi sonrası iyileşme süresi yoktur, hasta uygulamadan hemen sonra günlük yaşamına dönebilir. Hafif kızarıklık 24 saat içinde geçer.'
  },
  {
    q: 'PRP tedavisi kaç seans sürer?',
    a: 'PRP tedavisi genellikle 3-4 seans halinde, 4-6 hafta arayla uygulanır. Cilt yenileme ve saç dökülmesi tedavisinde belirgin sonuçlar 2. seansdan itibaren görülmeye başlar.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-20 md:py-32 bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Sıkça Sorulan Sorular
          </span>
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Aklınızdaki <span className="text-emerald-500">Soruların Cevapları</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            En çok sorulan soruları sizin için yanıtladık. Daha fazlası için WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                key={i}
                className={`bg-white rounded-2xl border transition-all ${
                  isOpen ? 'border-emerald-300 shadow-lg' : 'border-slate-200 hover:border-emerald-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3 className="text-lg font-semibold text-slate-800">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-emerald-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div id={`faq-answer-${i}`} className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
