/* ---------------------------------------------------------------------------
   SAYFA İSKELETİ — <head>, yapısal veri ve bölüm sırası
--------------------------------------------------------------------------- */

import { site, meta } from '../data/site.js';
import * as C from '../data/content.js';
import { t, esc } from '../lib/util.mjs';
import * as Sec from './sections.mjs';

const FONTS =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500;600&display=swap';

function jsonLd(l) {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'SportsActivityLocation'],
    name: site.name,
    description: meta[l].description,
    url: site.origin + site.base + (l === 'en' ? 'en/' : ''),
    image: `${site.origin}${site.base}assets/img/og.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street || undefined,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: 'TR',
    },
    hasMap: site.address.mapsUrl,
    sameAs: [site.instagram.url],
    inLanguage: l === 'en' ? 'en' : 'tr',
    ...(site.phone ? { telephone: site.phone.e164 } : {}),
  };
  return JSON.stringify(data, (k, v) => (v === undefined ? undefined : v));
}

export function page(ctx) {
  const { l, A, other, canonical, altTr, altEn, revs, dims } = ctx;
  const heroSrc = 'assets/img/studio/hero.svg';
  const heroV = dims[heroSrc] && dims[heroSrc].v ? `?v=${dims[heroSrc].v}` : '';
  const m = meta[l];

  return `<!doctype html>
<html lang="${l}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.description)}">
<meta name="theme-color" content="#F4F1EA" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1E201C" media="(prefers-color-scheme: dark)">
<meta name="format-detection" content="telephone=no">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="tr" href="${altTr}">
<link rel="alternate" hreflang="en" href="${altEn}">
<link rel="alternate" hreflang="x-default" href="${altTr}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(m.title)}">
<meta property="og:description" content="${esc(m.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="${l === 'en' ? 'en_GB' : 'tr_TR'}">
<meta property="og:locale:alternate" content="${l === 'en' ? 'tr_TR' : 'en_GB'}">
<meta property="og:image" content="${site.origin}${site.base}assets/img/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(m.ogAlt)}">
<meta name="twitter:card" content="summary_large_image">

<link rel="icon" href="${A}assets/img/brand/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${A}assets/img/brand/apple-touch-icon.png">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="image" href="${A}${heroSrc}${heroV}" fetchpriority="high">
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="${A}assets/css/app.css?v=${revs.css}">

<script>document.documentElement.classList.add('js')</script>
<script type="application/ld+json">${jsonLd(l)}</script>
</head>
<body>
<a class="skip" href="#main">${esc(t(C.ui.skip, l))}</a>

${Sec.header(ctx)}

<main id="main">
${Sec.hero(ctx)}
${Sec.difference(ctx)}
${Sec.classes(ctx)}
${Sec.studio(ctx)}
${Sec.approach(ctx)}
${Sec.schedule(ctx)}
${Sec.teamSection(ctx)}
${Sec.founder(ctx)}
${Sec.packages(ctx)}
${Sec.reviewsBlock(ctx)}
${Sec.contact(ctx)}
</main>

${Sec.footer(ctx)}
${Sec.lightbox(ctx)}
${Sec.stickyWhatsapp(ctx)}

<script src="${A}assets/js/app.js?v=${revs.js}" defer></script>
</body>
</html>
`;
}
