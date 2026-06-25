// Google değerlendirmeleri — el ile küratörlü (otomatik senkron YOK).
// Yeni yorum geldikçe buraya gerçek yorumlardan ekle. ASLA uydurma yorum ekleme.
// Yıldız zenginleştirmesi (rich result) için schema KULLANMIYORUZ — Google "self-serving review"
// politikası gereği kendi sitende kendin hakkındaki yorumlar yıldız almaz.

export interface Review {
  /** Yorumu yazan kişi (ad veya ad-soyad baş harfi). */
  author: string;
  /** Tam yorum metni — Google'daki haliyle, değiştirilmeden. */
  text: string;
  /** 1-5 yıldız. */
  rating: number;
  /** Yorum tarihi (YYYY-MM-DD) — varsa. */
  date?: string;
}

/**
 * Klinik genel değerlendirme özeti.
 * ⚠️ Bu sayıları yayına almadan önce Dr. İzzet Gök Google İşletme Profili'nden TEYİT ET.
 * Yanlış/şişirilmiş sayı koymak hem etik dışı hem de güveni zedeler.
 */
export const REVIEW_SUMMARY = {
  averageRating: 5.0,
  // TODO(kullanıcı teyidi): gerçek Google yorum sayısını gir.
  totalCount: 0,
  googleProfileUrl: 'https://g.page/r/CSKVRsUJ8WCeEBM/review',
};

export const reviews: Review[] = [
  {
    author: 'Senem Yağmur',
    text: 'Doktor bey ve çalışanlar çok ilgiliydi. Dudak dolgusu için gittim sonuç mükemmel 🥰',
    rating: 5,
    date: 'Dün',
  },
  {
    author: 'Sinem Uluışık',
    text:
      'İnanılmaz sonuçlar aldığım bir klinik.. Güvenilirliği, ihtiyaca göre yönlendirmesi her klinikte ' +
      'karşılaşacağımız bir durum değil. İzzet Gök hocanın danışanlarına olan yaklaşımı, doğru işlemlerle ' +
      'birleştiğinde muhteşem sonuçlar kaçınılmaz. Nursel hanımın en son uyguladığı Reettiepeel akıllı peeling ' +
      'işlemi bugüne kadar yüzüme yapılan çoğu işlemin ötesinde... 🙏 Ayşegül hanıma da ayrıca teşekkür ederim. ' +
      'Şiddetle tavsiye ediyorum. Hocaların ellerine güvenle teslim olabilirsiniz. Herşey için teşekkürler',
    rating: 5,
    date: '2 hafta önce',
  },
  {
    author: 'Selda Orhan',
    text:
      'İlk defa bir güzellik merkezinde egosuz çalışan muhteşem insanlarla tanıştım 🙋‍♀️ Zerafetiniz, ilginiz, ' +
      'deneyiminiz ve misafirperverliğiniz yaptığınız o harika dokunuşların çok daha ötesinde benim için.',
    rating: 5,
    date: '2 hafta önce',
  },
  {
    author: 'Deniz Yüksel',
    text:
      'Botoks ve dolgu yaptırdım ve çok beğendim, göze batmayan ve doğal bir görünüm elde ettim. Botoksum çok ' +
      'iyi oldu, var ama yok gibi. Ellerine sağlık, tavsiyemdir 🌸',
    rating: 5,
    date: '15 hafta önce',
  },
  {
    author: 'Kübra Yıldırım',
    text:
      'Her anlamda memnun kaldığım bir klinik oldu. Fiziki olarak çok ferah ve temiz. Çalışanlar ve Dr. İzzet ' +
      'hocamdan çok memnun kaldım, çok ilgili güler yüzlülerdi. Botoks deyince tek adres :))',
    rating: 5,
    date: '15 hafta önce',
  },
  {
    author: 'Amine Zortul',
    text:
      'Hastalarına her konuda yardımcı olan, ilgi ve alaka ile yardımcı olan dost canlısı güler yüzlü bir klinik.',
    rating: 5,
    date: '9 hafta önce',
  },
  {
    author: 'Google kullanıcısı',
    text:
      'Beylikdüzü Halk Eğitim Merkezi\'nde öğretmenim. Şimdiye kadar alanında uzman üç estetisyene gittim. ' +
      'Cildimle ilgili bir sorundan dolayı yapılan dolgular ödemle birlikte kayboluyordu, pes etmiştim. ' +
      'Estetisyen Nursel Hanım, İzzet Bey\'i önerdi. Kendisinin uyguladığı yöntemlerle çene, dudak dolgu ve botoks ' +
      'yaptırdım ve sonuçtan çok memnunum. Yapay zekâ veya filtre yok; benimkisi gerçek bir deneyim, herkese tavsiye ederim. ' +
      'İzzet Bey ve Nursel Hanım\'a çok teşekkür ederim.',
    rating: 5,
    date: 'Dün',
  },
];
