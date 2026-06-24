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
        type: 'image',
        src: '/images/dolgu-bolge.jpg',
        webp: '/images/dolgu-bolge.webp',
        alt: 'Yüz dolgusu bölge haritası: elmacık/yanak, göz altı, nazolabial, çene hattı, dudak, çene önü ve submental bölgeler numaralı şekilde işaretlenmiş',
        caption: 'Yüz dolgusu bölge haritası. Dolgu, yüzün çok sayıda bölgesinde hacim ve denge için kullanılır; her bölgenin amacı, uygun maddesi ve tekniği farklıdır.',
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
          'Hyaluronidaz ile erimez; HA kadar kolay/öngörülebilir geri alınmaz',
          'Geniş alanlarda doku kalitesini iyileştirmeye uygun',
          'Kalsiyum hidroksiapatit, PLLA ve PCL bu gruptadır',
        ],
      },
      {
        type: 'image',
        src: '/images/dolgu-turleri.png',
        webp: '/images/dolgu-turleri.webp',
        alt: 'Yaygın kullanılan dolgu ürünleri: hyaluronik asit, kalsiyum hidroksiapatit ve poli-L-laktik asit içerikli dolgular',
        caption: 'Yaygın kullanılan bazı dolgu çeşitleri ve markaları — Hyaluronik asit (HA): Juvederm, Restylane, Stylage, Belotero · Kalsiyum hidroksiapatit (CaHA): Radiesse · Poli-L-laktik asit (PLLA): Sculptra. Hangi ürünün kullanılacağı bölgeye, hedefe ve cilt yapısına göre hekim tarafından belirlenir.',
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
            text: 'Kemikte de bulunan bir mineralin mikro kürelerinden oluşur; hem anında hacim verir hem de kollajen üretimini uyarır. Daha çok derin oluklar ve yüz şekillendirmede kullanılır; etki çoğunlukla 12-18 ay. Hyaluronidaz ile erimez; istenmeyen sonuç masaj, salin (serum fizyolojik) ile dağıtma veya gerektiğinde ultrason (USG) eşliğinde müdahale gibi yöntemlerle yönetilir.',
          },
          {
            title: 'Poli-L-laktik asit (PLLA)',
            text: 'Doğrudan doldurmaz; cildi zaman içinde kendi kollajenini üretmeye teşvik eder. Sonuç birkaç seansta kademeli oturur ve uzun sürebilir (sıklıkla 2 yıl ve üzeri). Yaygın hacim kaybında tercih edilir.',
          },
          {
            title: 'Polikaprolakton (PCL)',
            text: 'Uzun etkili bir kollajen uyarıcıdır; hem hacim verir hem doku desteğini güçlendirir. Etkisi türüne göre 1-4 yıla kadar uzayabilir. Hyaluronidaz ile erimez; HA kadar kolay geri alınmaz.',
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
        type: 'image',
        src: '/images/dolgu-uygulama.jpeg',
        webp: '/images/dolgu-uygulama.webp',
        alt: 'Dr. İzzet Gök, klinik ortamda bir hastaya dudak dolgusu uygularken',
        caption: 'Dolgu uygulaması, anatomiye hâkim bir hekim tarafından klinik ortamda, ince iğne veya kanülle yapılır. Görsel: Dr. İzzet Gök kliniğinden.',
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
          { myth: 'Dolgudan memnun kalmazsam çaresiz miyim?', truth: 'Hayır. HA dolgular hyaluronidaz enzimiyle çözülebilir — bu onları en esnek ve güvenli seçeneklerden biri yapar. Kollajen uyarıcı dolgular hyaluronidazla erimese de masaj, salin ile dağıtma, steroid veya USG eşliğinde müdahale gibi yöntemlerle bir ölçüde düzeltilebilir.' },
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
          { q: 'Dolgu geri alınabilir mi?', a: 'Hyaluronik asit dolgular hyaluronidaz enzimiyle hızlı ve öngörülebilir biçimde çözülebilir — en büyük güvenlik avantajları budur. Kollajen uyarıcı dolgular (CaHA, PLLA, PCL) ise hyaluronidaz ile erimez; HA kadar kolay geri alınmaz. Ancak bu "hiç müdahale edilemez" demek değildir: masaj, salin (serum fizyolojik) ile dağıtma, gerektiğinde intralezyonel steroid veya ultrason (USG) eşliğinde müdahale gibi yöntemlerle istenmeyen sonuçlar bir ölçüde düzeltilebilir.' },
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
          { label: 'Kollajen uyarıcı (biostimülatör) dolgular — CaHA, PLLA, PCL — hyaluronidaz ile erimez; HA kadar kolay geri alınmaz. PLLA üzerine derleme, PMC.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10939544/' },
          { label: 'A Structured Approach for Treating Calcium Hydroxylapatite Focal Accumulations — masaj/mekanik dağıtma ve USG eşliğinde yaklaşım. Aesthetic Surgery Journal, 2024.', url: 'https://academic.oup.com/asj/article/44/8/869/7609149' },
          { label: 'PLLA nodüllerinin yönetimi — steril su/salin enjeksiyonu + masaj, gerektiğinde intralezyonel steroid (inflamatuar nodülde). PLLA güvenlik/yönetim literatürü.', url: 'https://glowhealth.eu/sculptra-nodules-treatment-2/' },
          { label: 'U.S. Food & Drug Administration (FDA) — Dermal Fillers (Soft Tissue Fillers) hasta bilgilendirmesi ve onaylı endikasyonlar.' },
        ],
      },
    ],
  },
  {
    slug: 'ha-biyostimulator-farki',
    category: 'Dolgu',
    title: 'HA mı, Biyostimülatör mü? Dolgularda Bilimsel Fark',
    metaTitle: 'HA mı Biyostimülatör mü? Hyaluronik Asit ve Kollajen Uyarıcı Dolgu Farkı | Dr. İzzet Gök',
    excerpt:
      'Hyaluronik asit (HA) dolgular ile biyostimülatör (kollajen uyarıcı) dolgular arasındaki fark mekanizma düzeyinde nedir? Çapraz bağ ve reolojiden neokolajeneze, sıvı yüz germedeki rollerine kadar — Dr. İzzet Gök kontrolünde, bilimsel dayanaklı.',
    heroEyebrow: 'Medikal Estetik Rehberi',
    readingMinutes: 11,
    updated: '2026-06-24',
    relatedServiceSlug: 'dolgu',
    color: 'from-violet-500 to-fuchsia-500',
    blocks: [
      {
        type: 'prose',
        heading: 'İki farklı felsefe: doldurmak mı, yeniden yapmak mı?',
        paragraphs: [
          'Dolgular tek bir kategori değildir. Temelde iki bambaşka mantık vardır: bir grup, kaybedilen hacmi doğrudan ve anında “doldurur” (fiziksel/mekanik yaklaşım); diğer grup ise hacim eklemekten çok, cildi kendi yapı taşlarını — özellikle kollajeni — yeniden üretmeye “teşvik eder” (biyolojik yaklaşım).',
          'İlk gruba hyaluronik asit (HA) dolgular, ikinci gruba biyostimülatörler (kollajen uyarıcılar: kalsiyum hidroksiapatit, poli-L-laktik asit, polikaprolakton) girer. İkisi de “dolgu” başlığı altında anılır ama farkları yüzeyde değil, doku düzeyinde başlar. Bu rehber, o farkı bilimsel temelleriyle açıklar.',
        ],
      },
      {
        type: 'comparison',
        heading: 'Özet: HA ve biyostimülatör temel farkları',
        leftTitle: 'Hyaluronik asit (HA)',
        rightTitle: 'Biyostimülatör (kollajen uyarıcı)',
        left: [
          'Etki anında ve mekaniktir — jel boşluğu doldurur',
          'Su tutarak hacim ve nem verir',
          'Hyaluronidaz ile geri alınabilir',
          'Etki genellikle 6-18 ay',
          'Şekillendirme ve ince ayara en uygun',
        ],
        right: [
          'Etki kademelidir — cilt kendi kollajenini üretir',
          'Hacimden çok yapısal destek ve doku kalitesi',
          'Hyaluronidaz ile erimez; hızlı antidotu yoktur',
          'Etki daha uzun (18-24 ay ve üzeri)',
          'Yaygın hacim kaybı ve cilt yenilenmesine uygun',
        ],
      },
      {
        type: 'image',
        src: '/images/ha-vs-biyostimulator.png',
        webp: '/images/ha-vs-biyostimulator.webp',
        alt: 'Cilt kesitinde iki mekanizma: solda hyaluronik asit jeli boşluğu doldururken, sağda biyostimülatör yeni kollajen ağı oluşumunu tetikliyor',
        caption: 'İki farklı mantık tek bakışta: solda hyaluronik asit (HA) dokuda boşluğu fiziksel olarak doldurur (anında hacim); sağda biyostimülatör, fibroblastları uyararak yeni kollajen ağı ürettirir (kademeli yenilenme).',
      },
      {
        type: 'science',
        title: 'HA’nın bilimi: çapraz bağ ve reoloji',
        paragraphs: [
          'Hyaluronik asit, vücutta doğal olarak bulunan ve ağırlığının kat kat üzerinde su bağlayabilen bir moleküldür. Saf haliyle birkaç günde parçalandığı için, dolgu olarak dayanması amacıyla moleküller “çapraz bağ” (cross-link) ile birbirine bağlanır. Bugün ruhsatlı HA dolguların neredeyse tamamında çapraz bağ ajanı olarak BDDE (1,4-bütandiol diglisidil eter) kullanılır; alkali ortamda HA ile kurduğu eter bağı, amid veya ester bağlarına göre daha kararlıdır ve jelin enzimatik/oksidatif bozunmasını yavaşlatır.',
          'HA dolguların davranışını belirleyen ikinci kavram reolojidir — yani jelin mekanik “kişiliği”. En çok konuşulan parametre G′ (elastik modül): yüksek G′ daha sert, kaldırma gücü yüksek bir jel demektir ve kemik üstü derin destek (elmacık, çene hattı) için tercih edilir; düşük G′ ise yumuşak, hassas bölgelere (dudak, göz altı) uygundur. Kohezivite ise jelin dağılmadan bütünlüğünü koruma kapasitesidir. Bu yüzden “tek bir HA” yoktur — bölgeye göre reolojik olarak farklı ürün seçmek işin teknik özüdür.',
          'HA’nın en önemli güvenlik özelliği geri alınabilmesidir: hyaluronidaz enzimi, HA polimerindeki şeker birimlerini bağlayan glikozidik bağları hidroliz ederek jeli çözer; etkisi saatler içinde başlar. Biyostimülatörlerde böyle bir hızlı antidot yoktur.',
        ],
      },
      {
        type: 'science',
        title: 'Biyostimülatörlerin bilimi: neokolajenez ve kritik bir ayrım',
        paragraphs: [
          'Biyostimülatörler doğrudan doldurmaktan çok, cilt altına yerleştirilen parçacıklarla bir “yeniden yapım” süreci başlatır: fibroblastlar uyarılır ve yeni kollajen üretimi (neokolajenez) tetiklenir. Sonuç bu yüzden anında değil, haftalar-aylar içinde kademeli ortaya çıkar ve genellikle daha uzun sürer.',
          'Literatürdeki en önemli bulgu, kalsiyum hidroksiapatit (CaHA) ile poli-L-laktik asidin (PLLA) aynı yolla çalışmamasıdır. CaHA’nın etki mekanizması büyük ölçüde inflamatuar olmayan bir yoldur; fibroblastın kasılma gücünü geri kazandırır ve hücre dışı matriksin (ECM) düzenli, organize biçimde yeniden yapılanmasını sağlar — minimal immün hücre katılımıyla. Bu nedenle CaHA, “rejeneratif” estetik başlığı altında değerlendirilir.',
          'PLLA ise inflamasyona bağlı, kontrollü bir yabancı cisim reaksiyonu üzerinden çalışır: makrofajlar PLLA mikrokürelerini sarar; M2 makrofaj polarizasyonu, TGF-β/Smad sinyal yolağı, Piezo1 mekanotransdüksiyonu ve laktat metabolizması devreye girer; çevredeki fibroblastlar yeni (de novo) tip I kollajen üretir. Çarpıcı olan, bu sürecin makrofajlar olmadan gerçekleşememesidir. Özetle: CaHA daha çok organize ECM rejenerasyonu sağlarken, PLLA enkapsülasyon ve fibroplazi tipi bir kollajen birikimi oluşturur — ikisi de kollajen yapar, ama yolak ve doku mimarisi farklıdır.',
        ],
      },
      {
        type: 'image',
        src: '/images/biyostimulator-kollajen.png',
        webp: '/images/biyostimulator-kollajen.webp',
        alt: 'Dermiste fibroblastların yeni kollajen lifleri üreterek organize bir ağ oluşturması — neokolajenez',
        caption: 'Neokolajenez: biyostimülatör, dermisteki fibroblastları uyarır; hücreler yeni kollajen liflerini üreterek organize bir destek ağı kurar. Hacim, bu yeni dokudan gelir.',
      },
      {
        type: 'list',
        heading: 'Üç biyostimülatör, üç farklı karakter',
        items: [
          {
            title: 'Kalsiyum hidroksiapatit (CaHA / Radiesse)',
            text: 'Mikroküreler + jel taşıyıcıdan oluşur. Jel anında bir miktar hacim verir, mikroküreler kalıp kollajeni uyarır. İnflamatuar olmayan, organize ECM yenilenmesi sağlar; seyreltilmiş (hiperdilüe) formu cilt sıkılaştırma ve hafif kaldırma için kullanılır. Etki genellikle 12-18 ay.',
          },
          {
            title: 'Poli-L-laktik asit (PLLA / Sculptra)',
            text: 'Doğrudan hacim vermez; haftalar içinde tip I kollajen üretimini tetikler. Geniş alanlarda (şakak, orta yüz, genel yüz) kademeli hacim ve destek için tercih edilir. Sonuç 3-6 ayda olgunlaşır, 2 yıl ve üzeri sürebilir; genellikle birden fazla seans gerekir.',
          },
          {
            title: 'Polikaprolakton (PCL / Ellansé)',
            text: 'Mikroküreler + jel taşıyıcı; uzun ömürlü bir “iskele” (scaffold) kurarak neokolajenezi sürer halde tutar. En uzun etkili grup — türüne göre 1-4 yıla kadar.',
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Yapısal kaldırma ve sıvı yüz germe ile ilişkisi',
        paragraphs: [
          'Bu malzeme farkı, “sıvı yüz germe” (liquid facelift) dediğimiz cerrahisiz kaldırma yaklaşımının da temelidir. Modern teknikte yüksek-G′ HA, kemik üstüne (periost) ve derin yanak yağ kompartmanlarına, zigoma (elmacık) boyunca yerleştirilerek orta yüze yapısal destek verir; bu derin çapa, komşu dokuları yukarı taşır ve nazolabial bölgenin ağırlığını azaltır. Biyostimülatörler ise hacmin “üzerine” eklenmek yerine yüzün kollajen iskelesini güçlendirerek sıkılık ve hafif kaldırma sağlar — bu yüzden “sadece hacim değil, yapı” yaklaşımının merkezindedir.',
          'Önemli dürüst sınır: sıvı yüz germe, hafif-orta sarkması olan (çoğunlukla 30’lu–50’li yaş başı) kişilerde işe yarar; fazla deriyi almaz, ileri sarkmada cerrahi yüz germenin yerini tutmaz. Cerrahi sonuç daha dramatik ve daha uzun ömürlüdür (7-10 yıl); enjeksiyon yöntemi ise daha kısa iyileşme sunar ama bakım/yenileme gerektirir. Sıvı yüz germeyi ayrı bir rehberde, hizmet sayfamıza bağlı olarak ayrıca ele alıyoruz.',
        ],
      },
      {
        type: 'timeline',
        heading: 'Etki zamanlaması: anında mı, kademeli mi?',
        steps: [
          { when: '0. gün', title: 'HA: anında', text: 'HA dolgu uygulandığı anda hacim verir; sonuç hemen görünür (şişlik inince netleşir).' },
          { when: 'İlk haftalar', title: 'Biyostimülan: sessiz dönem', text: 'Biyostimülatörde başlangıçtaki hacmin bir kısmı (taşıyıcı jel/su) çekilir; asıl etki için kollajen yapımının başlaması beklenir.' },
          { when: '3-6. ay', title: 'Biyostimülan: zirve', text: 'Yeni kollajen olgunlaştıkça yapısal dolgunluk ve sıkılık belirginleşir; sonuç doğal biçimde oturur.' },
          { when: '18-24 ay+', title: 'Uzun vade', text: 'Biyostimülatör etkisi HA’ya göre daha uzun sürer; HA ise genellikle 6-18 ayda emilir.' },
        ],
      },
      {
        type: 'comparison',
        heading: 'Hangi durumda hangisi mantıklı?',
        leftTitle: 'HA daha mantıklı',
        rightTitle: 'Biyostimülatör daha mantıklı',
        left: [
          'Belirli bir bölgeyi şekillendirmek (dudak, çene ucu)',
          'Anında ve öngörülebilir sonuç isteyen',
          'Geri alınabilirlik güvencesi isteyen',
          'İlk kez dolgu yaptıracak veya hassas bölge',
        ],
        right: [
          'Yaygın hacim kaybı ve genel cilt gevşemesi',
          'Doğal, kademeli ve uzun süreli sonuç isteyen',
          'Hacimden çok cilt kalitesi/yapısal destek hedefi',
          'Şakak, orta yüz gibi geniş alanlar',
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Çoğu zaman en iyi cevap “ikisi birden”',
        text: 'Klinik pratikte sık görülen yaklaşım kombinasyondur: HA ile anında denge ve şekillendirme, biyostimülatör ile uzun vadeli yapısal destek ve cilt kalitesi. Hangi maddenin, hangi bölgeye, hangi sırayla uygulanacağı kişiye özel bir karardır ve mutlaka muayene gerektirir. Bu içerik bilgilendirme amaçlıdır.',
      },
      {
        type: 'myths',
        heading: 'Mitler ve gerçekler',
        items: [
          { myth: 'Biyostimülatör de bir “dolgu” mu?', truth: 'Geniş anlamda evet, ama mekanizması farklıdır. HA gibi doğrudan doldurmaz; cildi kendi kollajenini üretmeye yönlendirir. Bu yüzden etkisi geç ama uzun gelir.' },
          { myth: 'Biyostimülatör daha uzun sürdüğüne göre her zaman daha iyidir.', truth: 'Hayır. Uzun süre bir avantajdır ama geri alınamaması ve sonucun kademeli/öngörülemez oturması dezavantajdır. Hassas bölge ve ince ayar için HA çoğu zaman daha doğrudur.' },
          { myth: 'Kollajen uyarıcı yaptırınca etki kalıcı olur.', truth: 'Hayır. Üretilen kollajen de zamanla doğal döngüsüne girer; etki uzun ama süresizdir, yenileme gerekebilir.' },
          { myth: 'Sıvı yüz germe, ameliyatlı yüz germeyle aynı sonucu verir.', truth: 'Hayır. Hafif-orta gevşemede etkilidir; fazla deriyi almaz, ileri sarkmada cerrahinin yerini tutmaz. Beklenti gerçekçi olmalıdır.' },
        ],
      },
      {
        type: 'faq',
        heading: 'Sıkça sorulan sorular',
        items: [
          { q: 'HA ile biyostimülatör aynı seansta yapılabilir mi?', a: 'Çoğu zaman planlı biçimde birlikte kullanılır; ancak sıralama ve bölge seçimi hekim tarafından kişiye özel planlanır.' },
          { q: 'Biyostimülatör neden hemen sonuç vermiyor?', a: 'Çünkü hacmi kendisi değil, uyardığı yeni kollajen oluşturur. Bu biyolojik süreç haftalar alır; sonuç 3-6 ayda olgunlaşır.' },
          { q: 'Biyostimülatör geri alınabilir mi?', a: 'Hyaluronidaz ile erimez. Yine de istenmeyen sonuçlar masaj, salin ile dağıtma, gerektiğinde steroid veya ultrason eşliğinde müdahale gibi yöntemlerle bir ölçüde yönetilebilir — ama HA kadar kolay değildir.' },
          { q: 'Kalsiyum hidroksiapatit ile PLLA arasındaki fark nedir?', a: 'İkisi de kollajen uyarır ama farklı yolla: CaHA daha çok inflamatuar olmayan, organize doku yenilenmesi; PLLA ise makrofaj aracılı, inflamasyona dayalı tip I kollajen üretimi sağlar.' },
          { q: 'Sıvı yüz germe için hangisi kullanılır?', a: 'Genellikle kombinasyon: yapısal destek için yüksek-G′ HA ve/veya biyostimülatör, dinamik kırışıklıklar için botoks. Aday seçimi ve sınırları önemlidir.' },
        ],
      },
      {
        type: 'sources',
        heading: 'Kaynaklar ve bilimsel dayanak',
        items: [
          { label: 'Guida S ve ark. Skin biostimulation and hyaluronic acid: Current knowledge and new evidence. Journal of Cosmetic Dermatology, 2024.', url: 'https://onlinelibrary.wiley.com/doi/10.1111/jocd.16156' },
          { label: 'Nowag B ve ark. Biostimulating fillers and induction of inflammatory pathways: macrophage response to calcium hydroxylapatite and poly-L-lactic acid. Journal of Cosmetic Dermatology, 2024.', url: 'https://onlinelibrary.wiley.com/doi/10.1111/jocd.15928' },
          { label: 'Advanced Concepts in Rheology for the Evaluation of Hyaluronic Acid–Based Soft Tissue Fillers. PMC.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8078113/' },
          { label: 'The Role of Calcium Hydroxylapatite (Radiesse) as a Regenerative Aesthetic Treatment: A Narrative Review. PMC.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11025388/' },
          { label: 'Sculpting the Midface and Lower Face: A Novel Biostimulatory Technique Using Hyperdilute Calcium Hydroxylapatite. PMC.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12686807/' },
          { label: 'BDDE çapraz bağ ve HA dolguların fizikokimyası üzerine derlemeler (cross-linking technology, rheology).' },
        ],
      },
    ],
  },
  {
    slug: 'dudak-dolgusu',
    category: 'Dolgu',
    title: 'Dudak Dolgusu: Doğal Sonuç, Süreç ve Güvenlik Rehberi',
    metaTitle: 'Dudak Dolgusu Nedir? Nasıl Yapılır, Kaç Ay Kalır, Geri Alınır mı? | Dr. İzzet Gök',
    excerpt:
      'Dudak dolgusu (lip filler) nedir, nasıl uygulanır, kaç ay kalır ve güvenli midir? Doğal sonuç, etki süresi, şişlik-morluk süreci ve dudak anatomisinin güvenlik açısından önemi — Dr. İzzet Gök kontrolünde, bilimsel dayanaklı.',
    heroEyebrow: 'Medikal Estetik Rehberi',
    readingMinutes: 9,
    updated: '2026-06-24',
    relatedServiceSlug: 'dudak-dolgusu',
    color: 'from-pink-500 to-rose-500',
    blocks: [
      {
        type: 'prose',
        heading: 'Dudak dolgusu nedir?',
        paragraphs: [
          'Dudak dolgusu (lip filler), genellikle hyaluronik asit (HA) içerikli bir jelin dudak dokusuna kontrollü biçimde uygulanarak hacim, simetri ve nem kazandırılmasıdır. Kullanılan madde, ciltte zaten doğal olarak bulunan hyaluronik asitle benzer yapıdadır; bu yüzden doğru uygulandığında dudak hem doğal görünür hem doğal hisseder.',
          'Amaç “büyük dudak” değil, kişinin yüz oranlarına uygun, dengeli ve doğal bir dolgunluktur. İyi bir sonuçta dudak şişkin değil; dinlenmiş, oranlı ve kendi yüzüyle uyumlu görünür. Bu yüzden dudak dolgusu bir “miktar” işi değil, bir **oran ve teknik** işidir.',
        ],
      },
      {
        type: 'list',
        heading: 'Dudak dolgusu ne için yapılır?',
        items: [
          { title: 'Hacim kazandırma', text: 'İnce veya yaşla incelmiş dudaklara dengeli dolgunluk.' },
          { title: 'Simetri ve denge', text: 'Alt-üst dudak oranını ve sağ-sol simetriyi düzeltme.' },
          { title: 'Kontur ve sınır belirginleştirme', text: 'Dudak kenarını (vermilyon sınırı) ve Cupid yayını netleştirme.' },
          { title: 'Nem ve canlılık', text: 'HA su tuttuğu için dudağa nem ve pırıltı kazandırır.' },
          { title: 'Yaşa bağlı değişimi yumuşatma', text: 'İncelmiş, çizgilenmiş üst dudak ve düşen ağız kenarlarını dengeleme.' },
        ],
      },
      {
        type: 'science',
        title: 'Bilimsel arka plan: dudak anatomisi neden güvenliğin merkezi?',
        paragraphs: [
          'Dudağın kan dolaşımı, yüz arterinin dalları olan üst (superior) ve alt (inferior) dudak arterleri tarafından sağlanır. Bu damarlar vermilyon sınırına paralel seyreder ve üst dudak arterinin vermilyon sınırındaki ortalama derinliği yaklaşık 3,3-3,9 mm’dir. Bu nedenle bu bölgede yüzeysel (4 mm’den sığ) plana uygulama yapmak, damar yaralanmasını önlemenin temel kuralıdır.',
          'Philtrum (üst dudak ortasındaki oluk) ve Cupid yayı, üst dudak arterine yakın olduğu için özellikle dikkat gerektiren bölgelerdir; orta hatta damarlar arası bağlantılar azalır ve bazı dallar daha yüzeysel seyreder. Güvenliği artıran teknik tercihler arasında ince ve kısa iğne (ör. 4 mm 30G) veya ucu künt kanül kullanımı, doğru (cilt altı) plana yerleştirme ve damara doğrudan temas riskini azaltan ileri yönde (anterograd) enjeksiyon sayılır. Bu yüzden dudak dolgusu, dudak anatomisine hâkim bir hekim tarafından yapılmalıdır.',
        ],
      },
      {
        type: 'timeline',
        heading: 'Uygulama ve iyileşme süreci',
        steps: [
          { when: '0. gün', title: 'Uygulama', text: 'Krem anestezi sonrası ince iğne veya kanülle uygulanır. İşlem genellikle 20-30 dakika sürer.' },
          { when: '24-48 saat', title: 'Şişlik ve kızarıklık', text: 'Hafif şişlik ve kızarıklık beklenen, normal bir durumdur; bu dönemde dudaklar olduğundan dolgun görünebilir.' },
          { when: '3-7 gün', title: 'Morluk geriler', text: 'Olası morluklar bu sürede solar; şişlik belirgin biçimde azalır.' },
          { when: '7-10 gün', title: 'Nihai şekil', text: 'Dolgu yerine oturur ve gerçek sonuç ortaya çıkar; kontrol bu dönemde yapılır.' },
          { when: '6-12 ay', title: 'Yenileme', text: 'HA zamanla emilir; etki azaldığında uygulama tercihe bağlı olarak yenilenir.' },
        ],
      },
      {
        type: 'comparison',
        heading: 'Kimlere uygun, kimlere uygun değil?',
        leftTitle: 'Uygun adaylar',
        rightTitle: 'Ertelenmesi / değerlendirilmesi gerekenler',
        left: [
          'İnce, asimetrik veya hacim kaybı olan dudaklar',
          'Doğal, dengeli bir dolgunluk isteyenler',
          'Geri alınabilir (HA) bir çözüm tercih edenler',
          'Gerçekçi beklentisi olanlar',
        ],
        right: [
          'Gebelik ve emzirme dönemindekiler',
          'Dudakta aktif uçuk (herpes) veya cilt enfeksiyonu olanlar',
          'Bilinen ciddi alerji veya kanama bozukluğu olanlar',
          'Aşırı/abartılı sonuç bekleyenler (önce konsültasyon)',
        ],
      },
      {
        type: 'callout',
        tone: 'warn',
        title: 'En kritik konu: damar güvenliği',
        text: 'Dudak dolgusunun en ciddi (ama nadir) riski, dolgunun bir damarı tıkaması — vasküler oklüzyon — ve buna bağlı doku hasarıdır. Bu yüzden uygulama, anatomiye hâkim bir hekim tarafından; uygun derinlik, ince iğne/kanül ve dikkatli teknikle yapılmalıdır. HA dolguların önemli avantajı, sorun durumunda hyaluronidaz enzimiyle hızla çözülebilmesidir. Aktif uçuğu olanlarda işlem ertelenir. Bu içerik bilgilendirme amaçlıdır.',
      },
      {
        type: 'myths',
        heading: 'Mitler ve gerçekler',
        items: [
          { myth: 'Dudak dolgusu mutlaka “ördek dudak” yapar mı?', truth: 'Hayır. Abartılı görünüm doz ve teknik hatasıdır. Oranlı planlanan dolgu, dudağı şişirmeden dengeler ve doğal durur.' },
          { myth: 'Dudak dolgusu kalıcı mıdır?', truth: 'Hayır. HA dudak dolguları geçicidir; genellikle 6-12 ayda vücut tarafından doğal olarak emilir.' },
          { myth: 'Bir kez yaptırınca bırakamaz mıyım, dudak söner kalır mı?', truth: 'Hayır. Dolgu emildiğinde dudak uygulama öncesi haline döner; “söndürme” gibi bir mekanizma yoktur.' },
          { myth: 'Memnun kalmazsam çaresiz miyim?', truth: 'Hayır. HA dudak dolgusu hyaluronidaz enzimiyle çözülebilir — bu en önemli güvenlik avantajlarından biridir.' },
          { myth: 'İşlemden hemen sonra normal görünürüm.', truth: 'İlk 1-2 gün hafif şişlik olabilir; nihai doğal sonuç 7-10 günde oturur. Önemli bir etkinlik öncesi bunu hesaba katın.' },
        ],
      },
      {
        type: 'faq',
        heading: 'Sıkça sorulan sorular',
        items: [
          { q: 'Dudak dolgusu acır mı?', a: 'Krem anestezi ve dolgunun içindeki anestezik madde sayesinde rahatsızlık genellikle azdır; çoğu kişi hafif basınç hisseder. Kanül kullanımı konforu artırır.' },
          { q: 'Dudak dolgusu kaç ay kalır?', a: 'Genellikle 6-12 ay. Süre; kullanılan ürüne, metabolizmaya ve yaşam tarzına göre değişir.' },
          { q: 'Geri alınabilir mi?', a: 'Evet. HA dudak dolgusu, sonuçtan memnun kalınmazsa veya gerektiğinde hyaluronidaz enzimiyle çözülebilir.' },
          { q: 'Şişlik ne kadar sürer?', a: 'Belirgin şişlik genellikle 24-48 saatte azalır; olası morluk 3-7 günde geçer; nihai şekil 7-10 günde oturur.' },
          { q: 'Doğal görünür mü?', a: 'Doz ve teknik doğru olduğunda evet. Hedef “büyük” değil, yüz oranlarına uygun dengeli bir dolgunluktur.' },
          { q: 'İşlemden sonra nelere dikkat etmeliyim?', a: 'İlk gün bölgeye masaj yapmamak, ağır spor ve aşırı sıcak ortamlardan (sauna/hamam) kaçınmak, aktif uçuk varsa işlemi ertelemek önerilir.' },
        ],
      },
      {
        type: 'sources',
        heading: 'Kaynaklar ve bilimsel dayanak',
        items: [
          { label: 'Lip Augmentation Using Hyaluronic Acid Filler and a 4-mm Needle: A Safer, More Natural and Predictable Approach. JCAD.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7869814/' },
          { label: 'Microanatomical Location of Hyaluronic Acid Gel Following Injection of the Upper Lip Vermillion Border: Needle vs Microcannula. PMC.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5773414/' },
          { label: '9-point Injection Technique for Lip Augmentation Using Sonographic Imaging of the Labial Artery Pathway. Aesthetic Surgery Journal, 2024.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11483566/' },
          { label: 'Lip Filler: Anatomy, Techniques, and Management of Complications. IntechOpen.', url: 'https://www.intechopen.com/chapters/1217626' },
          { label: 'U.S. Food & Drug Administration (FDA) — Dermal Fillers (Soft Tissue Fillers) hasta bilgilendirmesi.' },
        ],
      },
    ],
  },
];

export const getGuideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
