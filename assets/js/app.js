/* ===========================================================================
   NILAY'S PILATES STUDIO — ETKİLEŞİM KATMANI
   Bağımlılık yok. Her modül kendi elemanı sayfada yoksa sessizce çıkar.
   =========================================================================== */
(() => {
  'use strict';

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------- 1. SCROLL REVEAL ---------------------------- */
  (function reveal() {
    const items = $$('[data-reveal]');
    $('.hero')?.classList.add('in');
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      }),
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));

    /* Emniyet supabı: sekme arka plandaysa tarayıcı render fırsatı vermez ve
       IntersectionObserver hiç ateşlenmez. O durumda ekranda olan her şeyi
       yine de göster — içerik hiçbir koşulda kalıcı olarak gizli kalmasın. */
    const failsafe = () => items.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) { el.classList.add('in'); io.unobserve(el); }
    });
    setTimeout(failsafe, 2500);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) failsafe(); });
  })();

  /* ------------------- 2. HEADER: arka plan + gizlenme -------------------- */
  (function header() {
    const el = $('#site-header');
    if (!el) return;
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      el.classList.toggle('is-solid', y > 24);
      const menuOpen = $('#menu')?.classList.contains('is-open');
      el.classList.toggle('is-hidden', !menuOpen && y > 320 && y > last + 4);
      last = y;
      ticking = false;
    };
    addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  })();

  /* --------------------------- 3. MOBİL MENÜ ----------------------------- */
  (function menu() {
    const btn = $('#burger');
    const panel = $('#menu');
    if (!btn || !panel) return;
    panel.removeAttribute('hidden');   // JS varsa devreye girer

    const setOpen = (open) => {
      btn.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
      document.body.classList.toggle('is-locked', open);
      if (open) panel.querySelector('a')?.focus({ preventScroll: true });
    };

    btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
    panel.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) { setOpen(false); btn.focus(); }
    });
    matchMedia('(min-width: 60rem)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  })();

  /* ------------------------ 4. AKTİF MENÜ BAĞLANTISI --------------------- */
  (function scrollspy() {
    const links = $$('.nav a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    const map = new Map();
    links.forEach((a) => {
      const el = document.getElementById(a.hash.slice(1));
      if (el) map.set(el, a);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const a = map.get(e.target);
        if (!a) return;
        if (e.isIntersecting) {
          links.forEach((x) => x.removeAttribute('aria-current'));
          a.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, el) => io.observe(el));
  })();

  /* --------------------- 5. SEKMELER (paketler + program) ---------------- */
  function tablist(root, tabSel, panelPrefix) {
    const tabs = $$(tabSel, root);
    if (!tabs.length) return;

    /* opts.focus: klavye gezinmesinde odağı taşır
       opts.track:  sekme şeridini yatayda kaydırır (yalnızca kullanıcı eylemi) */
    const select = (tab, opts = {}) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
      if (opts.focus) tab.focus({ preventScroll: true });
      if (opts.track) {
        const strip = tab.parentElement;
        const left = tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2;
        strip.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' });
      }
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab, { track: true }));
      tab.addEventListener('keydown', (e) => {
        const k = e.key;
        let next = null;
        if (k === 'ArrowRight' || k === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
        else if (k === 'ArrowLeft' || k === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (k === 'Home') next = tabs[0];
        else if (k === 'End') next = tabs[tabs.length - 1];
        if (!next) return;
        e.preventDefault();
        select(next, { focus: true, track: true });
      });
    });
    return select;
  }

  tablist(document, '#paketler .tab');

  /* ---------------- 5b. FİYATLARI GÖSTER/GİZLE (paketler) ----------------- */
  $$('#paketler .price-toggle').forEach((btn) => {
    const panel = btn.closest('.panel');
    const label = $('.price-toggle-label', btn);
    btn.addEventListener('click', () => {
      const open = panel.classList.toggle('prices-on');
      btn.setAttribute('aria-expanded', String(open));
      if (label) label.textContent = open ? label.dataset.hide : label.dataset.show;
    });
  });
  const selectDay = tablist(document, '.day-tabs .day-tab');

  /* Programda bugünün gününü mobilde açık başlat. */
  (function today() {
    const tabs = $$('.day-tabs .day-tab');
    if (!tabs.length || !selectDay) return;
    const idx = (new Date().getDay() + 6) % 7;      // Pazartesi = 0
    if (tabs[idx]) selectDay(tabs[idx]);
  })();

  /* ----------------------------- 6. LIGHTBOX ----------------------------- */
  (function lightbox() {
    const dlg = $('#lightbox');
    const items = $$('.g-item');
    if (!dlg || !items.length || typeof dlg.showModal !== 'function') return;

    const img = $('#lb-img'), cap = $('#lb-cap');
    const data = items.map((b) => {
      const i = b.querySelector('img');
      return { src: i.currentSrc || i.src, alt: i.alt, cap: b.querySelector('figcaption span')?.textContent || i.alt };
    });
    let idx = 0, opener = null;

    const show = (i) => {
      idx = (i + data.length) % data.length;
      img.src = data[idx].src;
      img.alt = data[idx].alt;
      cap.textContent = `${data[idx].cap} — ${idx + 1} / ${data.length}`;
    };

    items.forEach((b, i) => b.addEventListener('click', () => {
      opener = b; show(i); dlg.showModal(); document.body.classList.add('is-locked');
    }));
    $('[data-lb-prev]', dlg)?.addEventListener('click', () => show(idx - 1));
    $('[data-lb-next]', dlg)?.addEventListener('click', () => show(idx + 1));
    $('[data-lb-close]', dlg)?.addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); show(idx - 1); }
    });
    dlg.addEventListener('close', () => {
      document.body.classList.remove('is-locked');
      opener?.focus({ preventScroll: true });
    });
  })();

  /* ------------------------------ 7. FORM -------------------------------- */
  (function form() {
    const f = $('#contact-form');
    const done = $('#form-done');
    if (!f || !done) return;
    if (f.getAttribute('action')) return;    // gerçek uç nokta bağlıysa normal gönderim

    f.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!f.reportValidity()) return;
      f.style.display = 'none';
      done.classList.add('on');
      done.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' });
    });
  })();

  /* --------------------- 8. SABİT WHATSAPP BUTONU ------------------------ */
  (function sticky() {
    const el = $('#sticky-wa');
    const hero = $('.hero');
    if (!el || !hero) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; }
    new IntersectionObserver(
      ([e]) => el.classList.toggle('in', !e.isIntersecting),
      { threshold: 0, rootMargin: '-70% 0px 0px 0px' }
    ).observe(hero);
  })();
})();
