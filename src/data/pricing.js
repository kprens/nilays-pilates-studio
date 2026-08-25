/* ---------------------------------------------------------------------------
   PAKETLER — DİLE DUYARLI FİYATLANDIRMA
   Rakamlar müşteri dokümanından birebir alınmıştır.

   Her kademede `total` ve `perClass` Türkçe sayfanın fiyatlarıdır.
   İngilizce sayfada FARKLI fiyat gösterilecekse ilgili kademeye
   `en: { total: 0, perClass: 0 }` ekleyin; eklenmezse Türkçe fiyat kullanılır.
   Şu an İngilizce fiyatlar stüdyodan gelmediği için hiçbir override yok.
--------------------------------------------------------------------------- */

export const currency = { code: 'TRY', symbol: '₺' };

export const pricing = [
  {
    id: 'ozel',
    name: { tr: 'Özel Ders', en: 'Private Session' },
    size: { tr: '1 Kişi', en: '1 Person' },
    summary: {
      tr: 'Tamamen size özel, birebir Pilates deneyimi.',
      en: 'A one-to-one Pilates experience, entirely your own.',
    },
    tiers: [
      { count: 8,  total: 9000,  perClass: 1125, weeks: 6 },
      { count: 12, total: 13000, perClass: 1083, weeks: 8 },
      { count: 24, total: 24000, perClass: 1000, weeks: 14, best: true },
    ],
  },
  {
    id: 'ikili',
    name: { tr: '2’li Ders', en: 'Duo Session' },
    size: { tr: '2 Kişi', en: '2 People' },
    summary: {
      tr: 'Bir arkadaşınız veya partnerinizle birlikte, daha kişisel bir ders deneyimi.',
      en: 'A more personal class, shared with a friend or your partner.',
    },
    tiers: [
      { count: 8,  total: 5500,  perClass: 687.5, weeks: 6 },
      { count: 12, total: 7500,  perClass: 625,   weeks: 8 },
      { count: 24, total: 14400, perClass: 600,   weeks: 14, best: true },
    ],
  },
  {
    id: 'grup',
    name: { tr: 'Grup Dersi', en: 'Group Class' },
    size: { tr: '3 Kişi ve Üzeri', en: '3 People or More' },
    summary: {
      tr: 'Küçük gruplarda, eğitmenin kişisel ilgisini koruduğu bir Pilates deneyimi.',
      en: 'Pilates in a small group, where the instructor’s personal attention is kept.',
    },
    tiers: [
      { count: 8,  total: 4500,  perClass: 562.5, weeks: 6 },
      { count: 12, total: 6000,  perClass: 500,   weeks: 8 },
      { count: 24, total: 11520, perClass: 480,   weeks: 14, best: true },
    ],
  },
];

export const weeksLabel = {
  tr: (n) => `${n} hafta`,
  en: (n) => `${n} weeks`,
};

export const countLabel = {
  tr: (n) => `${n} Ders`,
  en: (n) => `${n} Classes`,
};
