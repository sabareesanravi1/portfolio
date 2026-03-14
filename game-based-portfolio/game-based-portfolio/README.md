# 🚀 Sabareesan Ravi — Sci-Fi Space Shooter Portfolio

A gaming-themed personal portfolio with full Sci-Fi / Space Shooter aesthetics.

## 📁 Folder Structure

```
game-based-portfolio/
├── index.html              ← Main HTML (entry point)
├── README.md
└── assets/
    ├── css/
    │   └── style.css       ← All styles, animations & layout
    └── js/
        └── main.js         ← Cursor, starfield, parallax, scroll reveal
```

## 🎮 Features

- **Animated star field** — 240 drifting stars with random shooting stars
- **Custom cursor** — Cyan dot + lagging ring; turns orange on hover
- **HUD targeting ring** — Mouse-parallax spinning rings in hero section
- **Glitch name reveal** — Clip-path animation unveils "RAVI" in neon cyan
- **Scroll-triggered reveals** — Cards fade up staggered as you scroll
- **Active nav highlighting** — Nav links glow as sections come into view
- **CRT scanlines overlay** — Subtle retro screen effect
- **Responsive** — Mobile-friendly layout

## 🛠 Tech Stack Used

- Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)
- Google Fonts: Orbitron · Share Tech Mono · Exo 2
- Canvas API for star field animation
- IntersectionObserver API for scroll reveals

## 🚀 How to Run

Simply open `index.html` in any modern browser — no build step required.

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
npx serve .
# or
python3 -m http.server 8080
```

## ✏️ Customisation

| What to change       | Where                        |
|----------------------|------------------------------|
| Name / role          | `index.html` → `#hero`       |
| Colour palette       | `assets/css/style.css` → `:root` variables |
| Projects / skills    | `index.html` → respective sections |
| LinkedIn URL         | `index.html` → `#contact`    |
| Star count / speed   | `assets/js/main.js` → `createStars()` |

---

© 2025 Sabareesan Ravi
