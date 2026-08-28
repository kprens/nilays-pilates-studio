/* ---------------------------------------------------------------------------
   HAFTALIK DERS PROGRAMI — İNCE KÖPRÜ

   Gerçek veri artık burada değil: schedule.json içinde. Nilay Hanım o
   dosyayı /admin panelinden (Decap CMS) kod bilgisi olmadan düzenliyor —
   sadece SAAT ve DİL giriyor; "Grup Reformer Dersi" yazısı ve gün adları
   sabit olduğu için panelde hiç sormuyoruz.

   Bu dosya JSON'u okuyup site şablonlarının (sections.mjs) beklediği eski
   `days` şeklini birebir üretir. Yani sections.mjs'in TEK SATIRI bile
   değişmedi — panel kurulumu görüntüde hiçbir risk taşımıyor.

   Gün metadatası (kısaltma, tam ad) ve ders türü metni burada sabit —
   bunlar Nilay Hanım'ın panelden değiştirmesi gereken şeyler değil.
--------------------------------------------------------------------------- */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(resolve(HERE, 'schedule.json'), 'utf8'));

const DAY_META = {
  pzt: { short: { tr: 'Pzt', en: 'Mon' }, name: { tr: 'Pazartesi', en: 'Monday' } },
  sal: { short: { tr: 'Sal', en: 'Tue' }, name: { tr: 'Salı', en: 'Tuesday' } },
  car: { short: { tr: 'Çar', en: 'Wed' }, name: { tr: 'Çarşamba', en: 'Wednesday' } },
  per: { short: { tr: 'Per', en: 'Thu' }, name: { tr: 'Perşembe', en: 'Thursday' } },
  cum: { short: { tr: 'Cum', en: 'Fri' }, name: { tr: 'Cuma', en: 'Friday' } },
  cmt: { short: { tr: 'Cmt', en: 'Sat' }, name: { tr: 'Cumartesi', en: 'Saturday' } },
  paz: { short: { tr: 'Paz', en: 'Sun' }, name: { tr: 'Pazar', en: 'Sunday' } },
};

/* Bugün tek bir ders türü var; panelde tekrar tekrar sormamak için sabit. */
const CLASS_TYPE = { tr: 'Grup Reformer Dersi', en: 'Group Reformer Class' };

export const isSample = false;

export const days = Object.keys(DAY_META).map((id) => ({
  id,
  ...DAY_META[id],
  sessions: (raw[id] || []).map((s) => ({
    time: s.time || null,
    type: CLASS_TYPE,
    instructor: null,
    language: s.language === 'en' ? 'en' : 'tr',
  })),
}));

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
