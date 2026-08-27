/* ---------------------------------------------------------------------------
   BÖLÜM ŞABLONLARI
   Her fonksiyon tek bir <section> üretir. Veriler src/data/ altından gelir;
   burada içerik yazılı değildir.
   Ortak bağlam nesnesi ctx: { l (dil), A (asset öneki), dims (görsel boyutları) }
--------------------------------------------------------------------------- */

import { t, esc, map, when, d, money, pad, icon } from '../lib/util.mjs';
import { site, nav } from '../data/site.js';
import * as C from '../data/content.js';
import { team } from '../data/team.js';
import { gallery, figures } from '../data/gallery.js';
import { pricing, currency, weeksLabel, countLabel } from '../data/pricing.js';
import * as S from '../data/schedule.js';
import { reviews, googleReviewsUrl } from '../data/reviews.js';

/* ------------------------------ ortak parçalar --------------------------- */

const fig = (ctx, f, { cls = '', delay = 0, eager = false, sizes = '' } = {}) => {
  const { l, A, dims } = ctx;
  const path = `assets/img/${f.dir || 'studio'}/${f.src}.${f.ext}`;
  const dim = dims[path] || {};
  const v = dim.v ? `?v=${dim.v}` : '';
  return `<figure class="figure ${cls}" data-reveal="img"${d(delay)}>
    <img src="${A}${path}${v}" alt="${esc(t(f.alt, l))}"${dim.w ? ` width="${dim.w}" height="${dim.h}"` : ''}
         ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${sizes ? ` sizes="${sizes}"` : ''}>
    ${when(f.placeholder, `<figcaption class="ph">${esc(t(C.ui.placeholderNote, l))}</figcaption>`)}
  </figure>`;
};

const head = (ctx, { index, kicker, title, lede = null, id = null, center = false }) => {
  const { l } = ctx;
  return `<div class="section-head${center ? ' is-center' : ''}">
    <p class="eyebrow${center ? ' is-center' : ''}" data-reveal="fade"><span class="num">${index}</span> ${esc(t(kicker, l))}</p>
    <h2 class="h2"${id ? ` id="${id}"` : ''} data-reveal${d(60)}>${esc(t(title, l))}</h2>
    ${when(lede, () => `<p class="lede" data-reveal${d(120)}>${esc(t(lede, l))}</p>`)}
  </div>`;
};

/* --------------------------------- HERO ---------------------------------- */
export const hero = (ctx) => {
  const { l, dims } = ctx;
  const h = C.hero;
  const heroPath = `assets/img/studio/${figures.hero.src}.${figures.hero.ext}`;
  const heroV = dims[heroPath] && dims[heroPath].v ? `?v=${dims[heroPath].v}` : '';
  return `<header class="hero" id="hero">
  <div class="hero-bg">
    <img src="${ctx.A}assets/img/studio/${figures.hero.src}.${figures.hero.ext}${heroV}" alt="${esc(t(figures.hero.alt, l))}"
         fetchpriority="high" decoding="async">
    ${when(figures.hero.placeholder, `<span class="ph">${esc(t(C.ui.placeholderNote, l))}</span>`)}
  </div>
  <div class="hero-in wrap wrap-wide">
    <p class="eyebrow">${esc(t(h.eyebrow, l))}</p>
    <h1 class="h1">${map(t(h.title, l), (line, i) => `<span><i style="--d:${120 + i * 110}ms">${esc(line)}</i></span>`)}</h1>
    <p class="lede hero-lede" data-reveal${d(420)}>${esc(t(h.lede, l))}</p>
    <div class="hero-cta" data-reveal${d(520)}>
      <a class="btn" href="#dersler">${esc(t(h.ctaPrimary, l))}${icon.arrow}</a>
      <a class="btn btn-ghost" href="#iletisim">${esc(t(h.ctaSecondary, l))}</a>
    </div>
    <ul class="chips" data-reveal${d(600)}>
      ${map(h.chips, (c) => `<li>${esc(t(c, l))}</li>`)}
    </ul>
  </div>
</header>`;
};

/* ----------------------------- BİZİ FARKLI KILAN ------------------------- */
export const difference = (ctx) => {
  const { l } = ctx;
  const s = C.difference;
  return `<section class="section" id="fark" aria-labelledby="fark-h">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow" data-reveal="fade"><span class="num">${s.index}</span> ${esc(t(s.kicker, l))}</p>
      <h2 class="h2" id="fark-h" data-reveal${d(60)}>${esc(t(s.title, l))}</h2>
    </div>
    <dl class="diff-list">
      ${map(s.items, (it, i) => `<div class="diff-item" data-reveal${d(i * 70)}>
        <span class="n">${pad(i + 1)}</span>
        <dt class="h3">${esc(t(it.title, l))}</dt>
        <dd class="body">${esc(t(it.body, l))}</dd>
      </div>`)}
    </dl>
  </div>
</section>`;
};

/* -------------------------------- DERSLER -------------------------------- */
export const classes = (ctx) => {
  const { l } = ctx;
  const s = C.classes;
  return `<section class="section" id="dersler" aria-labelledby="dersler-h">
  <div class="wrap">
    ${head(ctx, { index: s.index, kicker: s.kicker, title: s.title, id: 'dersler-h' })}
    ${map(s.items, (it, i) => `<article class="class-row${i % 2 ? ' flip' : ''}">
      ${fig(ctx, { ...it, src: it.image.src, dir: it.image.dir, ext: it.image.ext, placeholder: it.image.placeholder }, { delay: 40 })}
      <div>
        <p class="class-label" data-reveal="fade">${esc(t(it.label, l))}</p>
        <p class="class-name" data-reveal="fade"${d(40)}>${esc(t(it.name, l))}</p>
        <h3 class="h2" data-reveal${d(80)}>${esc(t(it.headline, l))}</h3>
        <p class="body class-body" data-reveal${d(140)}>${esc(t(it.body, l))}</p>
        <dl class="facts" data-reveal${d(200)}>
          ${map(it.facts, (f) => `<div><dt>${esc(t(f.label, l))}</dt><dd>${esc(t(f.value, l))}</dd></div>`)}
        </dl>
        <a class="link" href="${it.cta.href}" data-reveal${d(260)}>${esc(t(it.cta.label, l))}${icon.arrow}</a>
      </div>
    </article>`)}
  </div>
</section>`;
};

/* -------------------------------- STÜDYO --------------------------------- */
export const studio = (ctx) => {
  const { l, A, dims } = ctx;
  const s = C.studio;
  return `<section class="section" id="studyo" aria-labelledby="studyo-h">
  <div class="wrap wrap-wide">
    <div class="cols cols-head">
      <div class="section-head" style="margin-bottom:0">
        <p class="eyebrow" data-reveal="fade"><span class="num">${s.index}</span> ${esc(t(s.kicker, l))}</p>
        <h2 class="h2" id="studyo-h" data-reveal${d(60)}>${esc(t(s.title, l))}</h2>
      </div>
      <div class="studio-meta">
        ${map(s.body, (p, i) => `<p class="${i === 0 ? 'lede' : 'body'}" data-reveal${d(80 + i * 70)}>${esc(t(p, l))}</p>`)}
        <p class="studio-loc" data-reveal${d(220)}>${esc(t(s.locationLabel, l))}<strong>${esc(t(s.location, l))}</strong></p>
        <a class="btn btn-ghost" style="justify-self:start" href="${site.address.mapsUrl}" target="_blank" rel="noopener noreferrer" data-reveal${d(280)}>${icon.pin}${esc(t(s.cta, l))}</a>
      </div>
    </div>

    <div class="gallery" id="galeri">
      ${map(gallery, (g, i) => `<button class="g-item g-${g.span}" type="button" data-lb="${i}" data-reveal${d((i % 4) * 60)}
        aria-label="${esc(t(g.category, l))} — ${esc(t(s.galleryHint, l))}">
        <img src="${A}assets/img/studio/${g.src}.${g.ext}${dims[`assets/img/studio/${g.src}.${g.ext}`] ? `?v=${dims[`assets/img/studio/${g.src}.${g.ext}`].v}` : ''}" alt="${esc(t(g.alt, l))}" loading="lazy" decoding="async">
        ${when(g.placeholder, `<span class="ph">${esc(t(C.ui.placeholderNote, l))}</span>`)}
        <figcaption><span>${esc(t(g.category, l))}</span>${icon.expand}</figcaption>
      </button>`)}
    </div>
  </div>
</section>`;
};

/* ------------------------------- YAKLAŞIM -------------------------------- */
export const approach = (ctx) => {
  const { l } = ctx;
  const s = C.approach;
  return `<section class="section deep" id="yaklasim" aria-labelledby="yaklasim-h">
  <div class="wrap wrap-wide">
    <div class="approach-grid">
      <div class="approach-fig">${fig(ctx, figures.approach, { cls: 'is-tall' })}</div>
      <div>
        <div class="section-head">
          <p class="eyebrow" data-reveal="fade"><span class="num">${s.index}</span> ${esc(t(s.kicker, l))}</p>
          <h2 class="h2" id="yaklasim-h" data-reveal${d(60)}>${esc(t(s.title, l))}</h2>
          <p class="lede" data-reveal${d(120)}>${esc(t(s.lede, l))}</p>
        </div>
        <dl class="values">
          ${map(s.values, (v, i) => `<div class="value" data-reveal${d(i * 80)}>
            <dt>${esc(t(v.key, l))}</dt>
            <dd>${esc(t(v.body, l))}</dd>
          </div>`)}
        </dl>
      </div>
    </div>
  </div>
</section>`;
};

/* --------------------------------- EKİP ---------------------------------- */
export const teamSection = (ctx) => {
  const { l } = ctx;
  const s = C.teamSection;
  return `<section class="section" id="ekip" aria-labelledby="ekip-h">
  <div class="wrap">
    ${head(ctx, { index: s.index, kicker: s.kicker, title: s.title, lede: s.lede, id: 'ekip-h' })}
    <ul class="team">
      ${map(team, (m, i) => `<li class="member" data-reveal${d(i * 90)}>
        ${fig(ctx, { src: m.photo, ext: m.ext, dir: 'team', placeholder: true, alt: { tr: `${m.name} — ${t(m.role, 'tr')}`, en: `${m.name} — ${t(m.role, 'en')}` } }, { delay: i * 90 })}
        <h3 class="h3">${esc(m.name)}</h3>
        <p class="role">${esc(t(m.role, l))}</p>
      </li>`)}
    </ul>
  </div>
</section>`;
};

/* ------------------------------- KURUCU ---------------------------------- */
export const founder = (ctx) => {
  const { l } = ctx;
  const s = C.founder;
  const person = team.find((m) => m.founder) || team[0];
  return `<section class="section" id="kurucu" aria-labelledby="kurucu-h">
  <div class="wrap">
    <div class="founder">
      ${fig(ctx, { src: person.photo, ext: person.ext, dir: 'team', placeholder: true, alt: { tr: `${s.name} portresi`, en: `Portrait of ${s.name}` } })}
      <div>
        <p class="eyebrow" data-reveal="fade"><span class="num">${s.index}</span> ${esc(t(s.kicker, l))}</p>
        <h2 class="h2" id="kurucu-h" data-reveal${d(60)}>${esc(s.name)}</h2>
        <p class="role" data-reveal${d(100)}>${esc(t(s.role, l))}</p>
        <div class="founder-body">
          ${map(s.body, (p, i) => `<p class="${i === 0 ? 'lede' : 'body'}" data-reveal${d(140 + i * 70)}>${esc(t(p, l))}</p>`)}
        </div>
      </div>
    </div>
  </div>
</section>`;
};

/* ------------------------------- PAKETLER -------------------------------- */
export const packages = (ctx) => {
  const { l } = ctx;
  const s = C.pricingSection;
  const L = s.labels;
  const price = (tier) => (tier.en && l === 'en' ? tier.en : tier);

  return `<section class="section" id="paketler" aria-labelledby="paketler-h">
  <div class="wrap">
    ${head(ctx, { index: s.index, kicker: s.kicker, title: s.title, id: 'paketler-h' })}

    <div class="tabs" role="tablist" aria-label="${esc(t(s.kicker, l))}" data-reveal="fade">
      ${map(pricing, (p, i) => `<button class="tab" type="button" role="tab" id="tab-${p.id}"
        aria-controls="panel-${p.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
        ${esc(t(p.name, l))} <span class="muted" aria-hidden="true">· ${esc(t(p.size, l))}</span>
      </button>`)}
    </div>

    ${map(pricing, (p, i) => {
      const base = price(p.tiers[0]);
      return `<div class="panel" id="panel-${p.id}" role="tabpanel" aria-labelledby="tab-${p.id}"${i === 0 ? '' : ' hidden'}>
      <p class="lede panel-sum">${esc(t(p.summary, l))}</p>
      <div class="tiers">
        ${map(p.tiers, (tr) => {
          const v = price(tr);
          const saving = base.perClass - v.perClass;
          return `<article class="tier${tr.best ? ' is-best' : ''}">
            ${when(tr.best, `<p class="tier-badge">${esc(t(L.best, l))}</p>`)}
            <p class="tier-count">${esc(countLabel[l](tr.count))}</p>
            <p class="tier-total">${esc(money(v.total, l, currency.symbol))}</p>
            <p class="tier-per">${esc(money(v.perClass, l, currency.symbol))} <span class="muted">${esc(t(L.perClass, l))}</span></p>
            <p class="tier-meta">
              <span>${esc(weeksLabel[l](tr.weeks))}</span>
              ${when(saving > 0, `<span>−${esc(money(saving, l, currency.symbol))} ${esc(t(L.save, l))}</span>`)}
            </p>
            <a class="tier-cta" href="#iletisim">${esc(t(L.cta, l))}${icon.arrow}</a>
          </article>`;
        })}
      </div>
    </div>`;
    })}

    <p class="small muted price-note" data-reveal="fade">${esc(t(s.note, l))}</p>
  </div>
</section>`;
};

/* ----------------------------- DERS PROGRAMI ----------------------------- */
export const schedule = (ctx) => {
  const { l } = ctx;
  const s = C.scheduleSection;
  const L = s.labels;
  const enBadge = `<span class="badge-en">${esc(t(L.english, l))}</span>`;

  const timeLabel = (ss) => (ss.time ? ss.time : t(S.timeTbdLabel, l));

  const rows = map(S.days, (day) => `<tr>
    <th scope="row">${esc(t(day.name, l))}</th>
    <td>${day.sessions.length === 0
      ? `<span class="sched-empty">${esc(t(L.closed, l))}</span>`
      : map(day.sessions, (ss) => `<span class="slot-row${ss.time ? '' : ' is-tbd'}">
          <span class="slot-time">${esc(timeLabel(ss))}</span>
          <span class="slot-type">${esc(t(ss.type, l))}</span>
          ${ss.language === 'en' ? enBadge : ''}
          <span class="slot-who">${esc(ss.instructor || '')}</span>
        </span>`)}</td>
  </tr>`);

  const tabs = map(S.days, (day, i) => `<button class="day-tab" type="button" role="tab" id="dtab-${day.id}"
    aria-controls="dpanel-${day.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
    <span class="d">${esc(t(day.short, l))}</span><span class="c">${day.sessions.length || '–'}</span>
  </button>`);

  const panels = map(S.days, (day, i) => `<div class="day-panel" id="dpanel-${day.id}" role="tabpanel" aria-labelledby="dtab-${day.id}"${i === 0 ? '' : ' hidden'}>
    ${day.sessions.length === 0
      ? `<p class="sched-empty">${esc(t(L.closed, l))}</p>`
      : map(day.sessions, (ss) => `<article class="day-card${ss.time ? '' : ' is-tbd'}">
          <p class="t"><span class="time">${esc(timeLabel(ss))}</span>${ss.language === 'en' ? enBadge : ''}</p>
          <p class="type">${esc(t(ss.type, l))}</p>
          ${when(ss.instructor, `<p class="who">${esc(ss.instructor)}</p>`)}
        </article>`)}
  </div>`);

  return `<section class="section" id="program" aria-labelledby="program-h">
  <div class="wrap">
    ${head(ctx, { index: s.index, kicker: s.kicker, title: s.title, id: 'program-h' })}

    ${when(S.isSample, `<p class="sched-note" data-reveal="fade">${icon.info}<span>${esc(t(S.sampleNote, l))}</span></p>`)}

    <div class="sched-desktop" data-reveal="fade">
      <table class="sched-week">
        <caption class="sr">${esc(t(s.title, l))}</caption>
        <thead><tr>
          <th scope="col">${esc(t(L.day, l))}</th>
          <th scope="col">${esc(t(L.time, l))} · ${esc(t(L.type, l))} · ${esc(t(L.instructor, l))}</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>

    <div class="sched-mobile" data-sched>
      <div class="day-tabs" role="tablist" aria-label="${esc(t(s.title, l))}">${tabs}</div>
      ${panels}
    </div>

    <p class="small muted price-note">${esc(t(S.privateNote, l))}</p>
  </div>
</section>`;
};

/* ------------------------------- YORUMLAR -------------------------------- */
export const reviewsBlock = (ctx) => {
  const { l } = ctx;
  const s = C.reviewsSection;
  const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

  const body = reviews.length
    ? `<div class="review-grid">${map(reviews, (r, i) => `<figure class="review" data-reveal${d(i * 80)}>
        <p class="stars" aria-label="${r.rating}/5">${stars(r.rating)}</p>
        <blockquote>${esc(t(r.text, l))}</blockquote>
        <cite>${esc(r.author)}</cite>
      </figure>`)}</div>`
    : `<div class="reviews-empty" data-reveal="fade">
        <span class="badge">${esc(t(s.emptyBadge, l))}</span>
        <p>${esc(t(s.empty, l))}</p>
        ${when(googleReviewsUrl, () => `<a class="btn btn-ghost btn-sm" href="${googleReviewsUrl}" target="_blank" rel="noopener noreferrer">${esc(t(s.cta, l))}${icon.arrow}</a>`)}
      </div>`;

  return `<section class="section" id="yorumlar" aria-labelledby="yorumlar-h">
  <div class="wrap">
    ${head(ctx, { index: s.index, kicker: s.kicker, title: s.title, id: 'yorumlar-h', center: true })}
    ${body}
  </div>
</section>`;
};

/* -------------------------------- İLETİŞİM ------------------------------- */
export const contact = (ctx) => {
  const { l } = ctx;
  const s = C.contactSection;
  const ch = s.channels;
  const F = s.form;

  const row = (key, value, href = null, pending = false) => {
    const inner = `<span class="k">${esc(key)}</span>
      <span class="v${pending ? ' pending' : ''}">${value}</span>${href ? icon.arrow : ''}`;
    return href
      ? `<a class="channel" href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a>`
      : `<div class="channel">${inner}</div>`;
  };

  const addr = [site.address.street, `${site.address.district}, ${site.address.city}`]
    .filter(Boolean).join('<br>');

  return `<section class="section deep" id="iletisim" aria-labelledby="iletisim-h">
  <div class="wrap wrap-wide">
    <div class="section-head">
      <p class="eyebrow" data-reveal="fade"><span class="num">${s.index}</span> ${esc(t(s.kicker, l))}</p>
      <h2 class="h2" id="iletisim-h" data-reveal${d(60)}>${esc(t(s.title, l))}</h2>
      <p class="lede" data-reveal${d(120)}>${esc(t(s.lede, l))}</p>
    </div>

    <div class="contact">
      <div class="channels" data-reveal="fade">
        ${row(t(ch.address, l), addr, site.address.mapsUrl)}
        ${site.phone
          ? row(t(ch.phone, l), esc(site.phone.display), `tel:${site.phone.e164}`)
          : row(t(ch.phone, l), esc(t(ch.pending, l)), null, true)}
        ${site.whatsapp
          ? row(t(ch.whatsapp, l), esc(site.phone ? site.phone.display : 'WhatsApp'), `https://wa.me/${site.whatsapp}`)
          : row(t(ch.whatsapp, l), esc(t(ch.pending, l)), null, true)}
        ${row(t(ch.instagram, l), esc(site.instagram.handle), site.instagram.url)}
        ${row(t(ch.maps, l), esc(t(C.studio.cta, l)), site.address.mapsUrl)}
      </div>

      <div>
        <form class="form" id="contact-form" novalidate${site.formEndpoint ? ` action="${site.formEndpoint}" method="post"` : ''}>
          <div class="form-grid">
            <div class="field">
              <label for="f-name">${esc(t(F.name, l))}</label>
              <input id="f-name" name="name" type="text" autocomplete="name" required>
            </div>
            <div class="field">
              <label for="f-phone">${esc(t(F.phone, l))}</label>
              <input id="f-phone" name="phone" type="tel" autocomplete="tel" required>
            </div>
          </div>
          <div class="field">
            <label for="f-email">${esc(t(F.email, l))} <span class="muted">(${esc(t(F.optional, l))})</span></label>
            <input id="f-email" name="email" type="email" autocomplete="email">
          </div>
          <div class="field">
            <label for="f-msg">${esc(t(F.message, l))}</label>
            <textarea id="f-msg" name="message" rows="4" placeholder="${esc(t(F.messagePlaceholder, l))}"></textarea>
          </div>
          <button class="btn" type="submit">${esc(t(F.submit, l))}${icon.arrow}</button>
        </form>

        <div class="form-done" id="form-done" role="status" aria-live="polite">
          <h3 class="h3">${esc(t(F.successTitle, l))}</h3>
          <p class="body">${esc(t(F.successBody, l))}</p>
          <a class="link" href="${site.instagram.url}" target="_blank" rel="noopener noreferrer">${esc(t(F.successCta, l))}${icon.arrow}</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
};

/* --------------------------------- FOOTER -------------------------------- */
export const footer = (ctx) => {
  const { l, other } = ctx;
  const f = C.footer;
  const year = new Date().getFullYear();
  return `<section class="endcta wrap">
  <p class="eyebrow is-center" data-reveal="fade">${esc(t(f.cta.kicker, l))}</p>
  <h2 class="h2" data-reveal${d(60)}>${esc(t(f.cta.title, l))}</h2>
  <a class="btn" href="#iletisim" data-reveal${d(120)}>${esc(t(f.cta.button, l))}${icon.arrow}</a>
</section>

<footer class="footer">
  <div class="wrap">
    <div class="footer-in">
      <div>
        <p class="brand"><span>${esc(site.nameParts.first)}</span> <span class="ac">${esc(site.nameParts.accent)}</span> <span>${esc(site.nameParts.last)}</span></p>
        <p class="small muted" style="margin-top:.35rem">${esc(t(site.tagline, l))}</p>
      </div>
      <nav class="footer-links" aria-label="${esc(t(C.contactSection.kicker, l))}">
        <a href="${site.instagram.url}" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="${site.whatsapp ? `https://wa.me/${site.whatsapp}` : '#iletisim'}"${site.whatsapp ? ' target="_blank" rel="noopener noreferrer"' : ''}>WhatsApp</a>
        <a href="${site.address.mapsUrl}" target="_blank" rel="noopener noreferrer">Google Maps</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <p>${esc(t(f.rights, l).replace('{year}', year))}</p>
      <p class="lang">
        <a href="${l === 'tr' ? '#' : other}"${l === 'tr' ? ' aria-current="true"' : ''} hreflang="tr">TR</a>
        <span class="sep">|</span>
        <a href="${l === 'en' ? '#' : other}"${l === 'en' ? ' aria-current="true"' : ''} hreflang="en">EN</a>
      </p>
      <a class="link" href="#hero" style="border:0;padding:0">${icon.arrowUp} ${esc(t(f.backToTop, l))}</a>
    </div>
  </div>
</footer>`;
};

/* ------------------------- HEADER / MENÜ / LIGHTBOX ---------------------- */
export const header = (ctx) => {
  const { l, other } = ctx;
  const brand = `<a class="brand" href="#hero" aria-label="${esc(site.name)}"><span>${esc(site.nameParts.first)}</span> <span class="ac">${esc(site.nameParts.accent)}</span> <span>${esc(site.nameParts.last)}</span></a>`;
  const langSwitch = `<p class="lang">
      <a href="${l === 'tr' ? '#' : other}"${l === 'tr' ? ' aria-current="true"' : ''} hreflang="tr" lang="tr">TR</a>
      <span class="sep" aria-hidden="true">|</span>
      <a href="${l === 'en' ? '#' : other}"${l === 'en' ? ' aria-current="true"' : ''} hreflang="en" lang="en">EN</a>
    </p>`;

  return `<header class="header" id="site-header">
  <div class="header-in">
    ${brand}
    <nav class="nav" aria-label="${esc(t(C.ui.menu, l))}">
      ${map(nav, (n) => `<a href="#${n.id}">${esc(t(n.label, l))}</a>`)}
    </nav>
    <div class="header-side">
      ${langSwitch}
      <button class="burger" type="button" id="burger" aria-expanded="false" aria-controls="menu" aria-label="${esc(t(C.ui.menu, l))}">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<div class="menu" id="menu" hidden>
  <nav aria-label="${esc(t(C.ui.menu, l))}">
    <ul>
      ${map(nav, (n, i) => `<li><a class="m-link" href="#${n.id}" style="--d:${80 + i * 45}ms">${esc(t(n.label, l))}</a></li>`)}
    </ul>
  </nav>
  <div class="menu-foot">
    <div class="row">
      <a href="${site.instagram.url}" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="${site.address.mapsUrl}" target="_blank" rel="noopener noreferrer">Google Maps</a>
    </div>
    <p class="small muted">${esc(site.address.district)}, ${esc(site.address.city)}</p>
  </div>
</div>`;
};

export const lightbox = (ctx) => {
  const { l } = ctx;
  return `<dialog class="lb" id="lightbox" aria-label="${esc(t(C.studio.kicker, l))}">
  <button class="lb-btn lb-close" type="button" data-lb-close aria-label="${esc(t(C.ui.close, l))}">${icon.close}</button>
  <div>
    <img id="lb-img" src="" alt="">
    <p class="lb-cap" id="lb-cap"></p>
  </div>
  <div class="lb-nav">
    <button class="lb-btn" type="button" data-lb-prev aria-label="${esc(t(C.ui.prev, l))}">${icon.chevL}</button>
    <button class="lb-btn" type="button" data-lb-next aria-label="${esc(t(C.ui.next, l))}">${icon.chevR}</button>
  </div>
</dialog>`;
};

export const stickyWhatsapp = (ctx) => {
  const { l } = ctx;
  const href = site.whatsapp ? `https://wa.me/${site.whatsapp}` : '#iletisim';
  const ext = site.whatsapp ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="sticky-wa" id="sticky-wa" href="${href}"${ext}${site.whatsapp ? '' : ' data-pending="whatsapp"'}
   aria-label="${esc(t(C.ui.whatsappSticky, l))}">${icon.whatsapp}<span class="lbl">${esc(t(C.ui.whatsappSticky, l))}</span></a>`;
};
