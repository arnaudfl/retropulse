# RetroPulse

RetroPulse is a browser-based music visualizer inspired by classic Winamp-era visual effects.

## V1 features

- Load local audio files directly in the browser
- Play and pause controls
- Real-time Web Audio API analysis
- Three visualizer modes:
  - Bars
  - Waveform
  - Radial
- Adjustable intensity control
- Lightweight neon/dark retro UI

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Canvas 2D
- Web Audio API

No framework, backend, or build tooling is required.

## Run locally

Because this app uses ES modules, run it from a local web server.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

### Option 2: Any static server

Use any static file server and point it to the repository root.

## Usage

1. Click **Load Audio** and choose a local audio file.
2. Click **Play**.
3. Switch between **Bars**, **Waveform**, and **Radial** modes.
4. Adjust **Intensity** to tune visual responsiveness.

## Notes

- Audio files are processed locally in the browser.
- No data is uploaded anywhere.
