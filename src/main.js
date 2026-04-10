import { AudioEngine } from "./audio-engine.js";
import { drawBars } from "./visualizers/bars.js";
import { drawWaveform } from "./visualizers/waveform.js";
import { drawRadial } from "./visualizers/radial.js";

const modeRenderers = {
  bars: (ctx, state) => drawBars(ctx, state.width, state.height, state.frequencyData, state.intensity, state.hueShift),
  waveform: (ctx, state) => drawWaveform(ctx, state.width, state.height, state.timeDomainData, state.intensity, state.hueShift),
  radial: (ctx, state) => drawRadial(ctx, state.width, state.height, state.frequencyData, state.intensity, state.hueShift, state.timeMs),
};

const fileInput = document.querySelector("#fileInput");
const playPauseBtn = document.querySelector("#playPauseBtn");
const modeSelect = document.querySelector("#modeSelect");
const intensityInput = document.querySelector("#intensityInput");
const trackLabel = document.querySelector("#trackLabel");
const audioElement = document.querySelector("#audioElement");
const canvas = document.querySelector("#visualizerCanvas");
const context2d = canvas.getContext("2d");

const audioEngine = new AudioEngine(audioElement);

let animationFrameId = 0;
let currentMode = modeSelect.value;
let intensity = Number(intensityInput.value);

function resizeCanvas() {
  const pixelRatio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.floor(rect.width * pixelRatio);
  canvas.height = Math.floor(rect.height * pixelRatio);
  context2d.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function drawIdleState() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  context2d.fillStyle = "#020408";
  context2d.fillRect(0, 0, width, height);
  context2d.strokeStyle = "rgba(95, 120, 255, 0.35)";
  context2d.lineWidth = 2;
  context2d.strokeRect(10, 10, width - 20, height - 20);

  context2d.fillStyle = "#9ab7ce";
  context2d.font = "500 18px Segoe UI, sans-serif";
  context2d.textAlign = "center";
  context2d.fillText("Load an audio file to begin", width / 2, height / 2);
}

function renderFrame(timeMs) {
  const analyser = audioEngine.getAnalyser();

  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  const timeDomainData = new Uint8Array(analyser.fftSize);
  analyser.getByteFrequencyData(frequencyData);
  analyser.getByteTimeDomainData(timeDomainData);

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const renderer = modeRenderers[currentMode] || modeRenderers.bars;

  renderer(context2d, {
    width,
    height,
    frequencyData,
    timeDomainData,
    intensity,
    hueShift: (timeMs * 0.03) % 360,
    timeMs,
  });

  animationFrameId = requestAnimationFrame(renderFrame);
}

function startRendering() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  animationFrameId = requestAnimationFrame(renderFrame);
}

function stopRendering() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = 0;
  }
  drawIdleState();
}

fileInput.addEventListener("change", async (event) => {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  await audioEngine.resumeContext();
  await audioEngine.loadFile(file);

  trackLabel.textContent = file.name;
  playPauseBtn.disabled = false;
  playPauseBtn.textContent = "Play";
  stopRendering();
});

playPauseBtn.addEventListener("click", async () => {
  if (!audioElement.src) {
    return;
  }

  await audioEngine.resumeContext();

  if (audioEngine.isPlaying()) {
    audioElement.pause();
    playPauseBtn.textContent = "Play";
    stopRendering();
  } else {
    await audioElement.play();
    playPauseBtn.textContent = "Pause";
    startRendering();
  }
});

audioElement.addEventListener("ended", () => {
  playPauseBtn.textContent = "Play";
  stopRendering();
});

modeSelect.addEventListener("change", (event) => {
  currentMode = event.target.value;
});

intensityInput.addEventListener("input", (event) => {
  intensity = Number(event.target.value);
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
drawIdleState();
