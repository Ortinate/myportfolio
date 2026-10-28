// Audio synthesizer for tactile micro-interactions (Web Audio API)
// Pure zero-dependency, extremely lightweight (<1KB)

let audioCtx = null;
let soundEnabled = false;

export const setSoundEnabled = (enabled) => {
  soundEnabled = enabled;
  if (enabled && !audioCtx) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    } catch {
      // Audio not supported or blocked
    }
  }
};

export const getSoundEnabled = () => soundEnabled;

export const playPopSound = () => {
  if (!soundEnabled || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    // Gentle crisp high-frequency micro pop (800Hz down to 220Hz in 50ms)
    osc.frequency.setValueAtTime(820, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(240, audioCtx.currentTime + 0.045);

    gain.gain.setValueAtTime(0.045, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.045);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } catch {
    // Fail silently
  }
};

export const playClickSound = () => {
  if (!soundEnabled || !audioCtx) return;
  try {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.03);

    gain.gain.setValueAtTime(0.035, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.035);
  } catch {
    // Fail silently
  }
};
