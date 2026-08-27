/* ---------------------------------------------------------------------------
   HAFTALIK DERS PROGRAMI

   Nilay Hanım'ın 26 Ağu 2026'da WhatsApp'tan gönderdiği gerçek program.
   Eğitmen ataması bu turda verilmedi — instructor alanı bilerek null;
   uydurulmadı. İsimler geldiğinde ilgili session kaydına yazılması yeterli.

   ⚠ Cumartesi: Nilay Hanım "Ctesi" yazdı ama saat belirtmedi. Saat
   uydurulmadı — sessions dizisinde `time: null` ile işaretli, sitede
   "saat teyit edilecek" olarak görünüyor. Saat gelince time alanına
   '11:00' gibi yazmak yeterli.

   Bir ders kaydı:
     time        '18:00' ya da saat belirsizse null
     type        { tr, en }        ders türü
     instructor  eğitmen adı ya da null
     language    'tr' | 'en'
     seats       (opsiyonel) ileride rezervasyon sistemi için kontenjan
--------------------------------------------------------------------------- */

export const isSample = false;

export const days = [
  {
    id: 'pzt', short: { tr: 'Pzt', en: 'Mon' }, name: { tr: 'Pazartesi', en: 'Monday' },
    sessions: [
      { time: '12:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '14:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '17:30', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'en' },
      { time: '18:20', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '19:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'en' },
      { time: '19:10', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
    ],
  },
  {
    id: 'sal', short: { tr: 'Sal', en: 'Tue' }, name: { tr: 'Salı', en: 'Tuesday' },
    sessions: [
      { time: '18:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'en' },
      { time: '18:20', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '19:10', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
    ],
  },
  {
    id: 'car', short: { tr: 'Çar', en: 'Wed' }, name: { tr: 'Çarşamba', en: 'Wednesday' },
    sessions: [
      { time: '12:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '17:30', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'en' },
      { time: '18:20', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '19:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'en' },
      { time: '19:10', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
    ],
  },
  {
    id: 'per', short: { tr: 'Per', en: 'Thu' }, name: { tr: 'Perşembe', en: 'Thursday' },
    sessions: [
      { time: '14:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '18:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'en' },
      { time: '18:20', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '19:10', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
    ],
  },
  {
    id: 'cum', short: { tr: 'Cum', en: 'Fri' }, name: { tr: 'Cuma', en: 'Friday' },
    sessions: [
      { time: '12:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '18:20', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
      { time: '19:00', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'en' },
      { time: '19:10', type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
    ],
  },
  {
    id: 'cmt', short: { tr: 'Cmt', en: 'Sat' }, name: { tr: 'Cumartesi', en: 'Saturday' },
    sessions: [
      { time: null, type: { tr: 'Reformer', en: 'Reformer' }, instructor: null, language: 'tr' },
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

export const timeTbdLabel = {
  tr: 'Saat teyit edilecek',
  en: 'Time to be confirmed',
};

export const privateNote = {
  tr: 'Özel ve 2’li dersler bu saatlerin dışında, randevuyla planlanır.',
  en: 'Private and duo sessions are arranged outside these hours, by appointment.',
};
