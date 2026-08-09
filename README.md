# Simply Spotless Pressure Wash

A single-page marketing site for Simply Spotless Pressure Wash. No build step, no
dependencies — plain HTML, CSS and JavaScript. Open `index.html` and it runs.

```
index.html          all the page content
styles.css          all the styling
main.js             your details, the photo list, and the interactions
assets/img/         >>> DROP YOUR PHOTOS HERE <<<
assets/placeholders/ stand-in artwork, used automatically until real photos exist
```

---

## 1. Put your real details in

Open `main.js`. The very first block is the only thing you need to touch:

```js
const SITE = {
  phone:    '(555) 123-4567',   // shown on every button
  phoneRaw: '+15551234567',     // what the phone actually dials
  email:    'simply.spotless.powerwashing@gmail.com',
  area:     'the surrounding area'   // e.g. 'Tampa & Hillsborough County'
};
```

Change those four values and the header, hero, FAQ, big call-to-action, footer and
mobile call bar all update together. There is no contact form anywhere — every
call to action dials the phone directly.

## 2. Add your photos

Drop image files into `assets/img/` using these names. Anything missing quietly
falls back to placeholder artwork, so the site never looks broken while you work
through them.

| File | Where it shows up | Best shape |
|---|---|---|
| `hero.jpg` | full-screen image behind the headline | wide, 2000×1200 or larger |
| `why.jpg` | the round photo in the intro section | square, it gets circle-cropped |
| `cta.jpg` | background of the bottom call band | wide |
| `svc-house.jpg`, `svc-driveway.jpg`, `svc-deck.jpg`, `svc-gutter.jpg`, `svc-patio.jpg` | tops of the five service cards | 16:10 landscape |
| `ba-1-before.jpg` / `ba-1-after.jpg` | first before/after slider | 4:3 |
| `ba-2-before.jpg` / `ba-2-after.jpg` | second slider | 4:3 |
| … through `ba-6-…` | six sliders total | 4:3 |

**Getting good before/after pairs:** stand in the same spot for both shots, same
height, same zoom, same time of day if you can. The slider wipes one image over
the other, so anything that shifts between the two photos is distracting. Crop
both to the same aspect ratio before adding them.

### Changing the gallery

The sliders are generated from the `PROJECTS` list in `main.js`. Add, remove or
reorder entries and the grid rebuilds itself:

```js
const PROJECTS = [
  { title: 'Vinyl siding house wash',
    note:  'Three years of green algae — one afternoon',
    before: 'assets/img/ba-1-before.jpg',
    after:  'assets/img/ba-1-after.jpg' },
  // ...
];
```

The services grid works the same way — see the `SERVICES` list just below it.

## 3. Publish it

Because it's static, anything will host it:

- **GitHub Pages** — repo Settings → Pages → deploy from branch → root.
- **Netlify / Vercel / Cloudflare Pages** — drag the folder in, no build command.
- **Any web host** — upload the files over FTP.

Preview locally with `python3 -m http.server` and visit `localhost:8000`.

---

## What's in the page

Loading animation → sticky header with scroll progress → full-screen hero with
parallax and animated stats → scrolling service marquee → nine service cards →
six draggable before/after sliders → why-us section → three-step process →
reviews → FAQ accordion → call-to-action band → footer, plus a call button that
sticks to the bottom of the screen on phones.

Built to be accessible: keyboard-operable sliders and menu, visible focus rings,
labelled controls, and a reduced-motion mode that switches every animation off
for visitors who ask for it.
