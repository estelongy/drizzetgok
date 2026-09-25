import type { DeepDiveSection } from '../components/DeepDive';

// "Doğal Estetik Nedir?" pillar'ının derinleşme (uydu) bölümleri.
// Her biri hem modal olarak (pillar içinde) hem de ayrı sayfa olarak
// (/rehber/<slug>) açılabilir. Şimdilik yalnızca ilki hazır.
export const DOGAL_ESTETIK_DEEPDIVE: DeepDiveSection[] = [
  {
    slug: 'dogal-estetikte-guzellik-algisi',
    title: 'Güzellik Algısı Nasıl Oluşur?',
    matchHeading: '1. Güzellik nasıl algılanır?',
    ready: true,
    metaTitle: 'Güzellik Algısı Nasıl Oluşur? Bilimsel Bir Bakış | Dr. İzzet Gök',
    excerpt:
      'Beyin bir yüzü neden "güzel" bulur? Güzellik algısının fiziksel özelliklerle nasıl başlayıp beyinde nasıl anlam kazandığına bilimsel bir bakış.',
    body: (
      <>
        <h3 className="font-serif text-xl font-bold text-slate-900 mt-2 mb-3">Beyin, bir yüzü çok hızlı değerlendirir</h3>
        <p>
          Bir yüzün "güzel" olup olmadığına dair ilk izlenimimiz, sandığımızdan çok daha kısa
          sürede oluşabilir. Araştırmalar, bir yüze yalnızca saniyenin onda biri kadar (yaklaşık
          100 milisaniye) bakmanın bile çekicilik gibi bazı özellikler hakkında bir ilk izlenim
          oluşturmaya yetebildiğini gösteriyor. Bu kadar kısa sürede oluşan yargılar, daha uzun
          süreli değerlendirmelerle belirli ölçüde örtüşüyor. Ama bu, kararın "değişmez" ya da
          tamamen bilinçdışı olduğu anlamına gelmez: ilk izlenim hızlı oluşsa da dikkat, bağlam,
          deneyim ve daha uzun bakış algıyı yine de etkileyebilir. Yani güzellik yargısı hem hızlı
          hem de kısmen otomatiktir — ama üzerine düşünmeye kapalı değildir.
        </p>
        <p>
          Peki beyin bir yüzü çekici bulduğunda ne oluyor? Bu soruyu inceleyen bir bilim dalı var:
          güzellik algısının beyindeki karşılığını araştıran <strong>nöroestetik</strong> (neuroaesthetics).
          Bu alandaki beyin görüntüleme çalışmaları, çekici yüzleri değerlendirirken ödül değeri ve öznel
          beğeniyle ilişkili bölgelerin — özellikle "bir şeyin ne kadar değerli olduğunu" hesaplayan
          orbitofrontal korteksin — etkinleşebildiğini ortaya koyuyor. Bir yüz ne kadar çekici bulunuyorsa, bu ödül işleme ağındaki etkinliğin de
          arttığı bildirilmiş. Ama önemli bir nüans var: bu bölgeler yalnızca "güzellik merkezleri"
          değil; yediğimiz güzel bir yemekten aldığımız hazdan sevdiğimiz bir sese kadar pek çok
          şeyin değerini tartan geniş bir sistemin parçası. Yani çekici bir yüz beyinde bir tür ödül
          karşılığı oluşturabiliyor — güzelliği tümüyle "beynin verdiği bir ödül"e indirgemek doğru
          olmasa da, bu karşılığın gerçek olduğunu söyleyebiliriz.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Beyin, kolay "okuduğu" yüzü sever</h3>
        <p>
          Peki beyin neden bazı yüzleri hızlı ve zahmetsizce olumlu değerlendirebiliyor? Bu soruya
          getirilen açıklamalardan biri, psikolojide işlem akıcılığı (processing fluency) denen
          kavrama dayanıyor. Fikir şu: beynimiz gördüğü her şeyi işlemek için bir miktar zihinsel çaba
          harcar — ama bu çaba her görüntüde aynı değildir. Bazı görüntüler beyni yorar; onları tanımak,
          çözmek, bir yere oturtmak enerji ister. Bazıları ise adeta kendiliğinden akar; beyin onları
          hiç zorlanmadan işler. İşte "işlem akıcılığı" bu kolaylık hissini anlatır. Ve araştırmalara
          göre, beynimiz kolay işlediği şeylerden daha çok hoşlanma eğilimindedir: tanıdık, dengeli,
          beklediğimiz kalıba yakın görüntüler beyni şaşırtmaz, ekstra mesai istemez — ve bu zahmetsizlik,
          hafif bir hoşnutluğa dönüşür.
        </p>
        <p>
          Ne var ki yüzler söz konusu olduğunda bu açıklamayı bir kesin kural değil, bir eğilim olarak
          görmek gerekir. Çünkü tablo göründüğü kadar basit değil. Bazı araştırmalar, çekici ya da
          ortalamaya yakın yüzlerin gerçekten daha akıcı işlendiğine işaret ederken; bazıları, yüzlerde
          "kolay işleme" ile "beğenme" arasındaki bağın her zaman aynı yöne gitmediğini gösteriyor.
          İlginç bir örnek: bir çalışmada insanlar bir yüze daha uzun baktıkça onu tanıma kolaylığı ve
          "karar verdim" hissi artmış — ama beğeni artmamış, hatta bazı durumlarda azalmış. Yani "beyin
          bir yüzü ne kadar kolay işlerse o kadar güzel bulur" demek fazla iddialı olur. İşlem akıcılığı,
          yüz çekiciliğini etkileyebilen mekanizmalardan biri — tek başına açıklaması değil.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Ortalama bir yüz neden çekici gelebilir?</h3>
        <p>
          Şimdi kulağa şaşırtıcı gelebilecek bir bulgu: elimizde farklı insanların yüz fotoğrafları
          olduğunu ve bunları bilgisayarda üst üste bindirerek ortak özelliklerini taşıyan bir "ortalama
          yüz" oluşturduğumuzu düşünün. Sezgimiz, böyle bir yüzün sıradan ve dikkat çekmeyen bir görüntü
          olacağını söyler. Oysa araştırmalar, bazı koşullarda bu ortalama yüzlerin, onları oluşturan
          bireysel yüzlerden daha çekici değerlendirilebildiğini gösteriyor; birden fazla yüzün
          birleştirilmesiyle oluşan kompozitler, tek tek bileşenlerinden daha yüksek çekicilik puanları
          alabiliyor. Ama bu, ortalama olan her yüzün her bireysel yüzden daha güzel olduğu anlamına gelmez.
        </p>
        <p>
          Bu bulgu bir önceki başlıkla bağlantılı: ortalama bir yüz, aşırı uçları törpülenmiş, dengeli ve
          "beklenen kalıba" yakın bir yüzdür — yani beynin nispeten kolay işlediği bir yüz. Ancak burada
          kritik bir ayrım var. Sonraki çalışmalar gösterdi ki en çekici yüzler tam olarak ortalama değildir;
          çekici özellikleri ölçülü biçimde belirginleştirilmiş yüzlerdir. Yani ortalamalık çekiciliğin
          tabanını kurar — sizi "sıra dışı" olmaktan çıkarır — ama tavanı o değildir. Kısacası ortalama
          olmak, ideal olmak ve güzel olmak aynı şey değildir.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Simetri gerçekten güzelliğin anahtarı mı?</h3>
        <p>
          Estetik üzerine en sık duyduğunuz cümlelerden biri şudur: "Güzel yüz, simetrik yüzdür." Bu fikir
          o kadar yaygınlaştı ki neredeyse tartışılmaz bir gerçek gibi kabul görüyor. Arkasındaki mantık da
          ilk bakışta ikna edici: simetri, gelişimin düzenli ilerlediğinin bir göstergesi sayılmış; dolayısıyla
          daha simetrik bir yüzün biyolojik kalite hakkında bilgi taşıyabileceği öne sürülmüş. Ama gelin bu
          varsayımı gerçek insan yüzlerine uygulayınca araştırmaların ne söylediğine bakalım. Çünkü tablo,
          sanıldığı kadar net değil.
        </p>
        <p>
          En dikkat çekici uyarı, alandaki araştırmaların kendisinden geldi. Simetri ile çekicilik ilişkisini
          inceleyen çalışmaları bir arada değerlendiren bir meta-analizde yayın yanlılığı (publication bias)
          saptandı — yani "simetri güzeldir" sonucunu bulan çalışmaların yayımlanma, bulamayanların çekmecede
          kalma eğilimi, literatürdeki etkiyi olduğundan büyük gösteriyordu. Bu meta-analizde, yanlılık
          düzeltildiğinde simetrinin etkisi yaklaşık %30-50 oranında küçüldü; katılımcı sayısı 100'ün üzerinde
          olan görece büyük çalışmalarda ise ilişki neredeyse sıfıra indi. Üstelik kusursuz simetri her durumda
          daha çekici de görünmüyor: bazı klasik deneylerde bir yüzün tamamen simetrik hale getirilmiş versiyonu,
          doğal halinden daha az çekici bulundu — ancak daha yeni çalışmalar bu sonucu her koşulda tekrarlamıyor.
          Buradan çıkan sağlam sonuç şu: insan yüzleri zaten tam kusursuz bir sağ-sol simetriye sahip değildir;
          küçük asimetriler normal yüz yapısının bir parçasıdır ve tek başına birer "kusur" olarak görülmemelidir.
        </p>
        <p>
          Tam da bu yüzden, bir yüzdeki asimetriyi değerlendirirken hedef iki tarafı milimetrik olarak birbirinin
          aynısı yapmak değildir — bu hem gereksiz hem de doğal olmayan bir sonuç doğurur. Önce asimetrinin nereden
          kaynaklandığına, ne kadar belirgin olduğuna ve yüzün genel dengesini gerçekten etkileyip etkilemediğine
          bakmak gerekir. Bazı asimetriler düzeltilmek istenen belirgin özelliklerdir; bazı küçük farklılıklar ise
          yüzü "yapay" değil, gerçek ve canlı kılan şeylerin ta kendisidir.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Az konuşulan asıl mesele: cilt ve doku kalitesi</h3>
        <p>
          Şimdiye kadar hep yüzün biçiminden söz ettik — oranlar, simetri, hatların dizilişi. Oysa bir yüzün nasıl
          algılandığını belirleyen yalnızca bu yapısal özellikler değil. O yüzü kaplayan derinin nasıl göründüğü de
          en az onlar kadar güçlü bir görsel ipucu taşıyor: cildin renk düzgünlüğü, üzerindeki ton farkları, yüzey
          dokusu — hepsi algılanan yaş, sağlık ve çekicilikle yakından ilişkili.
        </p>
        <p>
          Bunu en iyi gösteren araştırmalar, cildin renk homojenliği üzerine yapılanlar. Cildimizin rengi iki temel
          pigmentin dağılımıyla oluşur: melanin (kahverengi tonlar) ve hemoglobin (kanlanmayla ilgili kırmızı tonlar).
          Bu iki pigment yüze ne kadar eşit ve düzgün dağılırsa — yani leke, kızarıklık, ton farkı ne kadar azsa — o
          yüz genellikle o kadar genç, sağlıklı ve çekici algılanıyor. Bu örüntü hem kadın hem erkek yüzlerinde görüldü;
          hatta bazı deneylerde yüzün şekli hiç değiştirilmeden yalnızca cildin renk dağılımı düzenlendiğinde bile,
          algılanan yaş, sağlık ve çekicilik değişebildi. Yani cilt, yüzün biçimsel özelliklerinden ayrı, kendine ait
          bir algısal katkı da sağlayabiliyor.
        </p>
        <p>
          Yine de dürüst bir parantez şart: "Cilt kalitesi güzelliğin en güçlü belirleyicisidir" demek için yeterli
          kanıt yok. Hangi özelliğin daha baskın olduğu; yaşa, cinsiyete, etnik gruba ve neyin ölçüldüğüne göre değişiyor.
          Örneğin farklı etnik grupları inceleyen bir çalışmada kırışıklık ve sarkma, yaş ve çekicilik değerlendirmelerinin
          en güçlü belirleyicileri olurken; renk homojenliği ve parlaklık özellikle sağlık algısına ek katkı sağladı.
          Cilt rengiyle çekicilik arasındaki ilişki her toplumda da aynı çıkmıyor. Yani cilt kalitesi çok önemli bir
          etken, ama tek ve evrensel bir "güzellik anahtarı" değil.
        </p>
        <p>
          Bu bulgunun doğal estetik açısından önemli bir sonucu var. Oran ve simetri büyük ölçüde doğuştandır ve kökten
          değiştirilemez; cilt ve doku kalitesi ise iyileştirilebilir. Bu yüzden bazı kişilerde en doğal ve en belirgin
          fark, yüzün şeklini değiştirmekten değil, önce cildin ve dokunun kalitesini geri kazandırmaktan gelir.
          Yıpranmış, donuk, ton farkları olan bir cilde hacim eklemek çoğu zaman beklenen sonucu vermez; asıl mesele,
          müdahaleye gerçekten ihtiyaç duyulan katmandan başlamaktır. (Bunu bir "kural" olarak değil, bulgulardan
          çıkardığım klinik bir yaklaşım olarak belirtmek isterim.)
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Güzellik gerçekten "bakan gözde" mi?</h3>
        <p>
          Buraya kadar hep insanların ortak eğilimlerinden söz ettik. Bu ortaklıklar gerçek — ama tablonun yalnızca
          yarısı. Güzellik yargısının ne kadarının "herkeste ortak", ne kadarının "kişiye özel" olduğunu ölçmeye
          çalışan araştırmalar, yüz çekiciliğinde bu iki bileşenin birbirine yakın ağırlıkta olabildiğine işaret
          ediyor: beğenimizin bir bölümü paylaşılan, önemli bir bölümü ise kişisel görünüyor.
        </p>
        <p>
          Bunun dikkat çekici bir örneği, ikizler üzerinde yapılan bir çalışmadan geldi. Eğer güzellik zevki büyük
          ölçüde genlerimizde yazılı olsaydı, aynı genleri taşıyan özdeş ikizlerin bu konuda birbirine çok yakın
          olması beklenirdi. Oysa bu çalışmada özdeş ikizler bile hangi yüzün çekici olduğu konusunda tam anlaşmadı.
          Araştırmacılar, bu örneklemdeki yüz beğenisi farklılıklarının önemli ölçüde ortak genlerden çok, her
          kişinin kendine özgü yaşam deneyimleriyle — tanıdığı insanlar, arkadaş çevresi, gördüğü yüzler, medyada
          karşılaştıkları — ilişkili göründüğünü bildirdi. Tek bir çalışmanın bulgusunu evrensel bir orana çevirmek
          doğru olmaz; ama farklı kültürleri karşılaştıran araştırmalar da benzer bir ikili tabloya işaret ediyor:
          çekici yüz özelliklerinin bir kısmı kültürler arasında ortak, bir kısmı kültüre özgü, bir kısmı ise bireysel.
        </p>
        <p>
          Bunun sezgisel bir örneği "dünya güzelleri" sorusudur: madem güzellik bu kadar kişisel, neden dünyanın dört
          bir yanından seçilen kadınlarda ortak bir izlenim var? Yarışmacıları sıradan kadınlarla karşılaştıran
          ölçümlü çalışmalar, kazananların rastgele "uç" hatlara değil; dengeli oranlara, görece simetriye ve homojen,
          canlı bir cilde daha yakın olduğunu gösteriyor — yani bu bölümde saydığımız aynı ortak sinyallere. Ama
          işin dürüst yanı şu: bu kadınlar birbirine benzemez. Farklı ırktan, farklı hatlardan, farklı ülkelerdendir.
          Ortak olan şey <em>hatları</em> değil, <em>sinyalleridir</em> — hepsi sağlıklı ve dengeli <em>görünür</em>.
          Üstelik kimin kazandığı çağa, kıtaya ve jüriye göre değişir; bu seçimler saf biyolojiyi değil, dönemin
          kültürel beğenisini de yansıtır. Yani "herkesçe güzel" diye bir yüz yoktur; herkesçe okunan birkaç
          sinyal vardır.
        </p>
        <p>
          Tam da bu yüzden doğal estetikte "herkese uyan tek bir güzel yüz" diye bir şey yoktur. Bir kişiye yakışan,
          onu tamamlayan bir dokunuş, bir başkasında aynı etkiyi yaratmayabilir. Bir ünlünün ya da bir "trend"in yüzünü
          birebir hedef almak çoğu zaman hayal kırıklığıyla sonuçlanır. Doğru olan, kişinin kendi hatları ve kendi
          hikâyesiyle uyumlu olandır — yani bir başkasının hatlarını değil, kendi denge ve canlılık sinyallerini
          güçlendirmektir.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Ve unutulan gerçek: dudak bir iletişim organıdır</h3>
        <p>
          Şimdiye kadar dudağı hep bir "görünüş" olarak konuştuk. Oysa dudağın çok daha temel bir işlevi var: yüzün en
          çok konuştuğu yerlerden biri olması. Bir insanın yüzüne baktığımızda gözlerimiz sürekli göz ile ağız arasında
          gidip gelir; ve duyguları okurken ağız bölgesi belirleyici rol oynar — mutluluğu ve tiksintiyi en çok ağızdan
          okuruz. Yani dudak, yalnızca bakılan değil, aynı zamanda okunan bir organdır.
        </p>
        <p>
          Bunun pratik bir sonucu var. Bir dudağın hareketsiz hâli bile bir mesaj taşır. Ağız kenarları yıllar içinde
          hafifçe aşağı döndüğünde, kişi kendini gayet iyi hissetse bile yüzüne istemsiz bir "yorgun" ya da "mutsuz"
          ifade yerleşebilir. İşte bu yüzden ağız bölgesine yapılan bir müdahalenin asıl meselesi çoğu zaman "büyütmek"
          değil, o bölgenin doğru duyguyu yansıtmaya devam etmesini sağlamaktır. Kötü bir uygulamanın gerçek zararı da
          buradadır: kişiyi "çirkin" yapmaktan çok ifadesiz yapar — gülümsemesi doğallığını yitirmiş, mimikleri
          donuklaşmış bir görüntü bırakır. Oysa bir yüzü canlı ve inandırıcı kılan şey, tam da o ifade zenginliğidir.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Özetle: Güzellik bir tepkidir — ve doğallık bu tepkinin merkezinde</h3>
        <p>
          Bu bölümde bir yüzü "güzel" bulmanın ne demek olduğunu izledik ve şuraya vardık: güzellik, dışarıda hazır
          duran tek bir özellik değil, büyük ölçüde beynin ürettiği bir tepki. Araştırmalar bir arada bakıldığında
          birkaç eğilime işaret ediyor: beyin bir yüzü hızlı ve çoğunlukla otomatik değerlendiriyor; tanıdık ve
          dengeli yüzleri daha kolay işleyip olumlu bulma eğiliminde; ortalamaya yakın yüzler çekici bulunabiliyor
          ama en çekici yüz her zaman en ortalama olan değil; simetrinin katkısı sanıldığından zayıf görünüyor ve
          kusursuz simetri her durumda daha çekici çıkmıyor; buna karşılık cilt ve doku kalitesi güçlü bir görsel
          ipucu olarak öne çıkıyor; ve tüm bunların üzerine herkes kendi kişisel beğenisini ekliyor.
        </p>
        <p>
          Bu eğilimlerin ortak yönü şu: hiçbiri abartıyı, zorlamayı ya da kusursuzluğu değil; dengeyi, canlılığı ve
          tanıdıklığı işaret ediyor. Yani "doğal görünüm" yalnızca bir slogan ya da moda değil — güzellik algısının
          dayandığı zeminle uyumlu bir yaklaşım. Doğal estetiğin amacı da bu yüzden kişiyi hazır bir güzellik kalıbına
          sokmak değil; onun kendi yüzünün taşıdığı dengeyi bozmadan, en canlı ve en kendisi hâline yaklaştırmaktır.
        </p>

        <h3 className="font-serif text-lg font-bold text-slate-900 mt-8 mb-3">Kaynaklar</h3>
        <ul className="text-base text-slate-500 space-y-1.5 list-disc pl-5">
          <li>Willis J, Todorov A. First impressions: making up your mind after a 100-ms exposure to a face. <em>Psychological Science.</em> 2006;17(7):592-598.</li>
          <li>O'Doherty J, Winston J, Critchley H, Perrett D, Burt DM, Dolan RJ. Beauty in a smile: the role of medial orbitofrontal cortex in facial attractiveness. <em>Neuropsychologia.</em> 2003;41(2):147-155.</li>
          <li>Reber R, Schwarz N, Winkielman P. Processing fluency and aesthetic pleasure: is beauty in the perceiver's processing experience? <em>Personality and Social Psychology Review.</em> 2004;8(4):364-382.</li>
          <li>Langlois JH, Roggman LA. Attractive faces are only average. <em>Psychological Science.</em> 1990;1(2):115-121.</li>
          <li>Perrett DI, May KA, Yoshikawa S. Facial shape and judgements of female attractiveness. <em>Nature.</em> 1994;368:239-242.</li>
          <li>Van Dongen S. Associations between asymmetry and human attractiveness: possible direct effects of asymmetry and signatures of publication bias. <em>Annals of Human Biology.</em> 2011;38(3):317-323.</li>
          <li>Matts PJ, Fink B, Grammer K, Burquest M. Color homogeneity and visual perception of age, health, and attractiveness of female facial skin. <em>J Am Acad Dermatol.</em> 2007;57(6):977-984.</li>
          <li>Jones BC, Little AC, Burt DM, Perrett DI. When facial attractiveness is only skin deep. <em>Perception.</em> 2004;33(5):569-576.</li>
          <li>Voegeli R, Rawlings AV, Shackelford TK, Fink B ve ark. Predictors of female age, health and attractiveness perception from skin feature analysis of digital portraits in five ethnic groups. <em>Int J Cosmet Sci.</em> 2023;45(5):672-687.</li>
          <li>Germine L, Russell R, Bronstad PM ve ark. Individual aesthetic preferences for faces are shaped mostly by environments, not genes. <em>Current Biology.</em> 2015;25(20):2684-2689.</li>
          <li>Kim SC, Kim HB, Jeong WS ve ark. Comparison of facial proportions between beauty pageant contestants and ordinary young women of Korean ethnicity: a three-dimensional photogrammetric analysis. <em>Aesthetic Plastic Surgery.</em> 2018;42(3):748-758.</li>
          <li>Burusapat C, Lekdaeng P. What is the most beautiful facial proportion in the 21st century? Comparative study among Miss Universe, Miss Universe Thailand, neoclassical canons, and facial golden ratios. <em>Plastic and Reconstructive Surgery – Global Open.</em> 2019;7(2):e2044.</li>
        </ul>
      </>
    ),
  },
  {
    slug: 'dogal-estetikte-bilim-ne-der',
    title: 'Bilim "Doğal Estetik"e Nasıl Bakıyor?',
    matchHeading: '2. Doğal sonuç için bilim ne der?',
    ready: true,
    metaTitle: 'Bilim "Doğal Estetik"e Nasıl Bakıyor? | Dr. İzzet Gök',
    excerpt:
      'Bir estetik sonuç ne zaman "doğal" sayılır ve bilim bunu nasıl ölçüyor? Doğallığın ölçümü, kimin gözünden değerlendirildiği ve sınırları üzerine bilimsel bir bakış.',
    body: (
      <>
        <p className="text-lg text-slate-600 mb-6">
          Bir estetik sonuca bakıp "çok doğal olmuş" ya da "belli oluyor" dediğimizde aslında ne
          ölçüyoruz? Bu bölümde, uzun süre bir hissiyat sanılan "doğal"ın bilimin elinde nasıl
          ölçülebilir bir kavrama dönüştüğünü — ve bu ölçümün sınırlarını — birlikte inceliyoruz.
        </p>

        {/* Açılış şeması: doğal sonuç birden çok pencereden değerlendirilir */}
        <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500 mb-5">
            "Doğal sonuç" tek bir yerden ölçülmez
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { t: 'Hastanın gözü', d: '"Hâlâ ben miyim?"' },
              { t: 'Hekimin gözü', d: 'Anatomik uyum' },
              { t: 'Çevrenin gözü', d: '"Belli oluyor mu?"' },
              { t: 'Hareket', d: 'Gülünce, konuşunca' },
            ].map((x) => (
              <div key={x.t} className="rounded-xl bg-white border border-slate-200 p-3">
                <p className="font-semibold text-slate-800 text-sm">{x.t}</p>
                <p className="text-slate-500 text-sm mt-1">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm mt-5 max-w-lg mx-auto">
            Bu pencerelerin hepsi "doğal"a bakar — ama <strong>hiçbiri tek başına</strong> onu tam
            tarif edemez. Bölüm boyunca bu dört pencereyi tek tek açacağız.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">Önce bir yanlış anlaşılmayı düzeltelim: doğallık ≠ güzellik ≠ gençlik ≠ memnuniyet</h3>
        <p>
          "Doğal", estetikte en çok kullanılan ama en az düşünülen kelimelerden biri. Çoğu zaman
          "güzel", "genç" ya da "memnun edici" ile aynı şeymiş gibi kullanılır. Oysa bunlar farklı
          şeylerdir ve her zaman aynı yöne bakmazlar:
        </p>
        <ul className="my-4 space-y-2 list-none pl-0">
          {[
            ['Güzel ama doğal değil', 'Sonuç etkileyici durabilir, ama "yapılmış" olduğu belli olur.'],
            ['Doğal ama memnun etmeyen', 'Kimse anlamaz, ama kişi beklediği değişimi göremediği için mutlu olmayabilir.'],
            ['Memnun ama doğal görünmeyen', 'Kişi sonucu sever, ama dışarıdan bakan biri fazla bulabilir.'],
          ].map(([a, b]) => (
            <li key={a} className="flex gap-3 items-start rounded-xl bg-slate-50 border border-slate-100 p-3">
              <span className="text-emerald-500 font-bold flex-shrink-0">≠</span>
              <span><strong className="text-slate-800">{a}:</strong> <span className="text-slate-600">{b}</span></span>
            </li>
          ))}
        </ul>
        <p>
          Bu bir kelime oyunu değil — doğal estetiğin bütün meselesi burada. "Güzelleştirmeyi"
          hedefleyen bir yaklaşım başka bir yere varır, "doğallığı korumayı" hedefleyen başka bir yere.
          Bu rehberde <strong>doğal estetik</strong> derken kastedilen, "en güzel" ya da "en genç" yüz
          değil; kişinin, müdahaleden sonra da kendi tanıdık dengesini koruyarak <em>hâlâ kendisi gibi</em> görünmesidir.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">1. Doğallık artık ölçülebiliyor — ilk sözü kişinin kendisi söylüyor</h3>
        <p>
          Yıllarca "doğal mı olmuş?" sorusu göz kararıydı: hekim bakar, hasta memnun kalır ya da
          kalmazdı. 2024'te önemli bir eşik aşıldı — bilim doğallığı doğrudan ölçmek için, üstelik ilk
          olarak <strong>hastanın gözünden</strong> ölçmek için tasarlanmış bir araç geliştirdi. Adı
          bile hastaların cümlesinden geliyor: <em>"Doğal görünmesini istiyorum."</em> Bu araç
          doğallığı üç ayrı açıdan ele alıyor:
        </p>
        <div className="my-5 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-base">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Ne bakıyor?</th>
                <th className="px-4 py-3 font-semibold">Sorduğu soru</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="px-4 py-3 font-medium text-slate-800">Beklenti</td><td className="px-4 py-3 text-slate-600">İşlemden ne umuyorsun?</td></tr>
              <tr><td className="px-4 py-3 font-medium text-slate-800">Görünüm</td><td className="px-4 py-3 text-slate-600">Sonuç ne kadar doğal <em>görünüyor</em>?</td></tr>
              <tr><td className="px-4 py-3 font-medium text-slate-800">His</td><td className="px-4 py-3 text-slate-600">Sana ne kadar "hâlâ ben" <em>hissettiriyor</em>?</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Aracı geliştirenler önemli bir şey fark etti: insanlar "doğal" derken hep aynı şeyi
          kastetmiyor. En sık dile getirilen beklentiler:
        </p>
        <ul className="my-4 grid sm:grid-cols-2 gap-2 list-none pl-0">
          {[
            ['"Yaşıma uygun görüneyim"', '20’lik değil, dinç bir kendim'],
            ['"Belli olmasın"', 'yaptırdığım anlaşılmasın'],
            ['"Dinlenmiş görüneyim"', 'yorgun değil, taze'],
            ['"Kendim kalayım"', 'başkasına benzemeyeyim'],
          ].map(([a, b]) => (
            <li key={a} className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-3">
              <span className="font-medium text-slate-800">{a}</span>
              <span className="block text-slate-500 text-sm mt-0.5">{b}</span>
            </li>
          ))}
        </ul>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Ama dürüst bir uyarı</p>
          <p className="text-slate-700">
            Böyle bir aracın olması "doğallık artık kesin ölçülüyor" demek değil. Bu araç doğallığın
            <em> bazı</em> yönlerini, <em>hastanın kendi ağzından</em> ölçüyor — hepsini değil. Dahası,
            bu tür anketleri kullanan çalışmaların önemli bir kısmı yöntemsel olarak hatalı yapılmış.
            Yani <strong>"hastalar memnun çıktı" demek, sonucun gerçekten doğal olduğunu tek başına
            kanıtlamaz.</strong> Memnun olmak ayrı, doğal görünmek ayrı.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">2. Doğallık kimin gözünden? Üç ayrı bakış</h3>
        <p>
          Bir sonucun "doğal" olup olmadığına aslında tek bir kişi karar vermez. En az üç ayrı göz
          vardır ve bunlar her zaman aynı şeyi söylemez:
        </p>
        <div className="my-5 grid gap-3 sm:grid-cols-3">
          {[
            ['Kişinin kendisi', 'Aynada "bu hâlâ benim" diyebiliyor mu?', 'emerald'],
            ['Hekim', 'Anatomik ve estetik olarak dengeli mi?', 'sky'],
            ['Çevredeki insanlar', 'Bir işlem yapıldığını fark ediyorlar mı?', 'violet'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-800">{t}</p>
              <p className="text-slate-600 text-sm mt-1">{d}</p>
            </div>
          ))}
        </div>
        <p>
          Peki dışarıdan bakan insanlar için ne değişiyor? Bunu inceleyen çalışmalar var. Geniş
          katılımlı, önceden kayıtlı iki araştırmada binlerce kişi, estetik işlem görmüş ve görmemiş
          yüzlerin fotoğraflarını değerlendirdi. Sonuç ilginç ve <strong>ölçülü</strong> çıktı: işlem,
          algılanan çekicilikte <em>küçük</em> bir artış sağladı — ama "güvenilir" ya da "yetkin"
          görünme gibi diğer sosyal izlenimlerde anlamlı bir değişiklik yaratmadı.
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Abartmadan okumak lazım</p>
          <p className="text-slate-700">
            "Estetik işlem sizi bambaşka biri gibi gösterir, herkes farkı görür" demek doğru değil.
            Kanıtlar daha alçakgönüllü bir tabloyu işaret ediyor: iyi yapılmış, ölçülü bir işlem
            dışarıdan çoğu zaman <em>küçük</em> ve olumlu bir etki bırakır — kişiliğinize dair
            yargıları kökten değiştirmez. (Ayrıca bu çalışmaların bir kısmı ürün üreticileri
            tarafından desteklenmiştir; bu, sonuçları geçersiz kılmaz ama temkinle okumayı gerektirir.)
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">3. Yüz hareket eder: doğallık fotoğrafta değil, harekette belli olur</h3>
        <p>
          Bir sonucun doğal olup olmadığı, çoğu zaman durağan bir fotoğrafta değil; kişi
          <strong> gülerken, konuşurken, kaşını kaldırırken</strong> ortaya çıkar. Yüz bir maske değil,
          hareketli bir ifade organıdır. Bu yüzden son yıllarda doğallık artık yalnızca fotoğrafla
          değil, <strong>video ve mimik</strong> üzerinden de değerlendiriliyor.
        </p>
        <div className="my-5 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-base">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Durağan (fotoğraf)</th>
                <th className="px-4 py-3 font-semibold">Hareketli (video/mimik)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="divide-x divide-slate-100">
                <td className="px-4 py-3 text-slate-600">Tek bir andaki görünüm güzel olabilir</td>
                <td className="px-4 py-3 text-slate-600">Asıl soru: gülünce doğal mı, ifade donuyor mu?</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Kaynakların sınırı</p>
          <p className="text-slate-700">
            Bu konudaki filler çalışmalarının çoğu belirli bir ürünle ve belirli yüz bölgeleriyle
            yapılmış, üstelik bir kısmı aynı üretici tarafından desteklenmiştir. Yani "filler doğal
            hareketi korur" gibi genel bir sonuç çıkarmak için henüz erken. Doğru cümle şu:
            <strong> doğallık artık hareket üzerinden de ölçülmeye başlandı</strong> — ve bu, doğru
            değerlendirmenin fotoğrafla sınırlı kalamayacağını gösteriyor.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">4. Doğallığın kaybolduğu yer: aşırılık, "doğal-olmayan estetik"tir</h3>
        <p>
          Doğallığı en iyi anlatan şey, bazen onun <strong>kaybı</strong>dır. Aşırı ya da yanlış
          yerleştirilmiş dolgunun yüzde yol açtığı bozulma, literatürde tanımlanmış bir durumdur.
          Burada mesele "yan etki" değil; sonucun <em>doğallık ekseninin karşı ucuna</em> düşmesidir:
        </p>
        <div className="my-5 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-base">
            <thead>
              <tr>
                <th className="px-4 py-3 font-semibold bg-emerald-50 text-emerald-800">Doğal sonuç</th>
                <th className="px-4 py-3 font-semibold bg-rose-50 text-rose-800">Doğal-olmayan sonuç</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['Yüz hareket ederken de kendisi kalır', 'Mimikler donuklaşır, ifade kaybolur'],
                ['Kişi kendine benzemeye devam eder', 'Herkes birbirine benzemeye başlar'],
                ['Değişim fark edilmez, kişi "dinç" görünür', '"Yapılmış" olduğu ilk bakışta belli olur'],
              ].map(([a, b]) => (
                <tr key={a} className="divide-x divide-slate-100">
                  <td className="px-4 py-3 text-slate-600">{a}</td>
                  <td className="px-4 py-3 text-slate-600">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          İlginç bir gelişme de şu: aşırı doldurulmuş yüzlerin sosyal medyada çok görünür olması,
          bazı kişilerde dolguya karşı belirgin bir çekince yarattı. Uzmanlar bunu, dijital dünyanın
          ürettiği yeni bir tepki olarak tartışıyor. Bu bir "hastalık" değil; ama şunu gösteriyor:
          <strong> doğal-olmayan sonuçların görünürlüğü, doğallık talebini daha da güçlendiriyor.</strong>
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Dikkatli çerçeve</p>
          <p className="text-slate-700">
            Komplikasyonların gerçek sıklığını kesin sayılarla vermek zor, çünkü bu alandaki bilgilerin
            önemli kısmı tekil vakalara dayanıyor. Buradaki asıl mesaj bir korku tablosu çizmek değil;
            "az" ya da "çok" tartışmasının ötesine geçmek: doğal-olmayan sonuç çoğu zaman miktardan
            değil, <strong>yanlış yere ve yüzün doğal hareketini gözetmeden</strong> yapılmış
            uygulamadan doğar.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">5. "Doğal", herkes için aynı değildir</h3>
        <p>
          İlk bölümde güzellik algısının tek bir evrensel formüle sığmadığını görmüştük. Bunun klinik
          karşılığı nettir: <strong>evrensel bir "doğal yüz" standardı da yoktur.</strong> Farklı
          kültür ve etnik yapılarda yüz estetiği tercihleri değişebiliyor; kapsamlı bir derleme, Batı
          merkezli ölçütlerin herkese uygulanamayacağını ve estetik yaklaşımın amacının kişiyi
          "Batılılaştırmak" değil, kendi özelliklerini <em>optimize etmek</em> olması gerektiğini
          vurguluyor. Doğal sonuç, kişinin kendi yüzüyle uyumlu olandır — bir başkasının yüzüyle değil.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">Sonuç: bilim doğalı ölçmeye başladı — ama ortak bir cetvel henüz yok</h3>
        <p>
          Bütün bu tabloyu tek bir cümlede toplayabiliriz:
        </p>
        <div className="my-5 rounded-2xl bg-slate-900 text-white p-6">
          <p className="text-lg leading-relaxed">
            Doğal sonuç artık yalnızca hekimin gözüyle tarif edilen belirsiz bir hedef değil; bazı
            boyutları <strong>hastanın kendi değerlendirmesiyle</strong>, bazıları <strong>bağımsız
            gözlemcilerle</strong>, bazıları da <strong>hareketli yüz ifadeleriyle</strong>
            ölçülebiliyor. Ancak bu yöntemlerin hiçbiri tek başına doğal sonucu bütünüyle tanımlamıyor
            — ve alan hâlâ herkesin kullandığı <strong>ortak bir ölçüt</strong> üzerinde birleşmiş değil.
          </p>
        </div>
        <p>
          Nitekim 2026'da yayımlanan geniş bir inceleme, minimal invaziv yüz işlemlerinde sonuçların
          nasıl ölçüldüğünün çalışmadan çalışmaya büyük farklılık gösterdiğini ortaya koydu ve ortak
          bir "çekirdek sonuç seti" oluşturulması gerektiğini savundu. Aynı yıl uluslararası bir uzman
          grubu da (bir üretici desteğiyle) doğal sonucu <em>gör–dokun–hisset–ifade et</em> gibi
          boyutlarla değerlendiren bir çerçeve önerdi — ama bunun evrensel, doğrulanmış bir "puan" değil,
          bir uzman görüş birliği olduğunu özellikle belirtmek gerekir.
        </p>
        <p>
          Buradan çıkan dürüst sonuç şu: <strong>Bilim bugün doğal sonucu farklı açılardan ölçmeye
          başladı; ama henüz "bu yüz, bu kişi için doğal olan yüzdür" diyebilen tek bir matematiksel
          referans yok.</strong> Peki bir kişinin kendi yüzü için "doğal referansı" ne olabilir? İşte
          bir sonraki bölümün konusu bu.
        </p>

        <h3 className="font-serif text-lg font-bold text-slate-900 mt-10 mb-3">Kaynaklar</h3>
        <ul className="text-base text-slate-500 space-y-1.5 list-disc pl-5">
          <li>Klassen AF, Cano SJ, Mansouri J ve ark. "I want it to look natural": development and validation of the FACE-Q Aesthetics Natural module. <em>Aesthetic Surgery Journal.</em> 2024;44(7):733-743.</li>
          <li>Pusic AL, Klassen AF, Scott AM, Cano SJ. Development and psychometric evaluation of the FACE-Q satisfaction with appearance scale. <em>Clinics in Plastic Surgery.</em> 2013;40(2):249-260.</li>
          <li>Gallo L, Kim P, Yuan M ve ark. Best practices for FACE-Q Aesthetics research: a systematic review of study methodology. <em>Aesthetic Surgery Journal.</em> 2023;43(9):NP674-NP686.</li>
          <li>Jaeger B, Bucker B, van der Meulen J, van Vugt M. Face value: the effect of facial aesthetic treatment on first impressions and partner preferences. <em>Perception.</em> 2025. [preregistered, N=3201]</li>
          <li>Philipp-Dormston WG ve ark. Evaluating perceived naturalness of facial expression after fillers with standardized video and photography. <em>Dermatologic Surgery.</em> 2018;44(6):826-832.</li>
          <li>Solish N ve ark. Dynamics of hyaluronic acid fillers formulated to maintain natural facial expression. <em>Journal of Cosmetic Dermatology.</em> 2019;18(3):738-746.</li>
          <li>[Facial overfilled syndrome — narrative reviews.] PMID 37977678.</li>
          <li>Oliveira RRC. The fear of overfilling (FOF): preserving facial identity. <em>Journal of Cosmetic Dermatology.</em> 2026.</li>
          <li>Cosmetic surgery and the diversity of cultural and ethnic perceptions of facial aesthetics: a comprehensive review. <em>Clinical, Cosmetic and Investigational Dermatology.</em> 2023.</li>
          <li>Heterogeneity in clinical outcomes reporting in minimally-invasive facial rejuvenation: is it time for a core outcomes set? <em>Plastic and Reconstructive Surgery.</em> 2026.</li>
          <li>Suwanchinda A ve ark. See, touch, feel, and express: achieving safe and natural outcomes with HA fillers — an international consensus. <em>Journal of Cosmetic Dermatology.</em> 2026;25(3):e70784.</li>
        </ul>
      </>
    ),
  },
];

// Slug'a göre uydu bul
export const getDeepDiveBySlug = (slug: string) =>
  DOGAL_ESTETIK_DEEPDIVE.find((d) => d.ready && d.slug === slug);
