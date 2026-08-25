/* ---------------------------------------------------------------------------
   HAFTALIK DERS PROGRAMI

   ⚠ isSample: true  →  Stüdyonun gerçek programı henüz paylaşılmadı.
   Aşağıdaki yerleşim yapıyı göstermek içindir; sitede "örnek program" notuyla
   birlikte yayınlanır. Gerçek program geldiğinde `days` dizisini güncelleyip
   isSample değerini false yapın; not otomatik olarak kalkar.

   Bir ders kaydı:
     time        '18:00'
     type        { tr, en }        ders türü
     instructor  eğitmen adı ya da null
     language    'tr' | 'en'
     seats       (opsiyonel) ileride rezervasyon sistemi için kontenjan
--------------------------------------------------------------------------- */

export const isSample = true;

export const days = [
  {
    id: 'pzt', short: { tr: 'Pzt', en: 'Mon' }, name: { tr: 'Pazartesi', en: 'Monday' },
    sessions: [
      { time: '18:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Damla', language: 'tr' },
      { time: '19:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null,    language: 'en' },
    ],
  },
  {
    id: 'sal', short: { tr: 'Sal', en: 'Tue' }, name: { tr: 'Salı', en: 'Tuesday' },
    sessions: [
      { time: '10:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Hilal', language: 'tr' },
      { time: '18:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Nilay Kentkur', language: 'tr' },
    ],
  },
  {
    id: 'car', short: { tr: 'Çar', en: 'Wed' }, name: { tr: 'Çarşamba', en: 'Wednesday' },
    sessions: [
      { time: '18:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Damla', language: 'tr' },
      { time: '19:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null,    language: 'en' },
    ],
  },
  {
    id: 'per', short: { tr: 'Per', en: 'Thu' }, name: { tr: 'Perşembe', en: 'Thursday' },
    sessions: [
      { time: '10:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Hilal', language: 'tr' },
      { time: '18:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Nilay Kentkur', language: 'tr' },
    ],
  },
  {
    id: 'cum', short: { tr: 'Cum', en: 'Fri' }, name: { tr: 'Cuma', en: 'Friday' },
    sessions: [
      { time: '18:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Damla', language: 'tr' },
    ],
  },
  {
    id: 'cmt', short: { tr: 'Cmt', en: 'Sat' }, name: { tr: 'Cumartesi', en: 'Saturday' },
    sessions: [
      { time: '11:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: 'Nilay Kentkur', language: 'tr' },
    ],
  },
  {
    id: 'paz', short: { tr: 'Paz', en: 'Sun' }, name: { tr: 'Pazar', en: 'Sunday' },
    sessions: [],
  },
];

export const sampleNote = {
  tr: 'Aşağıdaki yerleşim örnektir. Stüdyonun güncel haftalık programı paylaşıldığında birebir işlenecek.',
  en: 'The layout below is an example. The studio’s current weekly schedule will be entered exactly as provided.',
};

export const privateNote = {
  tr: 'Özel ve 2’li dersler bu saatlerin dışında, randevuyla planlanır.',
  en: 'Private and duo sessions are arranged outside these hours, by appointment.',
};
