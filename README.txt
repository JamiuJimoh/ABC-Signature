ABC Signature website
=====================

Files
  index.html                 the page (HTML)
  css/styles.css             Tailwind CSS, already compiled. This is the file the page uses.
  src/input.css              Tailwind source: the site's component styles (.btn, .slot, ...)
  tailwind.config.js         Tailwind theme: colours and fonts
  js/jquery-3.6.1.min.js     jQuery
  js/navigation.js           menu and scroll navigation (plain JavaScript)
  js/main.js                 jQuery: WhatsApp links, booking form, service pre-select.
                             Contact details and social links are at the top, in CONFIG.
  images/                    all website photos (portrait, About, 8 portfolio)

Open it
  Unzip the whole folder, keep the folders together, and open index.html in a browser.
  To put it online, upload the folder (or the ZIP) to a host such as Netlify Drop,
  GitHub Pages or your web host. No build step is needed.
  Only the Google fonts (DM Sans and Cormorant Garamond) load from the internet.

Change the design (optional, needs Node.js)
  Edit index.html, src/input.css or tailwind.config.js, then run:
      npm install
      npm run build
  which rebuilds css/styles.css.

Change a photo
  Replace the file in images/ with a new one of the same name (4:5 portrait works best).
