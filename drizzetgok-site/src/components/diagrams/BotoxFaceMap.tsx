// Botoks uygulama bölgeleri — temiz numaralı kart şeması (süs görsel yok).
// Gerçek uygulama fotoğrafı rehberin giriş bölümünde ayrıca yer alıyor.

const ZONES = [
  {
    n: 1,
    title: 'Alın çizgileri',
    sub: 'Yatay kırışıklıklar — kaşları kaldırma hareketiyle belirginleşir.',
  },
  {
    n: 2,
    title: 'Kaş arası (glabella)',
    sub: 'İki kaş arasındaki dikey “öfke çizgileri”.',
  },
  {
    n: 3,
    title: 'Kaz ayağı',
    sub: 'Gülerken göz kenarında oluşan ince çizgiler.',
  },
];

const BotoxFaceMap = () => (
  <div>
    <p className="text-center text-sm font-medium text-cyan-600 mb-6 uppercase tracking-wide">
      En sık uygulanan 3 bölge
    </p>
    <div className="grid sm:grid-cols-3 gap-4">
      {ZONES.map((z) => (
        <div
          key={z.n}
          className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:border-cyan-200 hover:shadow-md transition-all"
        >
          <span className="inline-flex w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full items-center justify-center text-lg font-bold mx-auto">
            {z.n}
          </span>
          <h4 className="font-semibold text-slate-800 mb-2">{z.title}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{z.sub}</p>
        </div>
      ))}
    </div>
  </div>
);

export default BotoxFaceMap;
