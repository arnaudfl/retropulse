# AGENTS.md

## Project summary

RetroPulse is a browser-based music visualizer inspired by classic Winamp-like visualization styles.

The project should remain lightweight, visually satisfying, and easy to maintain.

This repository is intentionally small at the start. The goal is to let Codex build a clean V1 from clear constraints and priorities.

## Primary objective

Build a first working version of RetroPulse as a static browser application.

The V1 must allow a user to:

- load a local audio file
- play and pause it
- visualize the audio in real time
- switch between at least 3 visualizer modes

## Required technical direction

Prefer the following stack:

- HTML
- CSS
- Vanilla JavaScript
- Canvas 2D
- Web Audio API

Favor browser-native APIs and a simple static project structure.

## Allowed scope

Codex may create:

- HTML, CSS, and JavaScript files
- small utility modules
- a simple project structure
- basic npm metadata if useful
- lightweight documentation updates
- a clean UI layer
- visualizer modules separated by rendering mode

## Forbidden scope

Do not add or introduce:

- React
- Vue
- Angular
- TypeScript unless clearly necessary
- backend services
- authentication
- databases
- cloud storage
- external image assets
- sprite sheets
- unnecessary package dependencies
- build complexity without a strong reason
- audio streaming services
- user accounts
- large design systems

## Product constraints

- The application must work as a front-end project only.
- The experience should remain simple and fast.
- The visual identity should be dark, neon, retro-futuristic, and clean.
- No external assets are required for V1.
- Prefer procedural or canvas-generated visuals over imported media.

## Architecture guidance

Keep the architecture understandable for a solo developer.

Prefer simple modular separation such as:

- app bootstrap
- audio analysis
- rendering loop
- visualizer modes
- UI controls

Avoid complex abstractions too early.

Avoid overengineering.

## UX guidance

The interface should feel minimal and focused.

Expected controls for V1:

- load audio
- play / pause
- mode selector
- optional sensitivity or intensity control if easy to implement

The canvas should be the visual focus of the page.

## Visual guidance

Aim for a retro player / Winamp-inspired feel without copying any proprietary interface.

Visual direction:

- dark background
- neon glow
- crisp lines
- readable controls
- smooth motion
- satisfying reactive behavior

## Delivery priorities

Follow this order of priority:

1. Make the app functional end-to-end
2. Keep the stack simple
3. Keep the code modular and readable
4. Make the visuals feel polished
5. Add extra modes only if the base is stable

## Definition of done for V1

V1 is done when all of the following are true:

- the app runs in a browser
- a local audio file can be selected
- audio playback works
- analyzer data drives the rendering in real time
- at least 3 visualizer modes exist
- switching modes works without breaking the app
- there are no obvious console errors during normal use
- the UI is coherent and usable
- the result feels visually pleasing even without extra assets

## Coding style

- Prefer descriptive names
- Prefer small focused modules
- Comment only when useful
- Keep code readable over clever
- Avoid unnecessary indirection
- Avoid premature optimization

## Decision rule

When multiple implementations are possible, choose the one that is:

- simplest
- most maintainable
- easiest to understand
- sufficient for a polished V1

## Change policy

Codex should make incremental, coherent changes.

Codex should not redesign the whole project unless necessary.

Codex should preserve the lightweight nature of the repository.

## Initial execution plan

Codex should start by creating:

- a basic HTML shell
- a minimal dark UI
- a canvas rendering area
- audio loading and playback logic
- Web Audio analyzer integration
- 3 initial visualizer modes

Suggested initial 3 modes:

- Bars
- Waveform
- Radial

Additional modes are optional after the V1 is stable.
