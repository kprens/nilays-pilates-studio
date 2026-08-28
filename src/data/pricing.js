/* ---------------------------------------------------------------------------
   PAKETLER — İNCE KÖPRÜ

   Gerçek fiyatlar artık burada değil: pricing.json içinde. Nilay Hanım o
   dosyayı /admin panelinden sadece TOPLAM FİYAT ve HAFTA girerek düzenliyor
   — ders başına fiyatı ve "en avantajlı" rozetini kod otomatik hesaplıyor,
   panelde ayrıca sorulmuyor (yanlış hesap riski kalmasın diye).

   Paket adı/açıklaması (name/summary) ve İngilizce fiyat farkı bu turun
   kapsamı dışında bırakıldı — sabit kaldı, panelden değişmiyor.
--------------------------------------------------------------------------- */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(resolve(HERE, 'pricing.json'), 'utf8'));

export const currency = { code: 'TRY', symbol: '₺' };

const META = {
  ozel: {
    name: { tr: 'Özel Ders', en: 'Private Session' },
    size: { tr: '1 Kişi', en: '1 Person' },
    summary: {
      tr: 'Tamamen size özel, birebir Pilates deneyimi.',
      en: 'A one-to-one Pilates experience, entirely your own.',
    },
  },
  ikili: {
    name: { tr: '2’li Ders', en: 'Duo Session' },
    size: { tr: '2 Kişi', en: '2 People' },
    summary: {
      tr: 'Bir arkadaşınız veya partnerinizle birlikte, daha kişisel bir ders deneyimi.',
      en: 'A more personal class, shared with a friend or your partner.',
    },
  },
  grup: {
    name: { tr: 'Grup Dersi', en: 'Group Class' },
    size: { tr: '3 Kişi ve Üzeri', en: '3 People or More' },
    summary: {
      tr: 'Küçük gruplarda, eğitmenin kişisel ilgisini koruduğu bir Pilates deneyimi.',
      en: 'Pilates in a small group, where the instructor’s personal attention is kept.',
    },
  },
};

const round2 = (n) => Math.round(n * 100) / 100;

/* JSON'da kademe sayıları (8/12/24) alan ADI olarak sabit — Nilay Hanım'ın
   panelden yanlışlıkla değiştiremeyeceği bir yerde. Sadece total ve weeks
   editable. */
const TIER_COUNTS = { t8: 8, t12: 12, t24: 24 };

export const pricing = Object.keys(META).map((id) => {
  const tiers = Object.keys(TIER_COUNTS).map((key) => {
    const count = TIER_COUNTS[key];
    const t = (raw[id] || {})[key] || { total: 0, weeks: 0 };
    return { count, total: t.total, weeks: t.weeks, perClass: round2(t.total / count) };
  });
  const cheapest = Math.min(...tiers.map((t) => t.perClass));
  return {
    id,
    ...META[id],
    tiers: tiers.map((t) => ({ ...t, best: t.perClass === cheapest })),
  };
});

export const weeksLabel = {
  tr: (n) => `${n} hafta`,
  en: (n) => `${n} weeks`,
};

export const countLabel = {
  tr: (n) => `${n} Ders`,
  en: (n) => `${n} Classes`,
};
