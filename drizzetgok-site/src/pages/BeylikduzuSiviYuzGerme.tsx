import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, MessageCircle, Clock, ShieldCheck, Wand2,
  Home as HomeIcon, ChevronRight, ArrowRight, CheckCircle, Star,
  Navigation as NavIcon, Sparkles, Layers, BookOpen,
} from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import Navigation from '../sections/Navigation';
import { reviews, REVIEW_SUMMARY } from '../lib/reviews-data';

// Yerel-niyet landing sayfası: "beylikdüzü sıvı yüz germe" / "liquid facelift" ve
// türevleri (fiyat / nerede / randevu / doktor / mahalle) aramalarını hedefler.
// Rehber/hizmet sayfalarından İÇERİKÇE ayrı; odak KONUM + GÜVEN + DÖNÜŞÜM.
// Bkz. BeylikduzuDudakDolgusu.tsx / BeylikduzuBotoks.tsx (aynı desen).
//
// ÖNEMLİ (hukuki): Türkiye'de sağlık hizmetlerinde fiyat reklamı yasaktır
// (Tıbbi Deontoloji Tüzüğü + Sağlık Bakanlığı yönetmelikleri). Bu sayfada
// hiçbir rakam verilmez; "fiyat" niyeti dürüstçe konsültasyona yönlendirilir.

const CLINIC_ADDRESS =
  'Kavaklı Mah. Olimpiyat Cad. Marmara Evleri-4 Sitesi Altı No: 11/1A, 34540 Beylikdüzü / İstanbul';
const MAPS_URL = 'https://maps.app.goo.gl/RfHDaLXdCgXaqbvo8';
const WHATSAPP_URL = 'https://wa.me/905524228485';
const PHONE_DISPLAY = '+90 552 422 84 85';
const CANONICAL = 'https://www.drizzetgok.com/beylikduzu-sivi-yuz-germe';

// Beylikdüzü mahalleleri + çevre ilçeler — #clinic areaServed ile tutarlı.
const NEIGHBORHOODS = [
  'Kavaklı', 'Gürpınar', 'Cumhuriyet', 'Adnan Kahveci', 'Barış',
  'Sahil', 'Yakuplu', 'Büyükşehir', 'Marmara', 'Dereağzı',
];
const NEARBY = ['Bahçeşehir', 'Avcılar', 'Esenyurt', 'Büyükçekmece', 'Başakşehir'];

const REASONS = [
  {
    icon: Wand2,
    title: 'Bıçaksız, cerrahisiz',
    text: 'Ameliyat, genel anestezi ve uzun iyileşme yok. Yüz hatlarını yukarı çeken etkiyi iğne ile, kliniğimizde alıyorsunuz. İşlem değil, size özel çözüm sunuyoruz.',
  },
  {
    icon: Layers,
    title: 'Botoks + dolgu sinerjisi',
    text: 'Sıvı yüz germe tek bir işlem değil; 8 nokta tekniğiyle botoks ve dolgunun birlikte, doğru katmanda planlanmasıdır. Sonucu belirleyen bu bütüncül tasarımdır.',
  },
  {
    icon: ShieldCheck,
    title: '17 yıllık hekim deneyimi',
    text: 'Yüz haritalaması ve protokolü doğrudan Dr. İzzet Gök planlar ve uygular. İleri düzey bir işlem — hekimin deneyimi burada belirleyicidir.',
  },
  {
    icon: NavIcon,
    title: 'Beylikdüzü’nün merkezinde',
    text: 'Kavaklı’daki kliniğimiz Beylikdüzü ve çevre ilçelerden kolay ulaşılır. İşlem 60-90 dakika; çoğu hasta ertesi gün günlük hayatına döner.',
  },
];

const PROCESS = [
  { step: '1', title: 'Yüz analizi', text: 'Detaylı yüz analizi ve fotoğraflama ile sarkma, hacim kaybı ve oranlar değerlendirilir.' },
  { step: '2', title: 'Protokol planı', text: 'Size özel 8 nokta haritası çıkarılır; hangi bölgeye botoks, hangisine dolgu netleşir.' },
  { step: '3', title: 'Uygulama', text: 'Üst yüze botoks, belirlenen noktalara çoklu dolgu uygulanır (toplam 60-90 dk).' },
  { step: '4', title: 'Kontrol', text: 'Buz kompresi sonrası sonuç birlikte değerlendirilir; hafif şişlik 24-48 saatte geçer.' },
];

// Yerel-niyet SSS — FAQPage şeması ile de işaretlenir.
const FAQ = [
  {
    q: 'Beylikdüzü’nde sıvı yüz germe ne kadar / fiyatı nedir?',
    a: 'Sağlık mevzuatı gereği medikal estetik işlemlerinde fiyat ilanı yapmıyoruz; ayrıca tek bir “liste fiyatı” da yoktur. Sıvı yüz germe kişiye özel bir protokoldür; ücret uygulanacak bölgeler, kullanılan ürün miktarı ve planlanan sonuca göre belirlenir. Net bilgiyi ücretsiz ön görüşmede, size özel planla veriyoruz. WhatsApp’tan yazmanız yeterli.',
  },
  {
    q: 'Beylikdüzü’nde sıvı yüz germeyi nerede / hangi doktora yaptırabilirim?',
    a: 'Kliniğimiz Kavaklı Mahallesi Olimpiyat Caddesi’nde (Marmara Evleri-4 Sitesi altı) yer alır. Yüz haritalaması ve uygulamayı 17 yıllık deneyimiyle doğrudan Dr. İzzet Gök yapar. Randevu için WhatsApp veya telefon yeterli.',
  },
  {
    q: 'Randevu nasıl alınır, hemen olur mu?',
    a: 'WhatsApp’tan yazarak ya da telefonla arayarak randevu alabilirsiniz. Sıvı yüz germe planlama gerektirdiği için önce bir ön görüşme yapar, protokolü çıkarır ve size uygun günde uygulamayı planlarız.',
  },
  {
    q: 'Sıvı yüz germe ameliyatın yerini tutar mı?',
    a: 'Belirli yaş grubunda (yaklaşık 35-55) ve orta düzey sarkmada cerrahiye iyi bir alternatiftir; hatları yukarı çeker ve hacim kazandırır. Çok ileri sarkmalarda ise cerrahi daha uygun olabilir — bunu ön görüşmede dürüstçe değerlendiririz.',
  },
  {
    q: 'Etkisi ne kadar sürer?',
    a: 'Sonuç genellikle 12-18 ay kalıcıdır. Düzenli yenileme ile etkinin kalıcılığı artar. Kullanılan hyaluronik asit esaslı dolgular zamanla vücut tarafından doğal olarak emilir.',
  },
  {
    q: 'İşlem sonrası ne kadar dinlenmem gerekir?',
    a: 'İyileşme süresi minimumdur. Hafif kızarıklık ve şişlik genellikle 24-48 saat içinde geçer; çoğu hasta ertesi gün normal yaşamına döner.',
  },
];

const BeylikduzuSiviYuzGerme = () => {
  useSeo({
    title: 'Beylikdüzü Sıvı Yüz Germe (Liquid Facelift) — Randevu | Dr. İzzet Gök',
    description:
      'Beylikdüzü’nde sıvı yüz germe (liquid facelift): bıçaksız, cerrahisiz yüz germe. 8 nokta tekniği, botoks + dolgu. 17 yıllık hekim Dr. İzzet Gök. Ön görüşme için WhatsApp.',
    canonical: CANONICAL,
    ogImage: 'https://www.drizzetgok.com/images/og-card.jpg',
  });

  // JSON-LD: Service (areaServed) + FAQPage + BreadcrumbList
  useEffect(() => {
    const service = document.createElement('script');
    service.type = 'application/ld+json';
    service.id = 'local-service-jsonld';
    service.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Sıvı Yüz Germe (Liquid Facelift) — Beylikdüzü',
      alternateName: ['Liquid Facelift', 'Cerrahisiz Yüz Germe', '8 Nokta Germe'],
      description:
        'Beylikdüzü’nde sıvı yüz germe: cerrahisiz, botoks ve dolgu kombinasyonuyla yüz hatlarını yukarı çeken ileri düzey protokol. Hekim uygulaması.',
      procedureType: 'https://schema.org/NoninvasiveProcedure',
      bodyLocation: 'Yüz',
      howPerformed: '8 nokta tekniğiyle üst yüze botoks, belirlenen noktalara hyaluronik asit dolgu uygulanması.',
      url: CANONICAL,
      image: 'https://www.drizzetgok.com/images/og-card.jpg',
      provider: { '@id': 'https://www.drizzetgok.com/#clinic' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Beylikdüzü' },
        { '@type': 'AdministrativeArea', name: 'Bahçeşehir' },
        { '@type': 'AdministrativeArea', name: 'Avcılar' },
        { '@type': 'AdministrativeArea', name: 'Esenyurt' },
        { '@type': 'AdministrativeArea', name: 'Büyükçekmece' },
        { '@type': 'AdministrativeArea', name: 'Başakşehir' },
      ],
    });
    document.head.appendChild(service);

    const faq = document.createElement('script');
    faq.type = 'application/ld+json';
    faq.id = 'local-faq-jsonld';
    faq.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    document.head.appendChild(faq);

    const crumb = document.createElement('script');
    crumb.type = 'application/ld+json';
    crumb.id = 'local-breadcrumb-jsonld';
    crumb.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.drizzetgok.com/' },
        { '@type': 'ListItem', position: 2, name: 'Sıvı Yüz Germe', item: 'https://www.drizzetgok.com/hizmetlerimiz/sivi-yuz-germe' },
        { '@type': 'ListItem', position: 3, name: 'Beylikdüzü Sıvı Yüz Germe', item: CANONICAL },
      ],
    });
    document.head.appendChild(crumb);

    return () => {
      document.getElementById('local-service-jsonld')?.remove();
      document.getElementById('local-faq-jsonld')?.remove();
      document.getElementById('local-breadcrumb-jsonld')?.remove();
    };
  }, []);

  const localReviews = reviews.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-left">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white via-violet-50/50 to-white pt-32 md:pt-36 pb-14 border-b border-slate-100">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-base text-slate-400 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-emerald-600 transition-colors">
              <HomeIcon className="w-4 h-4" /> <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/hizmetlerimiz/sivi-yuz-germe" className="hover:text-emerald-600 transition-colors">Sıvı Yüz Germe</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-500">Beylikdüzü</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-base font-medium mb-5">
            <MapPin className="w-4 h-4" /> Beylikdüzü · Medikal Estetik
          </span>

          <h1 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Beylikdüzü’nde <span className="text-violet-500">Sıvı Yüz Germe</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Bıçaksız, cerrahisiz yüz germe (liquid facelift). 8 nokta tekniğiyle botoks ve
            dolgunun birlikte planlandığı ileri protokolü, 17 yıllık deneyimiyle doğrudan
            Dr. İzzet Gök uygular. İşlem değil, size özel çözüm.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 hover:shadow-xl transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp’tan Ön Görüşme
            </a>
            <a href="tel:+905524228485"
              className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-emerald-300 hover:text-emerald-700 transition">
              <Phone className="w-5 h-5" /> Hemen Ara
            </a>
          </div>

          {/* Güven rozetleri */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-base text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              {REVIEW_SUMMARY.averageRating.toFixed(1)} / 5 · {REVIEW_SUMMARY.totalCount} Google yorumu
            </span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 17 yıllık hekim</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-emerald-500" /> Cerrahisiz · 12-18 ay</span>
          </div>
        </div>
      </section>

      {/* Neden Beylikdüzü'nde Dr. İzzet Gök */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Beylikdüzü’nde neden <span className="text-emerald-500">Dr. İzzet Gök?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sıvı yüz germe ileri düzey bir protokoldür — sonucu ürün değil, yüzü bir bütün
            olarak okuyan hekimlik kararı belirler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {REASONS.map((r) => (
            <div key={r.title} className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                <r.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-1.5">{r.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fiyat niyeti — dürüst, mevzuata uygun */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-slate-900 mb-5 text-center">
            Beylikdüzü’nde sıvı yüz germe <span className="text-emerald-500">fiyatı</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-5">
            Dürüst konuşalım: tek bir “liste fiyatı” yoktur ve olması da doğru değildir.
            Sıvı yüz germe kişiye özel bir protokoldür; ücret uygulanacak bölgeler,
            kullanılan ürün miktarı ve hedeflediğiniz sonuca göre belirlenir.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Ayrıca sağlık mevzuatı, medikal estetik işlemlerinde fiyat ilanı yapılmasına
            izin vermez. Bu yüzden burada rakam paylaşmıyoruz — ama sizi belirsizlikte de
            bırakmıyoruz: <strong className="text-slate-800">ücretsiz ön görüşmede</strong>,
            yüz analizinizle birlikte net bilgiyi veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-600 transition">
              <MessageCircle className="w-5 h-5" /> Fiyat için WhatsApp’tan yazın
            </a>
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
          Uygulama nasıl ilerliyor?
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Toplam işlem süresi 60-90 dakika. Planlama gerektiren bütüncül bir protokol;
          iyileşme süresi ise minimumdur.
        </p>
        <ol className="grid sm:grid-cols-2 gap-5">
          {PROCESS.map((p) => (
            <li key={p.step} className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <span className="w-10 h-10 flex-shrink-0 rounded-full bg-emerald-500 text-white font-bold text-lg flex items-center justify-center">
                {p.step}
              </span>
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-1">{p.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Hizmet bölgeleri */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Hangi bölgelere hizmet veriyoruz?
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Kliniğimiz Beylikdüzü Kavaklı’da. Beylikdüzü’nün tüm mahallelerinden ve çevre
            ilçelerden hastalarımız kolayca ulaşıyor.
          </p>

          <div className="mb-8">
            <p className="text-base font-semibold text-slate-500 uppercase tracking-wide mb-3">Beylikdüzü mahalleleri</p>
            <div className="flex flex-wrap gap-2.5">
              {NEIGHBORHOODS.map((n) => (
                <span key={n} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 rounded-full px-4 py-2 text-base">
                  <MapPin className="w-4 h-4 text-violet-400" /> {n}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-semibold text-slate-500 uppercase tracking-wide mb-3">Yakın ilçeler</p>
            <div className="flex flex-wrap gap-2.5">
              {NEARBY.map((n) => (
                <span key={n} className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full px-4 py-2 text-base">
                  <NavIcon className="w-4 h-4" /> {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Konum */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-5">Klinik konumu &amp; ulaşım</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-violet-500 flex-shrink-0 mt-0.5" />
                <p className="text-base text-slate-700 leading-relaxed">{CLINIC_ADDRESS}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <a href="tel:+905524228485" className="text-base text-slate-700 hover:text-emerald-600 font-medium">{PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <p className="text-base text-slate-700">Pazartesi–Cumartesi: 10:00 – 18:00</p>
              </div>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              <NavIcon className="w-5 h-5" /> Yol Tarifi Al
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <iframe
              src="https://www.google.com/maps?q=40.986762,28.6622249&hl=tr&z=16&output=embed"
              width="100%" height="320" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Dr. İzzet Gök Kliniği — Beylikdüzü konumu"
              aria-label="Klinik konumu Google Maps'te" />
          </div>
        </div>
      </section>

      {/* Yerel hasta yorumları */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
            Beylikdüzü’nden hasta yorumları
          </h2>
          <p className="text-lg text-slate-600 text-center mb-10">
            {REVIEW_SUMMARY.averageRating.toFixed(1)} / 5 — {REVIEW_SUMMARY.totalCount} Google değerlendirmesi
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {localReviews.map((r, i) => (
              <article key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base text-slate-700 leading-relaxed flex-1">{r.text}</p>
                <p className="text-base font-semibold text-slate-800 mt-4">{r.author}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={REVIEW_SUMMARY.googleProfileUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
              Google’da tüm yorumları gör <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="max-w-3xl mx-auto px-4 py-16 md:py-20">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
          Sık sorulan sorular
        </h2>
        <div className="space-y-4">
          {FAQ.map((f) => (
            <details key={f.q} className="group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-md transition">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <h3 className="font-bold text-lg text-slate-900">{f.q}</h3>
                <ChevronRight className="w-5 h-5 text-emerald-500 flex-shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-base text-slate-600 leading-relaxed mt-4">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-center">
          <Wand2 className="w-10 h-10 text-white/90 mx-auto mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Cerrahisiz, daha dinç bir yüz için ilk adım
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Beylikdüzü’nde, 17 yıllık hekim deneyimiyle. Önce ücretsiz ön görüşme ve yüz
            analizi — karar tamamen sizin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp ile İletişim
            </a>
            <Link to="/hizmetlerimiz/sivi-yuz-germe"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/15 transition">
              Sıvı Yüz Germe Hizmeti <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* İç link — rehber (sıvı yüz germe rehberi henüz yok; dolgu rehberine yönlendir) */}
        <Link to="/rehber/dolgu"
          className="group flex items-center gap-4 mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center text-white">
            <BookOpen className="w-7 h-7" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold text-emerald-700 mb-0.5">Detaylı rehber</p>
            <h3 className="font-bold text-xl text-slate-900 leading-snug">Yüz Dolgusu Nedir? Dolgu Çeşitleri, Bölgeler ve Etki Süresi</h3>
            <p className="text-base text-slate-600 flex items-center gap-1.5 mt-1">
              <CheckCircle className="w-4 h-4 text-emerald-500" /> Sıvı yüz germenin temeli olan dolguyu yakından tanıyın
            </p>
          </div>
          <ArrowRight className="w-6 h-6 text-emerald-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  );
};

export default BeylikduzuSiviYuzGerme;
