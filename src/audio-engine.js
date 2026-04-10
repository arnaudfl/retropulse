export class AudioEngine {
  constructor(audioElement) {
    this.audioElement = audioElement;
    this.audioContext = null;
    this.analyser = null;
    this.sourceNode = null;
  }

  ensureContext() {
    if (this.audioContext) {
      return;
    }

    const context = new window.AudioContext();
    const analyser = context.createAnalyser();
    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.82;

    const sourceNode = context.createMediaElementSource(this.audioElement);
    sourceNode.connect(analyser);
    analyser.connect(context.destination);

    this.audioContext = context;
    this.analyser = analyser;
    this.sourceNode = sourceNode;
  }

  async loadFile(file) {
    const objectUrl = URL.createObjectURL(file);
    this.audioElement.src = objectUrl;
    this.audioElement.load();
    await this.audioElement.play().catch(() => {
      // Playback is triggered by user interaction and may be blocked initially.
    });
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }

  async resumeContext() {
    this.ensureContext();
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
    }
  }

  getAnalyser() {
    this.ensureContext();
    return this.analyser;
  }

  isPlaying() {
    return !this.audioElement.paused && !this.audioElement.ended;
  }
}
