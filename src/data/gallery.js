/* ---------------------------------------------------------------------------
   STÜDYO GALERİSİ
   Nilay Hanım'ın 26 ve 27 Ağu 2026'da gönderdiği gerçek stüdyo fotoğrafları.
   27 Ağu'daki fotoğraflarda gerçek dersler ve öğrenciler var — "reformer" ve
   "ders" kayıtları o yüzden artık boş oda değil, dolu bir sınıf gösteriyor.

   28 Ağu'da Nilay Hanım daha önce gönderdiği iki fotoğrafı Tower ve Chair
   olarak etiketledi (adam fotoğrafı = Chair, lotus odasındaki grup fotoğrafı
   = Tower) — yeni dosya değil, mevcut fotoğrafların ekipman kimliği netleşti.
   Dokümandaki tüm galeri kategorileri artık gerçek fotoğrafla dolu.

   Yeni fotoğraf geldiğinde: dosyayı assets/img/studio/ içine koyun, ilgili
   kaydın `src`/`ext` alanını güncelleyin, `placeholder` satırını silin.

   `span` galeri ızgarasındaki yerleşimi belirler: 'wide' | 'tall' | 'std'
--------------------------------------------------------------------------- */

export const gallery = [
  {
    src: 'genel-gorunum-2', ext: 'jpg', span: 'wide',
    category: { tr: 'Genel Görünüm', en: 'The Space' },
    alt: { tr: 'Stüdyonun ana reformer salonu', en: 'The studio’s main reformer room' },
  },
  {
    src: 'reformer', ext: 'jpg', span: 'tall',
    category: { tr: 'Reformer', en: 'Reformer' },
    alt: { tr: 'Reformer üzerinde çalışan bir öğrenci', en: 'A student working on the reformer' },
  },
  {
    src: 'cadillac', ext: 'jpg', span: 'std',
    category: { tr: 'Cadillac', en: 'Cadillac' },
    alt: { tr: 'Cadillac ekipmanının bulunduğu çalışma alanı', en: 'The room housing the Cadillac equipment' },
  },
  {
    src: 'birebir-ders', ext: 'jpg', span: 'std',
    category: { tr: 'Chair', en: 'Chair' },
    alt: { tr: 'Chair ekipmanında çalışan bir öğrenci', en: 'A student working on the Chair' },
  },
  {
    src: 'detay', ext: 'jpg', span: 'std',
    category: { tr: 'Detaylar', en: 'Details' },
    alt: { tr: 'Stüdyodan bir duvar detayı', en: 'A wall detail from the studio' },
  },
  {
    src: 'ders', ext: 'jpg', span: 'wide',
    category: { tr: 'Ders', en: 'In Class' },
    alt: { tr: 'Stüdyoda süren bir grup dersi', en: 'A group class in progress at the studio' },
  },
  {
    src: 'grup-dersi-1', ext: 'jpg', span: 'std',
    category: { tr: 'Tower · Grup Dersi', en: 'Tower · Group Class' },
    alt: { tr: 'Tower ekipmanının bulunduğu odada grup dersi', en: 'A group class in the room with the Tower equipment' },
  },
  {
    src: 'grup-dersi-2', ext: 'jpg', span: 'tall',
    category: { tr: 'Grup Dersi', en: 'Group Class' },
    alt: { tr: 'Reformer grup dersinden bir kare', en: 'A moment from a reformer group class' },
  },
  {
    src: 'soyunma-alani', ext: 'jpg', span: 'std',
    category: { tr: 'Soyunma Alanı', en: 'Changing Area' },
    alt: { tr: 'Stüdyonun soyunma ve dolap alanı', en: 'The studio’s changing area and lockers' },
  },
  {
    src: 'atmosfer', ext: 'jpg', span: 'tall',
    category: { tr: 'Atmosfer', en: 'Atmosphere' },
    alt: { tr: 'Dinlenme köşesi', en: 'A quiet lounge corner' },
  },
  {
    src: 'banyo', ext: 'jpg', span: 'std',
    category: { tr: 'Banyo', en: 'Bathroom' },
    alt: { tr: 'Stüdyonun banyosu', en: 'The studio’s bathroom' },
  },
];

/* Hero ve bölüm görselleri (galeri dışı) */
export const figures = {
  hero:     { src: 'hero',        ext: 'jpg',
              alt: { tr: 'Nilay’s Pilates Studio — ana reformer salonu', en: 'Nilay’s Pilates Studio — the main reformer room' } },
  approach: { src: 'yaklasim',    ext: 'svg', placeholder: true,
              alt: { tr: 'Hareket üzerine çalışılan stüdyo alanı', en: 'The studio space where movement is practised' } },
};
