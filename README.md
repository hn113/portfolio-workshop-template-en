# Your Name — Portfolio Template

A deliberately minimal starting point — plain HTML/CSS/JS, no build tools, no design opinions baked in. The goal is a clean, modern, and responsive skeleton you can make your own: change the colors, fonts, and layout as you like.

## Folder structure

Relative paths are used throughout, so keep this structure as-is:

```
your-repo/
├── index.html
├── css/
│   ├── style.css
│   └── cv.css
├── js/
│   └── script.js
├── cv/
│   └── index.html
└── README.md
```

## Where to start customizing

- **Colors & font** — all defined at the top of `css/style.css` under `:root { ... }`. Change `--color-accent` first; everything else follows. It automatically supports system dark mode!
- **Content** — edit the placeholder text directly in `index.html` and `cv/index.html` (name, bio, skills, projects, contact links).
- **Layout** — the CSS is intentionally simple so it's easy to read and change section by section.
- **Images** — if you want to display screenshots or an avatar, simply create an `images/` directory at the root, put your files inside, and reference them like `<img src="images/your-file.jpg">`.

## Preview locally

Open `index.html` directly in your browser, or use the VS Code "Live Server" extension for auto-reload while editing.