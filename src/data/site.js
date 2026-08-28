/* ---------------------------------------------------------------------------
   SİTE KİMLİĞİ VE İLETİŞİM BİLGİLERİ
   Tek doğruluk kaynağı. Burayı değiştirmek tüm sayfayı günceller.

   null olan alanlar stüdyodan HENÜZ GELMEDİ demektir. Doldurulduğunda ilgili
   buton/satır sitede otomatik olarak görünür hale gelir; boşken uydurma veri
   basılmaz. `node src/build.mjs` çalıştırınca eksikler listelenir.
--------------------------------------------------------------------------- */

export const site = {
  name: "Nilay's Pilates Studio",
  nameParts: { first: "Nilay's", accent: "Pilates", last: "Studio" },
  tagline: { tr: 'Butik Pilates Stüdyosu • Ankara', en: 'Boutique Pilates Studio • Ankara' },

  // Yayın adresi (canonical + hreflang + og:url için)
  origin: 'https://kprens.github.io',
  base: '/nilays-pilates-studio/',

  address: {
    street: 'Beyaz Zambaklar Sok. 9/4',   // Instagram profilinden; stüdyoya teyit ettir
    district: 'Gaziosmanpaşa',
    city: 'Ankara',
    country: { tr: 'Türkiye', en: 'Türkiye' },
    // Yer adı üzerinden arama linki. Gerçek Google Business linki gelince değiştir.
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Nilay%27s%20Pilates%20Studio%20Gaziosmanpa%C5%9Fa%20Ankara',
  },

  // ——— Stüdyodan beklenen bilgiler ———
  phone: { e164: '+905326956653', display: '0532 695 66 53' },
  whatsapp: '905326956653', // Nilay Hanım: telefon ve WhatsApp aynı numara
  email: null,            // örn. 'merhaba@nilayspilates.com'
  hours: null,            // örn. [{ days:{tr:'Pzt–Cum',en:'Mon–Fri'}, time:'09:00 – 21:00' }]

  instagram: { handle: '@nilayspilatesstudio', url: 'https://instagram.com/nilayspilatesstudio' },

  // Form gönderimi: stüdyonun e-postası gelince Formspree/Netlify uç noktası buraya.
  formEndpoint: null,
};

export const nav = [
  { id: 'dersler',   label: { tr: 'Dersler',       en: 'Classes' } },
  { id: 'studyo',    label: { tr: 'Stüdyo',        en: 'Studio' } },
  { id: 'yaklasim',  label: { tr: 'Yaklaşımımız',  en: 'Approach' } },
  { id: 'ekip',      label: { tr: 'Ekip',          en: 'Team' } },
  { id: 'paketler',  label: { tr: 'Paketler',      en: 'Packages' } },
  { id: 'program',   label: { tr: 'Ders Programı', en: 'Schedule' } },
  { id: 'iletisim',  label: { tr: 'İletişim',      en: 'Contact' } },
];

export const meta = {
  tr: {
    title: "Nilay's Pilates Studio | Gaziosmanpaşa, Ankara — Reformer, Klinik ve Hamile Pilatesi",
    description:
      'Ankara Gaziosmanpaşa’da butik Pilates stüdyosu. Maksimum 7 kişilik reformer grup dersleri, birebir özel ders, klinik ve hamile pilatesi. İngilizce ders seçenekleri.',
    ogAlt: 'Nilay’s Pilates Studio — Gaziosmanpaşa, Ankara',
  },
  en: {
    title: "Nilay's Pilates Studio | Boutique Pilates in Gaziosmanpaşa, Ankara",
    description:
      'A boutique Pilates studio in Gaziosmanpaşa, Ankara. Reformer groups capped at seven, one-to-one private sessions, clinical and pregnancy Pilates. Classes available in English.',
    ogAlt: 'Nilay’s Pilates Studio — Gaziosmanpaşa, Ankara',
  },
};
