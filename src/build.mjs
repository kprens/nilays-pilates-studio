/* ---------------------------------------------------------------------------
   BUILD
   src/data + src/templates → index.html (TR) ve en/index.html (EN)

   Çalıştır:  node src/build.mjs
   Çıktı statik dosyalardır; GitHub Pages doğrudan yayınlar, sunucu gerekmez.
--------------------------------------------------------------------------- */

import { writeFileSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { page } from './templates/page.mjs';
import { site } from './data/site.js';
import { isSample } from './data/schedule.js';
import { reviews, googleReviewsUrl } from './data/reviews.js';
import { pricing } from './data/pricing.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/* Her görsel için: boyut (CLS önlemek üzere width/height) + içerik hash'i
   (aynı dosya adıyla gerçek fotoğraf konduğunda önbellek kırılsın diye). */
function collectDims(dir, out = {}) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) { collectDims(full, out); continue; }
    const key = relative(ROOT, full).split('\\').join('/');
    const buf = readFileSync(full);
    const entry = { v: createHash('sha1').update(buf).digest('hex').slice(0, 8) };
    if (name.endsWith('.svg')) {
      const head = buf.toString('utf8').slice(0, 600);
      const w = head.match(/\bwidth="(\d+)"/), h = head.match(/\bheight="(\d+)"/);
      if (w && h) { entry.w = w[1]; entry.h = h[1]; }
    }
    out[key] = entry;
  }
  return out;
}
const dims = collectDims(resolve(ROOT, 'assets/img'));

/* Önbellek kırıcı: dosya içeriğinin kısa hash'i. Yayın sonrası ziyaretçiler
   eski CSS/JS değil, yeni sürümü alır. */
const rev = (relPath) =>
  createHash('sha1').update(readFileSync(resolve(ROOT, relPath))).digest('hex').slice(0, 8);
const revs = { css: rev('assets/css/app.css'), js: rev('assets/js/app.js') };

const BASE = site.origin + site.base;
const targets = [
  { l: 'tr', file: 'index.html',    A: '',     other: 'en/',  canonical: BASE },
  { l: 'en', file: 'en/index.html', A: '../',  other: '../',  canonical: BASE + 'en/' },
];

for (const tgt of targets) {
  const ctx = { ...tgt, dims, revs, altTr: BASE, altEn: BASE + 'en/' };
  const out = resolve(ROOT, tgt.file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(ctx));
  const kb = (Buffer.byteLength(page(ctx)) / 1024).toFixed(1);
  console.log(`✓ ${tgt.file.padEnd(16)} ${kb} kB`);
}

/* --------------------------- sitemap + robots ---------------------------- */
const lastmod = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: BASE, alt: { tr: BASE, en: BASE + 'en/' }, priority: '1.0' },
  { loc: BASE + 'en/', alt: { tr: BASE, en: BASE + 'en/' }, priority: '0.9' },
];
writeFileSync(resolve(ROOT, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="${u.alt.tr}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${u.alt.en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${u.alt.tr}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`);
writeFileSync(resolve(ROOT, 'robots.txt'),
`User-agent: *
Allow: /

Sitemap: ${BASE}sitemap.xml
`);
console.log('✓ sitemap.xml, robots.txt');

/* ------------------------- eksik veri raporu ----------------------------- */
const todo = [];
if (!site.phone) todo.push('site.phone — telefon numarası (iletişim satırı + tel: linki)');
if (!site.whatsapp) todo.push('site.whatsapp — WhatsApp numarası (sabit buton + footer linki)');
if (!site.email) todo.push('site.email — e-posta');
if (!site.formEndpoint) todo.push('site.formEndpoint — iletişim formunun gönderim adresi');
if (isSample) todo.push('src/data/schedule.js — gerçek haftalık program (şu an örnek)');
if (!reviews.length) todo.push('src/data/reviews.js — Google yorumları (bölüm boş durumda)');
if (!googleReviewsUrl) todo.push('src/data/reviews.js — Google işletme profili linki');
if (!pricing.some((p) => p.tiers.some((t) => t.en))) todo.push('src/data/pricing.js — İngilizce sayfa için ayrı fiyat (şu an TR fiyatları gösteriliyor)');
todo.push('assets/img/studio/*, assets/img/team/* — gerçek stüdyo ve portre fotoğrafları');

console.log('\nStüdyodan beklenen bilgiler:');
todo.forEach((x) => console.log('  ·', x));
