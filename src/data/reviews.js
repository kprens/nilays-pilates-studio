/* ---------------------------------------------------------------------------
   ÖĞRENCİ YORUMLARI — İNCE KÖPRÜ

   Gerçek veri artık burada değil: reviews.json içinde. Nilay Hanım o dosyayı
   /admin panelinden düzenliyor — Google'da yeni bir yorum aldıkça buraya
   kendisi ekleyip yayına alabiliyor, geliştirici beklemesine gerek yok.

   Yorum metni tek dilli tutuldu (TR/EN ayrı yazdırmak paneli gereksiz
   karmaşıklaştırırdı) — gerçek bir öğrencinin kendi cümleleri olduğu için
   İngilizce sayfada da orijinal haliyle gösteriliyor, çevrilmiyor.
--------------------------------------------------------------------------- */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(resolve(HERE, 'reviews.json'), 'utf8'));

export const reviews = raw.reviews || [];

/* Nilay Hanım'ın 29 Ağu'da paylaştığı link. Not: bu bir "/review" sonlu
   g.page kısa linki — tıklanınca doğrudan yorum YAZMA ekranını açar,
   mevcut yorumları listelemez (Google bu iki işlevi ayrı linkte tutuyor).
   O yüzden CTA metni content.js'te "yorum bırakın" olarak yazıldı, "yorumları
   gör" değil — linkin gerçekte yaptığıyla eşleşsin diye. */
export const googleReviewsUrl = 'https://g.page/r/CRALqW3KsQSrEBE/review';
