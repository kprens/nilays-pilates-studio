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
    name: 'Damla',
    role: { tr: 'Pilates Eğitmeni', en: 'Pilates Instructor' },
    initials: 'D',
    photo: 'damla',
    ext: 'svg',
  },
  {
    id: 'hilal',
    name: 'Hilal',
    role: { tr: 'Pilates Eğitmeni', en: 'Pilates Instructor' },
    initials: 'H',
    photo: 'hilal',
    ext: 'svg',
  },
];
