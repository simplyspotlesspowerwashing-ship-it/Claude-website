/* ═══════════════════════════════════════════════════════════════════════
   Simply Spotless Pressure Wash — site behaviour
   ═══════════════════════════════════════════════════════════════════════ */

/* ╔═══════════════════════════════════════════════════════════════════╗
   ║  1. YOUR DETAILS — edit these and the whole site updates.          ║
   ╚═══════════════════════════════════════════════════════════════════╝ */
const SITE = {
  phone: '(845) 650 7548',
  phoneRaw: '+18456507548',                             // digits only, with +1
  email: 'simply.spotless.powerwashing@gmail.com',
  area: 'Pearl River',                                  // town/region you serve

  // Italic line at the very top of the hero.
  reviewsLine: 'Locally Owned & Fully Insured',
  // e.g. 'Over 50 Five Star Reviews On Google' once you have them.

  // Google rating badge. Leave reviewCount as null and the badge stays hidden —
  // set BOTH to your real numbers to switch it on. Don't invent these.
  rating: null,                                         // e.g. 5.0
  reviewCount: null,                                    // e.g. 47

  // The scratch-off discount panel
  discountText: '10% Off Your First Wash',
  discountCode: 'SPOTLESS10'
};

/* ╔═══════════════════════════════════════════════════════════════════╗
   ║  2. BEFORE / AFTER GALLERY                                        ║
   ║     Drop your photos in  assets/img/  and list them here.          ║
   ╚═══════════════════════════════════════════════════════════════════╝ */
const PROJECTS = [
  { title: 'Vinyl siding house wash', note: 'Three years of green algae — one afternoon',
    before: 'assets/img/ba-1-before.jpg', after: 'assets/img/ba-1-after.jpg' },
  { title: 'Concrete driveway', note: 'Oil staining and embedded dirt lifted out',
    before: 'assets/img/ba-2-before.jpg', after: 'assets/img/ba-2-after.jpg' },
  { title: 'Cedar deck restoration', note: 'Grey weathering washed back to bare wood',
    before: 'assets/img/ba-3-before.jpg', after: 'assets/img/ba-3-after.jpg' },
  { title: 'Gutter cleaning', note: 'Backed up and overflowing — cleared and flushed',
    before: 'assets/img/ba-4-before.jpg', after: 'assets/img/ba-4-after.jpg' },
  { title: 'Paver patio', note: 'Moss and weeds out, joint sand refreshed',
    before: 'assets/img/ba-5-before.jpg', after: 'assets/img/ba-5-after.jpg' },
  { title: 'Front walkway', note: 'Years of grime gone in a single pass',
    before: 'assets/img/ba-6-before.jpg', after: 'assets/img/ba-6-after.jpg' }
];

/* ╔═══════════════════════════════════════════════════════════════════╗
   ║  3. SERVICES                                                       ║
   ║     `img` is optional — drop a photo at that path and the card      ║
   ║     picks it up, otherwise a clean placeholder panel is used.       ║
   ╚═══════════════════════════════════════════════════════════════════╝ */
const SERVICES = [
  { t:'House Washing', ico:'house', img:'assets/img/svc-house.jpg',
    d:'A low-pressure soft wash that strips algae, mildew and spider webs off vinyl — without forcing water behind the siding.' },
  { t:'Driveways & Concrete', ico:'drive', img:'assets/img/svc-driveway.jpg',
    d:'Surface-cleaner passes that leave an even finish, getting all that grime off with no wand stripes left behind.' },
  { t:'Decks & Fences', ico:'deck', img:'assets/img/svc-deck.jpg',
    d:'Careful pressure tuned to the species of wood or composite, bringing back the original colour and prepping the surface if you plan to stain.' },
  { t:'Gutter Cleaning', ico:'gutter', img:'assets/img/svc-gutter.jpg',
    d:'Backed up gutters causing drainage issues? Let me clean them out — clean gutters without the hassle of getting up on the roof.' },
  { t:'Patios & Pool Decks', ico:'pool', img:'assets/img/svc-patio.jpg',
    d:'Slick, discoloured pool surrounds cleaned back to a safe, even, non-slippery finish before the season starts.' }
];

/* ╔═══════════════════════════════════════════════════════════════════╗
   ║  4. REVIEWS                                                        ║
   ║     Replace with your own once you have them. `photo` is optional   ║
   ║     — without one the card shows the customer's initial.            ║
   ╚═══════════════════════════════════════════════════════════════════╝ */
const REVIEWS = [
  { name:'Danielle R.', title:'House Washing in Pearl River', photo:'',
    text:'Wonderful service! Family-oriented company that does professional work for your dollar. They came out and evaluated our house, and I had an estimate a couple of days later. Great customer service and seriously an amazing job — I am so glad I called!' },
  { name:'Marcus T.', title:'Driveway Cleaning', photo:'',
    text:'100% recommended, look no further. He was professional, on time, and made our house look and smell cleaner than it ever has. The driveway looks better than the concrete work my neighbour just had poured.' },
  { name:'Priya S.', title:'Deck & Fence Washing', photo:'',
    text:'Our siding gets very dirty and loaded with spider stains. We had it washed in the past but were never completely satisfied. This year we brought in Simply Spotless and they did an excellent job. Highly recommend.' }
];

const ICONS = {
  house:'<path d="M3 11 12 3l9 8"/><path d="M5.5 9.5V21h13V9.5"/><path d="M10 21v-6h4v6"/>',
  drive:'<path d="M6 21 9 3h6l3 18"/><path d="M12 6v2M12 11v2M12 16v2"/>',
  deck:'<path d="M3 8h18M3 13h18M3 18h18"/><path d="M7 5v16M17 5v16"/>',
  gutter:'<path d="M3 7h18v4H3z"/><path d="M8 11v6M16 11v6"/><path d="M6 21h4M14 21h4"/>',
  pool:'<path d="M2 17c2 0 2 1.5 4 1.5S8 17 10 17s2 1.5 4 1.5S16 17 18 17s2 1.5 4 1.5"/><path d="M7 15V5a2 2 0 0 1 4 0v10M13 15V5a2 2 0 0 1 4 0v10"/>',
  roof:'<path d="M2 12 12 4l10 8"/><path d="M6 15h12"/><path d="M8 19h8"/>',
  paver:'<path d="M3 4h8v7H3zM13 4h8v7h-8zM3 13h8v7H3zM13 13h8v7h-8z"/>',
  shop:'<path d="M3 9 4.5 4h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 11v9h14v-9"/><path d="M10 20v-5h4v5"/>',
  truck:'<path d="M2 6h11v10H2z"/><path d="M13 9h4l3 3.5V16h-7z"/><circle cx="6.5" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>'
};

/* ═══════════════════════════════════════════════════════════════════════
   Wiring below — you shouldn't need to change it.
   ═══════════════════════════════════════════════════════════════════════ */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

/* ── Contact details ──────────────────────────────────────────────── */
function applySiteDetails() {
  const map = {
    phone:SITE.phone, email:SITE.email, area:SITE.area, reviewsLine:SITE.reviewsLine,
    discountText:SITE.discountText, discountCode:SITE.discountCode
  };
  Object.entries(map).forEach(([k,v]) => {
    if (v == null) return;
    $$(`[data-site="${k}"]`).forEach(el => el.textContent = v);
  });
  $$('[data-site-tel]').forEach(a => {
    a.href = 'tel:' + SITE.phoneRaw;
    if (!a.getAttribute('aria-label')) a.setAttribute('aria-label', 'Call ' + SITE.phone);
  });
  $$('[data-site-mail]').forEach(a => a.href = 'mailto:' + SITE.email);

  // rating badge only appears once you've supplied real numbers
  const badge = $('#ratingBadge');
  if (badge && SITE.rating && SITE.reviewCount) {
    $('[data-site="rating"]', badge).textContent = SITE.rating;
    $('[data-site="reviewCount"]', badge).textContent = SITE.reviewCount;
    badge.hidden = false;
  }
  $('#yr').textContent = new Date().getFullYear();
}

/* ── Image fallbacks ──────────────────────────────────────────────── */
function guardImage(img, fallback) {
  img.addEventListener('error', () => {
    if (img.dataset.failed) return;
    img.dataset.failed = '1';
    img.src = fallback;
  }, { once: true });
  if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
}
function guardAll(root = document) {
  $$('img[data-fallback]', root).forEach(img => guardImage(img, img.dataset.fallback));
}

/* ── Service icon strip ───────────────────────────────────────────── */
function buildStrip() {
  const row = $('#stripRow');
  if (!row) return;
  row.innerHTML = SERVICES.map(s => `
    <a class="stripitem" href="#services">
      <span class="stripitem__ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[s.ico] || ''}</svg></span>
      <span>${esc(s.t)}</span>
    </a>`).join('');
}

/* ── Service cards ────────────────────────────────────────────────── */
function buildServices() {
  const grid = $('#svcGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => `
    <article class="svc reveal" data-delay="${i % 3}">
      <div class="svc__media">
        <div class="svc__crop">
          <img src="${esc(s.img || '')}" alt="${esc(s.t)}"
               data-fallback="assets/placeholders/service.svg" loading="lazy">
        </div>
        <span class="svc__ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[s.ico] || ''}</svg></span>
      </div>
      <div class="svc__body">
        <h3>${esc(s.t)}</h3>
        <p>${esc(s.d)}</p>
        <a class="svc__link" href="tel:${esc(SITE.phoneRaw)}" data-site-tel>
          Get a quote
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </article>`).join('');
  guardAll(grid);

  // footer service list mirrors the same array so the two can't drift apart
  const ftr = $('#ftrServices');
  if (ftr) ftr.innerHTML = SERVICES.map(s => `<li><a href="#services">${esc(s.t)}</a></li>`).join('');
}

/* ── Reviews ──────────────────────────────────────────────────────── */
function buildReviews() {
  const grid = $('#revGrid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map((r, i) => `
    <figure class="rev reveal" data-delay="${i % 3}">
      <div class="rev__top">
        <span class="rev__avatar">${
          r.photo ? `<img src="${esc(r.photo)}" alt="${esc(r.name)}" loading="lazy">` : esc(r.name.trim().charAt(0))
        }</span>
        <span class="rev__who">
          <b>${esc(r.name)}</b>
          <span class="stars" aria-label="Rated 5 out of 5">★★★★★</span>
        </span>
      </div>
      <div class="rev__body">
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.text)}</p>
      </div>
    </figure>`).join('');
}

/* ── Before / after sliders ───────────────────────────────────────── */
function buildGallery() {
  const grid = $('#baGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p, i) => `
    <figure class="ba reveal" data-delay="${i % 3}">
      <div class="ba__frame" tabindex="0" role="slider" aria-label="${esc(p.title)}: before and after comparison"
           aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style="--pos:50%">
        <img class="ba__img" src="${esc(p.after)}" alt="${esc(p.title)} — after cleaning"
             data-fallback="assets/placeholders/after.svg" loading="lazy">
        <div class="ba__layer">
          <img class="ba__img" src="${esc(p.before)}" alt="${esc(p.title)} — before cleaning"
               data-fallback="assets/placeholders/before.svg" loading="lazy">
        </div>
        <span class="ba__tag ba__tag--b">Before</span>
        <span class="ba__tag ba__tag--a">After</span>
        <div class="ba__handle"><span class="ba__grip"></span></div>
      </div>
      <figcaption><b>${esc(p.title)}</b><span>${esc(p.note)}</span></figcaption>
    </figure>`).join('');

  $$('.ba__frame', grid).forEach(initSlider);
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

  const start = e => { dragging = true; frame.classList.remove('animating'); set(fromEvent(e)); };
  const move  = e => {
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
    if (e.key === 'Home')       { set(0);   e.preventDefault(); }
    if (e.key === 'End')        { set(100); e.preventDefault(); }
  });

  if (!reduced) {
    const teaser = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        teaser.disconnect();
        frame.classList.add('animating');
        set(88);
        setTimeout(() => set(38), 900);
        setTimeout(() => set(50), 1900);
        setTimeout(() => frame.classList.remove('animating'), 3100);
      });
    }, { threshold: 0.45 });
    teaser.observe(frame);
  }

  guardAll(frame);
}

/* ── Scratch-off discount panel ───────────────────────────────────────
   A canvas of "grime" sits over the prize. Dragging erases it with
   destination-out compositing. Once enough is gone the rest fades away.
   ─────────────────────────────────────────────────────────────────── */
function initScratch() {
  const root   = $('#scratch');
  const canvas = $('#scratchCanvas');
  const meter  = $('#scratchMeter');
  const revealBtn = $('#scratchReveal');
  const codeBtn = $('#scratchCode');
  const video  = $('#scratchVideo');
  if (!root || !canvas) return;

  // if the video can't load or play, fall back to the gradient panel
  if (video) {
    const fail = () => root.classList.add('no-video');
    video.addEventListener('error', fail);
    video.addEventListener('stalled', fail);
    if (video.querySelectorAll('source').length) {
      const last = video.querySelectorAll('source')[video.querySelectorAll('source').length - 1];
      last.addEventListener('error', fail);
    }
    const play = video.play?.();
    if (play && play.catch) play.catch(() => { /* autoplay blocked — poster still shows */ });
  }

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let done = false, drawing = false, last = null, w = 0, h = 0;

  function paintGrime() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = Math.max(1, Math.round(r.width));
    h = Math.max(1, Math.round(r.height));
    canvas.width  = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, w, h);

    // base film of dirt
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0,   '#7c8a86');
    g.addColorStop(.45, '#98a49a');
    g.addColorStop(1,   '#6f7d74');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // blotches of algae and water spotting
    for (let i = 0; i < 90; i++) {
      const x = Math.random() * w, y = Math.random() * h;
      const rad = 12 + Math.random() * 70;
      const b = ctx.createRadialGradient(x, y, 0, x, y, rad);
      const dark = Math.random() > .55;
      b.addColorStop(0, dark ? 'rgba(60,78,52,.5)' : 'rgba(255,255,255,.24)');
      b.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = b;
      ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill();
    }
    // streaks running down the glass
    ctx.strokeStyle = 'rgba(70,90,70,.16)';
    for (let i = 0; i < 34; i++) {
      const x = Math.random() * w;
      ctx.lineWidth = 1 + Math.random() * 5;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x + 14, h * .35, x - 14, h * .7, x + 6, h);
      ctx.stroke();
    }
    ctx.globalCompositeOperation = 'destination-out';
  }

  const pos = e => {
    const r = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - r.left, y: t.clientY - r.top };
  };

  function wipe(a, b) {
    const radius = Math.max(26, Math.min(w, h) * 0.075);
    // destination-out erases in proportion to source alpha, so these must be
    // fully opaque — otherwise the grime only thins instead of clearing.
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#000';
    ctx.lineWidth = radius * 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(b.x, b.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // how much has been cleared, sampled on a coarse grid so it stays cheap
  function cleared() {
    const step = 8;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let clear = 0, total = 0;
    const rowBytes = canvas.width * 4;
    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        total++;
        if (data[y * rowBytes + x * 4 + 3] < 40) clear++;
      }
    }
    return total ? clear / total : 0;
  }

  function finish() {
    if (done) return;
    done = true;
    root.classList.add('done');
    setMeter(1);
    if (codeBtn) codeBtn.focus({ preventScroll: true });
  }

  function setMeter(frac) {
    const pct = Math.round(Math.min(1, frac) * 100);
    if (!meter) return;
    meter.firstElementChild.style.width = pct + '%';
    meter.setAttribute('aria-valuenow', pct);
  }

  let checkQueued = false;
  function queueCheck() {
    if (checkQueued || done) return;
    checkQueued = true;
    setTimeout(() => {
      checkQueued = false;
      if (done) return;
      const frac = cleared();
      setMeter(frac / 0.55);
      if (frac >= 0.55) finish();      // enough scrubbed — wipe the rest for them
    }, 180);
  }

  const start = e => {
    if (done) return;
    drawing = true;
    root.classList.add('started');
    last = pos(e);
    wipe(last, last);
    queueCheck();
  };
  const move = e => {
    if (!drawing || done) return;
    if (e.cancelable && e.touches) e.preventDefault();
    const p = pos(e);
    wipe(last, p);
    last = p;
    queueCheck();
  };
  const end = () => { drawing = false; };

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('touchstart', start, { passive: true });
  window.addEventListener('mousemove', move);
  window.addEventListener('touchmove', move, { passive: false });
  window.addEventListener('mouseup', end);
  window.addEventListener('touchend', end);

  // trackpad users often hover rather than drag, so hovering scrubs too
  canvas.addEventListener('mousemove', e => {
    if (drawing || done || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const p = pos(e);
    if (last) wipe(last, p); else wipe(p, p);
    last = p;
    root.classList.add('started');
    queueCheck();
  });
  canvas.addEventListener('mouseleave', () => { last = null; });

  if (revealBtn) revealBtn.addEventListener('click', finish);

  if (codeBtn) {
    codeBtn.addEventListener('click', async () => {
      const code = codeBtn.querySelector('span').textContent.trim();
      try {
        await navigator.clipboard.writeText(code);
        const original = codeBtn.querySelector('span').textContent;
        codeBtn.classList.add('copied');
        codeBtn.querySelector('span').textContent = 'Copied!';
        setTimeout(() => {
          codeBtn.classList.remove('copied');
          codeBtn.querySelector('span').textContent = original;
        }, 1600);
      } catch { /* clipboard unavailable — the code is on screen anyway */ }
    });
  }

  paintGrime();
  let rt;
  addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (!done) paintGrime(); }, 200);
  });

  // anyone who asked for reduced motion just gets the prize
  if (reduced) finish();
}

/* ── Ambient bubbles in the dark bands ────────────────────────────── */
function initBubbles() {
  if (reduced) return;
  $$('.bubbles').forEach(host => {
    const count = innerWidth < 700 ? 10 : 18;
    host.innerHTML = Array.from({ length: count }, () => {
      const size = 8 + Math.random() * 34;
      const left = Math.random() * 100;
      const dur = 11 + Math.random() * 16;
      const delay = -Math.random() * dur;
      const drift = (Math.random() * 90 - 45).toFixed(0);
      return `<span style="width:${size}px;height:${size}px;left:${left}%;
        animation-duration:${dur}s;animation-delay:${delay}s;--drift:${drift}px"></span>`;
    }).join('');
  });
}

/* ── Headings rise a word at a time ───────────────────────────────── */
function initSplitHeadings() {
  if (reduced || !('IntersectionObserver' in window)) return;

  const heads = $$('.sechead h2, .hero__title, .band__inner h2, .cta__inner h2');
  heads.forEach(h => {
    if (h.classList.contains('hero__title')) return;   // hero has its own animation
    // wrap each word, keeping any inline markup (like <span class="cy">) intact
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
            const outer = document.createElement('span');
            outer.className = 'split';
            const inner = document.createElement('i');
            inner.textContent = part;
            outer.appendChild(inner);
            frag.appendChild(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    };
    walk(h);

    const words = $$('.split', h);
    words.forEach((wd, i) => wd.querySelector('i').style.setProperty('--d', (i * 0.045) + 's'));

    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        io.disconnect();
        words.forEach(wd => wd.classList.add('in'));
      });
    }, { threshold: 0.3 });
    io.observe(h);
  });
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
  }, { threshold: 0.12, rootMargin: '0px 0px -50px' });
  items.forEach(el => io.observe(el));
}

/* ── Header, progress, scrollspy, parallax ────────────────────────── */
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

    hdr.classList.toggle('stuck', y > 80);
    if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    if (callbar) callbar.classList.toggle('show', y > innerHeight * 0.6);
    if (heroImg && !reduced && y < innerHeight * 1.2) {
      heroImg.style.transform = `translate3d(0,${y * 0.26}px,0)`;
    }

    let current = '';
    sections.forEach(s => { if (s.getBoundingClientRect().top <= 150) current = s.id; });
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

/* ── Mobile / stuck menu ──────────────────────────────────────────── */
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
}

/* ── FAQ ──────────────────────────────────────────────────────────── */
function initFaq() {
  const all = $$('.qa');
  all.forEach(d => d.addEventListener('toggle', () => {
    if (d.open) all.forEach(o => { if (o !== d) o.open = false; });
  }));
}

/* ── Loader ───────────────────────────────────────────────────────── */
function initLoader() {
  const done = () => setTimeout(() => document.body.classList.add('loaded'), reduced ? 0 : 450);
  if (document.readyState === 'complete') done();
  else addEventListener('load', done);
  setTimeout(() => document.body.classList.add('loaded'), 4000);
}

/* ── Go ───────────────────────────────────────────────────────────── */
buildStrip();
buildServices();
buildReviews();
buildGallery();
applySiteDetails();   // after building, so generated markup gets the details too
guardAll();
initBubbles();
initSplitHeadings();  // before initReveal, so word wrapping happens once
initScratch();
initReveal();
initHeader();
initMenu();
initFaq();
initLoader();
