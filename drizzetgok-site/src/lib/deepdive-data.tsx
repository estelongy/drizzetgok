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
        <p>
          Bir yüzü "güzel" bulmamız yalnızca o yüzün ölçüleriyle açıklanamaz. Güzellik,
          yüzün fiziksel özellikleriyle başlayan ve beynin bu özellikleri birlikte
          işlemesiyle anlam kazanan çok boyutlu bir algı sürecidir.
        </p>
        <p>
          Yüzün oranları, simetrisi, ortalamalığı, cinsiyete özgü özellikleri, yaşla
          ilişkili işaretleri ve cilt gibi yüzey özellikleri değerlendirmede birlikte
          rol oynar. Araştırmalar, bu özelliklerin hiçbirinin tek başına evrensel bir
          "ideal yüz" formülü oluşturmadığını; güzellik algısının hem insanlar arasında
          paylaşılan bazı örüntülerden hem de kişisel ve kültürel farklılıklardan
          etkilendiğini gösteriyor.
        </p>
        <p className="text-slate-500 italic">
          Bu bölümün bilimsel dayanaklı tam içeriği yakında yayımlanacak.
        </p>
      </>
    ),
  },
];

// Slug'a göre uydu bul
export const getDeepDiveBySlug = (slug: string) =>
  DOGAL_ESTETIK_DEEPDIVE.find((d) => d.ready && d.slug === slug);
