/* ---------------------------------------------------------------------------
   ÖĞRENCİ YORUMLARI

   Dizi BİLEREK boştur. Gerçek Google yorumu paylaşılmadan buraya yorum
   eklenmez. Boşken bölüm "yayına hazır alan" durumunda görünür.

   Gerçek yorum geldiğinde:
     { author: 'Ad S.', rating: 5, text: { tr: '...', en: '...' }, date: '2026-07-14',
       source: 'google', url: 'https://...' }
   Rating ortalaması ve yıldızlar otomatik hesaplanır.
--------------------------------------------------------------------------- */

export const reviews = [];

/* Nilay Hanım'ın 29 Ağu'da paylaştığı link. Not: bu bir "/review" sonlu
   g.page kısa linki — tıklanınca doğrudan yorum YAZMA ekranını açar,
   mevcut yorumları listelemez (Google bu iki işlevi ayrı linkte tutuyor).
   O yüzden CTA metni content.js'te "yorum bırakın" olarak yazıldı, "yorumları
   gör" değil — linkin gerçekte yaptığıyla eşleşsin diye. */
export const googleReviewsUrl = 'https://g.page/r/CRALqW3KsQSrEBE/review';
