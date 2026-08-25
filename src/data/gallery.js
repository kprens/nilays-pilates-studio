/* ---------------------------------------------------------------------------
   STÜDYO GALERİSİ
   Şu an gerçek fotoğraf yok; her kayıt yer tutucu bir görsele işaret ediyor.
   Gerçek fotoğraf geldiğinde: dosyayı assets/img/studio/ içine koyun,
   `src` değerini o dosyanın uzantısız adıyla, `ext` değerini uzantısıyla
   değiştirin. Başka hiçbir yeri düzenlemeniz gerekmez.

   `span` galeri ızgarasındaki yerleşimi belirler: 'wide' | 'tall' | 'std'
--------------------------------------------------------------------------- */

export const gallery = [
  {
    src: 'genel-gorunum', ext: 'svg', span: 'wide', placeholder: true,
    category: { tr: 'Genel Görünüm', en: 'The Space' },
    alt: { tr: 'Stüdyonun genel görünümü', en: 'General view of the studio' },
  },
  {
    src: 'reformer', ext: 'svg', span: 'tall', placeholder: true,
    category: { tr: 'Reformer', en: 'Reformer' },
    alt: { tr: 'Stüdyodaki reformer ekipmanları', en: 'Reformer equipment in the studio' },
  },
  {
    src: 'tower', ext: 'svg', span: 'std', placeholder: true,
    category: { tr: 'Tower', en: 'Tower' },
    alt: { tr: 'Tower ekipmanı', en: 'Tower equipment' },
  },
  {
    src: 'cadillac', ext: 'svg', span: 'std', placeholder: true,
    category: { tr: 'Cadillac', en: 'Cadillac' },
    alt: { tr: 'Cadillac ekipmanı', en: 'Cadillac equipment' },
  },
  {
    src: 'chair', ext: 'svg', span: 'std', placeholder: true,
    category: { tr: 'Chair', en: 'Chair' },
    alt: { tr: 'Chair ekipmanı', en: 'Chair equipment' },
  },
  {
    src: 'detay', ext: 'svg', span: 'std', placeholder: true,
    category: { tr: 'Detaylar', en: 'Details' },
    alt: { tr: 'Stüdyodan detay', en: 'A detail from the studio' },
  },
  {
    src: 'ders', ext: 'svg', span: 'wide', placeholder: true,
    category: { tr: 'Ders', en: 'In Class' },
    alt: { tr: 'Stüdyoda süren bir ders', en: 'A class in progress at the studio' },
  },
  {
    src: 'giris', ext: 'svg', span: 'std', placeholder: true,
    category: { tr: 'Giriş', en: 'Entrance' },
    alt: { tr: 'Stüdyo girişi', en: 'The studio entrance' },
  },
  {
    src: 'atmosfer', ext: 'svg', span: 'tall', placeholder: true,
    category: { tr: 'Atmosfer', en: 'Atmosphere' },
    alt: { tr: 'Stüdyonun atmosferi', en: 'The atmosphere of the studio' },
  },
];

/* Hero ve bölüm görselleri (galeri dışı) */
export const figures = {
  hero:     { src: 'hero',        ext: 'svg', placeholder: true,
              alt: { tr: 'Nilay’s Pilates Studio — stüdyo alanı', en: 'Nilay’s Pilates Studio — the studio space' } },
  approach: { src: 'yaklasim',    ext: 'svg', placeholder: true,
              alt: { tr: 'Hareket üzerine çalışılan stüdyo alanı', en: 'The studio space where movement is practised' } },
};
