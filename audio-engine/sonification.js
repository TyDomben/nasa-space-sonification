/**
 * NASA Space Sonification - Sonification Engine
 * Maps space data to audio parameters
 */

class SonificationEngine {
    constructor() {
        this.activesonifications = new Map();
        this.currentPlayback = null;
    }

    /**
     * Sonify image data
     * Maps pixel brightness, color, and position to sound
     */
    async sonifyImage(imageData, config = {}) {
        const {
            scanMode = 'horizontal',      // 'horizontal', 'vertical', 'radial', 'random'
            scale = 'pentatonic',          // Musical scale
            synthType = 'ambient',         // Synth type
            duration = 30,                 // Duration in seconds
            brightness = 0.5,             // Brightness threshold
            colorMode = false,             // Use color for timbre
            stereo = true                  // Stereo positioning
        } = config;

        // Extract pixel data
        const pixels = this.extractPixelData(imageData, scanMode);

        // Normalize values
        const normalized = normalizeArray(pixels.map(p => p.brightness));

        // Create synthesizer based on type
        let synth;
        switch (synthType) {
            case 'ambient':
                synth = spaceSynth.createAmbientDrone();
                break;
            case 'melodic':
                synth = spaceSynth.createPluckSynth();
                break;
            case 'fm':
                synth = spaceSynth.createFMSynth();
                break;
            case 'noise':
                synth = spaceSynth.createNoiseSynth();
                break;
            default:
                synth = spaceSynth.createAmbientDrone();
        }

        // Create playback sequence
        const noteInterval = duration / pixels.length;
        const notes = [];

        pixels.forEach((pixel, i) => {
            const normalizedBrightness = normalized[i];

            // Map to frequency
            const freq = mapToScale(normalizedBrightness, scale, 2, 6);

            // Map position to stereo pan
            const pan = stereo ? mapRange(pixel.x, 0, imageData.width, -1, 1) : 0;

            // Map brightness to volume
            const velocity = mapRange(normalizedBrightness, 0, 1, 0.3, 1);

            // Calculate timing
            const time = i * noteInterval;

            notes.push({
                time,
                frequency: freq,
                duration: noteInterval * 1.5,
                velocity,
                pan
            });
        });

        return {
            synth,
            notes,
            duration,
            pixels: pixels.length
        };
    }

    /**
     * Extract pixel data from image in various scan modes
     */
    extractPixelData(imageData, scanMode) {
        const pixels = [];
        const { width, height, data } = imageData;

        switch (scanMode) {
            case 'horizontal':
                // Scan left to right, top to bottom
                for (let y = 0; y < height; y += 4) {
                    for (let x = 0; x < width; x += 4) {
                        pixels.push(this.getPixelInfo(data, x, y, width));
                    }
                }
                break;

            case 'vertical':
                // Scan top to bottom, left to right
                for (let x = 0; x < width; x += 4) {
                    for (let y = 0; y < height; y += 4) {
                        pixels.push(this.getPixelInfo(data, x, y, width));
                    }
                }
                break;

            case 'radial':
                // Scan from center outward
                const centerX = width / 2;
                const centerY = height / 2;
                const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);

                for (let r = 0; r < maxRadius; r += 4) {
                    for (let theta = 0; theta < Math.PI * 2; theta += 0.1) {
                        const x = Math.floor(centerX + r * Math.cos(theta));
                        const y = Math.floor(centerY + r * Math.sin(theta));
                        if (x >= 0 && x < width && y >= 0 && y < height) {
                            pixels.push(this.getPixelInfo(data, x, y, width));
                        }
                    }
                }
                break;

            case 'random':
                // Random sampling
                const sampleCount = Math.min(500, (width * height) / 16);
                for (let i = 0; i < sampleCount; i++) {
                    const x = Math.floor(Math.random() * width);
                    const y = Math.floor(Math.random() * height);
                    pixels.push(this.getPixelInfo(data, x, y, width));
                }
                break;
        }

        return pixels;
    }

    /**
     * Get pixel information at coordinates
     */
    getPixelInfo(data, x, y, width) {
        const index = (y * width + x) * 4;
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        const a = data[index + 3];

        return {
            x,
            y,
            r,
            g,
            b,
            a,
            brightness: getBrightness(r, g, b),
            hue: getHue(r, g, b),
            saturation: this.getSaturation(r, g, b)
        };
    }

    /**
     * Calculate color saturation
     */
    getSaturation(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;
        return max === 0 ? 0 : delta / max;
    }

    /**
     * Play sonification with scheduling
     */
    async playSonification(sonificationData, onProgress) {
        const { synth, notes, duration } = sonificationData;

        // Create panner for stereo positioning
        const panner = new Tone.Panner(0).toDestination();
        synth.connect(panner);

        const startTime = Tone.now();

        // Schedule all notes
        notes.forEach(note => {
            const scheduleTime = startTime + note.time;

            // Update panner position
            Tone.Transport.schedule((time) => {
                panner.pan.value = note.pan || 0;
            }, scheduleTime);

            // Trigger note
            if (synth.triggerAttackRelease) {
                synth.triggerAttackRelease(
                    note.frequency,
                    note.duration,
                    scheduleTime,
                    note.velocity
                );
            } else if (synth.triggerAttack) {
                synth.triggerAttack(note.frequency, scheduleTime, note.velocity);
            }

            // Progress callback
            if (onProgress) {
                Tone.Transport.schedule(() => {
                    onProgress(note.time / duration);
                }, scheduleTime);
            }
        });

        // Start transport
        Tone.Transport.start();

        // Stop after duration
        return new Promise(resolve => {
            setTimeout(() => {
                Tone.Transport.stop();
                Tone.Transport.cancel();
                panner.dispose();
                resolve();
            }, duration * 1000);
        });
    }

    /**
     * Sonify numerical dataset (time series)
     */
    sonifyDataset(data, config = {}) {
        const {
            scale = 'pentatonic',
            minFreq = 100,
            maxFreq = 1000,
            duration = 20,
            synthType = 'melodic'
        } = config;

        // Normalize data
        const normalized = normalizeArray(data);

        // Create synth
        let synth;
        switch (synthType) {
            case 'melodic':
                synth = spaceSynth.createPluckSynth();
                break;
            case 'fm':
                synth = spaceSynth.createFMSynth();
                break;
            case 'percussive':
                synth = spaceSynth.createPercussiveSynth();
                break;
            default:
                synth = spaceSynth.createPluckSynth();
        }

        // Create notes
        const noteInterval = duration / data.length;
        const notes = normalized.map((value, i) => {
            const freq = mapToScale(value, scale, 2, 6);
            return {
                time: i * noteInterval,
                frequency: freq,
                duration: noteInterval * 0.8,
                velocity: mapRange(value, 0, 1, 0.5, 1),
                pan: 0
            };
        });

        return {
            synth,
            notes,
            duration,
            dataPoints: data.length
        };
    }

    /**
     * Sonify orbital data
     * Convert planetary orbits to melodies
     */
    sonifyOrbit(orbitData, config = {}) {
        const {
            scale = 'harmonic',
            duration = 30,
            baseFreq = 220
        } = config;

        const {
            semiMajorAxis,      // Orbit size
            eccentricity,        // Orbit shape
            orbitalPeriod,       // How long one orbit takes
            inclination          // Tilt
        } = orbitData;

        // Map orbital parameters to sound
        const freq = baseFreq * (1 + semiMajorAxis / 10);
        const harmonicity = 1 + eccentricity * 5;
        const tempo = mapRange(orbitalPeriod, 0, 365, 240, 60); // BPM

        const synth = new Tone.FMSynth({
            harmonicity: harmonicity,
            modulationIndex: 10,
            volume: -12
        }).toDestination();

        // Create circular pattern
        const pattern = new Tone.Pattern((time, note) => {
            synth.triggerAttackRelease(note, '8n', time);
        }, [freq, freq * 1.25, freq * 1.5, freq * 2], 'up');

        pattern.interval = '8n';
        Tone.Transport.bpm.value = tempo;

        return {
            synth,
            pattern,
            duration,
            tempo
        };
    }

    /**
     * Stop current playback
     */
    stopPlayback() {
        if (this.currentPlayback) {
            Tone.Transport.stop();
            Tone.Transport.cancel();
            this.currentPlayback = null;
        }
    }

    /**
     * Create ambient soundscape from multiple layers
     */
    createSoundscape(layers, duration = 60) {
        const synths = [];

        layers.forEach(layer => {
            const { type, frequency, volume } = layer;

            let synth;
            switch (type) {
                case 'drone':
                    synth = spaceSynth.createAmbientDrone({ baseFreq: frequency, volume });
                    synth.triggerAttack(frequency);
                    break;

                case 'noise':
                    synth = spaceSynth.createNoiseSynth({ volume });
                    synth.triggerAttack();
                    break;

                case 'pulse':
                    synth = spaceSynth.createFMSynth({ volume });
                    const pattern = new Tone.Loop((time) => {
                        synth.triggerAttackRelease(frequency, '8n', time);
                    }, '4n');
                    pattern.start(0);
                    break;
            }

            if (synth) {
                synths.push(synth);
            }
        });

        // Auto-stop after duration
        setTimeout(() => {
            synths.forEach(synth => {
                if (synth.triggerRelease) {
                    synth.triggerRelease();
                }
                setTimeout(() => {
                    if (synth.dispose) synth.dispose();
                }, 5000);
            });
        }, duration * 1000);

        return synths;
    }

    /**
     * Clean up resources
     */
    dispose() {
        this.stopPlayback();
        this.activeSonifications.forEach(s => {
            if (s.synth && s.synth.dispose) {
                s.synth.dispose();
            }
        });
        this.activeSonifications.clear();
    }
}

/**
 * Preset sonification configurations for different space objects
 */
const SONIFICATION_PRESETS = {
    nebula: {
        scanMode: 'radial',
        scale: 'pentatonic',
        synthType: 'ambient',
        duration: 40,
        stereo: true
    },
    galaxy: {
        scanMode: 'radial',
        scale: 'harmonic',
        synthType: 'ambient',
        duration: 50,
        stereo: true
    },
    planet: {
        scanMode: 'horizontal',
        scale: 'major',
        synthType: 'melodic',
        duration: 25,
        stereo: true
    },
    star: {
        scanMode: 'random',
        scale: 'pentatonic',
        synthType: 'fm',
        duration: 20,
        stereo: false
    },
    blackhole: {
        scanMode: 'radial',
        scale: 'phrygian',
        synthType: 'ambient',
        duration: 60,
        stereo: true
    },
    supernova: {
        scanMode: 'radial',
        scale: 'chromatic',
        synthType: 'noise',
        duration: 15,
        stereo: true
    }
};

// Global sonification engine
const sonificationEngine = new SonificationEngine();

console.log('Sonification Engine loaded');
