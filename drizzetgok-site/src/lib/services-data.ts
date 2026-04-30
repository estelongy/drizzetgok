export type ServiceData = {
  slug: string;
  title: string;
  shortTitle: string;
  synonyms: string[];
  iconName: 'Syringe' | 'Droplets' | 'Sparkles' | 'Zap' | 'FlaskConical' | 'ScanFace' | 'Smile' | 'Star' | 'Wand2';
  color: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  longDescription: string;
  intro: string;
  features: string[];
  benefits: string[];
  process: string[];
  duration: string;
  resultDuration: string;
  faq: { q: string; a: string }[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: 'botoks',
    title: 'Botoks Uygulamaları',
    shortTitle: 'Botoks',
    synonyms: ['botox', 'btx', 'botulinum'],
    iconName: 'Syringe',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Botoks uygulaması — yüz mimik kırışıklıkları için medikal estetik tedavi',
    shortDescription: 'Mimik kırışıklıkları, terleme tedavisi ve kas spazmları için güvenli botoks (botox / Btx) uygulamaları.',
    longDescription: 'Botoks (botox / Btx / botulinum toksin), mimik kaslarını kontrollü şekilde gevşeterek alın, kaş arası ve göz kenarı kırışıklıklarını yumuşatan, FDA onaylı medikal estetik uygulamasıdır.',
    intro: 'Beylikdüzü ve çevre ilçelerde botoks uygulaması — Dr. İzzet Gök kontrolünde, kişiye özel doz ile doğal sonuçlar.',
    features: ['Alın kırışıklığı', 'Kaş arası çizgileri', 'Kaz ayağı (göz kenarı)', 'Boyun bantları', 'Aşırı terleme (hiperhidroz)', 'Migren ve kas spazmı tedavisi'],
    benefits: ['Doğal görünüm — donuk yüz değil', 'Hızlı uygulama (15 dk)', 'İyileşme süresi yok', 'Etki 4-6 ay sürer', 'Düzenli kullanımda kalıcılık artar'],
    process: ['Konsültasyon ve mimik analizi', 'Kişiye özel doz planı', 'İnce uçlu enjeksiyon', '14 gün sonra tam etki kontrolü'],
    duration: '15-20 dakika',
    resultDuration: '4-6 ay',
    faq: [
      { q: 'Botoks etkisi ne zaman görülür?', a: 'Etki 3-7 gün içinde görünmeye başlar, 14. günde tam etki ortaya çıkar.' },
      { q: 'Botoks zararlı mı?', a: 'Onaylı ürünlerle ve uzman hekim tarafından uygulandığında güvenli kabul edilir. Yan etkiler nadirdir ve geçicidir.' },
      { q: 'Botoks ne sıklıkta yapılmalı?', a: 'Ortalama 4-6 ayda bir tekrarlanır. Düzenli kullanımda etkinin kalıcılığı artar.' }
    ]
  },
  {
    slug: 'dudak-dolgusu',
    title: 'Dudak Dolgusu',
    shortTitle: 'Dudak Dolgusu',
    synonyms: ['lip filler', 'dudak filler', 'dudak büyütme'],
    iconName: 'Smile',
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Dudak dolgusu uygulaması — doğal görünümlü lip filler',
    shortDescription: 'Doğal görünümlü, dengeli ve oranlı dudaklar için hyaluronik asit dudak dolgusu (lip filler).',
    longDescription: 'Dudak dolgusu (lip filler), hyaluronik asit içerikli dolgu maddeleri ile dudaklara hacim kazandıran, simetri sağlayan ve nem oranını arttıran medikal estetik uygulamasıdır.',
    intro: 'Beylikdüzü\'nde dudak dolgusu — şişkin değil, dengeli ve doğal sonuç. Yüz oranlarınıza uygun kişisel planlama.',
    features: ['Hacim kazandırma', 'Simetri ve denge', 'Dudak kontur belirginleştirme', 'M dudak / kalp dudak şekli', 'Nem ve pırıltı kazandırma', 'Yaşa bağlı incelmenin geri çevrilmesi'],
    benefits: ['Doğal görünüm', 'Geri dönüşümlü (hyaluronidaz ile çözülebilir)', 'Anestezik içerikli — minimum rahatsızlık', 'İyileşme süresi yok', '8-12 ay etki'],
    process: ['Yüz analizi ve oran değerlendirmesi', 'Krem anestezi (20 dk)', 'Kanül veya iğne ile uygulama', 'Buz kompresi ve kontrol', '2 hafta sonra dolgunluk kontrolü'],
    duration: '20-30 dakika',
    resultDuration: '8-12 ay',
    faq: [
      { q: 'Dudak dolgusu kalıcı mı?', a: 'Hayır, hyaluronik asit dolguları geçicidir. 8-12 ay içinde vücut tarafından doğal olarak emilir.' },
      { q: 'Dudak dolgusu ağrılı mı?', a: 'Krem anestezi sonrası neredeyse ağrısızdır. Çoğu hasta sadece hafif basınç hisseder.' },
      { q: 'Dolgu çözülebilir mi?', a: 'Evet, sonuçtan memnun kalmazsanız hyaluronidaz enzimi ile dolgu eritilebilir.' },
      { q: 'Şişkin görünür müyüm?', a: 'Doz kontrolü ile doğal sonuç hedeflenir. İlk 48 saat hafif şişme normaldir, sonra son şeklini alır.' }
    ]
  },
  {
    slug: 'dolgu',
    title: 'Yüz Dolgu Uygulamaları',
    shortTitle: 'Dolgu / Filler',
    synonyms: ['filler', 'hyaluronik asit dolgu', 'yüz dolgu'],
    iconName: 'Droplets',
    color: 'from-fuchsia-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Yüz dolgu uygulaması — hyaluronik asit filler ile hacim restorasyonu',
    shortDescription: 'Yanak, çene, elmacık ve nazolabial bölge için hyaluronik asit yüz dolgu (filler) uygulamaları.',
    longDescription: 'Yüz dolgu (filler / hyaluronik asit dolgu), yaşa bağlı hacim kayıplarını telafi eden, yüz hatlarına denge ve genç bir görünüm kazandıran medikal estetik uygulamasıdır.',
    intro: 'Yanak, elmacık, çene hattı ve nazolabial oluk dolgusu — dengeli yüz oranları için.',
    features: ['Yanak ve elmacık dolgusu', 'Çene ucu (mentum) belirginleştirme', 'Çene hattı (jawline) konturü', 'Nazolabial oluk (dudak-burun çizgisi)', 'Marionet çizgileri', 'Göz altı oluk dolgusu'],
    benefits: ['Anında sonuç', 'Doğal hacim restorasyonu', 'Yüz oranlarını dengeler', 'Cerrahi gerektirmez', '12-18 ay etki'],
    process: ['Yüz analizi ve simetri haritalama', 'Bölgeye uygun dolgu seçimi', 'Anestezi ve uygulama', 'Sonuç kontrolü'],
    duration: '30-45 dakika',
    resultDuration: '12-18 ay',
    faq: [
      { q: 'Filler ile dolgu aynı mı?', a: 'Evet, "filler" yüz dolgu uygulamasının İngilizce adıdır. Aynı işlemi tanımlar.' },
      { q: 'Dolgu kaç ay kalır?', a: 'Bölge ve ürüne göre 12-18 ay arasında değişir. Çene ve elmacık dolgusu daha uzun, dudak ve göz altı daha kısa sürer.' },
      { q: 'Sonuç doğal görünür mü?', a: 'Doz ve teknik doğru uygulandığında tamamen doğal görünüm sağlanır.' }
    ]
  },
  {
    slug: 'sivi-yuz-germe',
    title: 'Sıvı Yüz Germe',
    shortTitle: 'Sıvı Yüz Germe',
    synonyms: ['liquid facelift', 'cerrahisiz yüz germe', '8 nokta germe'],
    iconName: 'Wand2',
    color: 'from-violet-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sıvı yüz germe — liquid facelift cerrahisiz yüz gençleştirme',
    shortDescription: 'Cerrahi gerektirmeyen, dolgu ve botoks kombinasyonu ile yüz germe etkisi yaratan sıvı yüz germe (liquid facelift).',
    longDescription: 'Sıvı yüz germe (liquid facelift), yüzdeki belirli noktalara uygulanan dolgu ve botoks kombinasyonu ile cerrahi olmadan yüz hatlarını yukarı çeken, hacim kazandıran ve genç bir görünüm sağlayan ileri düzey medikal estetik protokolüdür.',
    intro: '8 nokta tekniği ve yüz haritalaması ile cerrahisiz yüz germe — bıçaksız, hızlı, etkili.',
    features: ['8 nokta yüz germe tekniği', 'Elmacık-yanak yukarı çekme', 'Çene hattı tanımlama', 'Boyun ve gerdan iyileştirme', 'Mimik kırışıklıkları yumuşatma', 'Genel yüz dengesi'],
    benefits: ['Cerrahi gerektirmez', 'Anında belirgin sonuç', 'İyileşme süresi minimum', 'Botoks + dolgu sinerjisi', '12-18 ay etki', 'Risk düşük, geri dönüşümlü'],
    process: ['Detaylı yüz analizi ve fotoğraflama', 'Kişiye özel protokol planlama', 'Botoks uygulaması (üst yüz)', 'Çoklu nokta dolgu uygulaması', 'Buz kompresi ve sonuç kontrolü'],
    duration: '60-90 dakika',
    resultDuration: '12-18 ay',
    faq: [
      { q: 'Sıvı yüz germe ameliyatın yerini tutar mı?', a: 'Belirli yaş grubunda (35-55) ve sarkma derecesinde ameliyata alternatif olabilir. İleri sarkmalarda cerrahi tercih edilebilir.' },
      { q: 'Liquid facelift ne kadar sürer?', a: 'Etki 12-18 ay sürer. Düzenli yenileme ile kalıcılık artar.' },
      { q: 'İşlem sonrası ne kadar süre dinlenmem gerekir?', a: 'Hafif kızarıklık ve şişlik 24-48 saat içinde geçer. Çoğu hasta ertesi gün normal yaşamına döner.' }
    ]
  },
  {
    slug: 'full-face-estetik',
    title: 'Full Face Estetik',
    shortTitle: 'Full Face',
    synonyms: ['tam yüz estetik', 'kapsamlı yüz estetiği', 'full face protocol'],
    iconName: 'Star',
    color: 'from-amber-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1607008829749-c0f284a49841?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Full face estetik — kapsamlı yüz gençleştirme protokolü',
    shortDescription: 'Yüzün tamamını ele alan, botoks + dolgu + mezoterapi + cilt bakımı kombinasyonlu kapsamlı medikal estetik protokolü.',
    longDescription: 'Full face estetik, yüzün tamamını bütünsel olarak değerlendiren, mimik kasları (botoks), hacim kayıpları (dolgu), cilt kalitesi (mezoterapi/PRP) ve ten tonu (peeling) gibi tüm bileşenleri birlikte ele alan kapsamlı medikal estetik protokolüdür.',
    intro: 'Tek tek değil, bütünsel yaklaşım — yüzünüzün tamamı için kişiye özel kombinasyon protokolü.',
    features: ['Bütünsel yüz analizi', 'Botoks (mimik dengesi)', 'Dolgu (hacim restorasyonu)', 'Mezoterapi / PRP (cilt kalitesi)', 'Peeling (ten tonu)', 'Uzun vadeli takip planı'],
    benefits: ['Tutarlı ve dengeli sonuç', 'Tek paket, çoklu fayda', 'Maliyet avantajı', 'Tek seansta planlama', '6-12 ay etkili', 'Düzenli yenileme ile kalıcılık'],
    process: ['Detaylı yüz analizi ve fotoğraflama', 'Çoklu seans protokolü planlama', 'Sıralı uygulamalar (genelde 2-3 seans)', '6 aylık kontrol ve yenileme'],
    duration: 'Seansa göre 60-120 dk',
    resultDuration: '6-18 ay (komponente göre)',
    faq: [
      { q: 'Full face estetik kaç seansta tamamlanır?', a: 'Genellikle 2-3 seansa yayılır. İlk seans botoks ve ana dolgular, ikinci seans cilt bakımı bileşenleri, üçüncü seans ince ayar.' },
      { q: 'Tüm uygulamalar aynı anda yapılabilir mi?', a: 'Botoks ve dolgu aynı seansta yapılabilir; mezoterapi ve peeling ayrı seanslarda planlanır.' },
      { q: 'Doğal sonuç alabilir miyim?', a: 'Bütünsel yaklaşım sayesinde tek bölgeye odaklı uygulamalardan daha doğal ve dengeli sonuç elde edilir.' }
    ]
  },
  {
    slug: 'mezoterapi',
    title: 'Mezoterapi',
    shortTitle: 'Mezoterapi',
    synonyms: ['mesotherapy', 'cilt mezoterapi'],
    iconName: 'Sparkles',
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Mezoterapi — vitamin ve mineral ile cilt canlandırma',
    shortDescription: 'Cildinize ihtiyacı olan vitamin, mineral ve hyaluronik asidi enjekte eden canlandırıcı mezoterapi tedavisi.',
    longDescription: 'Mezoterapi, ciltaltına ince iğnelerle uygulanan vitamin, mineral, amino asit ve hyaluronik asit kokteylleri ile cildi besleyen, canlandıran ve yenileyen tedavidir.',
    intro: 'Yüz, saç ve vücut mezoterapisi — cildinizi içten besleyin.',
    features: ['Yüz mezoterapisi (anti-aging)', 'Saç mezoterapisi (dökülme tedavisi)', 'Vücut mezoterapisi (selülit/sıkılaştırma)', 'Cilt aydınlatma kokteylleri', 'Akne sonrası iz tedavisi'],
    benefits: ['Cilt parlaklığı ve nem artışı', 'İnce çizgilerin azalması', 'Saç dökülmesinde durma', 'Cerrahi gerektirmez', 'İyileşme süresi yok'],
    process: ['Cilt analizi', 'Kişiye özel kokteyl seçimi', 'Çoklu nokta enjeksiyon', '4-6 seans 2 hafta arayla'],
    duration: '20-30 dakika',
    resultDuration: '6-12 ay (kür sonrası)',
    faq: [
      { q: 'Mezoterapi kaç seans gerekir?', a: 'Standart kür 4-6 seanstır, 2 hafta arayla uygulanır.' },
      { q: 'Hemen sonuç alır mıyım?', a: '2.-3. seanstan itibaren cilt parlaklığında belirgin iyileşme görülür.' }
    ]
  },
  {
    slug: 'prp',
    title: 'PRP Tedavisi',
    shortTitle: 'PRP',
    synonyms: ['platelet rich plasma', 'trombositten zengin plazma', 'kök hücre'],
    iconName: 'Zap',
    color: 'from-rose-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'PRP tedavisi — trombositten zengin plazma ile cilt yenileme',
    shortDescription: 'Kendi kanınızdan elde edilen trombositten zengin plazma ile cilt yenileme ve saç dökülmesi tedavisi.',
    longDescription: 'PRP (Platelet Rich Plasma), hastanın kendi kanından santrifüj ile elde edilen trombositten zengin plazmanın cilde veya saçlı deriye enjeksiyonu ile dokunun kendini onarmasını uyaran tedavidir.',
    intro: 'Kendi vücudunuzdan, doğal cilt yenileme — tamamen organik.',
    features: ['Cilt gençleştirme', 'Saç dökülmesi tedavisi', 'Yara iyileşme hızlandırma', 'Akne izleri', 'Göz altı koyuluk', 'Stria (çatlak) tedavisi'],
    benefits: ['Tamamen kendi kanınızdan', 'Alerjik reaksiyon riski yok', 'Doğal kollajen üretimi', 'İyileşme süresi minimum', 'Düzenli kürlerle uzun süreli sonuç'],
    process: ['Kan alımı (10-20 ml)', 'Santrifüj ile plazma ayrıştırma', 'Cilt veya saçlı deri enjeksiyonu', '3-4 seans 4-6 hafta arayla'],
    duration: '45-60 dakika',
    resultDuration: '6-12 ay (kür sonrası)',
    faq: [
      { q: 'PRP kaç seans uygulanır?', a: '3-4 seans, 4-6 hafta arayla. Belirgin sonuç 2. seansdan itibaren görülmeye başlar.' },
      { q: 'PRP ağrılı mı?', a: 'Krem anestezi sonrası rahatsızlık minimumdur.' }
    ]
  },
  {
    slug: 'kimyasal-peeling',
    title: 'Kimyasal Peeling',
    shortTitle: 'Peeling',
    synonyms: ['chemical peel', 'cilt soyma', 'glikolik asit', 'tca peeling'],
    iconName: 'FlaskConical',
    color: 'from-purple-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Kimyasal peeling — cilt yenileme ve aydınlatma',
    shortDescription: 'Cildin üst tabakasını yenileyerek pürüzsüz, parlak ve lekesiz görünüm sağlayan kimyasal peeling tedavisi.',
    longDescription: 'Kimyasal peeling, ciltteki ölü hücreleri ve hasarlı tabakayı asit kombinasyonları ile soyarak yeni, sağlıklı cildin ortaya çıkmasını sağlayan tedavidir. Glikolik, salisilik, TCA ve fenol asitleri içerir.',
    intro: 'Yüzeysel, orta ve derin peeling seçenekleri — ihtiyacınıza özel ten tonu yenileme.',
    features: ['Akne ve akne izi tedavisi', 'Güneş lekeleri', 'Melasma (gebelik maskesi)', 'Cilt yenileme', 'Genç görünüm', 'Pürüzsüz ten'],
    benefits: ['Hızlı sonuç', 'Birkaç seansla belirgin değişim', 'Anti-aging etki', 'Cilt aydınlatma'],
    process: ['Cilt analizi ve hassasiyet testi', 'Uygun asit ve konsantrasyon seçimi', 'Uygulama (10-30 dk)', 'Pul pul soyulma 5-7 gün', 'Yenilenme 2-3 hafta'],
    duration: '20-30 dakika',
    resultDuration: '6-12 ay (kür sonrası)',
    faq: [
      { q: 'Peeling sonrası ne kadar süre maske takmalıyım?', a: 'Yüzeysel peelingde 1-2 gün, orta peelingde 5-7 gün koruma gerekir. Güneş kremi şarttır.' },
      { q: 'Yaz aylarında peeling yapılır mı?', a: 'Yüzeysel peelingler yapılabilir; orta-derin peelingler için sonbahar-kış tercih edilir.' }
    ]
  },
  {
    slug: 'cilt-bakimi',
    title: 'Profesyonel Cilt Bakımı',
    shortTitle: 'Cilt Bakımı',
    synonyms: ['facial', 'medikal cilt bakımı', 'derin temizlik'],
    iconName: 'ScanFace',
    color: 'from-indigo-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Profesyonel cilt bakımı — medikal facial tedavisi',
    shortDescription: 'Profesyonel ürünler ve tekniklerle derinlemesine cilt bakımı, temizliği ve nemlendirme tedavileri.',
    longDescription: 'Profesyonel cilt bakımı, klinik ortamda medikal kalitede ürünler ve cihazlar ile yapılan, cildin derinlemesine temizliği, nemlendirilmesi ve canlandırılmasını içeren rutin bakım uygulamasıdır.',
    intro: 'Düzenli cilt bakımı — kalıcı parlaklık ve sağlık için.',
    features: ['Derin temizlik (siyah/beyaz nokta)', 'Akne tedavi bakımı', 'Anti-aging bakım', 'Nemlendirici terapi', 'Aydınlatıcı maskeler', 'Dermaplaning / hydrafacial'],
    benefits: ['Anında parlak cilt', 'Düzenli uygulamada kalıcı sonuç', 'Cilt sağlığı koruma', 'Diğer estetik uygulamalara hazırlık'],
    process: ['Cilt analizi', 'Temizlik ve buharlama', 'Manuel/cihaz temizlik', 'Maske ve serum', 'Nemlendirici kapanış'],
    duration: '60-90 dakika',
    resultDuration: 'Aylık tekrar önerilir',
    faq: [
      { q: 'Cilt bakımını ne sıklıkta yaptırmalıyım?', a: 'Standart cilt için ayda bir, problemli ciltte 15 günde bir önerilir.' }
    ]
  }
];

export const getServiceBySlug = (slug: string) => SERVICES.find(s => s.slug === slug);
