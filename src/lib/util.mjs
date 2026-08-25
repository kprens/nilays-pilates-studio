/* Şablonlarda kullanılan küçük yardımcılar. */

/** Çok dilli değeri seçer: {tr,en} → string. Düz string ise olduğu gibi döner. */
export const t = (v, l) =>
  v == null ? '' : typeof v === 'string' ? v : v[l] ?? v.tr ?? '';

/** Metni HTML'e güvenli hale getirir. */
export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** Diziyi şablona basar. */
export const map = (arr, fn) => arr.map(fn).join('');

/** Koşullu parça. */
export const when = (cond, out) => (cond ? (typeof out === 'function' ? out() : out) : '');

/** Reveal gecikmesi (ms). */
export const d = (ms) => (ms ? ` style="--d:${ms}ms"` : '');

/** Para birimi. 687.5 → "687,50 ₺" · 1083 → "1.083 ₺" */
export function money(n, locale, symbol = '₺') {
  const frac = Number.isInteger(n) ? 0 : 2;
  const nf = new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'tr-TR', {
    minimumFractionDigits: frac,
    maximumFractionDigits: frac,
  });
  return `${nf.format(n)} ${symbol}`;
}

/** İki basamaklı sıra numarası. */
export const pad = (n) => String(n).padStart(2, '0');

/* ----------------------------- ikon seti --------------------------------- */
const S = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
export const icon = {
  arrow: `<svg class="arw" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" ${S}><path d="M2 7h10M8 3l4 4-4 4"/></svg>`,
  arrowUp: `<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" ${S}><path d="M7 12V2M3 6l4-4 4 4"/></svg>`,
  chevL: `<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" ${S}><path d="M11 4l-5 5 5 5"/></svg>`,
  chevR: `<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" ${S}><path d="M7 4l5 5-5 5"/></svg>`,
  close: `<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" ${S}><path d="M4 4l10 10M14 4L4 14"/></svg>`,
  info: `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" ${S}><circle cx="8" cy="8" r="6.5"/><path d="M8 7.2v4M8 4.8h.01"/></svg>`,
  expand: `<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" ${S}><path d="M5.5 1.5H1.5v4M8.5 12.5h4v-4M12.5 5.5v-4h-4M1.5 8.5v4h4"/></svg>`,
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.25 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z"/></svg>`,
  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" ${S}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>`,
  pin: `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" ${S}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
};
