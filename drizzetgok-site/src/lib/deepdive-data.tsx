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
        <p className="text-lg text-slate-600 mb-6">
          Beyin bir yüze baktığında onu neye göre "güzel" ya da "sıradan" buluyor? Bu bölümde,
          güzellik algısının fiziksel özelliklerle nasıl başlayıp beyinde nasıl bir tepkiye
          dönüştüğünü ve her adımın kanıt gücünü birlikte inceliyoruz.
        </p>

        {/* Açılış şeması: güzellik algısının katmanları */}
        <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500 mb-5">
            Güzellik algısı: bir zincir gibi çalışır
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { t: 'Hızlı yargı', d: '~100 ms içinde' },
              { t: 'Kolay işleme', d: 'tanıdık = hoş' },
              { t: 'Denge + cilt', d: 'sağlık sinyali' },
              { t: 'Kişisel kat', d: 'herkeste farklı' },
            ].map((x) => (
              <div key={x.t} className="rounded-xl bg-white border border-slate-200 p-3">
                <p className="font-semibold text-slate-800 text-sm">{x.t}</p>
                <p className="text-slate-500 text-sm mt-1">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm mt-5 max-w-lg mx-auto">
            Sonuçta güzellik dışarıda hazır duran bir özellik değil, <strong>beynin ürettiği bir
            tepkidir</strong>. Bu tepkinin merkezinde ise denge, canlılık ve tanıdıklık var.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-8 mb-3">1. Beyin, bir yüzü çok hızlı değerlendirir</h3>
        <p>
          Bir yüzün "güzel" olup olmadığına dair ilk izlenimimiz şaşırtıcı derecede hızlı oluşur:
          araştırmalar, saniyenin onda biri kadar (yaklaşık <strong>100 milisaniye</strong>) bir
          bakışın bile çekicilik hakkında bir ilk izlenim yaratmaya yetebildiğini gösteriyor. Bu hızlı
          yargılar, daha uzun süreli değerlendirmelerle belirli ölçüde örtüşür. Ama bu, ilk izlenimin
          "değişmez" olduğu anlamına gelmez: dikkat, bağlam ve deneyim algıyı yine de etkiler. Yani
          güzellik yargısı hem hızlı hem kısmen otomatiktir, ama düşünmeye kapalı değildir.
        </p>
        <p>
          Peki beyin bir yüzü çekici bulduğunda ne oluyor? Bunu inceleyen bilim dalı
          <strong> nöroestetik</strong> (neuroaesthetics). Beyin görüntüleme çalışmaları, çekici
          yüzleri değerlendirirken ödül ve beğeniyle ilişkili bölgelerin, özellikle bir şeyin
          "değerini" tartan <em>orbitofrontal korteksin</em>, etkinleşebildiğini gösteriyor.
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Ama indirgemeyelim</p>
          <p className="text-slate-700">
            Bu bölgeler yalnızca "güzellik merkezleri" değil; güzel bir yemekten sevdiğimiz bir sese
            kadar pek çok şeyin değerini tartan geniş bir sistemin parçası. Çekici bir yüz beyinde bir
            ödül karşılığı oluşturur; ama güzelliği tümüyle "beynin verdiği ödül"e indirgemek doğru olmaz.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">2. Beyin, kolay "okuduğu" yüzü sever</h3>
        <p>
          Beyin neden bazı yüzleri zahmetsizce olumlu bulur? Bir açıklama <strong>işlem akıcılığı</strong>
          (processing fluency): beyin bazı görüntüleri hiç zorlanmadan işler ve bu kolaylık hafif bir
          hoşnutluğa dönüşür. Tanıdık, dengeli, beklenen kalıba yakın yüzler beyni yormaz; bu
          zahmetsizlik "hoşuma gitti"ye dönüşebilir.
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Kesin kural değil, eğilim</p>
          <p className="text-slate-700">
            Bir çalışmada insanlar bir yüze uzun baktıkça onu <em>tanıma</em> kolaylığı artmış; ama
            <em> beğeni</em> artmamış, hatta bazen azalmış. Yani "beyin ne kadar kolay işlerse o kadar
            güzel bulur" demek fazla iddialı. İşlem akıcılığı, çekiciliği etkileyen mekanizmalardan
            yalnızca biridir; tek açıklaması değildir.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">3. Ortalama bir yüz neden çekici gelebilir?</h3>
        <p>
          Şaşırtıcı bir bulgu: farklı yüzleri bilgisayarda üst üste bindirip bir "ortalama yüz"
          oluşturduğunuzda, bu ortalama yüz çoğu zaman onu oluşturan bireysel yüzlerin çoğundan
          <strong> daha çekici</strong> bulunur. Sebep bir önceki başlıkla bağlantılı: ortalama yüz,
          aşırı uçları törpülenmiş, beynin kolay işlediği bir yüzdür.
        </p>
        <p>
          Ama kritik bir ayrım var. Sonraki çalışmalar gösterdi ki en çekici yüzler <em>tam olarak
          ortalama değil</em>; çekici özellikleri ölçülü biçimde belirginleştirilmiş yüzler. Yani:
        </p>
        <div className="my-5 rounded-2xl bg-slate-900 text-white p-5 text-center">
          <p className="text-lg font-medium">Ortalama olmak ≠ ideal olmak ≠ güzel olmak</p>
          <p className="text-slate-300 text-sm mt-2">Ortalamalık çekiciliğin tabanını kurar; ama tavanını belirlemez.</p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">4. Simetri gerçekten güzelliğin anahtarı mı?</h3>
        <p>
          "Güzel yüz = simetrik yüz" neredeyse tartışılmaz bir gerçek gibi kabul edilir. Ama gerçek
          insan yüzlerine bakınca tablo hiç de sanıldığı kadar net değil. En çarpıcı uyarı da
          alandaki araştırmaların kendisinden geldi:
        </p>
        <ul className="my-4 space-y-2 list-none pl-0">
          {[
            ['Yayın yanlılığı var', '"Simetri güzeldir" bulan çalışmalar yayımlanmış, bulamayanlar çekmecede kalmış; bu da etkiyi olduğundan büyük göstermiş.'],
            ['Etki küçülüyor', 'Yanlılık düzeltilince simetrinin katkısı bu meta-analizde ~%30-50 azaldı; büyük çalışmalarda neredeyse sıfıra indi.'],
            ['Kusursuz = yapay', 'Bazı deneylerde tümüyle simetrik hale getirilmiş yüz, doğal halinden daha az çekici bulundu.'],
          ].map(([a, b]) => (
            <li key={a} className="flex gap-3 items-start rounded-xl bg-slate-50 border border-slate-100 p-3">
              <span className="text-emerald-500 font-bold flex-shrink-0">•</span>
              <span><strong className="text-slate-800">{a}:</strong> <span className="text-slate-600">{b}</span></span>
            </li>
          ))}
        </ul>
        <p>
          Sağlam sonuç: insan yüzleri zaten tam bir sağ-sol simetriye sahip değildir; küçük asimetriler
          normal yüz yapısının parçasıdır. Bu yüzden asimetriyi değerlendirirken hedef, iki tarafı
          milimetrik olarak eşitlemek <em>değildir</em>. Çünkü bazı küçük farklılıklar yüzü "yapay"
          değil, gerçek ve canlı kılan şeylerin ta kendisidir.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">5. Az konuşulan asıl mesele: cilt ve doku kalitesi</h3>
        <p>
          Şimdiye kadar hep yüzün <em>biçiminden</em> söz ettik. Oysa yüzü kaplayan derinin görünümü de
          en az onun kadar güçlü bir ipucu taşır. Cildin renk düzgünlüğü, ton farkları ve dokusu;
          hepsi algılanan yaş, sağlık ve çekicilikle yakından ilişkilidir.
        </p>
        <p>
          En iyi kanıt cildin <strong>renk homojenliği</strong> üzerine. Cilt rengi iki pigmentin
          dağılımıyla oluşur: <em>melanin</em> (kahverengi tonlar) ve <em>hemoglobin</em> (kanlanmayla
          ilgili kırmızı tonlar). Bu iki pigment ne kadar eşit dağılırsa, yani leke, kızarıklık ve ton
          farkı ne kadar azsa, yüz o kadar genç, sağlıklı ve canlı algılanır. Bazı deneylerde yüzün
          şekli hiç değiştirilmeden, yalnızca cilt renk dağılımı düzenlendiğinde bile algı değişebildi.
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Yine de "tek anahtar" değil</p>
          <p className="text-slate-700">
            "Cilt kalitesi güzelliğin en güçlü belirleyicisidir" demek için yeterli kanıt yok. Hangi
            özelliğin baskın olduğu yaşa, cinsiyete ve etnik gruba göre değişir. Cilt çok önemli bir
            etkendir; ama evrensel bir "güzellik anahtarı" değildir.
          </p>
        </div>
        <div className="my-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
          <p className="text-slate-700">
            <strong>Doğal estetik açısından kritik sonuç:</strong> Oran ve simetri büyük ölçüde
            doğuştandır, kökten değiştirilemez; cilt ve doku kalitesi ise <em>iyileştirilebilir.</em>
            Bu yüzden bazı kişilerde en doğal ve belirgin fark, yüzün şeklini değiştirmekten değil,
            önce cildin kalitesini geri kazandırmaktan gelir. (Bunu bir "kural" değil, bulgulardan
            çıkardığım klinik bir yaklaşım olarak belirtiyorum.)
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">6. Güzellik gerçekten "bakan gözde" mi?</h3>
        <p>
          Buraya kadarki ortaklıklar gerçek, ama tablonun yalnızca yarısı. Güzellik yargısının ne
          kadarının ortak, ne kadarının kişisel olduğunu ölçen araştırmalar, iki bileşenin birbirine
          yakın ağırlıkta olabildiğine işaret ediyor: <strong>beğenimizin bir bölümü paylaşılan, önemli
          bir bölümü kişisel.</strong>
        </p>
        <p>
          Çarpıcı bir kanıt ikiz çalışmasından geldi: güzellik zevki büyük ölçüde genlerde yazılı
          olsaydı, özdeş ikizlerin bu konuda çok benzemesi beklenirdi. Oysa özdeş ikizler bile hangi
          yüzün çekici olduğunda tam anlaşmadı. Bu farklılıklar büyük ölçüde her kişinin kendi yaşam
          deneyimiyle (tanıdığı insanlar, gördüğü yüzler, medya) ilişkili görünüyor.
        </p>
        <div className="my-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-semibold text-slate-800 mb-1">"Dünya güzelleri" paradoksu</p>
          <p className="text-slate-700">
            Madem güzellik bu kadar kişisel, neden dünyanın dört bir yanından seçilen kadınlarda ortak
            bir izlenim var? Ölçümlü çalışmalar, kazananların dengeli oranlara, görece simetriye ve
            canlı cilde yakın olduğunu gösteriyor. Ama bu kadınlar birbirine <em>benzemez</em>; farklı
            ırktan, farklı hatlardandır. Ortak olan <strong>hatları değil, sinyalleridir:</strong> hepsi
            sağlıklı ve dengeli <em>görünür</em>. Üstelik kimin kazandığı çağa, kıtaya ve jüriye göre
            değişir. Yani "herkesçe güzel" bir yüz yoktur; herkesçe okunan birkaç sinyal vardır.
          </p>
        </div>
        <p>
          Tam da bu yüzden doğal estetikte "herkese uyan tek güzel yüz" diye bir şey yoktur. Bir ünlünün
          ya da bir "trend"in yüzünü birebir hedef almak çoğu zaman hayal kırıklığıyla sonuçlanır. Doğru
          olan, kişinin kendi hatları ve hikâyesiyle uyumlu olandır. Yani bir başkasının hatlarını
          değil, <strong>kendi denge ve canlılık sinyallerini güçlendirmek.</strong>
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">7. Ve unutulan gerçek: dudak bir iletişim organıdır</h3>
        <p>
          Şimdiye kadar dudağı hep bir "görünüş" olarak konuştuk. Oysa dudağın çok daha temel bir işlevi
          var: yüzün en çok "konuştuğu" yerlerden biri olması. Yüze baktığımızda gözlerimiz sürekli göz
          ile ağız arasında gidip gelir; duyguları okurken ağız bölgesi belirleyicidir. Mutluluğu ve
          tiksintiyi en çok ağızdan okuruz. Yani dudak, yalnızca <em>bakılan</em> değil, aynı zamanda
          <em> okunan</em> bir organdır.
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-emerald-400 bg-emerald-50/60 p-5">
          <p className="text-slate-700">
            Bunun pratik sonucu: ağız kenarları yıllar içinde hafifçe aşağı döndüğünde, kişi kendini iyi
            hissetse bile yüzüne istemsiz bir "yorgun" ifade yerleşebilir. Bu yüzden ağza yapılan bir
            müdahalenin asıl meselesi çoğu zaman "büyütmek" değil, <strong>o bölgenin doğru duyguyu
            yansıtmaya devam etmesini sağlamaktır.</strong> Kötü bir uygulamanın gerçek zararı da budur:
            kişiyi "çirkin" değil, <em>ifadesiz</em> yapar.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">Özetle: Güzellik bir tepkidir, doğallık bu tepkinin merkezinde</h3>
        <p>
          Bir yüzü "güzel" bulmanın ne demek olduğunu izledik ve şuraya vardık: güzellik, dışarıda hazır
          duran bir özellik değil, büyük ölçüde beynin ürettiği bir tepki. Araştırmalar birkaç eğilime
          işaret ediyor:
        </p>
        <ul className="my-4 space-y-2 list-none pl-0">
          {[
            'Beyin bir yüzü hızlı ve çoğunlukla otomatik değerlendirir',
            'Tanıdık ve dengeli yüzleri daha kolay işleyip olumlu bulma eğilimindedir',
            'Ortalamaya yakın yüzler çekici bulunabilir, ama en çekici yüz her zaman en ortalama değildir',
            'Simetrinin katkısı sanıldığından zayıftır; kusursuz simetri her zaman daha çekici değildir',
            'Cilt ve doku kalitesi güçlü bir görsel ipucudur',
            'Tüm bunların üzerine herkes kendi kişisel beğenisini ekler',
          ].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
              <span className="text-slate-600">{t}</span>
            </li>
          ))}
        </ul>
        <div className="my-5 rounded-2xl bg-slate-900 text-white p-6">
          <p className="text-lg leading-relaxed">
            Bu eğilimlerin ortak yönü şu: hiçbiri abartıyı, zorlamayı ya da kusursuzluğu değil;
            <strong> dengeyi, canlılığı ve tanıdıklığı</strong> işaret ediyor. Yani "doğal görünüm" bir
            slogan değil, güzellik algısının dayandığı zeminle uyumlu bir yaklaşımdır. Doğal estetiğin
            amacı da kişiyi hazır bir kalıba sokmak değil; kendi yüzünün dengesini bozmadan, en canlı ve
            en kendisi hâline yaklaştırmaktır.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">Kaynaklar</h3>
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
          ölçülebilir bir kavrama dönüştüğünü ve bu ölçümün sınırlarını birlikte inceliyoruz.
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
            Bu pencerelerin hepsi "doğal"a bakar, ama <strong>hiçbiri tek başına</strong> onu tam
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
          Bu bir kelime oyunu değil; doğal estetiğin bütün meselesi burada. "Güzelleştirmeyi"
          hedefleyen bir yaklaşım başka bir yere varır, "doğallığı korumayı" hedefleyen başka bir yere.
          Bu rehberde <strong>doğal estetik</strong> derken kastedilen, "en güzel" ya da "en genç" yüz
          değil; kişinin, müdahaleden sonra da kendi tanıdık dengesini koruyarak <em>hâlâ kendisi gibi</em> görünmesidir.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">1. Doğallık artık ölçülebiliyor: ilk sözü kişinin kendisi söylüyor</h3>
        <p>
          Yıllarca "doğal mı olmuş?" sorusu göz kararıydı: hekim bakar, hasta memnun kalır ya da
          kalmazdı. 2024'te önemli bir eşik aşıldı: bilim doğallığı doğrudan ölçmek için, üstelik ilk
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
            <em> bazı</em> yönlerini, <em>hastanın kendi ağzından</em> ölçüyor; hepsini değil. Dahası,
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
          algılanan çekicilikte <em>küçük</em> bir artış sağladı, ama "güvenilir" ya da "yetkin"
          görünme gibi diğer sosyal izlenimlerde anlamlı bir değişiklik yaratmadı.
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Abartmadan okumak lazım</p>
          <p className="text-slate-700">
            "Estetik işlem sizi bambaşka biri gibi gösterir, herkes farkı görür" demek doğru değil.
            Kanıtlar daha alçakgönüllü bir tabloyu işaret ediyor: iyi yapılmış, ölçülü bir işlem
            dışarıdan çoğu zaman <em>küçük</em> ve olumlu bir etki bırakır; kişiliğinize dair
            yargıları kökten değiştirmez. (Ayrıca bu çalışmaların bir kısmı ürün üreticileri
            tarafından desteklenmiştir; bu, sonuçları geçersiz kılmaz ama temkinle okumayı gerektirir.)
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">3. Yüz hareket eder: doğallık fotoğrafta değil, harekette belli olur</h3>
        <p>
          Bir sonucun doğal olup olmadığı, çoğu zaman durağan bir fotoğrafta değil; kişi
          <strong> gülerken, konuşurken, kaşını kaldırırken</strong> ortaya çıkar. Yüz bir maske değil,
          hareketli bir ifade organıdır. Bir müdahale, dururken kusursuz görünüp harekete geçince
          "yapay"laşabilir. İşte bu yüzden son yıllarda doğallık artık yalnızca fotoğrafla değil,
          <strong> video ve mimik</strong> üzerinden değerlendiriliyor.
        </p>
        <p>
          Neden bu kadar önemli? Çünkü yüzümüzdeki en güçlü sosyal mesajlar hareketle verilir:
          samimi bir gülümseme, bir kaş hareketi, bir şaşkınlık ifadesi. Bir bölge fazla
          doldurulduğunda ya da bir kas gereğinden çok gevşetildiğinde, sorun kişinin "çirkinleşmesi"
          değil, <strong>ifadesizleşmesidir.</strong> Gülümsemesi eskisi kadar okunmaz, yüzü
          "duygu iletmeyen" bir hâl alır. Oysa bir yüzü canlı ve inandırıcı kılan şey, tam da o ifade
          zenginliğidir.
        </p>
        <div className="my-5 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-base">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Durağan bakış (fotoğraf)</th>
                <th className="px-4 py-3 font-semibold">Hareketli bakış (video/mimik)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="divide-x divide-slate-100">
                <td className="px-4 py-3 text-slate-600">Tek bir andaki görünüm güzel olabilir</td>
                <td className="px-4 py-3 text-slate-600">Asıl soru: gülünce doğal mı, ifade donuyor mu?</td>
              </tr>
              <tr className="divide-x divide-slate-100">
                <td className="px-4 py-3 text-slate-600">Hacim ve kontur değerlendirilir</td>
                <td className="px-4 py-3 text-slate-600">Kasların birlikte çalışması değerlendirilir</td>
              </tr>
              <tr className="divide-x divide-slate-100">
                <td className="px-4 py-3 text-slate-600">"Nasıl görünüyor?"</td>
                <td className="px-4 py-3 text-slate-600">"Kendisi gibi mi hareket ediyor?"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Araştırmacılar bunu ölçmek için standart yöntemler geliştirdi: kişinin farklı ifadeleri
          (gülme, şaşırma, öpücük) hem fotoğraf hem <strong>video</strong> ile kaydediliyor ve
          bağımsız değerlendiriciler "bu ifade doğal mı?" diye puanlıyor. Dolgu çalışmalarında olduğu
          gibi, üst yüz botoksu çalışmalarında da amaç aynı: değişimin kişinin duygu ifadesini
          bozmadan yapılabilmesi. Yani mesele "hareketi durdurmak" değil, <strong>gereğinden fazla
          durdurmamak.</strong>
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Kaynakların sınırı</p>
          <p className="text-slate-700">
            Bu konudaki filler çalışmalarının çoğu belirli bir ürünle ve belirli yüz bölgeleriyle
            yapılmış, üstelik bir kısmı aynı üretici tarafından desteklenmiştir. Yani "filler doğal
            hareketi korur" gibi genel bir sonuç çıkarmak için henüz erken. Doğru cümle şu:
            <strong> doğallık artık hareket üzerinden de ölçülmeye başlandı.</strong> Bu da doğru
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
          Doğal-olmayan sonuç yalnızca "fazla dolgun" bir görünümle sınırlı değil. Dolgu
          komplikasyonlarını inceleyen derlemeler, kötü estetik sonucun yanında kontur bozukluğu,
          nodül (elle hissedilen sertlik), granülom ve dokunun yer değiştirmesi gibi durumları da
          tanımlıyor. Bunların ortak noktası, yüzün doğal yüzeyini ve dengesini bozmaları. İyi haber
          şu: bu tabloların çoğu <strong>önlenebilir;</strong> doğru planlama, doğru miktar ve doğru
          katman seçimiyle.
        </p>
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
          karşılığı nettir: <strong>evrensel bir "doğal yüz" standardı da yoktur.</strong> Bir yüz
          hattı bir kültürde "doğal ve dengeli" sayılırken, bir başkasında olağan görünmeyebilir;
          çünkü "tanıdık" ve "olağan" olan, kişinin içinde yaşadığı topluma göre değişir.
        </p>
        <p>
          Bilim de bunu doğruluyor. Farklı kültür ve etnik grupları inceleyen kapsamlı bir derleme
          (60'tan fazla çalışmayı değerlendiren), yüz estetiği tercihlerinin gruplar arasında
          değiştiğini ve <strong>Batı merkezli güzellik ölçütlerinin herkese uygulanamayacağını</strong>
          ortaya koydu. Aynı derlemenin en çarpıcı sonucu şu: çalışmaların çoğu, estetik yaklaşımın
          amacının kişiyi "Batılılaştırmak" değil, kendi etnik özelliklerini <em>optimize etmek</em>
          olması gerektiğini vurguluyor.
        </p>
        <div className="my-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
          <p className="text-slate-700">
            Pratikte bunun anlamı şu: doğal sonuç, bir moda ikonuna ya da bir "ideal yüz" şablonuna
            benzemek değildir. <strong>Doğal sonuç, kişinin kendi yüzüyle, yani kendi etnik hatları,
            kendi ifadesi ve kendi hikâyesiyle uyumlu olandır.</strong> Bir başkasının burnu, bir ünlünün
            dudağı hedef alındığında sonuç neredeyse her zaman "yapay" okunur; çünkü o hat, o yüze ait
            değildir.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">6. Doğal sonuç sadece "görünüş" mü? Aynanın arkasındaki etki</h3>
        <p>
          Şimdiye kadar hep <em>görünen</em> doğallıktan söz ettik. Ama estetik bir sonucun bir boyutu
          daha var: kişinin kendini nasıl <em>hissettiği.</em> Doğal bir sonuç, çoğu zaman yalnızca
          "iyi görünmek" değil, kişinin aynada kendini rahat, huzurlu ve "kendisi" gibi hissetmesidir.
          Peki bilim bu konuda ne diyor?
        </p>
        <p>
          Minimal invaziv yüz işlemlerinin ruhsal ve sosyal etkilerini inceleyen derlemeler, çoğu
          çalışmada <strong>yaşam kalitesi ve psikolojik iyi oluşta bir iyileşme</strong> bildirildiğine
          işaret ediyor; en sık ölçülen boyutlar psikolojik iyi oluş ve öz-algı. Ancak burada dürüst
          olmak şart:
        </p>
        <div className="my-5 rounded-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5">
          <p className="font-semibold text-amber-900 mb-1">Kanıt olumlu, ama zayıf ve dağınık</p>
          <p className="text-slate-700">
            Bu konudaki derlemeleri toplu değerlendiren bir çalışmada, incelenen yedi derlemeden
            yalnızca <strong>biri "güçlü", ikisi "orta", dördü "zayıf"</strong> kalitede bulundu. Yani
            "estetik işlem mutluluğu artırır" gibi kesin bir cümle kurmak için kanıt henüz yeterince
            sağlam değil. Ayrıca depresyon gibi ruh sağlığı ölçütlerine özel çalışmalar çok az. Doğru
            ifade şu: <strong>işlemler kişinin görünüşten duyduğu memnuniyeti artırabiliyor; ama bunun
            derin psikolojik etkileri henüz net değil.</strong>
          </p>
        </div>
        <p>
          Bu, doğal estetik açısından önemli bir uyarı taşıyor: Estetik bir müdahale, gerçek bir
          psikolojik sıkıntının çözümü değildir. Bir kişi kendini kötü hissettiği için değil, kendini
          iyi hissettiği hâlini <em>korumak</em> ya da <em>tazelemek</em> için geldiğinde, sonuç çoğu
          zaman daha sağlıklı ve daha doğaldır. (Bu ayrımın neden bu kadar kritik olduğunu, beklenti ve
          ruh hâli üzerine ayrı bir bölümde ele alacağız.)
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">Sonuç: bilim doğalı ölçmeye başladı, ama ortak bir cetvel henüz yok</h3>
        <p>
          Bütün bu tabloyu tek bir cümlede toplayabiliriz:
        </p>
        <div className="my-5 rounded-2xl bg-slate-900 text-white p-6">
          <p className="text-lg leading-relaxed">
            Doğal sonuç artık yalnızca hekimin gözüyle tarif edilen belirsiz bir hedef değil; bazı
            boyutları <strong>hastanın kendi değerlendirmesiyle</strong>, bazıları <strong>bağımsız
            gözlemcilerle</strong>, bazıları da <strong>hareketli yüz ifadeleriyle</strong>
            ölçülebiliyor. Ancak bu yöntemlerin hiçbiri tek başına doğal sonucu bütünüyle tanımlamıyor;
            alan hâlâ herkesin kullandığı <strong>ortak bir ölçüt</strong> üzerinde birleşmiş değil.
          </p>
        </div>
        <p>
          Nitekim 2026'da yayımlanan geniş bir inceleme, minimal invaziv yüz işlemlerinde sonuçların
          nasıl ölçüldüğünün çalışmadan çalışmaya büyük farklılık gösterdiğini ortaya koydu ve ortak
          bir "çekirdek sonuç seti" oluşturulması gerektiğini savundu. Aynı yıl uluslararası bir uzman
          grubu da (bir üretici desteğiyle) doğal sonucu <em>gör-dokun-hisset-ifade et</em> gibi
          boyutlarla değerlendiren bir çerçeve önerdi. Ancak bunun evrensel, doğrulanmış bir "puan"
          değil, bir uzman görüş birliği olduğunu özellikle belirtmek gerekir.
        </p>
        <p>
          Buradan çıkan dürüst sonuç şu: <strong>Bilim bugün doğal sonucu farklı açılardan ölçmeye
          başladı; ama henüz "bu yüz, bu kişi için doğal olan yüzdür" diyebilen tek bir matematiksel
          referans yok.</strong> Peki bir kişinin kendi yüzü için "doğal referansı" ne olabilir? İşte
          bir sonraki bölümün konusu bu.
        </p>

        <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-3">Kaynaklar</h3>
        <ul className="text-base text-slate-500 space-y-1.5 list-disc pl-5">
          <li>Klassen AF, Cano SJ, Mansouri J ve ark. "I want it to look natural": development and validation of the FACE-Q Aesthetics Natural module. <em>Aesthetic Surgery Journal.</em> 2024;44(7):733-743.</li>
          <li>Pusic AL, Klassen AF, Scott AM, Cano SJ. Development and psychometric evaluation of the FACE-Q satisfaction with appearance scale. <em>Clinics in Plastic Surgery.</em> 2013;40(2):249-260.</li>
          <li>Gallo L, Kim P, Yuan M ve ark. Best practices for FACE-Q Aesthetics research: a systematic review of study methodology. <em>Aesthetic Surgery Journal.</em> 2023;43(9):NP674-NP686.</li>
          <li>Jaeger B, Bucker B, van der Meulen J, van Vugt M. Face value: the effect of facial aesthetic treatment on first impressions and partner preferences. <em>Perception.</em> 2025. [preregistered, N=3201]</li>
          <li>Philipp-Dormston WG ve ark. Evaluating perceived naturalness of facial expression after fillers with standardized video and photography. <em>Dermatologic Surgery.</em> 2018;44(6):826-832.</li>
          <li>Solish N ve ark. Dynamics of hyaluronic acid fillers formulated to maintain natural facial expression. <em>Journal of Cosmetic Dermatology.</em> 2019;18(3):738-746.</li>
          <li>Woodward J, Khan T, Martin J. Facial filler complications. <em>Facial Plastic Surgery Clinics of North America.</em> 2015;23(4):447-458.</li>
          <li>Facial overfilled syndrome: narrative clinical reviews. <em>Clinical, Cosmetic and Investigational Dermatology.</em> (PMID 37977678 ve devamı).</li>
          <li>Oliveira RRC. The fear of overfilling (FOF): a clinically significant response to digital aesthetics and the dermatologist's imperative to preserve facial identity. <em>Journal of Cosmetic Dermatology.</em> 2026.</li>
          <li>Imadojemu S, Sarwer DB, Percec I ve ark. Influence of surgical and minimally invasive facial cosmetic procedures on psychosocial outcomes: a systematic review. <em>JAMA Dermatology.</em> 2013;149(11):1325-1333.</li>
          <li>Hemsworth B, Hemsworth C, Richmond SA. Nonsurgical medical aesthetics and patient quality of life: an umbrella review. <em>Aesthetic Surgery Journal Open Forum.</em> 2024;6:ojae096.</li>
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
