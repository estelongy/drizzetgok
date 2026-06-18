// Bilgi rehberleri — derinlemesine, görsel, otorite kuran içerik.
// Hizmet sayfalarından (kısa, dönüşüm odaklı) ayrı; uzun-kuyruk SEO ve güven için.
//
// Her rehber esnek bir "blok" dizisinden oluşur. Blok tiplerini karıştırarak
// her rehberi farklı kurguda yazarız — bu, içeriğin kopya olmamasını sağlar.

export type GuideBlock =
  | { type: 'prose'; heading?: string; paragraphs: string[] }
  | { type: 'image'; src: string; webp?: string; alt: string; caption?: string }
  | { type: 'diagram'; component: 'BotoxMechanism' | 'BotoxFaceMap'; caption?: string }
  | { type: 'list'; heading: string; ordered?: boolean; items: { title: string; text: string }[] }
  | { type: 'timeline'; heading: string; steps: { when: string; title: string; text: string }[] }
  | { type: 'comparison'; heading: string; leftTitle: string; rightTitle: string; left: string[]; right: string[] }
  | { type: 'myths'; heading: string; items: { myth: string; truth: string }[] }
  | { type: 'callout'; tone: 'info' | 'warn'; title: string; text: string }
  | { type: 'science'; title?: string; paragraphs: string[] }
  | { type: 'sources'; heading: string; items: { label: string; url?: string }[] }
  | { type: 'faq'; heading: string; items: { q: string; a: string }[] };

export type GuideData = {
  slug: string;
  title: string;          // <title> + H1
  metaTitle: string;      // SEO başlık
  excerpt: string;        // meta description + hero alt metin
  heroEyebrow: string;    // hero üst etiket (ör. "Medikal Estetik Rehberi")
  readingMinutes: number;
  updated: string;        // ISO tarih
  relatedServiceSlug?: string; // ilgili hizmet sayfası slug'ı
  color: string;          // tailwind gradient (hizmetle uyumlu)
  blocks: GuideBlock[];
};

export const GUIDES: GuideData[] = [
  {
    slug: 'botoks-nedir',
    title: 'Botoks Nedir, Nasıl Çalışır? — Kapsamlı Rehber',
    metaTitle: 'Botoks Nedir, Nasıl Çalışır? Etki Süresi ve Uygulama | Dr. İzzet Gök',
    excerpt:
      'Botoksun ne olduğu, sinir-kas iletimini nasıl gevşettiği, hangi bölgelere uygulandığı, etkisinin ne zaman başladığı ve sık sorulan mitlere kadar her şey — Dr. İzzet Gök kontrolünde, anlaşılır ve görsel anlatımla.',
    heroEyebrow: 'Medikal Estetik Rehberi',
    readingMinutes: 6,
    updated: '2026-06-18',
    relatedServiceSlug: 'botoks',
    color: 'from-blue-500 to-cyan-500',
    blocks: [
      {
        type: 'prose',
        heading: 'Botoks tam olarak nedir?',
        paragraphs: [
          'Botoks, halk arasında bilinen ticari adıyla anılan botulinum toksin tip-A’nın medikal estetikteki kullanımıdır. “Toksin” kelimesi ürkütücü gelse de uygulanan miktar son derece düşük, saflaştırılmış ve standardize edilmiş bir proteindir — amacı kası ortadan kaldırmak değil, belirli bir mimik kasının sinyalini geçici olarak yumuşatmaktır.',
          'Kliniğimde en sık karşılaştığım yanlış inanış, botoksun yüzü “dondurduğu” düşüncesidir. Doğru doz ve doğru noktaya uygulandığında amaç tam tersidir: ifadeyi koruyup, o ifadenin cilde kalıcı çizgi olarak işlenmesini önlemek. İyi yapılmış botoks fark edilmez; sadece daha dinlenmiş bir görünüm bırakır.',
        ],
      },
      {
        type: 'image',
        src: '/images/botoks-uygulama.jpg',
        webp: '/images/botoks-uygulama.webp',
        alt: 'Klinik ortamda kadın hastaya ince uçlu iğneyle botoks uygulaması',
        caption: 'Botoks, steril klinik ortamda ince uçlu iğnelerle, dakikalar içinde uygulanır.',
      },
      {
        type: 'diagram',
        component: 'BotoxMechanism',
        caption:
          'Sol: normal durumda sinir ucu asetilkolin salgılar, kas kasılır ve zamanla cilde çizgi oluşur. Sağ: botoks bu salınımı engeller, kas gevşer ve cilt pürüzsüz kalır.',
      },
      {
        type: 'prose',
        heading: 'Nasıl çalışır? — Basit mekanik',
        paragraphs: [
          'Mimik kaslarımız, beyinden gelen sinyali sinir uçlarındaki “asetilkolin” adlı kimyasal habercinin salınmasıyla alır. Bu haberci kasa ulaştığında kas kasılır. Yıllar içinde aynı kasın binlerce kez kasılması, üstündeki cilde kalıcı bir kırışıklık olarak yansır — tıpkı bir kağıdı aynı yerden defalarca katladığınızda kalan iz gibi.',
          'Botoks, sinir ucundaki bu salınım mekanizmasını geçici olarak bloke eder. Sinyal iletilemez, kas gevşer ve üstündeki cilt kendini toparlama fırsatı bulur. Önemli nokta: kas felç olmaz, yalnızca aşırı kasılması frenlenir. Etki kalıcı değildir; sinir uçları zamanla yeni bağlantılar kurar ve kas eski işlevine kavuşur.',
        ],
      },
      {
        type: 'science',
        title: 'Moleküler düzeyde ne oluyor?',
        paragraphs: [
          'Botulinum toksin tip-A (BoNT/A), presinaptik kolinerjik sinir ucuna seçici olarak bağlanır ve hücre içine alınır (endositoz). İçeride, toksinin hafif zinciri SNARE kompleksinin bir parçası olan SNAP-25 proteinini proteolitik olarak keser.',
          'SNAP-25 olmadan, asetilkolin taşıyan veziküller hücre zarıyla birleşemez; yani nörotransmitter sinaptik aralığa salınamaz. Bunun sonucu, kasın geçici olarak uyarılamaması — literatürde “geçici kimyasal denervasyon” olarak geçen durumdur.',
          'Etkinin geçici olmasının nedeni, sinir ucunun zamanla yeni uç filizleri oluşturması (aksonal sprouting) ve orijinal terminalin işlevini yeniden kazanmasıdır; bu süreç tipik olarak 3-4 ay sürer. Dozaj, hacimden bağımsız olarak biyolojik aktivite temelli “Ünite (U)” cinsinden hesaplanır.',
        ],
      },
      {
        type: 'diagram',
        component: 'BotoxFaceMap',
        caption: 'Botoks en çok bu üç bölgedeki mimik çizgilerinde tercih edilir.',
      },
      {
        type: 'list',
        heading: 'Hangi bölgelere ve sorunlara uygulanır?',
        items: [
          { title: 'Alın çizgileri', text: 'Alın kasının (frontalis) tekrarlı kasılmasıyla oluşan yatay kırışıklıklar.' },
          { title: 'Kaş arası (glabella)', text: 'Kaşları çatma kaslarının (corrugator ve procerus) yarattığı dikey “öfke çizgileri”.' },
          { title: 'Kaz ayağı', text: 'Göz çevresi kasının (orbicularis oculi) gülerken oluşturduğu ince çizgiler.' },
          { title: 'Aşırı terleme (hiperhidroz)', text: 'Koltuk altı ve avuç içi terlemesinde ter bezlerinin sinyalini azaltır.' },
          { title: 'Migren ve diş sıkma', text: 'Belirli kas gruplarındaki aşırı gerginliği yumuşatarak şikâyetleri hafifletir.' },
        ],
      },
      {
        type: 'timeline',
        heading: 'Etki ne zaman başlar, ne kadar sürer?',
        steps: [
          { when: '0. gün', title: 'Uygulama', text: 'İnce uçlu iğnelerle 15-20 dakikada tamamlanır. Hemen günlük hayata dönülür.' },
          { when: '3-5. gün', title: 'İlk etki', text: 'Kaslarda yumuşama hissedilmeye başlar; çizgiler azalır.' },
          { when: '14. gün', title: 'Tam etki', text: 'Sonuç tamamen oturur. Kontrol muayenesi için ideal zaman budur.' },
          { when: '4-6. ay', title: 'Yenileme', text: 'Etki yavaşça azalır. Düzenli uygulamada kaslar “öğrenir”, aralıklar uzayabilir.' },
        ],
      },
      {
        type: 'comparison',
        heading: 'Kimlere uygun, kimlere uygun değil?',
        leftTitle: 'Uygun adaylar',
        rightTitle: 'Ertelenmesi / değerlendirilmesi gerekenler',
        left: [
          'Mimik kaynaklı çizgilerini yumuşatmak isteyenler',
          'Henüz kalıcılaşmamış erken çizgileri önlemek isteyenler (önleyici botoks)',
          'Aşırı terleme şikâyeti olanlar',
          'Diş sıkma / gece kasılması olanlar',
        ],
        right: [
          'Gebelik ve emzirme dönemindekiler',
          'Nöromüsküler hastalığı olanlar (ör. myastenia gravis)',
          'Uygulama bölgesinde aktif cilt enfeksiyonu olanlar',
          'Botoks içeriğine bilinen alerjisi olanlar',
        ],
      },
      {
        type: 'myths',
        heading: 'Mitler ve gerçekler',
        items: [
          { myth: '“Botoks yüzü dondurur, ifadesiz bırakır.”', truth: 'Doğru dozda ifade korunur. Donuk görünüm aşırı veya yanlış uygulamanın sonucudur, botoksun doğası değil.' },
          { myth: '“Bir kez yaptırınca bağımlı olursun.”', truth: 'Fizyolojik bağımlılık yoktur. Etki geçince kas eski haline döner; devam etmek tamamen tercih meselesidir.' },
          { myth: '“Bırakınca çizgiler daha kötü olur.”', truth: 'Tam tersine, kas yıllarca dinlendiği için çizgiler genelde başladığınız noktadan daha iyi durumda olur.' },
          { myth: '“Botoks kalıcıdır.”', truth: 'Geçicidir. Ortalama 4-6 ayda etki azalır; bu yüzden sonuç memnun etmezse zamanla kendiliğinden geri döner.' },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Bu içerik bilgilendirme amaçlıdır',
        text: 'Botoks bir tıbbi uygulamadır ve kişiye özel değerlendirme gerektirir. Buradaki bilgiler genel bir rehber niteliğindedir; karar öncesi mutlaka hekim muayenesi şarttır.',
      },
      {
        type: 'faq',
        heading: 'Sıkça sorulan sorular',
        items: [
          { q: 'Botoks acır mı?', a: 'İğneler çok incedir; çoğu kişi yalnızca hafif bir karıncalanma hisseder. İstenirse uyuşturucu krem uygulanabilir.' },
          { q: 'Uygulamadan sonra nelere dikkat etmeliyim?', a: 'İlk 4 saat uzanmamak, ilk gün ağır spor ve sıcak ortamlardan (sauna, hamam) kaçınmak, bölgeye masaj yapmamak önerilir.' },
          { q: 'Makyaj yapabilir miyim?', a: 'Birkaç saat sonra hafif makyaj yapılabilir. Uygulama bölgesine ilk gün bastırarak ovmaktan kaçının.' },
          { q: 'Kaç yaşında başlanır?', a: 'Sabit bir yaş yoktur; çizgiler mimikle belirginleşmeye başladığında, genellikle 25-30 yaş aralığında önleyici amaçlı düşünülebilir.' },
          { q: 'Etkisi geçince çizgilerim daha mı belirginleşir?', a: 'Hayır. Etki yavaşça azalır ve kas dinlendiği için çoğu kişide çizgiler başlangıçtan daha iyi durumdadır.' },
          { q: 'Botoksla dolgu aynı şey mi?', a: 'Hayır. Botoks kası gevşetir (mimik çizgileri); dolgu ise hacim ekler (çukurluk, hat belirginleştirme). Sıklıkla birlikte planlanır.' },
        ],
      },
      {
        type: 'sources',
        heading: 'Kaynaklar ve bilimsel dayanak',
        items: [
          { label: 'U.S. Food & Drug Administration (FDA) — onabotulinumtoxinA reçete bilgileri ve onay tarihçesi', url: 'https://www.fda.gov' },
          { label: 'T.C. Sağlık Bakanlığı, TİTCK — botulinum toksin ürün ruhsatlandırma bilgileri', url: 'https://www.titck.gov.tr' },
          { label: 'Schantz EJ, Johnson EA. Properties and Use of Botulinum Toxin. Microbiological Reviews, 1992.' },
          { label: 'Nigam PK, Nigam A. Botulinum Toxin. Indian Journal of Dermatology, 2010;55(1):8-14.' },
          { label: 'Carruthers JA, et al. Glabellar çizgilerde botulinum toksin tip-A — randomize kontrollü çalışma. J Am Acad Dermatol, 2002.' },
        ],
      },
    ],
  },
];

export const getGuideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
