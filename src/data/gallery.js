/* ---------------------------------------------------------------------------
   STÜDYO GALERİSİ
   Nilay Hanım'ın 26 Ağu 2026'da gönderdiği gerçek stüdyo fotoğrafları.

   Dokümandaki kategorilerden Tower, Chair (tek başına) ve gerçek bir ders
   anı için henüz temiz bir kare yok — o kategoriler şimdilik yer tutucuda
   kaldı. Cadillac fotoğrafının içinde bir Wunda Chair de görünüyor ama tek
   başına net bir kare olmadığı için ayrı kategori olarak eklenmedi.

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
    alt: { tr: 'Stüdyodaki reformer ekipmanları', en: 'Reformer equipment in the studio' },
  },
  {
    src: 'tower', ext: 'svg', span: 'std', placeholder: true,
    category: { tr: 'Tower', en: 'Tower' },
    alt: { tr: 'Tower ekipmanı', en: 'Tower equipment' },
  },
  {
    src: 'cadillac', ext: 'jpg', span: 'std',
    category: { tr: 'Cadillac', en: 'Cadillac' },
    alt: { tr: 'Cadillac ekipmanının bulunduğu çalışma alanı', en: 'The room housing the Cadillac equipment' },
  },
  {
    src: 'chair', ext: 'svg', span: 'std', placeholder: true,
    category: { tr: 'Chair', en: 'Chair' },
    alt: { tr: 'Chair ekipmanı', en: 'Chair equipment' },
  },
  {
    src: 'detay', ext: 'jpg', span: 'std',
    category: { tr: 'Detaylar', en: 'Details' },
    alt: { tr: 'Stüdyodan bir duvar detayı', en: 'A wall detail from the studio' },
  },
  {
    src: 'ders', ext: 'svg', span: 'wide', placeholder: true,
    category: { tr: 'Ders', en: 'In Class' },
    alt: { tr: 'Stüdyoda süren bir ders', en: 'A class in progress at the studio' },
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
