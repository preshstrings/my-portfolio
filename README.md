Portfolio enhancements — Motion & 3D effects

This repository was updated to add premium motion and lightweight 3D background effects while preserving the original layout, sections, and color palette.

What's included
- `assets/js/animations.js` — Three.js background blobs + particles, GSAP animations (reveal, stagger, hero float), project-card tilt, custom cursor lighting, navbar scroll glass effect.
- `styles.css` — appended styles for canvas, custom cursor, card shine, and navbar scroll modifier.
- `index.html` — added `canvas` and cursor elements and deferred script includes.

Performance & accessibility
- The script detects `prefers-reduced-motion`, low device memory, and slow network connections and automatically reduces or disables Three.js effects.
- On small screens (<=768px) the canvas and cursor are hidden to save resources.

Run locally
1. Open a terminal in the project folder and run a static server (example):

```bash
cd "c:\Users\preci\Desktop\my portfolio"
python -m http.server 8000
```
2. Open `http://localhost:8000` in your browser.

Tweak motion settings
- To force-disable 3D effects, set `disableThree` to `true` in `assets/js/animations.js`.
- To reduce particle count or geometry detail, adjust `pCount` and sphere `segs` in the same file.

If you want, I can:
- Further tune animation timing and scale to match a specific device target.
- Add a small settings UI to toggle effects at runtime.
- Create a lightweight fallback animation for low-end devices (CSS-only).
