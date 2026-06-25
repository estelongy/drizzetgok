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
  // Google İşletme Profili'nden teyit edildi (2026-06-25): 4,9 / 18 yorum.
  averageRating: 4.9,
  totalCount: 18,
  googleProfileUrl:
    'https://www.google.com/search?sca_esv=f9ea728914227c9b&sxsrf=APpeQnszr2P-DYhFome5XRHy4ERsfoW5EQ:1782393763542&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4rSGxlWOgVa94UJjoNIxJa62R0a3JrLVLMes-MVY8BJpDYiIPLIpGaKEdYOAF5OQmRwt_ceDo34WDf_IM9PQ0YOTaM5mDhZiqnoR6O6bg_3r2k5b1zh9ft0ypj6i6BLOkpD2GHri9UArCutA5XD7Pre0mMc4s&q=Dr.+%C4%B0zzet+G%C3%B6k+Medikal+Estetik+Yorumlar&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_y9oTceKhxdQgoo-RvnbdKtVGeiWz_BzgqrFSprNIcCB22rQhINSy-eqZwvSDr5DrrPec6l7MrojiWQ2rotIrxGpcYhPDqwFQBwEJGSlRmP_al--ucVoMB4GfMG4y73PcwYGYa4%3D&hl=tr-TR',
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
