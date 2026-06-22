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
  category: string;       // rehber kategorisi — /rehber listesini gruplar (ör. "Botoks", "Dolgu")
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
    category: 'Botoks',
    title: 'Botoks Nedir, Nasıl Çalışır? — Kapsamlı Rehber',
    metaTitle: 'Botoks Nedir, Nasıl Çalışır? Etki Süresi ve Uygulama | Dr. İzzet Gök',
    excerpt:
      'Botoksun ne olduğu, nasıl çalıştığı, hangi bölgelere uygulandığı ve sık sorulanlar — Dr. İzzet Gök kontrolünde, anlaşılır ve görsel anlatımla.',
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
          { myth: 'Botoks yüzü dondurur, ifadesiz mi bırakır?', truth: 'Hayır. Doğru dozda ifade korunur. Donuk görünüm aşırı veya yanlış uygulamanın sonucudur, botoksun doğası değil.' },
          { myth: 'Botoks bağımlılık yapar mı?', truth: 'Hayır. Fizyolojik bağımlılık yoktur. Etki geçince kas eski haline döner; devam etmek tamamen tercih meselesidir.' },
          { myth: 'Botoksu bırakınca çizgiler daha mı kötü olur?', truth: 'Hayır, tam tersine. Kas yıllarca dinlendiği için çizgiler genelde başladığınız noktadan daha iyi durumda olur.' },
          { myth: 'Botoks kalıcı mıdır?', truth: 'Hayır, geçicidir. Ortalama 4-6 ayda etki azalır; bu yüzden sonuç memnun etmezse zamanla kendiliğinden geri döner.' },
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
          { label: 'U.S. Food & Drug Administration (FDA) — onabotulinumtoxinA (BOTOX) reçete bilgileri ve onay tarihçesi.' },
          { label: 'T.C. Sağlık Bakanlığı, Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) — botulinum toksin ürün ruhsatlandırma bilgileri.' },
          { label: 'Schantz EJ, Johnson EA. Properties and Use of Botulinum Toxin. Microbiological Reviews, 1992.' },
          { label: 'Nigam PK, Nigam A. Botulinum Toxin. Indian Journal of Dermatology, 2010;55(1):8-14.' },
          { label: 'Carruthers JA, et al. Glabellar çizgilerde botulinum toksin tip-A — randomize kontrollü çalışma. J Am Acad Dermatol, 2002.' },
        ],
      },
    ],
  },
  {
    slug: 'masseter-botoksu',
    category: 'Botoks',
    title: 'Masseter Botoksu: Çene İnceltme ve Diş Sıkma Tedavisi',
    metaTitle: 'Masseter Botoksu Nedir? Çene İnceltme ve Diş Sıkma | Dr. İzzet Gök',
    excerpt:
      'Masseter (çiğneme) kası botoksu hem alt yüzü inceltir hem de diş sıkma ve çene ağrısını rahatlatır. Mekanizması, etki süreci, kimlere uygun olduğu — Dr. İzzet Gök kontrolünde, görsel anlatımla.',
    heroEyebrow: 'Medikal Estetik Rehberi',
    readingMinutes: 8,
    updated: '2026-06-19',
    relatedServiceSlug: 'botoks',
    color: 'from-emerald-500 to-teal-600',
    blocks: [
      {
        type: 'prose',
        heading: 'Masseter botoksu nedir?',
        paragraphs: [
          'Masseter, çene köşesinde yer alan ve çiğneme hareketini sağlayan kastır — vücudun kütlesine oranla en güçlü kaslarından biridir. Bu kas genetik yapı, kronik diş sıkma ya da sürekli sert gıda/sakız çiğneme gibi nedenlerle aşırı çalışırsa kalınlaşır (hipertrofi) ve alt yüze köşeli, “kare” bir görünüm verir.',
          'Masseter botoksu, bu kasın aşırı aktivitesini geçici olarak azaltan bir uygulamadır. Sonuç çift yönlüdür: bir yandan kas zamanla incelerek alt yüze daha yumuşak, oval bir hat (“V-line”) kazandırır; diğer yandan diş sıkma, çene yorgunluğu ve buna bağlı ağrıları belirgin biçimde hafifletir. Onu klasik mimik botoksundan ayıran şey de budur — aynı anda hem estetik hem fonksiyonel bir tedavidir.',
        ],
      },
      {
        type: 'image',
        src: '/images/masseter-anatomi.png',
        webp: '/images/masseter-anatomi.webp',
        alt: 'Kafatası üzerinde çiğneme kaslarını gösteren anatomik çizim: masseter (M) ve temporal kası (TK)',
        caption: 'Masseter (M), çene köşesini kaplayan ana çiğneme kasıdır; üstte temporal kası (TK) ile birlikte çalışır. Botoks doğrudan bu kasa, doğru derinlik ve noktalara uygulanır.',
      },
      {
        type: 'prose',
        heading: 'Çiğneme kası neden büyür?',
        paragraphs: [
          'Bir kas ne kadar çok ve ne kadar güçlü kasılırsa zamanla o kadar büyür — tıpkı düzenli ağırlık çalışan bir sporcunun kaslarının kalınlaşması gibi. Masseter de aynı kurala tabidir. Çoğu kişide farkında olmadan, özellikle uykuda yapılan diş sıkma ve gıcırdatma (bruksizm) kası gün boyu “antrenmanda” tutar.',
          'Buna genetik yatkınlık, stres, sert gıdalar ve sürekli sakız çiğneme eklendiğinde masseter belirgin biçimde kalınlaşır. Bu, hem alt yüzün genişlemesine (yüzün üst kısmı zayıfken çenenin geniş kalması) hem de dişlerde aşınma, sabah çene ağrısı ve şakak bölgesine yayılan gerilim baş ağrılarına yol açar.',
        ],
      },
      {
        type: 'prose',
        heading: 'Nasıl çalışır? Mimik botoksundan farkı',
        paragraphs: [
          'Temel mekanizma aynıdır: botoks, sinirden kasa giden “kasıl” sinyalini taşıyan asetilkolinin salınımını geçici olarak engeller, böylece kas daha az ve daha zayıf kasılır. Ancak masseterde devreye ikinci ve belirleyici bir etki girer.',
          'Masseter, alın veya kaş arasındaki ince mimik kaslarının aksine kalın ve hacimli bir kastır. Sinyali azalan kas artık tam güçle çalışmadığı için — alçıya alınmış bir kolun zamanla incelmesi gibi — kullanılmayarak hacim kaybeder (atrofi). İşte bu yüzden inceltme etkisi anında değil, haftalar içinde yavaşça ortaya çıkar. Diş sıkmaya bağlı rahatlama ise çok daha erken, ilk günlerde hissedilir.',
        ],
      },
      {
        type: 'science',
        title: 'Bilimsel arka plan: hipertrofi, atrofi ve dozaj',
        paragraphs: [
          'Botulinum toksin tip-A (BoNT/A), presinaptik sinir ucundaki SNAP-25 proteinini keserek asetilkolin salınımını bloke eder — bu, tüm botoks uygulamalarının ortak moleküler temelidir. Masseterde farklı olan, hedef kasın iskelet kası hipertrofisi göstermesi ve denervasyon sonrası belirgin hacim kaybına (kas atrofisi) uğramasıdır.',
          'Masseter kalın ve güçlü bir kas olduğundan dozaj, ince mimik kaslarına kıyasla yüksektir; literatürde her bir tarafa yaklaşık 20-30 ünite aralığında, kasın alt-arka bölümüne ve uygun derinliğe uygulanması bildirilir. Doz ve nokta seçimi; gülümseme simetrisi, asimetri riski ve çiğneme fonksiyonunun korunması açısından kişiye özel planlanır.',
          'Not: Masseter botoksunun estetik (alt yüz inceltme) endikasyonu birçok ülkede “endikasyon dışı (off-label)” kategorisindedir; bu, uygulamanın güvensiz olduğu anlamına gelmez, yalnızca ruhsatın bu spesifik kullanım için ayrıca düzenlenmediğini gösterir. Bruksizm ve kas hipertrofisi için kullanımı geniş klinik deneyime dayanır.',
        ],
      },
      {
        type: 'image',
        src: '/images/masseter-enjeksiyon.jpg',
        webp: '/images/masseter-enjeksiyon.webp',
        alt: 'Masseter botoksu enjeksiyon tekniği — güvenli bölge, parotis bezi, yüz arteri ve veni, 1 cm aralıklı enjeksiyon noktaları',
        caption:
          'Uygulama haritası: M (masseter kası), PG (parotis/tükürük bezi), PD (parotis kanalı), FA/FV (yüz arteri ve veni), R (risorius — gülümseme kası). Botoks, bu yapılardan kaçınılarak kasın güvenli alt bölümüne, yaklaşık 1 cm aralıklı noktalara uygulanır.',
      },
      {
        type: 'prose',
        heading: 'Neden uygulayan kişi kritik?',
        paragraphs: [
          'Yukarıdaki harita boşuna değil: masseterin hemen önünde yüz arteri ve veni (FA/FV), üstünde parotis tükürük bezi ve kanalı (PG/PD), ön kenarında ise gülümsemeyi sağlayan risorius (R) kası bulunur. Toksinin yanlış derinliğe veya yanlış noktaya verilmesi; geçici asimetrik gülümseme, çiğneme zayıflığı ya da istenmeyen sonuçlara yol açabilir.',
          'Doğru uygulamada bu yapılardan özenle kaçınılır, kasın kalınlığı palpasyonla (elle muayene) doğrulanır ve doz her iki tarafa simetrik dağıtılır. Bu nedenle masseter botoksu, anatomiye hâkim bir hekim tarafından yapılması gereken bir uygulamadır.',
        ],
      },
      {
        type: 'list',
        heading: 'Masseter botoksu ne işe yarar?',
        items: [
          { title: 'Alt yüz inceltme (V-line)', text: 'Kalınlaşmış çiğneme kasını inceltir; köşeli/kare alt yüzü daha oval ve yumuşak bir hatta dönüştürür.' },
          { title: 'Diş sıkma ve gıcırdatma (bruksizm)', text: 'Kasın aşırı kasılma gücünü azaltır; uykuda diş sıkma kaynaklı şikâyetleri hafifletir.' },
          { title: 'Çene ve yüz ağrısı', text: 'Kronik kas gerginliğini gevşeterek sabah çene yorgunluğunu ve ağrıyı azaltır.' },
          { title: 'Gerilim tipi baş ağrısı', text: 'Çiğneme kası kaynaklı, şakaklara yayılan gerilim baş ağrılarında bazı kişilerde rahatlama sağlar.' },
          { title: 'Diş ve dolguların korunması', text: 'Sıkma gücü azaldığı için diş aşınması ve dolgu/kaplama hasarı riski düşer.' },
        ],
      },
      {
        type: 'timeline',
        heading: 'Etki ne zaman başlar, ne kadar sürer?',
        steps: [
          { when: '0. gün', title: 'Uygulama', text: 'Her iki çene köşesine ince iğnelerle birkaç dakikada yapılır. Hemen günlük hayata dönülür.' },
          { when: '1-2. hafta', title: 'Fonksiyonel rahatlama', text: 'Diş sıkma ve çene gerginliği azalmaya başlar; sabah ağrıları hafifler.' },
          { when: '4-6. hafta', title: 'İnceltme görünür', text: 'Kas hacim kaybetmeye başladıkça alt yüz hattı incelmeye başlar.' },
          { when: '2-3. ay', title: 'Maksimum etki', text: 'İnceltme sonucu en belirgin halini alır; oval hat netleşir.' },
          { when: '4-6. ay', title: 'Yenileme', text: 'Etki azalır. Düzenli tekrarda kas küçük kalmayı “öğrenir”, seans aralıkları uzayabilir.' },
        ],
      },
      {
        type: 'comparison',
        heading: 'Kimlere uygun, kimlere uygun değil?',
        leftTitle: 'Uygun adaylar',
        rightTitle: 'Ertelenmesi / değerlendirilmesi gerekenler',
        left: [
          'Köşeli/kare alt yüzünü yumuşatmak isteyenler',
          'Diş sıkma veya gıcırdatma (bruksizm) şikâyeti olanlar',
          'Sabah çene yorgunluğu, kas ağrısı yaşayanlar',
          'Çiğneme kası kaynaklı gerilim baş ağrısı olanlar',
        ],
        right: [
          'Gebelik ve emzirme dönemindekiler',
          'Nöromüsküler hastalığı olanlar (ör. myastenia gravis)',
          'Uygulama bölgesinde aktif cilt enfeksiyonu olanlar',
          'Çiğneme zorluğu/eklem sorunu önce hekimce değerlendirilmeli olanlar',
        ],
      },
      {
        type: 'myths',
        heading: 'Mitler ve gerçekler',
        items: [
          { myth: 'Masseter botoksu yüzü sarkıtır mı?', truth: 'Doğru doz ve teknikle hayır. Sarkma riski genellikle aşırı/yanlış uygulamayla ilişkilidir; kontrollü dozda alt yüz incelir, dokular korunur.' },
          { myth: 'Botokstan sonra çiğneyemez miyim?', truth: 'Hayır. Normal çiğnersiniz; yalnızca kasın aşırı/zorlayıcı sıkma gücü azalır. Günlük beslenme etkilenmez.' },
          { myth: 'İnceltme etkisi hemen olur mu?', truth: 'Hayır. İnceltme kas hacmi azaldıkça haftalar içinde gelişir. Diş sıkma rahatlaması ise çok daha erken hissedilir.' },
          { myth: 'İncelme kalıcı mıdır?', truth: 'Tek uygulamada geçicidir. Ancak düzenli tekrarlarda kas küçük kalmaya alışır ve seans aralıkları uzar.' },
          { myth: 'Gece plağının yerini tutar mı?', truth: 'İkisi farklı işler. Botoks kas gücünü azaltır, plak dişi mekanik olarak korur; çoğu zaman birlikte planlanır.' },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Bu içerik bilgilendirme amaçlıdır',
        text: 'Masseter botoksu tıbbi bir uygulamadır ve kasın kalınlığı, çene fonksiyonu ve beklentiye göre kişiye özel planlanır. Buradaki bilgiler genel bir rehber niteliğindedir; karar öncesi mutlaka hekim muayenesi şarttır.',
      },
      {
        type: 'faq',
        heading: 'Sıkça sorulan sorular',
        items: [
          { q: 'Masseter botoksu acır mı?', a: 'İğneler çok incedir; çoğu kişi yalnızca kısa bir batma hisseder. İstenirse öncesinde uyuşturucu krem uygulanabilir.' },
          { q: 'Kaç seans gerekir?', a: 'Genellikle tek seans yeterlidir. Çok kalın kaslarda 4-6 hafta sonra ek doz planlanabilir; etkiyi sürdürmek için yılda birkaç kez yenilenir.' },
          { q: 'Konuşmam veya gülüşüm etkilenir mi?', a: 'Doğru noktalara, gülümseme kaslarından kaçınılarak uygulandığında etkilenmez. Bu, anatomiye hâkim uygulamanın önemini gösterir.' },
          { q: 'Yüzüm asimetrik olur mu?', a: 'Doz iki tarafa simetrik dağıtıldığında risk düşüktür. Zaten var olan hafif doğal asimetriler değerlendirilerek doz dengelenir.' },
          { q: 'Uygulamadan sonra nelere dikkat etmeliyim?', a: 'İlk gün bölgeye masaj yapmamak, ağır spor ve sıcak ortamlardan (sauna, hamam) kaçınmak, ilk saatlerde uzanmamak önerilir.' },
          { q: 'Ne kadar sürede tekrar yaptırmalıyım?', a: 'Etki ortalama 4-6 ay sürer. Düzenli uygulamalarda kas inceldiği için aralıklar zamanla uzayabilir.' },
        ],
      },
      {
        type: 'sources',
        heading: 'Kaynaklar ve bilimsel dayanak',
        items: [
          { label: 'Smyth AG. Botulinum toxin treatment of bilateral masseteric hypertrophy. British Journal of Oral and Maxillofacial Surgery, 1994.' },
          { label: 'Kim NH, et al. The use of botulinum toxin type A in aesthetic mandibular contouring. Plastic and Reconstructive Surgery / Dermatologic Surgery literatürü.' },
          { label: 'Long H, Liao Z, Wang Y, et al. Efficacy of botulinum toxins on bruxism: a systematic review. Journal of Oral Rehabilitation, 2012.' },
          { label: 'U.S. Food & Drug Administration (FDA) — onabotulinumtoxinA (BOTOX) reçete bilgileri; masseter estetik kullanımı endikasyon dışı (off-label) kategorisindedir.' },
        ],
      },
    ],
  },
  {
    slug: 'terleme-botoksu',
    category: 'Botoks',
    title: 'Terleme Botoksu (Hiperhidroz): Bölgelere Göre Tedavi Rehberi',
    metaTitle: 'Terleme Botoksu Nedir? Koltuk Altı, El, Ayak — Hiperhidroz | Dr. İzzet Gök',
    excerpt:
      'Aşırı terleme (hiperhidroz) botoks ile nasıl tedavi edilir? Koltuk altı, avuç içi, ayak tabanı ve yüz bölgelerine göre mekanizma, etki süresi ve sık sorulanlar — Dr. İzzet Gök kontrolünde, görsel anlatımla.',
    heroEyebrow: 'Medikal Estetik Rehberi',
    readingMinutes: 9,
    updated: '2026-06-19',
    relatedServiceSlug: 'botoks',
    color: 'from-sky-500 to-cyan-500',
    blocks: [
      {
        type: 'prose',
        heading: 'Terleme botoksu nedir?',
        paragraphs: [
          'Terlemek normaldir — vücudun ısısını dengelemesinin doğal yoludur. Ancak bazı kişilerde terleme, sıcakla veya eforla orantısız biçimde, kontrolsüz şekilde artar; gömlek değiştirmek, el sıkışmaktan kaçınmak, kâğıda dokununca ıslatmak günlük bir soruna dönüşür. Tıpta bu duruma “hiperhidroz” (aşırı terleme) denir.',
          'Terleme botoksu, aşırı terleyen bölgedeki ter bezlerine giden sinyali geçici olarak durduran bir uygulamadır. Amaç terlemeyi tamamen ortadan kaldırmak değil — vücut ısı dengesini başka bölgelerden korur — yalnızca o bölgedeki aşırı, sosyal hayatı zorlaştıran terlemeyi belirgin biçimde (çoğu çalışmada %80’in üzerinde) azaltmaktır.',
        ],
      },
      {
        type: 'image',
        src: '/images/hiperhidroz-genel.png',
        webp: '/images/hiperhidroz-genel.webp',
        alt: 'Hiperhidrozun en sık görüldüğü dört bölge: koltuk altı, avuç içi, ayak tabanı ve yüz',
        caption: 'Aşırı terleme en sık dört bölgede görülür: koltuk altı, avuç içi, ayak tabanı ve yüz/kafa derisi. Her bölgenin uygulaması ve etki süresi birbirinden farklıdır.',
      },
      {
        type: 'prose',
        heading: 'Aşırı terleme ne zaman tedavi gerektirir?',
        paragraphs: [
          'Hiperhidroz iki türlüdür. “Primer” (birincil) hiperhidroz, altta yatan bir hastalık olmadan, genellikle ergenlikte başlayan ve belirli bölgelere (koltuk altı, el, ayak, yüz) yerleşen simetrik terlemedir — en sık karşılaşılan biçimdir ve terleme botoksunun ana hedefidir. “Sekonder” (ikincil) hiperhidroz ise bir hastalık, hormonal durum veya ilaca bağlı, daha yaygın terlemedir; burada önce altta yatan neden araştırılır.',
          'Terleme; iş hayatını, sosyal ilişkileri veya ruh halini etkiliyorsa, antiperspiranlar yetersiz kalıyorsa tedavi gündeme gelir. Bu yüzden hiperhidroz çoğu kişide yalnızca “estetik” değil, gerçek bir yaşam kalitesi sorunudur.',
        ],
      },
      {
        type: 'prose',
        heading: 'Botoks terlemeyi nasıl durdurur?',
        paragraphs: [
          'Ter bezlerini “salgıla” diye uyaran sinir uçları, tıpkı kaslara olduğu gibi, asetilkolin adlı kimyasal haberciyi salgılar. Bu haberci ter bezine ulaştığında bez terlemeye başlar. Botoks, sinir ucundaki bu asetilkolin salınımını geçici olarak bloke eder — sinyal iletilemez, ter bezi uyarılmaz ve o bölgedeki terleme durur.',
          'Mekanizma, mimik kaslarına yapılan botoksla aynı molekül üzerinden işler; fark yalnızca hedeftedir: burada kas değil, ter bezini uyaran sinir uçları susturulur. Etki geçicidir; sinir uçları zamanla işlevini geri kazandığında terleme yeniden başlar ve uygulama tekrarlanır.',
        ],
      },
      {
        type: 'science',
        title: 'Bilimsel arka plan: ekrin bezler ve haritalama',
        paragraphs: [
          'Terlemeden sorumlu ekrin ter bezleri, sempatik sinir sistemi tarafından uyarılır; ancak bu sempatik liflerin uç kısmı istisnai olarak kolinerjiktir, yani asetilkolin salgılar. Botulinum toksin tip-A (BoNT/A) presinaptik sinir ucundaki SNAP-25 proteinini keserek asetilkolin salınımını engeller; böylece bez uyarılamaz hale gelir.',
          'Uygulanacak alan, gerektiğinde Minor testi (iyot-nişasta testi) ile belirlenebilir: bölgeye iyot ve nişasta uygulanır, terleyen noktalar koyu mor renge döner ve enjeksiyon haritası bu “aktif” alana göre çıkarılır. Toksin, cilde yakın (yüzeysel/intradermal) ve çok sayıda küçük noktaya, yaklaşık 1-2 cm aralıklı bir ızgara şeklinde verilir.',
          'Not: onabotulinumtoxinA, primer koltuk altı (aksiller) hiperhidrozu için ruhsatlı bir endikasyona sahiptir; avuç içi, ayak tabanı ve yüz uygulamaları birçok ülkede endikasyon dışı (off-label) olmakla birlikte geniş klinik deneyime dayanır.',
        ],
      },
      {
        type: 'list',
        heading: 'Hangi bölgelere uygulanır?',
        items: [
          { title: 'Koltuk altı (aksiller)', text: 'En sık ve en kolay uygulanan bölge; ruhsatlı endikasyon. Etki genellikle uzun sürer (sıklıkla 6-12 ay).' },
          { title: 'Avuç içi (palmar)', text: 'El terlemesi; daha hassas ve ağrılı olabildiğinden anestezi/soğutma tercih edilir. Etki koltuk altına göre biraz daha kısa olabilir.' },
          { title: 'Ayak tabanı (plantar)', text: 'Ayak terlemesi ve buna bağlı koku/kayganlık şikâyetlerinde uygulanır.' },
          { title: 'Yüz ve kafa derisi', text: 'Alın ve kafa derisi terlemesinde; doz ve nokta seçimi mimik kaslarını etkilememek için özenle planlanır.' },
        ],
      },
      {
        type: 'prose',
        heading: 'Koltuk altı: en sık ve en kolay bölge',
        paragraphs: [
          'Koltuk altı, terleme botoksunun en çok uygulandığı ve sonuçların en tatmin edici olduğu bölgedir. Uygulama hızlıdır, ağrı azdır ve etki çoğu kişide diğer bölgelere kıyasla daha uzun sürer. Bu nedenle aşırı koltuk altı terlemesi, antiperspiranlardan fayda görmeyenlerde ilk tercih edilen tedavilerden biridir.',
        ],
      },
      {
        type: 'image',
        src: '/images/hiperhidroz-koltukalti.jpg',
        alt: 'Gömlekte belirgin koltuk altı ter lekesi — aksiller hiperhidroz örneği',
        caption: 'Aşırı koltuk altı terlemesi, giysilerde belirgin lekelere ve sosyal kaygıya yol açabilir. Botoks bu bölgedeki ter bezlerinin sinyalini azaltır.',
      },
      {
        type: 'prose',
        heading: 'Avuç içi ve ayak tabanı',
        paragraphs: [
          'El ve ayak terlemesi, hem fiziksel (kayan kalem, ıslak el sıkışma, kayan ayakkabı) hem de sosyal açıdan zorlayıcıdır. Bu bölgelerde cilt daha kalın ve sinir uçları daha yoğun olduğundan uygulama biraz daha hassastır; konfor için bölgesel anestezi, sinir bloğu veya soğutma kullanılabilir.',
          'Avuç içinde önemli bir incelik vardır: enjeksiyonun derinliği ve noktası, eldeki ince kasları etkileyip geçici bir kavrama zayıflığına yol açmayacak şekilde seçilmelidir. Bu da uygulamanın anatomiye hâkim bir hekim tarafından yapılmasını gerektirir.',
        ],
      },
      {
        type: 'image',
        src: '/images/hiperhidroz-palmar.jpg',
        alt: 'Aşırı terlemeden dolayı parlayan, ıslak avuç içleri — palmar hiperhidroz',
        caption: 'Avuç içi (palmar) hiperhidrozda eller sürekli nemli ve kaygan olabilir; botoks terlemeyi belirgin biçimde azaltır.',
      },
      {
        type: 'prose',
        heading: 'Uygulama nasıl yapılır?',
        paragraphs: [
          'Önce terleyen alan değerlendirilir, gerekirse Minor testiyle haritalanır. Ardından bölgeye, cilde yakın ve çok sayıda küçük noktaya, yaklaşık 1-2 cm aralıklı bir ızgara düzeninde ince iğnelerle toksin uygulanır. İşlem genellikle 15-30 dakika sürer ve hemen günlük hayata dönülür.',
          'Aşağıdaki görsellerde, uygulama öncesi çizilen ızgara haritası ve enjeksiyon tekniği görülmektedir — bu düzen, dozun bölgeye eşit ve eksiksiz dağılmasını sağlar.',
        ],
      },
      {
        type: 'image',
        src: '/images/hiperhidroz-botox.png',
        webp: '/images/hiperhidroz-botox.webp',
        alt: 'Koltuk altına ızgara şeklinde işaretlenmiş noktalara botoks enjeksiyonu',
        caption: 'Koltuk altı uygulaması: terleyen alan ızgara şeklinde işaretlenir ve eşit aralıklı noktalara yüzeysel enjeksiyon yapılır.',
      },
      {
        type: 'image',
        src: '/images/hiperhidroz-el.png',
        webp: '/images/hiperhidroz-el.webp',
        alt: 'Avuç içine ızgara şeklinde işaretlenmiş noktalara botoks enjeksiyonu',
        caption: 'Avuç içi uygulaması: aynı ızgara mantığı ele uygulanır; nokta ve derinlik, el kaslarını etkilememek için özenle seçilir.',
      },
      {
        type: 'timeline',
        heading: 'Etki ne zaman başlar, ne kadar sürer?',
        steps: [
          { when: '0. gün', title: 'Uygulama', text: 'Bölge işaretlenir, ince iğnelerle çok sayıda küçük noktaya uygulanır. Hemen günlük hayata dönülür.' },
          { when: '2-4. gün', title: 'İlk etki', text: 'Terlemede belirgin azalma hissedilmeye başlar.' },
          { when: '1. hafta', title: 'Tam etki', text: 'Sonuç tamamen oturur; bölge kurur.' },
          { when: '4-12. ay', title: 'Yenileme', text: 'Etki bölgeye göre değişir (koltuk altında genellikle daha uzun). Azaldığında uygulama tekrarlanır.' },
        ],
      },
      {
        type: 'comparison',
        heading: 'Kimlere uygun, kimlere uygun değil?',
        leftTitle: 'Uygun adaylar',
        rightTitle: 'Ertelenmesi / değerlendirilmesi gerekenler',
        left: [
          'Primer (bölgesel) aşırı terlemesi olanlar',
          'Antiperspiran ve kremlerden fayda görmeyenler',
          'Terlemesi iş/sosyal hayatını veya ruh halini etkileyenler',
          'Koltuk altı, el, ayak veya yüz terlemesi belirgin olanlar',
        ],
        right: [
          'Gebelik ve emzirme dönemindekiler',
          'Nöromüsküler hastalığı olanlar (ör. myastenia gravis)',
          'Yaygın terleme (sekonder hiperhidroz şüphesi) — önce nedeni araştırılmalı',
          'Uygulama bölgesinde aktif cilt enfeksiyonu olanlar',
        ],
      },
      {
        type: 'myths',
        heading: 'Mitler ve gerçekler',
        items: [
          { myth: 'Terleme botoksu terlemeyi tamamen durdurur mu?', truth: 'Hayır, gerek de yoktur. Uygulanan bölgedeki aşırı terlemeyi büyük oranda (çoğu çalışmada %80’in üzerinde) azaltır; vücut ısı dengesini diğer bölgelerden sürdürür.' },
          { myth: 'O bölge terlemeyince vücudun başka yerinden aşırı terler miyim?', truth: 'Telafi edici terleme botoks uygulamasında çok nadirdir ve genellikle hafiftir; cerrahi yöntemlerdeki kadar belirgin değildir.' },
          { myth: 'Terleyemezsem vücudum zarar görür mü?', truth: 'Hayır. Yalnızca küçük, sınırlı bir alan etkilenir; vücudun genel ısı düzenlemesi bozulmaz.' },
          { myth: 'Etkisi kalıcı mıdır?', truth: 'Hayır, geçicidir. Bölgeye göre 4-12 ay sürer; etki azaldığında uygulama tekrarlanır.' },
          { myth: 'Bu sadece estetik bir işlem mi?', truth: 'Hayır. Hiperhidroz çoğu kişide gerçek bir yaşam kalitesi sorunudur; koltuk altı için ruhsatlı bir tıbbi tedavi seçeneğidir.' },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Bu içerik bilgilendirme amaçlıdır',
        text: 'Aşırı terleme tıbbi değerlendirme gerektirir; yaygın terlemede önce altta yatan neden araştırılır. Buradaki bilgiler genel bir rehber niteliğindedir; karar öncesi mutlaka hekim muayenesi şarttır.',
      },
      {
        type: 'faq',
        heading: 'Sıkça sorulan sorular',
        items: [
          { q: 'Terleme botoksu acır mı?', a: 'Koltuk altında ağrı genellikle azdır. Avuç içi ve ayak tabanı daha hassastır; konfor için soğutma, krem veya sinir bloğu uygulanabilir.' },
          { q: 'Etkisini ne zaman görürüm?', a: 'Genellikle 2-4 günde azalma başlar, bir hafta içinde sonuç tam oturur.' },
          { q: 'Antiperspiran kullanmayı bırakır mıyım?', a: 'Çoğu kişi uygulanan bölgede antiperspirana ihtiyaç duymaz; bu, terlemenin şiddetine ve bölgeye göre değişir.' },
          { q: 'Avuç içi uygulamasından sonra elimi normal kullanabilir miyim?', a: 'Evet. Nadiren geçici, hafif bir kavrama zayıflığı olabilir; doğru teknik bu riski en aza indirir.' },
          { q: 'Spor, sauna veya hamama girebilir miyim?', a: 'İlk gün ağır efor ve aşırı sıcak ortamlardan kaçınmanız, bölgeye masaj yapmamanız önerilir.' },
          { q: 'Ne kadar sürede tekrar gerekir?', a: 'Etki bölgeye göre 4-12 ay sürer; koltuk altında genellikle daha uzundur. Azaldığında uygulama yenilenir.' },
        ],
      },
      {
        type: 'sources',
        heading: 'Kaynaklar ve bilimsel dayanak',
        items: [
          { label: 'U.S. Food & Drug Administration (FDA) — onabotulinumtoxinA (BOTOX), primer aksiller (koltuk altı) hiperhidroz endikasyonu (2004).' },
          { label: 'Naumann M, Lowe NJ. Botulinum toxin type A in treatment of bilateral primary axillary hyperhidrosis: randomized, parallel group, double-blind, placebo-controlled trial. BMJ, 2001.' },
          { label: 'Heckmann M, Ceballos-Baumann AO, Plewig G. Botulinum toxin A for axillary hyperhidrosis. New England Journal of Medicine, 2001.' },
          { label: 'International Hyperhidrosis Society (sweathelp.org) — hiperhidroz tedavi rehberleri ve hasta bilgilendirmeleri.' },
          { label: 'Minor testi (iyot-nişasta testi) — terleyen alanın haritalanmasında kullanılan klinik yöntem.' },
        ],
      },
    ],
  },
  {
    slug: 'dolgu',
    category: 'Dolgu',
    title: 'Yüz Dolgusu Nedir? Türleri, Bölgeleri ve Bilmeniz Gerekenler',
    metaTitle: 'Yüz Dolgusu Nedir? Dolgu Çeşitleri, Bölgeler ve Etki Süresi | Dr. İzzet Gök',
    excerpt:
      'Yüz dolgusu (filler) nedir, hangi türleri vardır (hyaluronik asit, kalsiyum hidroksiapatit, kollajen uyarıcılar), hangi bölgelere uygulanır ve güvenli midir? Dr. İzzet Gök kontrolünde, bilimsel dayanaklı ve görsel anlatımla.',
    heroEyebrow: 'Medikal Estetik Rehberi',
    readingMinutes: 10,
    updated: '2026-06-22',
    relatedServiceSlug: 'dolgu',
    color: 'from-fuchsia-500 to-pink-500',
    blocks: [
      {
        type: 'prose',
        heading: 'Yüz dolgusu nedir?',
        paragraphs: [
          'Yüz dolgusu (filler), zamanla veya yapısal olarak kaybedilen hacmi yerine koyan, yüz hatlarına denge ve dolgunluk kazandıran enjeksiyon bir uygulamadır. Yaşlanmayla birlikte cilt altındaki yağ yastıkçıkları azalır, kemik desteği geriler ve cilt daha az kollajen üretir; sonuçta yanaklar düşer, oluklar derinleşir, yüz “çöker” gibi görünür. Dolgu, bu hacmi seçilen noktalara kontrollü biçimde geri vererek yüzü dinlendirir.',
          'Dolgu maddeleri iki temel iş yapar: bir kısmı doğrudan hacim verir (boşluğu fiziksel olarak doldurur), bir kısmı ise cildi kendi kollajenini üretmeye teşvik ederek zamanla destek oluşturur. Hangi maddenin, hangi bölgeye, ne miktarda uygulanacağı; sonucun doğal mı yoksa abartılı mı olacağını belirleyen asıl faktördür.',
        ],
      },
      {
        type: 'prose',
        heading: 'Dolgu sadece “dudak” demek değildir',
        paragraphs: [
          'Çoğu kişi dolguyu yalnızca dudakla ilişkilendirir; oysa yüz dolgusu, yüzün hemen her bölgesinde hacim ve denge için kullanılan geniş bir uygulama ailesidir. Elmacık ve yanak hacmini geri vermekten, çene ucunu ve çene hattını belirginleştirmeye, gülme çizgilerini yumuşatmaktan göz altı çukurunu doldurmaya kadar farklı amaçlar taşır.',
          'Bu nedenle “dolgu yaptırmak” tek bir işlem değildir — hedefe göre bölge, madde ve teknik değişir. Bu rehber, dolgu evreninin tamamını tanıtır; tek tek bölgeleri (dudak, göz altı, çene hattı gibi) ayrı rehberlerde derinlemesine ele alıyoruz.',
        ],
      },
      {
        type: 'comparison',
        heading: 'İki temel dolgu mantığı: doldurucu mu, kollajen uyarıcı mı?',
        leftTitle: 'Doldurucu (hyaluronik asit)',
        rightTitle: 'Kollajen uyarıcı (biostimülatör)',
        left: [
          'Anında hacim verir — sonuç hemen görünür',
          'Geri alınabilir (hyaluronidaz enzimi ile çözülür)',
          'Genellikle 6-18 ay etkilidir',
          'İnce ayar ve şekillendirmeye en uygun seçenek',
          'Yeni başlayanlar ve hassas bölgeler için ilk tercih',
        ],
        right: [
          'Cildin kendi kollajenini üretmesini tetikler',
          'Sonuç kademeli oturur, daha uzun sürebilir (yıllar)',
          'Geri alınamaz — enzimle çözülmez',
          'Geniş alanlarda doku kalitesini iyileştirmeye uygun',
          'Kalsiyum hidroksiapatit, PLLA ve PCL bu gruptadır',
        ],
      },
      {
        type: 'list',
        heading: 'Dolgu türleri — sadece hyaluronik asit değil',
        items: [
          {
            title: 'Hyaluronik asit (HA)',
            text: 'En sık kullanılan dolgu maddesidir; vücutta doğal olarak da bulunan, su tutma kapasitesi çok yüksek bir moleküldür. Anında hacim verir, doğala en yakın sonucu sağlar ve en önemlisi hyaluronidaz enzimiyle geri alınabilir. Etki bölgeye göre genellikle 6-18 ay sürer.',
          },
          {
            title: 'Kalsiyum hidroksiapatit (CaHA)',
            text: 'Kemikte de bulunan bir mineralin mikro kürelerinden oluşur; hem anında hacim verir hem de kollajen üretimini uyarır. Daha çok derin oluklar ve yüz şekillendirmede kullanılır; etki çoğunlukla 12-18 ay. Geri alınamaz.',
          },
          {
            title: 'Poli-L-laktik asit (PLLA)',
            text: 'Doğrudan doldurmaz; cildi zaman içinde kendi kollajenini üretmeye teşvik eder. Sonuç birkaç seansta kademeli oturur ve uzun sürebilir (sıklıkla 2 yıl ve üzeri). Yaygın hacim kaybında tercih edilir.',
          },
          {
            title: 'Polikaprolakton (PCL)',
            text: 'Uzun etkili bir kollajen uyarıcıdır; hem hacim verir hem doku desteğini güçlendirir. Etkisi türüne göre 1-4 yıla kadar uzayabilir. Geri alınamaz.',
          },
          {
            title: 'Yağ enjeksiyonu (otolog yağ transferi)',
            text: 'Kişinin kendi vücudundan alınan yağ dokusunun yüze aktarılmasıdır. Doku uyumu yüksektir ve kalıcı olabilir; ancak bir kısmı emildiği için sonuç değişkendir ve ayrı bir cerrahi işlem gerektirir.',
          },
        ],
      },
      {
        type: 'science',
        title: 'Bilimsel arka plan: hyaluronik asit neden geri alınabilir?',
        paragraphs: [
          'Hyaluronik asit, doğal halinde vücutta hızla parçalanır. Dolgu olarak kullanılabilmesi için moleküller birbirine “çapraz bağ” (cross-link) ile bağlanır; bu bağlar jeli daha dayanıklı ve uzun ömürlü yapar. HA molekülü, ağırlığının kat kat üzerinde su tutabildiği için bölgeye dolgunluk ve nem kazandırır.',
          'HA dolgunun en büyük güvenlik avantajı geri alınabilmesidir. Hyaluronidaz adlı enzim, HA polimerindeki şeker birimlerini birbirine bağlayan glikozidik bağları hidroliz ederek (kopararak) dolguyu çözer. Klinik çalışmalarda enzim enjeksiyonundan sonra ilk 24 saat içinde hacimde belirgin azalma görülür; enzimin doku düzeyindeki etkisi yaklaşık 24-48 saat sürer. Bu sayede istenmeyen sonuç veya nadir bir damar komplikasyonunda dolgu hızla devre dışı bırakılabilir — kollajen uyarıcı dolgularda böyle bir “geri alma” imkânı yoktur.',
        ],
      },
      {
        type: 'list',
        heading: 'Hangi bölgelere uygulanır?',
        items: [
          { title: 'Elmacık ve yanak', text: 'Düşen orta yüze hacim vererek yüzü yukarı taşır ve dinlendirir.' },
          { title: 'Çene ucu ve çene hattı (jawline)', text: 'Profili dengeler, çene hattını netleştirir; özellikle alt yüz tanımında etkilidir.' },
          { title: 'Nazolabial (dudak-burun) ve marionet çizgileri', text: 'Burun kenarından ağıza inen ve ağız kenarından aşağı uzanan derin çizgileri yumuşatır.' },
          { title: 'Göz altı (tear trough)', text: 'Göz altı çukurunu doldurarak yorgun bakışı azaltır; ince ve hassas bir bölgedir, deneyim ister.' },
          { title: 'Dudak', text: 'Hacim, simetri ve kontur için en sık uygulanan bölge.' },
          { title: 'Şakak ve burun', text: 'Şakak çökmesinde hacim; burunda ise ameliyatsız şekillendirme (sınırlı, dikkatli endikasyon).' },
        ],
      },
      {
        type: 'timeline',
        heading: 'Uygulama nasıl ilerler, sonuç ne zaman oturur?',
        steps: [
          { when: '0. gün', title: 'Uygulama', text: 'Yüz analizi ve planlama sonrası, anestezik krem/içeriğiyle iğne veya kanülle uygulanır. İşlem genellikle 20-45 dakika.' },
          { when: '1-3. gün', title: 'Şişlik ve morluk', text: 'Hafif şişlik, kızarıklık veya morluk olabilir; özellikle dudak ve göz altında beklenen, geçici bir durumdur.' },
          { when: '2. hafta', title: 'Sonuç oturur', text: 'Şişlik iner, dolgu dokuya yerleşir ve gerçek sonuç ortaya çıkar. Kontrol bu dönemde yapılır.' },
          { when: 'Bölgeye göre 6-18 ay', title: 'Yenileme', text: 'HA dolgu zamanla vücutça emilir; etki azaldığında yenilenir. Çene/elmacık daha uzun, dudak/göz altı daha kısa sürer.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'En kritik konu: damar güvenliği',
        text: 'Dolgunun en ciddi (ama nadir) riski, maddenin bir damarı tıkaması — vasküler oklüzyon — durumudur. Bu yüzden dolgu, yüz anatomisine hâkim bir hekim tarafından; kanül kullanımı, küçük miktarlarla (mikrobolus) ve düşük basınçla uygulanmalıdır. Hyaluronik asit dolgularda, böyle bir durumda dolgunun hyaluronidaz ile hızla çözülebilmesi önemli bir güvenlik avantajıdır.',
      },
      {
        type: 'myths',
        heading: 'Mitler ve gerçekler',
        items: [
          { myth: 'Dolgu yüzü mutlaka şişirir, “yapay” gösterir mi?', truth: 'Hayır. Abartılı görünüm doz ve teknik hatasından kaynaklanır. Doğru planlanan dolgu, yüzü şişirmeden dengeler ve doğal durur.' },
          { myth: 'Dolgu kalıcı mıdır?', truth: 'Hyaluronik asit dolgular geçicidir, zamanla emilir. Kalsiyum/PLLA/PCL daha uzun sürer ama onlar da süresizdir; gerçekten kalıcı seçenekler (ör. yağ enjeksiyonu) ayrıdır.' },
          { myth: 'Dolgu eriyince cilt sarkar, daha kötü olur mu?', truth: 'Hayır. Dolgu emildiğinde cilt, uygulama öncesi haline döner; dolgunun cildi “gerip bıraktığı” bir mekanizma yoktur.' },
          { myth: 'Dolgudan memnun kalmazsam çaresiz miyim?', truth: 'HA dolgularda hayır — hyaluronidaz enzimiyle çözülebilir. Bu, HA’yı en esnek ve güvenli seçeneklerden biri yapar.' },
          { myth: 'Bir kez yaptırınca sürekli yaptırmak zorunda kalır mıyım?', truth: 'Hayır. Yenilemek tamamen tercihe bağlıdır; bırakıldığında yüz zamanla doğal seyrine döner.' },
        ],
      },
      {
        type: 'comparison',
        heading: 'Kimlere uygun, kimlere uygun değil?',
        leftTitle: 'Uygun adaylar',
        rightTitle: 'Ertelenmesi / değerlendirilmesi gerekenler',
        left: [
          'Yaşa veya yapıya bağlı hacim kaybı olanlar',
          'Çizgi, oluk veya asimetrisini dengelemek isteyenler',
          'Doğal, geri alınabilir bir çözüm arayanlar (HA)',
          'Cerrahi istemeyen, kısa sürede sonuç bekleyenler',
        ],
        right: [
          'Gebelik ve emzirme dönemindekiler',
          'Uygulama bölgesinde aktif cilt enfeksiyonu olanlar',
          'Bilinen ciddi alerji veya otoimmün/nöromüsküler durumu olanlar',
          'Gerçekçi olmayan beklentisi olanlar (önce konsültasyon)',
        ],
      },
      {
        type: 'faq',
        heading: 'Sıkça sorulan sorular',
        items: [
          { q: 'Dolgu acır mı?', a: 'Çoğu dolgu, içeriğindeki anestezik madde ve uygulanan krem anestezi sayesinde hafif rahatsızlıkla yapılır. Kanül kullanımı da konforu artırır.' },
          { q: 'Sonuç hemen görünür mü?', a: 'Hyaluronik asit dolgularda hacim anında görülür; ancak şişlik inip dolgu oturduğunda (yaklaşık 2 hafta) gerçek sonuç ortaya çıkar.' },
          { q: 'Dolgu kaç ay/yıl kalır?', a: 'Maddeye ve bölgeye göre değişir: HA genellikle 6-18 ay, kalsiyum hidroksiapatit 12-18 ay, PLLA/PCL daha uzun (yıllar) sürebilir.' },
          { q: 'Dolgu geri alınabilir mi?', a: 'Hyaluronik asit dolgular hyaluronidaz enzimiyle çözülebilir. Kollajen uyarıcı dolgular (CaHA, PLLA, PCL) geri alınamaz.' },
          { q: 'Morluk veya şişlik olur mu?', a: 'Olabilir; özellikle dudak ve göz altında geçici şişlik/morluk beklenen bir durumdur ve birkaç günde geçer.' },
          { q: 'Dolgu fiyatı neye göre değişir?', a: 'Kullanılan dolgu maddesi (HA mı, biostimülatör mü), miktarı ve uygulanan bölge sayısı belirleyicidir. Net plan ve fiyat, muayene sonrası kişiye özel çıkarılır.' },
        ],
      },
      {
        type: 'sources',
        heading: 'Kaynaklar ve bilimsel dayanak',
        items: [
          { label: 'Lowe NJ ve ark. Hyaluronic Acid Dermal Filler–Associated Vascular Occlusion — A Review of Prevention and Management Strategies. Journal of Cosmetic Dermatology, 2026.', url: 'https://onlinelibrary.wiley.com/doi/10.1111/jocd.70884' },
          { label: 'Guideline for the Management of Hyaluronic Acid Filler-induced Vascular Occlusion. PMC.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8211329/' },
          { label: 'Vascular Occlusion Following Dermal Filler Injections: A Systematic Review of Clinical Evidence and Emergency Management. 2025.', url: 'https://www.mdpi.com/2673-6373/6/3/51' },
          { label: 'Hyaluronidase Protocols — HA Filler Reversal (enzimatik geri alma mekanizması ve süresi).', url: 'https://www.doctormedica.co/blog/hyaluronidase-protocols-a-complete-guide-for-safe-and-effective-ha-filler-reversal' },
          { label: 'U.S. Food & Drug Administration (FDA) — Dermal Fillers (Soft Tissue Fillers) hasta bilgilendirmesi ve onaylı endikasyonlar.' },
        ],
      },
    ],
  },
];

export const getGuideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
