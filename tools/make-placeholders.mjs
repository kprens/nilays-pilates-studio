/* ---------------------------------------------------------------------------
   YER TUTUCU GÖRSEL ÜRETİCİ

   Stüdyodan henüz fotoğraf gelmediği için galeri, hero ve portre alanları
   burada üretilen SVG'lerle doldurulur: sıcak kağıt zemin, yumuşak ışık,
   ince çizgili ekipman deseni. Uydurma stok fotoğraf kullanılmaz.

   Çalıştır:  node tools/make-placeholders.mjs
   Gerçek fotoğraf geldiğinde bu dosyalar silinip .jpg konabilir
   (src/data/gallery.js içindeki `ext` alanını güncellemeyi unutmayın).
--------------------------------------------------------------------------- */

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const C = {
  light: '#F7F3EC',
  bone: '#EBE4D8',
  shade: '#DBD1C0',
  deep: '#C9BEAA',
  ink: '#26241F',
  clay: '#A0714E',
};

const seeded = (s) => {
  let h = 2166136261;
  for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507)) >>> 0) / 4294967296;
};

/* ---------- ince çizgi ekipman desenleri (0..100 koordinat sisteminde) ------ */
const line = (d, w = 0.55) =>
  `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const spring = (x1, x2, y, n = 5) => {
  let d = `M${x1} ${y}`;
  const step = (x2 - x1) / (n * 2);
  for (let i = 0; i < n * 2; i++) d += ` L${(x1 + step * (i + 1)).toFixed(2)} ${(y + (i % 2 ? 1.4 : -1.4)).toFixed(2)}`;
  return line(d + ` L${x2} ${y}`, 0.4);
};

const ART = {
  reformer: () =>
    line('M8 62 H92 M8 68 H92 M8 62 V72 M92 62 V72 M14 72 V78 M86 72 V78') +
    line('M22 52 h34 v10 h-34 z') +
    line('M60 62 V44 M60 44 h10 M70 44 V62') +
    line('M12 55 V62 M12 55 h6') +
    spring(12, 22, 58, 6) +
    line('M8 78 H92', 0.4),
  tower: () =>
    line('M20 82 H80 M20 82 V22 M80 82 V22 M20 22 H80') +
    line('M20 40 H80 M20 56 H80') +
    line('M32 22 V40 M68 22 V40') +
    spring(34, 34.001, 40) +
    line('M34 40 V52 M66 40 V52', 0.4) +
    line('M28 82 h44 v4 h-44 z'),
  cadillac: () =>
    line('M10 86 V16 M90 86 V16 M10 16 H90 M10 86 H90') +
    line('M10 34 H90 M10 62 H90') +
    line('M26 62 h48 v18 h-48 z') +
    line('M30 16 V34 M70 16 V34') +
    spring(30, 30.001, 34) +
    line('M30 34 V46 M70 34 V46', 0.4),
  chair: () =>
    line('M32 46 h36 v30 h-36 z') +
    line('M32 76 h36 M36 76 V82 M64 76 V82') +
    line('M28 60 h4 M28 60 V72 M28 72 h6') +
    line('M40 46 V34 M60 46 V34 M40 34 h20') +
    spring(30, 30.001, 66),
  room: () =>
    line('M0 66 H100 M0 20 H100', 0.4) +
    line('M14 20 V66 M46 20 V66 M78 20 V66', 0.35) +
    line('M18 30 h20 v26 h-20 z') +
    line('M50 30 h20 v26 h-20 z') +
    line('M28 30 V56 M60 30 V56', 0.35) +
    line('M6 78 h30 v4 h-30 z') +
    line('M56 74 h34 v6 h-34 z'),
  entrance: () =>
    line('M34 88 V26 a16 16 0 0 1 32 0 V88') +
    line('M34 88 H66 M50 26 V88', 0.4) +
    line('M42 58 h2 M56 58 h2', 1.1) +
    line('M22 88 H78', 0.4),
  detail: () =>
    line('M50 18 V82', 0.4) +
    line('M50 30 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0') +
    line('M38 52 h24 M40 60 h20 M43 68 h14') +
    spring(42, 58, 44, 4),
  klass: () =>
    line('M6 70 H94 M6 76 H94 M6 70 V80 M94 70 V80') +
    line('M20 60 h22 v10 h-22 z M58 60 h22 v10 h-22 z') +
    line('M31 60 V48 M31 48 a5 5 0 1 0 0.01 0') +
    line('M69 60 V48 M69 48 a5 5 0 1 0 0.01 0') +
    line('M26 54 h10 M64 54 h10', 0.4),
  atmosphere: () =>
    line('M20 16 V84', 0.35) +
    line('M20 30 h22 M20 52 h16 M20 74 h26', 0.35) +
    line('M64 84 V44 a10 10 0 0 1 20 0 V84 M64 84 H84') +
    line('M74 44 V30', 0.4),
  founder: () =>
    line('M50 44 m-13 0 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0') +
    line('M26 92 a24 24 0 0 1 48 0'),
  /* Hero ölçeğinde çizgi deseni tel kafes gibi okunuyor; burada yalnızca
     çok soluk bir duvar/zemin ayrım çizgisi bırakılır. */
  wash: () => line('M0 72 H100', 0.3),
};

/* --------------------------------- render -------------------------------- */
function svg({ w, h, art, seed, tone = 0, mono = null, label = '' }) {
  const rnd = seeded(seed);
  const angle = 20 + rnd() * 45;
  const top = [C.light, C.bone, C.light][tone % 3];
  const bot = [C.shade, C.deep, C.bone][tone % 3];
  const lightX = 12 + rnd() * 30;
  const isWash = art === 'wash';
  const artScale = isWash ? w : Math.min(w, h) * (art === 'founder' ? 0.72 : 0.86);
  const ax = isWash ? 0 : (w - artScale) / 2;
  const ay = isWash ? 0 : (h - artScale) / 2 + (art === 'founder' ? artScale * 0.06 : 0);
  const id = seed.replace(/[^a-z0-9]/gi, '');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="g${id}" gradientTransform="rotate(${angle.toFixed(1)})">
      <stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/>
    </linearGradient>
    <linearGradient id="l${id}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="#FFFDF8" stop-opacity=".85"/>
      <stop offset="1" stop-color="#FFFDF8" stop-opacity="0"/>
    </linearGradient>
    <filter id="n${id}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <g opacity=".55"><path d="M${(w * lightX) / 100} 0 L${(w * (lightX + 26)) / 100} 0 L${(w * (lightX + 52)) / 100} ${h} L${(w * (lightX + 6)) / 100} ${h} Z" fill="url(#l${id})"/></g>
  ${mono
      ? `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="Fraunces, Georgia, serif" font-size="${Math.min(w, h) * 0.3}" font-weight="300" fill="${C.ink}" opacity=".2" letter-spacing="${Math.min(w, h) * 0.01}">${mono}</text>`
      : ''}
  ${isWash ? `<g opacity=".5"><path d="M${(w * (lightX + 44)) / 100} 0 L${(w * (lightX + 70)) / 100} 0 L${w} ${h * 0.82} L${(w * (lightX + 30)) / 100} ${h} Z" fill="url(#l${id})"/></g>` : ''}
  <g transform="translate(${ax.toFixed(1)} ${ay.toFixed(1)}) scale(${(artScale / 100).toFixed(4)})" opacity="${isWash ? 0.14 : art === 'founder' ? 0.16 : 0.3}">${ART[art] ? ART[art]() : ''}</g>
  <rect width="${w}" height="${h}" filter="url(#n${id})" opacity=".07" style="mix-blend-mode:multiply"/>
  ${label ? `<!-- yer tutucu: ${label} -->` : ''}
</svg>`;
}

const OUT = [
  ['assets/img/studio/hero.svg',           { w: 1600, h: 1100, art: 'wash',       seed: 'hero',       tone: 0, label: 'stüdyo genel' }],
  ['assets/img/studio/reformer-grup.svg',  { w: 1400, h: 1050, art: 'reformer',   seed: 'refgrup',    tone: 1 }],
  ['assets/img/studio/ozel-ders.svg',      { w: 1400, h: 1050, art: 'cadillac',   seed: 'ozel',       tone: 0 }],
  ['assets/img/studio/yaklasim.svg',       { w: 1400, h: 1600, art: 'atmosphere', seed: 'yaklasim',   tone: 2 }],
  ['assets/img/studio/genel-gorunum.svg',  { w: 1600, h: 1000, art: 'room',       seed: 'genel',      tone: 1 }],
  ['assets/img/studio/reformer.svg',       { w: 900,  h: 1200, art: 'reformer',   seed: 'reformer',   tone: 0 }],
  ['assets/img/studio/tower.svg',          { w: 1200, h: 900,  art: 'tower',      seed: 'tower',      tone: 2 }],
  ['assets/img/studio/cadillac.svg',       { w: 1200, h: 900,  art: 'cadillac',   seed: 'cadillac',   tone: 1 }],
  ['assets/img/studio/chair.svg',          { w: 1200, h: 900,  art: 'chair',      seed: 'chair',      tone: 0 }],
  ['assets/img/studio/detay.svg',          { w: 1200, h: 900,  art: 'detail',     seed: 'detay',      tone: 2 }],
  ['assets/img/studio/ders.svg',           { w: 1600, h: 1000, art: 'klass',      seed: 'ders',       tone: 0 }],
  ['assets/img/studio/giris.svg',          { w: 1200, h: 900,  art: 'entrance',   seed: 'giris',      tone: 1 }],
  ['assets/img/studio/atmosfer.svg',       { w: 900,  h: 1200, art: 'atmosphere', seed: 'atmosfer',   tone: 2 }],
  ['assets/img/team/nilay-kentkur.svg',    { w: 900,  h: 1150, art: 'founder',    seed: 'nilay',  tone: 0, mono: 'NK' }],
  ['assets/img/team/damla.svg',            { w: 900,  h: 1150, art: 'founder',    seed: 'damla',  tone: 1, mono: 'D' }],
  ['assets/img/team/hilal.svg',            { w: 900,  h: 1150, art: 'founder',    seed: 'hilal',  tone: 2, mono: 'H' }],
];

for (const [path, opts] of OUT) {
  const full = resolve(ROOT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, svg(opts));
}
console.log(`✓ ${OUT.length} yer tutucu görsel üretildi`);
