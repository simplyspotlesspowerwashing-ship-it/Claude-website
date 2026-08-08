/* ═══════════════════════════════════════════════════════════════════════
   Simply Spotless Pressure Wash — site behaviour
   ═══════════════════════════════════════════════════════════════════════ */

/* ╔═══════════════════════════════════════════════════════════════════╗
   ║  1. YOUR DETAILS — edit these four lines and the whole site        ║
   ║     updates (header, hero, FAQ, CTA, footer, mobile call bar).     ║
   ╚═══════════════════════════════════════════════════════════════════╝ */
const SITE = {
  phone: '(555) 123-4567',                              // <-- REPLACE with your real number
  phoneRaw: '+15551234567',                             // <-- same number, digits only, with +1
  email: 'simply.spotless.powerwashing@gmail.com',
  area: 'the surrounding area'                          // <-- e.g. 'Tampa & Hillsborough County'
};

/* ╔═══════════════════════════════════════════════════════════════════╗
   ║  2. BEFORE / AFTER GALLERY                                        ║
   ║     Drop your photos in  assets/img/  and list them here.          ║
   ║     Add or remove entries freely — the grid rebuilds itself.       ║
   ║     Tip: shoot both photos from the same spot for the best effect. ║
   ╚═══════════════════════════════════════════════════════════════════╝ */
const PROJECTS = [
  { title: 'Vinyl siding house wash',   note: 'Three years of green algae — one afternoon',
    before: 'assets/img/ba-1-before.jpg', after: 'assets/img/ba-1-after.jpg' },
  { title: 'Concrete driveway',         note: 'Oil staining and embedded dirt lifted out',
    before: 'assets/img/ba-2-before.jpg', after: 'assets/img/ba-2-after.jpg' },
  { title: 'Roof soft wash',            note: 'Black streaking removed without touching a shingle',
    before: 'assets/img/ba-3-before.jpg', after: 'assets/img/ba-3-after.jpg' },
  { title: 'Cedar deck restoration',    note: 'Grey weathering washed back to bare wood',
    before: 'assets/img/ba-4-before.jpg', after: 'assets/img/ba-4-after.jpg' },
  { title: 'Paver patio &amp; walkway',     note: 'Weeds, moss and joint sand refreshed',
    before: 'assets/img/ba-5-before.jpg', after: 'assets/img/ba-5-after.jpg' },
  { title: 'Storefront &amp; sidewalk',     note: 'Gum, grease and foot traffic gone before open',
    before: 'assets/img/ba-6-before.jpg', after: 'assets/img/ba-6-after.jpg' }
];

/* ╔═══════════════════════════════════════════════════════════════════╗
   ║  3. SERVICES                                                       ║
   ╚═══════════════════════════════════════════════════════════════════╝ */
const SERVICES = [
  { t:'House Washing', tag:'Most booked', ico:'house',
    d:'A low-pressure soft wash that strips algae, mildew and spider webs off vinyl, stucco, brick and painted wood — without forcing water behind the siding.' },
  { t:'Roof Soft Washing', ico:'roof',
    d:'Those black streaks are living algae, not dirt. We kill it at the root with a no-pressure treatment that is safe for asphalt shingles and your warranty.' },
  { t:'Driveways &amp; Concrete', ico:'drive',
    d:'Surface-cleaner passes that leave an even finish with no wand stripes, plus a post-treatment so the grime takes far longer to come back.' },
  { t:'Decks &amp; Fences', ico:'deck',
    d:'Careful pressure tuned to the species of wood or composite, bringing back the original colour and prepping the surface if you plan to stain.' },
  { t:'Gutter Brightening', ico:'gutter',
    d:'The vertical tiger stripes on aluminium gutters need a specific detergent to release. We clean the face until it matches the trim again.' },
  { t:'Paver Restoration', ico:'paver',
    d:'Deep clean, weed and moss removal, fresh polymeric joint sand and optional sealing to lock the colour in for years.' },
  { t:'Patios &amp; Pool Decks', ico:'pool',
    d:'Slick, discoloured pool surrounds cleaned back to a safe, even, non-slippery finish before the season starts.' },
  { t:'Storefronts &amp; Walkways', tag:'Commercial', ico:'shop',
    d:'Early-morning or after-hours service so your entrance, sidewalk and dumpster pad are spotless before the first customer arrives.' },
  { t:'Fleet &amp; Equipment', tag:'Commercial', ico:'truck',
    d:'Trucks, trailers and heavy equipment washed on your lot on a schedule that keeps the whole fleet looking maintained.' }
];

const ICONS = {
  house:'<path d="M3 11 12 3l9 8"/><path d="M5.5 9.5V21h13V9.5"/><path d="M10 21v-6h4v6"/>',
  roof:'<path d="M2 12 12 4l10 8"/><path d="M6 15h12"/><path d="M8 19h8"/>',
  drive:'<path d="M6 21 9 3h6l3 18"/><path d="M12 6v2M12 11v2M12 16v2"/>',
  deck:'<path d="M3 8h18M3 13h18M3 18h18"/><path d="M7 5v16M17 5v16"/>',
  gutter:'<path d="M3 7h18v4H3z"/><path d="M8 11v6M16 11v6"/><path d="M6 21h4M14 21h4"/>',
  paver:'<path d="M3 4h8v7H3zM13 4h8v7h-8zM3 13h8v7H3zM13 13h8v7h-8z"/>',
  pool:'<path d="M2 17c2 0 2 1.5 4 1.5S8 17 10 17s2 1.5 4 1.5S16 17 18 17s2 1.5 4 1.5"/><path d="M7 15V5a2 2 0 0 1 4 0v10M13 15V5a2 2 0 0 1 4 0v10"/>',
  shop:'<path d="M3 9 4.5 4h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 11v9h14v-9"/><path d="M10 20v-5h4v5"/>',
  truck:'<path d="M2 6h11v10H2z"/><path d="M13 9h4l3 3.5V16h-7z"/><circle cx="6.5" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>'
};

/* ═══════════════════════════════════════════════════════════════════════
   Below here is wiring — you shouldn't need to change it.
   ═══════════════════════════════════════════════════════════════════════ */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Contact details ──────────────────────────────────────────────── */
function applySiteDetails() {
  $$('[data-site="phone"]').forEach(el => el.textContent = SITE.phone);
  $$('[data-site="email"]').forEach(el => el.textContent = SITE.email);
  $$('[data-site="area"]').forEach(el => el.textContent = SITE.area);
  $$('[data-site-tel]').forEach(a => {
    a.href = 'tel:' + SITE.phoneRaw;
    if (!a.getAttribute('aria-label')) a.setAttribute('aria-label', 'Call ' + SITE.phone);
  });
  $$('[data-site-mail]').forEach(a => a.href = 'mailto:' + SITE.email);
  $('#yr').textContent = new Date().getFullYear();
}

/* ── Image fallbacks (placeholders until real photos land) ─────────── */
function guardImage(img, fallback) {
  img.addEventListener('error', () => {
    if (img.dataset.failed) return;
    img.dataset.failed = '1';
    img.src = fallback;
  }, { once: true });
  if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
}
function guardExistingImages() {
  $$('img[data-fallback]').forEach(img => guardImage(img, img.dataset.fallback));
}

/* ── Services grid ────────────────────────────────────────────────── */
function buildServices() {
  const grid = $('#svcGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => `
    <article class="svc reveal" data-delay="${i % 3}">
      ${s.tag ? `<span class="svc__tag">${s.tag}</span>` : ''}
      <span class="svc__ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[s.ico] || ''}</svg></span>
      <h3>${s.t}</h3>
      <p>${s.d}</p>
    </article>`).join('');
}

/* ── Before / after sliders ───────────────────────────────────────── */
function buildGallery() {
  const grid = $('#baGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <figure class="ba reveal" data-delay="${i % 3}">
      <div class="ba__frame" tabindex="0" role="slider" aria-label="${stripTags(p.title)}: before and after comparison"
           aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style="--pos:50%">
        <img class="ba__img" src="${p.after}" alt="${stripTags(p.title)} — after cleaning"
             data-fallback="assets/placeholders/after.svg" loading="lazy">
        <div class="ba__layer">
          <img class="ba__img" src="${p.before}" alt="${stripTags(p.title)} — before cleaning"
               data-fallback="assets/placeholders/before.svg" loading="lazy">
        </div>
        <span class="ba__tag ba__tag--b">Before</span>
        <span class="ba__tag ba__tag--a">After</span>
        <div class="ba__handle"><span class="ba__grip"><i></i></span></div>
      </div>
      <figcaption><b>${p.title}</b><span>${p.note}</span></figcaption>
    </figure>`).join('');

  $$('.ba__frame', grid).forEach(initSlider);
}

function stripTags(s) {
  const d = document.createElement('div');
  d.innerHTML = s;
  return (d.textContent || '').replace(/"/g, '&quot;');
}

function initSlider(frame) {
  let dragging = false;

  const set = pct => {
    const v = Math.max(0, Math.min(100, pct));
    frame.style.setProperty('--pos', v + '%');
    frame.setAttribute('aria-valuenow', Math.round(v));
  };
  const fromEvent = e => {
    const r = frame.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    return (x / r.width) * 100;
  };

  const start = e => {
    dragging = true;
    frame.classList.remove('animating');
    set(fromEvent(e));
  };
  const move = e => {
    if (!dragging) return;
    if (e.cancelable && e.touches) e.preventDefault();
    set(fromEvent(e));
  };
  const end = () => { dragging = false; };

  frame.addEventListener('mousedown', start);
  frame.addEventListener('touchstart', start, { passive: true });
  window.addEventListener('mousemove', move);
  window.addEventListener('touchmove', move, { passive: false });
  window.addEventListener('mouseup', end);
  window.addEventListener('touchend', end);

  // hover-scrub on fine pointers, so it feels alive without clicking
  frame.addEventListener('mousemove', e => {
    if (dragging || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    frame.classList.remove('animating');
    set(fromEvent(e));
  });

  frame.addEventListener('keydown', e => {
    const now = parseFloat(frame.getAttribute('aria-valuenow')) || 50;
    const step = e.shiftKey ? 10 : 4;
    if (e.key === 'ArrowLeft')  { set(now - step); e.preventDefault(); }
    if (e.key === 'ArrowRight') { set(now + step); e.preventDefault(); }
    if (e.key === 'Home')       { set(0);  e.preventDefault(); }
    if (e.key === 'End')        { set(100); e.preventDefault(); }
  });

  // first time it scrolls into view, sweep once to show it's interactive
  if (!reduced) {
    const teaser = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        teaser.disconnect();
        frame.classList.add('animating');
        set(88);
        setTimeout(() => set(38), 900);
        setTimeout(() => { set(50); }, 1900);
        setTimeout(() => frame.classList.remove('animating'), 3100);
      });
    }, { threshold: 0.45 });
    teaser.observe(frame);
  }

  $$('img[data-fallback]', frame).forEach(img => guardImage(img, img.dataset.fallback));
}

/* ── Scroll reveal ────────────────────────────────────────────────── */
function initReveal() {
  const items = $$('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px' });
  items.forEach(el => io.observe(el));
}

/* ── Counters ─────────────────────────────────────────────────────── */
function initCounters() {
  const nums = $$('[data-count]');
  if (!nums.length) return;
  if (reduced) {
    nums.forEach(n => n.textContent = n.dataset.count + (n.dataset.suffix || ''));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur = 1500;
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  nums.forEach(n => io.observe(n));
}

/* ── Header, progress bar, active link, parallax ──────────────────── */
function initHeader() {
  const hdr = $('#hdr');
  const bar = $('#scrollbar');
  const callbar = $('.callbar');
  const heroImg = $('#heroImg');
  const links = $$('.nav ul a');
  const sections = links
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;

    hdr.classList.toggle('stuck', y > 40);
    if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    if (callbar) callbar.classList.toggle('show', y > innerHeight * 0.6);
    if (heroImg && !reduced && y < innerHeight * 1.2) {
      heroImg.style.transform = `translate3d(0,${y * 0.28}px,0)`;
    }

    let current = '';
    sections.forEach(s => { if (s.getBoundingClientRect().top <= 140) current = s.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));

    ticking = false;
  };

  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(onScroll);
  }, { passive: true });
  onScroll();
}

/* ── Mobile menu ──────────────────────────────────────────────────── */
function initMenu() {
  const burger = $('#burger');
  const nav = $('#nav');
  if (!burger || !nav) return;

  const close = () => {
    document.body.classList.remove('menu-open', 'is-locked');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
  };
  burger.addEventListener('click', () => {
    const open = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', open);
    document.body.classList.toggle('is-locked', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  $$('a', nav).forEach(a => a.addEventListener('click', close));
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  addEventListener('resize', () => { if (innerWidth > 900) close(); });
}

/* ── FAQ: only one open at a time ─────────────────────────────────── */
function initFaq() {
  const all = $$('.qa');
  all.forEach(d => d.addEventListener('toggle', () => {
    if (d.open) all.forEach(o => { if (o !== d) o.open = false; });
  }));
}

/* ── Loader ───────────────────────────────────────────────────────── */
function initLoader() {
  const done = () => setTimeout(() => document.body.classList.add('loaded'), reduced ? 0 : 500);
  if (document.readyState === 'complete') done();
  else addEventListener('load', done);
  setTimeout(() => document.body.classList.add('loaded'), 4000); // safety net
}

/* ── Go ───────────────────────────────────────────────────────────── */
applySiteDetails();
guardExistingImages();
buildServices();
buildGallery();
initReveal();
initCounters();
initHeader();
initMenu();
initFaq();
initLoader();
