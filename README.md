# Big Walk Field Guide

A responsive, spoiler-aware guide site for **Big Walk**. It covers multiplayer setup, saving and joining, maps, items, radios, appearance, puzzles, and five tower routes.

## Pages

- Home page
- Guides hub
- Multiplayer & Crossplay
- Save, Host & Join
- Map & Locations
- Items & Uses
- Backpack, Map & Compass
- Radios & Channels
- Change Appearance
- Tower & Puzzle hub
- Beach, Red, Blue, Green, and Yellow tower routes

## Run locally

```bash
python -m http.server 4173 --directory site
```

Then open `http://localhost:4173/#/`.

## Project structure

```text
site/
├── index.html       # SEO metadata and app entry
├── styles.css       # Responsive desktop/mobile layout
└── app.js           # Page content, navigation, and hash router
```

The site is dependency-free and works in any modern browser.
