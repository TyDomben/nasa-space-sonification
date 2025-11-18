/**
 * NASA Space Sonification - Synthesizers
 * Various synthesis methods for creating space sounds
 */

class SpaceSynthesizer {
    constructor() {
        this.synths = new Map();
        this.activeSounds = new Map();
    }

    /**
     * Create an ambient drone synthesizer
     * Perfect for nebulae and deep space objects
     */
    createAmbientDrone(config = {}) {
        const {
            baseFreq = 110,
            harmonics = 5,
            spread = 0.02,
            filterFreq = 1000,
            volume = -12
        } = config;

        // Create multiple detuned oscillators for richness
        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 4,
                decay: 2,
                sustain: 0.8,
                release: 8
            },
            filter: {
                type: 'lowpass',
                frequency: filterFreq,
                rolloff: -24
            },
            filterEnvelope: {
                attack: 2,
                decay: 1,
                sustain: 0.5,
                release: 4,
                baseFrequency: filterFreq,
                octaves: 2
            },
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Create a granular synthesizer for textural sounds
     * Great for solar wind and cosmic noise
     */
    createGranularSynth(config = {}) {
        const {
            grainSize = 0.1,
            overlap = 0.05,
            volume = -18
        } = config;

        const synth = new Tone.GrainPlayer({
            grainSize: grainSize,
            overlap: overlap,
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Create FM synthesis for complex timbres
     * Perfect for pulsars and rhythmic phenomena
     */
    createFMSynth(config = {}) {
        const {
            harmonicity = 3,
            modulationIndex = 10,
            volume = -15
        } = config;

        const synth = new Tone.FMSynth({
            harmonicity: harmonicity,
            modulationIndex: modulationIndex,
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 0.01,
                decay: 0.1,
                sustain: 0.5,
                release: 0.5
            },
            modulation: {
                type: 'square'
            },
            modulationEnvelope: {
                attack: 0.5,
                decay: 0,
                sustain: 1,
                release: 0.5
            },
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Create a membrane synthesizer for percussive sounds
     * Good for planetary impacts and rhythmic data
     */
    createPercussiveSynth(config = {}) {
        const {
            pitchDecay = 0.05,
            octaves = 10,
            volume = -12
        } = config;

        const synth = new Tone.MembraneSynth({
            pitchDecay: pitchDecay,
            octaves: octaves,
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 0.001,
                decay: 0.4,
                sustain: 0.01,
                release: 1.4
            },
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Create a noise-based synthesizer
     * Perfect for cosmic background radiation
     */
    createNoiseSynth(config = {}) {
        const {
            noiseType = 'pink',
            volume = -20
        } = config;

        const synth = new Tone.NoiseSynth({
            noise: {
                type: noiseType
            },
            envelope: {
                attack: 0.1,
                decay: 0.2,
                sustain: 0.8,
                release: 2
            },
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Create a pluck synthesizer for sharp, bell-like tones
     * Great for star twinkles and discrete events
     */
    createPluckSynth(config = {}) {
        const {
            resonance = 0.7,
            dampening = 4000,
            volume = -12
        } = config;

        const synth = new Tone.PluckSynth({
            attackNoise: 1,
            dampening: dampening,
            resonance: resonance,
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Create a metal synthesizer for industrial/harsh sounds
     * Good for solar flares and energetic events
     */
    createMetalSynth(config = {}) {
        const {
            frequency = 200,
            harmonicity = 5.1,
            volume = -18
        } = config;

        const synth = new Tone.MetalSynth({
            frequency: frequency,
            envelope: {
                attack: 0.001,
                decay: 1.4,
                release: 0.2
            },
            harmonicity: harmonicity,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1.5,
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Create a polyphonic additive synthesizer
     * Build complex harmonic structures
     */
    createAdditiveSynth(partials = [1, 0.5, 0.3, 0.2], config = {}) {
        const { volume = -15 } = config;

        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: 'custom',
                partials: partials
            },
            envelope: {
                attack: 1,
                decay: 0.5,
                sustain: 0.7,
                release: 2
            },
            volume: volume
        }).toDestination();

        return synth;
    }

    /**
     * Dispose of a synthesizer
     */
    disposeSynth(synth) {
        if (synth && typeof synth.dispose === 'function') {
            synth.dispose();
        }
    }

    /**
     * Dispose all synthesizers
     */
    disposeAll() {
        this.synths.forEach(synth => this.disposeSynth(synth));
        this.synths.clear();
        this.activeSounds.clear();
    }
}

/**
 * Sound Generator for specific space phenomena
 */
class SpaceSoundGenerator {
    /**
     * Generate pulsar-like rhythmic pulses
     */
    static generatePulsarSound(frequency, pulseRate, duration = 10) {
        const synth = new Tone.PluckSynth().toDestination();
        const pattern = new Tone.Pattern((time, note) => {
            synth.triggerAttackRelease(note, '32n', time);
        }, [frequency], 'up');

        Tone.Transport.bpm.value = pulseRate * 60;
        pattern.start(0);
        Tone.Transport.start();

        setTimeout(() => {
            pattern.stop();
            Tone.Transport.stop();
            synth.dispose();
        }, duration * 1000);

        return { synth, pattern };
    }

    /**
     * Generate solar wind whooshes
     */
    static generateSolarWind(speed, duration = 10) {
        const noise = new Tone.Noise('pink').toDestination();
        const filter = new Tone.AutoFilter({
            frequency: mapRange(speed, 0, 1, 0.1, 2),
            depth: 0.8
        }).toDestination();

        noise.connect(filter);
        filter.start();

        const envelope = new Tone.AmplitudeEnvelope({
            attack: 2,
            decay: 1,
            sustain: 0.6,
            release: 3
        }).toDestination();

        noise.connect(envelope);
        envelope.triggerAttack();

        setTimeout(() => {
            envelope.triggerRelease();
            setTimeout(() => {
                noise.dispose();
                filter.dispose();
                envelope.dispose();
            }, 4000);
        }, (duration - 4) * 1000);

        return { noise, filter, envelope };
    }

    /**
     * Generate black hole resonance
     */
    static generateBlackHoleResonance(mass, duration = 15) {
        const baseFreq = mapRange(mass, 0, 1, 20, 60);

        const synth = new Tone.AMSynth({
            harmonicity: 3.5,
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 5,
                decay: 3,
                sustain: 0.7,
                release: 8
            },
            modulation: {
                type: 'sine'
            },
            modulationEnvelope: {
                attack: 1,
                decay: 2,
                sustain: 0.8,
                release: 4
            },
            volume: -15
        }).toDestination();

        synth.triggerAttackRelease(baseFreq, duration);

        setTimeout(() => {
            synth.dispose();
        }, (duration + 1) * 1000);

        return synth;
    }

    /**
     * Generate gravitational waves interference pattern
     */
    static generateGravitationalWaves(amplitude, frequency, duration = 10) {
        const synth1 = new Tone.Oscillator(frequency, 'sine').toDestination();
        const synth2 = new Tone.Oscillator(frequency * 1.01, 'sine').toDestination();

        const volume = new Tone.Volume(
            mapRange(amplitude, 0, 1, -30, -10)
        ).toDestination();

        synth1.connect(volume);
        synth2.connect(volume);

        synth1.start();
        synth2.start();

        setTimeout(() => {
            synth1.stop();
            synth2.stop();
            setTimeout(() => {
                synth1.dispose();
                synth2.dispose();
                volume.dispose();
            }, 1000);
        }, duration * 1000);

        return { synth1, synth2, volume };
    }

    /**
     * Generate supernova explosion
     */
    static generateSupernova(intensity, duration = 8) {
        const noise = new Tone.Noise('white').toDestination();

        const filter = new Tone.Filter({
            type: 'lowpass',
            frequency: 20000,
            rolloff: -24
        }).toDestination();

        const envelope = new Tone.AmplitudeEnvelope({
            attack: 0.001,
            decay: 2,
            sustain: 0.3,
            release: duration - 2
        }).toDestination();

        noise.connect(filter);
        filter.connect(envelope);

        // Sweep filter down
        filter.frequency.linearRampTo(200, duration);

        envelope.triggerAttack();

        setTimeout(() => {
            envelope.triggerRelease();
            setTimeout(() => {
                noise.dispose();
                filter.dispose();
                envelope.dispose();
            }, duration * 1000);
        }, 100);

        return { noise, filter, envelope };
    }

    /**
     * Generate aurora borealis shimmer
     */
    static generateAuroraShimmer(duration = 20) {
        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 2,
                decay: 1,
                sustain: 0.5,
                release: 3
            },
            volume: -20
        }).toDestination();

        const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination();
        synth.connect(chorus);
        chorus.start();

        // Create shimmering pattern
        const notes = ['C4', 'E4', 'G4', 'B4', 'D5', 'F#5'];
        const pattern = new Tone.Pattern((time, note) => {
            synth.triggerAttackRelease(note, '4n', time);
        }, notes, 'random');

        pattern.interval = '4n';
        pattern.start(0);
        Tone.Transport.start();

        setTimeout(() => {
            pattern.stop();
            Tone.Transport.stop();
            chorus.stop();
            setTimeout(() => {
                synth.dispose();
                chorus.dispose();
            }, 4000);
        }, duration * 1000);

        return { synth, chorus, pattern };
    }
}

// Global synthesizer instance
const spaceSynth = new SpaceSynthesizer();

console.log('Synthesizers module loaded');
