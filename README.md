# RetroPulse

RetroPulse is a browser-based music visualizer inspired by classic Winamp-era visual effects.

## Goal

Build a clean, lightweight audio visualizer with multiple rendering modes, no external assets, and a retro-futuristic UI.

## Planned features

- Local audio file upload
- Play / pause controls
- Canvas 2D rendering
- Multiple visualization modes:
  - Bars
  - Wave
  - Radial
- Responsive layout
- Minimal neon-style interface

## Tech

- HTML
- CSS
- Vanilla JavaScript
- Web Audio API
- Canvas 2D

## Project rules

- No external framework unless clearly justified
- No sprite or image assets
- Keep code modular and readable
- Prioritize a working V1 before adding effects

## Development

Open `index.html` in a browser for a very early prototype, or use a local static server.

## V1 definition

A V1 is complete when:
- a local audio file can be loaded
- audio playback works
- analyser data drives the canvas
- 3 visualization modes are selectable
- the UI remains simple and stable
