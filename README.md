# Groundscape Design and Build — website

The one-page website for Groundscape Design and Build Ltd., a landscape construction
company in Vancouver. It's built with [Astro](https://astro.build), which turns a few
simple files into a fast, plain HTML page. There is no database and no server code.

## ⚠️ To confirm with the client before launch

- [ ] **Email address.** The design didn't include one. `info@groundscapedesign.ca` is a
      **placeholder** in `src/data/site.js`. The quote form sends to it, so confirm it.
- [ ] **Phone number.** The design didn't include one either, so it is left **empty** in
      `src/data/site.js`. Once you add it, it appears in the form's error message and the
      search-engine data.
- [ ] **Website address.** `https://groundscapedesign.ca` in `astro.config.mjs` is a
      placeholder. It's used for the canonical link and the social-sharing image.
- [ ] **HomeStars link.** "Read our reviews on HomeStars" goes to the HomeStars home page.
      Swap in the client's own profile URL (`homestarsUrl` in `src/data/site.js`).

## Before launch: replace stock photos

Every photo is a **free Unsplash stock placeholder**, not the client's own work. Replace
each one with a real project photo. Keep the **same file name** in `src/assets/` and the
page picks it up automatically. Landscape photos around 1800px wide work well.

| File in `src/assets/` | Where it appears |
| --- | --- |
| `hero.jpg` | Hero (big photo at the top, right side on desktop) and social-sharing image |
| `design.jpg` | Services: "Landscape design & installation" |
| `pavers.jpg` | Services: "Hardscaping & paver patios" |
| `walls.jpg` | Services: "Retaining walls" |
| `concrete.jpg` | Services: "Concrete driveways, walkways & slabs" |
| `excavation.jpg` | Services: "Excavation & site preparation" |
| `fenceA.jpg` | Services: "Fencing" |
| `decks.jpg` | Services: "Custom decks" |
| `g1.jpg` | Recent projects: big first tile (paver patio / outdoor living) |
| `g2.jpg` | Recent projects: tile 2 (retaining wall) |
| `g6.jpg` | Recent projects: tile 3 (concrete driveway) |
| `deck2.jpg` | Recent projects: tile 4 (custom deck) |
| `g4.jpg` | Recent projects: tile 5 (fencing and planting) |

If a new photo shows something different, update its description (`alt`) in
`src/data/site.js` too. Screen readers and Google read those descriptions.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install        # first time only: downloads Astro
npm run dev        # starts a local preview at http://localhost:4321 (refreshes as you edit)
npm run build      # makes the final site in the dist/ folder
npm run preview    # serves that dist/ folder so you can check it
```

## Where to edit things

| I want to change… | Edit this file |
| --- | --- |
| Phone, email, address, company number, form endpoint | `src/data/site.js` (top section) |
| Services, process steps, project photos list, form chips | `src/data/site.js` (the lists below) |
| Headings and other page text | `src/pages/index.astro` (sections are labelled in order) |
| Colours, fonts, spacing | `src/styles/global.css`: the `:root` block at the top holds all the colours |
| Photos | `src/assets/` (see the table above) |
| Page title / Google description | `title` and `description` in `src/data/site.js` |
| Live website address | `site` in `astro.config.mjs` |

## How the quote form works

The form has two modes, set by `FORM_ENDPOINT` in `src/data/site.js`:

1. **`FORM_ENDPOINT: ''` (empty, the current setting).** When someone presses "Request an
   estimate", their email app opens with a message to the business email. Their answers
   are already filled in. The thank-you message then shows. This works with no setup, but
   it relies on the visitor having an email app.
2. **A Formspree endpoint (recommended).** The form sends the message to you directly with
   no email app needed. To turn it on:
   1. Sign up for free at [formspree.io](https://formspree.io) using the business email.
   2. Create a new form. Formspree gives you an address like `https://formspree.io/f/abcdwxyz`.
   3. Paste it into `src/data/site.js`: `FORM_ENDPOINT: 'https://formspree.io/f/abcdwxyz',`
   4. Commit, push and redeploy, then send a test message.

   If a message fails to send, the visitor sees a short error asking them to try again or
   to call (once a phone number is set) or email.

The form includes a hidden spam trap field called `_gotcha`. Real people never see it,
and Formspree ignores messages where it's filled in.

## Deploy to Vercel

1. Push this repository to GitHub.
2. At [vercel.com](https://vercel.com), choose **Add New → Project** and import the repository.
3. Vercel detects Astro on its own, so keep the default settings and click **Deploy**.
4. Add the real domain under **Settings → Domains**, then update `site` in `astro.config.mjs`.

Every push to the main branch redeploys automatically.

## How to undo a change

Every change is saved as a "commit" in git, so you can always go back.

```bash
git log --oneline          # list recent changes; each has a short code like a1b2c3d
git revert a1b2c3d         # undo that one change (this creates a new "undo" commit)
git push                   # publish the undo; Vercel redeploys
```

`git revert` is safe: it doesn't delete history, it just adds a commit that reverses the
one you picked. If you haven't committed yet, `git checkout -- path/to/file` discards your
unsaved edits to that file.

## What's in the folder

```
README.md               this file
package.json            the scripts above (dev, build, preview)
astro.config.mjs        Astro settings (live website address)
public/                 files copied as-is: favicon.svg (the logo mark), robots.txt
src/assets/             photos (Astro converts them to small WebP files automatically)
src/data/site.js        business info and all the content lists
src/styles/global.css   all the styles, in page order
src/pages/index.astro   the page itself
```
