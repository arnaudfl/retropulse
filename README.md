# RetroPulse

RetroPulse is a browser-based music visualizer inspired by classic Winamp-era visual effects.

## Project goal

Build a lightweight web audio visualizer that reacts to music in real time and offers multiple retro-styled rendering modes such as bars, waveform, vectors, and radial effects.

The project should feel visually satisfying, simple to use, and easy to evolve.

## Main idea

The user loads a local audio file in the browser.

The application analyzes the audio signal in real time and renders reactive visuals in a canvas.

The visualizer should support multiple display modes and a clean retro-futuristic interface.

## Core principles

- No external image assets
- No sprite sheets
- No heavy framework unless absolutely justified
- Keep the project lightweight and browser-native
- Favor a polished V1 over too many unfinished features

## Target V1

The first version should include:

- local audio file loading
- audio playback controls
- real-time visualization
- at least 3 visualizer modes
- a clean fullscreen-friendly interface
- a retro / neon / dark visual style

## Suggested visualizer modes

- Bars
- Waveform
- Radial
- Vector lines
- Dot field
- Tunnel or pulse mode

Only 3 modes are required for V1. More can be added later.

## Recommended tech direction

- HTML
- CSS
- Vanilla JavaScript
- Canvas 2D
- Web Audio API

## Non-goals for V1

Do not build:

- a full music player library manager
- user accounts
- playlists
- backend services
- database storage
- audio streaming integrations
- WebGL complexity unless the simple Canvas version becomes limiting

## Success criteria

The project is successful if:

- a user can open the app in a browser
- load a local audio file
- play the audio
- switch between visualizer modes
- see smooth, reactive visuals without major UI issues

## Future ideas

Possible later improvements:

- microphone input
- drag and drop audio loading
- additional shader-like effects
- color themes
- sensitivity controls
- fullscreen mode
- recording or export

## Repository purpose

This repository is intentionally initialized as a clear starting point for Codex.

The initial priority is to create a clean and functional V1, not to overengineer the architecture.
