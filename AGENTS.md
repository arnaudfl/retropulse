# AGENTS.md

## Project summary

This repository contains RetroPulse, a browser-based audio visualizer inspired by old-school media player visual effects.

The project must stay lightweight, readable, and easy to iterate on.

## Primary objective

Build a clean V1 with:
- local audio upload
- audio playback
- analyser-based rendering
- 3 visualizer modes: bars, wave, radial
- modular JavaScript structure

## Constraints

- Do not add React, Vue, or other frameworks.
- Do not add external assets.
- Do not add unnecessary dependencies.
- Prefer Canvas 2D over WebGL for V1.
- Keep the UI minimal and usable.
- Keep the code understandable for a solo developer.

## Code style

- Favor small modules with clear responsibilities.
- Avoid overly clever abstractions.
- Use descriptive names.
- Comment only where it helps understanding.
- Keep DOM logic separate from drawing logic when possible.

## Visual direction

- Dark background
- Neon / retro-futuristic feel
- Clean, simple controls
- Smooth animation over flashy complexity

## Delivery priorities

1. Make the project work end-to-end.
2. Keep the architecture simple.
3. Add polish only after the base is stable.

## Definition of done for V1

- User can load an audio file from disk
- User can play/pause audio
- Canvas updates in real time from analyser data
- User can switch between bars, wave, and radial modes
- No major UI breakage
- No console errors during normal use
