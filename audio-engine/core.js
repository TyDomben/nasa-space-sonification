/**
 * NASA Space Sonification - Audio Engine Core
 * Handles audio context, master controls, and audio processing
 */

class AudioEngine {
    constructor() {
        this.audioContext = null;
        this.masterGain = null;
        this.analyser = null;
        this.initialized = false;
        this.activeSounds = new Map();
        this.masterVolume = 0.7;

        // Effects processors
        this.reverb = null;
        this.delay = null;
        this.compressor = null;
    }

    /**
     * Initialize the audio engine
     * Must be called after user interaction (browser requirement)
     */
    async init() {
        if (this.initialized) return;

        try {
            // Resume audio context (may be suspended by browser)
            await Tone.start();
            console.log('Audio engine initialized');

            // Set up master volume control
            Tone.Master.volume.value = this.volumeToDb(this.masterVolume);

            // Create analyser for visualizations
            this.analyser = new Tone.Analyser('waveform', 2048);
            Tone.Master.connect(this.analyser);

            // Set up effects chain
            this.setupEffects();

            this.initialized = true;
            return true;
        } catch (error) {
            console.error('Failed to initialize audio engine:', error);
            return false;
        }
    }

    /**
     * Set up audio effects chain
     */
    setupEffects() {
        // Reverb for spatial depth
        this.reverb = new Tone.Reverb({
            decay: 4,
            preDelay: 0.01,
            wet: 0.2
        }).toDestination();

        // Delay for rhythmic effects
        this.delay = new Tone.FeedbackDelay({
            delayTime: '8n',
            feedback: 0.3,
            wet: 0
        }).toDestination();

        // Compressor for consistent levels
        this.compressor = new Tone.Compressor({
            threshold: -20,
            ratio: 4,
            attack: 0.003,
            release: 0.1
        }).toDestination();
    }

    /**
     * Convert linear volume (0-1) to decibels
     */
    volumeToDb(volume) {
        return volume === 0 ? -Infinity : 20 * Math.log10(volume);
    }

    /**
     * Set master volume
     * @param {number} volume - Volume from 0 to 1
     */
    setMasterVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
        Tone.Master.volume.value = this.volumeToDb(this.masterVolume);
    }

    /**
     * Get current master volume
     */
    getMasterVolume() {
        return this.masterVolume;
    }

    /**
     * Set reverb amount
     * @param {number} amount - Reverb wet amount from 0 to 1
     */
    setReverb(amount) {
        if (this.reverb) {
            this.reverb.wet.value = Math.max(0, Math.min(1, amount));
        }
    }

    /**
     * Set delay amount
     * @param {number} amount - Delay wet amount from 0 to 1
     */
    setDelay(amount) {
        if (this.delay) {
            this.delay.wet.value = Math.max(0, Math.min(1, amount));
        }
    }

    /**
     * Register an active sound
     */
    registerSound(id, sound) {
        this.activeSounds.set(id, sound);
    }

    /**
     * Unregister a sound
     */
    unregisterSound(id) {
        this.activeSounds.delete(id);
    }

    /**
     * Stop all active sounds
     */
    stopAll() {
        this.activeSounds.forEach((sound, id) => {
            if (sound && typeof sound.stop === 'function') {
                sound.stop();
            }
        });
        this.activeSounds.clear();
    }

    /**
     * Get analyser data for visualizations
     */
    getAnalyserData() {
        if (this.analyser) {
            return this.analyser.getValue();
        }
        return null;
    }

    /**
     * Get frequency data for spectrograms
     */
    getFrequencyData() {
        if (!this.analyser) return null;

        // Switch to FFT mode temporarily
        const currentType = this.analyser.type;
        this.analyser.type = 'fft';
        const data = this.analyser.getValue();
        this.analyser.type = currentType;

        return data;
    }

    /**
     * Clean up and dispose audio resources
     */
    dispose() {
        this.stopAll();

        if (this.reverb) this.reverb.dispose();
        if (this.delay) this.delay.dispose();
        if (this.compressor) this.compressor.dispose();
        if (this.analyser) this.analyser.dispose();

        this.initialized = false;
    }
}

/**
 * Global audio engine instance
 */
const audioEngine = new AudioEngine();

/**
 * Musical scales for mapping data to pleasing melodies
 */
const MUSICAL_SCALES = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    pentatonic: [0, 2, 4, 7, 9],
    blues: [0, 3, 5, 6, 7, 10],
    chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    wholeTone: [0, 2, 4, 6, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    harmonic: [0, 2, 3, 5, 7, 8, 11]
};

/**
 * Map a value from one range to another
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Map a value to a note in a musical scale
 * @param {number} value - Input value (0-1)
 * @param {string} scaleName - Name of the scale
 * @param {number} octaveMin - Minimum octave
 * @param {number} octaveMax - Maximum octave
 * @returns {number} - Frequency in Hz
 */
function mapToScale(value, scaleName = 'pentatonic', octaveMin = 2, octaveMax = 6) {
    const scale = MUSICAL_SCALES[scaleName] || MUSICAL_SCALES.pentatonic;
    const totalNotes = scale.length * (octaveMax - octaveMin + 1);

    // Map value to note index
    const noteIndex = Math.floor(value * (totalNotes - 1));
    const octave = Math.floor(noteIndex / scale.length) + octaveMin;
    const scaleIndex = noteIndex % scale.length;
    const semitone = scale[scaleIndex];

    // Calculate frequency (A4 = 440Hz as reference)
    const midiNote = (octave + 1) * 12 + semitone;
    const frequency = 440 * Math.pow(2, (midiNote - 69) / 12);

    return frequency;
}

/**
 * Normalize array values to 0-1 range
 */
function normalizeArray(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    if (max === min) return arr.map(() => 0.5);
    return arr.map(val => (val - min) / (max - min));
}

/**
 * Get color brightness from RGB
 */
function getBrightness(r, g, b) {
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

/**
 * Get color hue from RGB
 */
function getHue(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;

    if (max !== min) {
        const d = max - min;
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return h;
}

/**
 * Initialize audio engine on user interaction
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize on first user interaction
    const initAudioOnInteraction = async () => {
        await audioEngine.init();
        document.removeEventListener('click', initAudioOnInteraction);
        document.removeEventListener('touchstart', initAudioOnInteraction);
        document.removeEventListener('keydown', initAudioOnInteraction);
    };

    document.addEventListener('click', initAudioOnInteraction);
    document.addEventListener('touchstart', initAudioOnInteraction);
    document.addEventListener('keydown', initAudioOnInteraction);
});

console.log('Audio Engine Core loaded');
