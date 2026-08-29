/* ---------------------------------------------------------------------------
   EĞİTMENLER
   Yeni eğitmen eklemek için diziye bir nesne ekleyin — bölüm kendini günceller.
   `photo` alanı assets/img/team/ altındaki dosyanın uzantısız adıdır.
   Gerçek portre geldiğinde aynı isimle .jpg koyup `ext: 'jpg'` yazmanız yeterli.
--------------------------------------------------------------------------- */

export const team = [
  {
    id: 'nilay-kentkur',
    name: 'Nilay Kentkur',
    role: { tr: 'Kurucu ve Pilates Eğitmeni', en: 'Founder & Pilates Instructor' },
    initials: 'NK',
    photo: 'nilay-kentkur',
    ext: 'jpg',
    founder: true,
  },
  {
    id: 'damla',
    name: 'Damla Koyun',
    role: { tr: 'Fizyoterapist & Pilates Eğitmeni', en: 'Physiotherapist & Pilates Instructor' },
    /* Nilay Hanım'ın 29 Ağu'da gönderdiği tanıtım metni — birebir. */
    bio: {
      tr: 'Klinik bakış açısının güvenilirliğini, Pilates’in enerjisiyle buluşturuyor. Fizyoterapist kimliğiyle anatomiyi, doğru hareketi ve beden farkındalığını merkeze alan Damla Hoca; grup ve bireysel derslerde daha güçlü, dengeli ve kontrollü bir beden için size rehberlik ediyor.',
      en: 'She brings the reliability of a clinical perspective together with the energy of Pilates. With her background as a physiotherapist, Damla Hoca puts anatomy, correct movement and body awareness at the center — guiding you toward a stronger, more balanced and more controlled body in both group and individual classes.',
    },
    initials: 'D',
    photo: 'damla',
    ext: 'jpg',
  },
  {
    id: 'hilal',
    name: 'Hilal Güçlü',
    role: { tr: 'Pilates Eğitmeni', en: 'Pilates Instructor' },
    bio: {
      tr: 'BESYO mezunu Hilal Güçlü, güçlü spor altyapısını Pilates’in kontrollü ve bilinçli hareket anlayışıyla buluşturuyor. Enerjisi yüksek dersleri, doğru teknik ve hareket kalitesine verdiği önemle; hem grup hem bireysel çalışmalarda güçlü ve dengeli bir beden geliştirmeye odaklanıyor.',
      en: 'A graduate of the School of Physical Education and Sports (BESYO), Hilal Güçlü brings her strong athletic background together with Pilates’ controlled, mindful approach to movement. With high-energy classes and close attention to proper technique and movement quality, she focuses on building a strong, balanced body in both group and individual sessions.',
    },
    initials: 'H',
    photo: 'hilal',
    ext: 'jpg',
  },
];
