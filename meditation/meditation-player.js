/**
 * NASA Space Sonification - Meditation Player
 * Long-form ambient soundscape player with timer and controls
 */

class MeditationPlayer {
    constructor() {
        this.currentScape = null;
        this.isPlaying = false;
        this.startTime = null;
        this.elapsedTime = 0;
        this.timerDuration = 1800; // 30 minutes default
        this.timerInterval = null;
        this.modal = null;
        this.synths = [];
        this.fadeEnvelope = null;
    }

    /**
     * Start playing a meditation soundscape
     */
    async startMeditation(scapeId, customDuration = null) {
        const scape = meditationScapes[scapeId];

        if (!scape) {
            notify.error('Meditation soundscape not found');
            return;
        }

        this.currentScape = scape;
        this.timerDuration = customDuration || scape.duration;
        this.elapsedTime = 0;

        // Initialize audio engine
        await audioEngine.init();

        // Show meditation modal
        this.showMeditationModal();

        // Generate and play ambient soundscape
        await this.generateAmbientScape(scape);

        // Start timer
        this.startTimer();

        this.isPlaying = true;
        notify.success(`Started: ${scape.name}`);
    }

    /**
     * Show meditation modal interface
     */
    showMeditationModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'meditation-modal';

        modal.innerHTML = `
            <div class="modal-content max-w-4xl">
                <!-- Header -->
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-3xl font-bold gradient-text">${this.currentScape.name}</h2>
                        <p class="text-gray-400 mt-2">${this.currentScape.category.toUpperCase()}</p>
                    </div>
                    <button onclick="meditationPlayer.stop()" class="text-3xl hover:text-purple-400 transition">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- Image -->
                <div class="mb-6">
                    <img src="${this.currentScape.imageUrl}" alt="${this.currentScape.name}"
                         class="w-full h-64 object-cover rounded-lg opacity-60"
                         onerror="this.src='https://via.placeholder.com/800x400?text=Meditation'">
                </div>

                <!-- Description -->
                <div class="bg-black bg-opacity-30 rounded-lg p-6 mb-6">
                    <p class="text-gray-300 text-lg mb-4">${this.currentScape.description}</p>
                    <p class="text-sm text-gray-400 italic">${this.currentScape.instructions}</p>
                </div>

                <!-- Benefits -->
                <div class="mb-6">
                    <h4 class="text-sm font-bold text-purple-400 mb-3">BENEFITS:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${this.currentScape.benefits.map(benefit => `
                            <span class="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded-full text-sm">
                                ${benefit}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Timer Display -->
                <div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-8 mb-6">
                    <div class="text-center">
                        <div id="meditation-timer" class="text-6xl font-mono font-bold gradient-text mb-4">
                            ${this.formatTime(this.timerDuration)}
                        </div>
                        <div class="text-sm text-gray-400 mb-4">
                            <span id="meditation-status">STARTING...</span>
                        </div>
                        <!-- Progress Ring -->
                        <div class="relative inline-block">
                            <svg class="transform -rotate-90" width="120" height="120">
                                <circle cx="60" cy="60" r="54" stroke="rgba(255,255,255,0.1)" stroke-width="8" fill="none" />
                                <circle id="meditation-progress-ring" cx="60" cy="60" r="54"
                                        stroke="url(#gradient)" stroke-width="8" fill="none"
                                        stroke-dasharray="339.292" stroke-dashoffset="339.292"
                                        stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#8b5cf6" />
                                        <stop offset="100%" stop-color="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Controls -->
                <div class="flex flex-wrap gap-3 justify-center items-center">
                    <button onclick="meditationPlayer.togglePause()" id="meditation-pause-btn" class="btn-primary">
                        <i class="fas fa-pause mr-2"></i> Pause
                    </button>

                    <button onclick="meditationPlayer.extendTime(300)" class="btn-secondary">
                        <i class="fas fa-plus mr-2"></i> +5 min
                    </button>

                    <button onclick="meditationPlayer.setVolume(0.5)" class="btn-secondary" id="volume-btn">
                        <i class="fas fa-volume-up"></i>
                    </button>

                    <button onclick="meditationPlayer.stop()" class="btn-secondary">
                        <i class="fas fa-stop mr-2"></i> Stop
                    </button>
                </div>

                <!-- Volume Slider -->
                <div class="mt-4 flex items-center justify-center gap-3">
                    <label class="text-sm text-gray-400">Volume:</label>
                    <input type="range" id="meditation-volume" min="0" max="100" value="70"
                           class="w-48" onchange="meditationPlayer.setVolume(this.value / 100)">
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.modal = modal;

        // Prevent closing on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                e.stopPropagation();
            }
        });
    }

    /**
     * Generate ambient soundscape using Tone.js
     */
    async generateAmbientScape(scape) {
        const config = scape.config;

        // Clean up any existing synths
        this.cleanupSynths();

        // Create layered ambient drones
        for (let i = 0; i < config.layers; i++) {
            const harmonic = config.harmonics[i % config.harmonics.length];
            const frequency = config.baseFrequency * harmonic;

            // Create ambient synth for this layer
            const synth = new Tone.Synth({
                oscillator: {
                    type: 'sine'
                },
                envelope: {
                    attack: config.fadeIn || 30,
                    decay: 0,
                    sustain: 1,
                    release: config.fadeOut || 30
                }
            }).toDestination();

            // Add some subtle modulation
            const lfo = new Tone.LFO({
                frequency: 0.01 + (i * 0.005), // Very slow modulation
                min: frequency * 0.98,
                max: frequency * 1.02
            }).start();

            lfo.connect(synth.frequency);

            // Set volume based on layer (lower layers quieter)
            synth.volume.value = -15 - (i * 3);

            // Trigger note
            synth.triggerAttack(frequency);

            this.synths.push({ synth, lfo });
        }

        // Add reverb for space
        const reverb = new Tone.Reverb({
            decay: 8,
            wet: config.reverb || 0.8
        }).toDestination();

        await reverb.generate();

        // Connect all synths to reverb
        this.synths.forEach(({ synth }) => {
            synth.connect(reverb);
        });

        notify.info('Ambient soundscape generating... relax and breathe');
    }

    /**
     * Start the meditation timer
     */
    startTimer() {
        this.startTime = Date.now() - (this.elapsedTime * 1000);

        this.timerInterval = setInterval(() => {
            if (this.isPlaying) {
                this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
                const remaining = Math.max(0, this.timerDuration - this.elapsedTime);

                this.updateTimerDisplay(remaining);

                // Check if time is up
                if (remaining === 0) {
                    this.complete();
                }
            }
        }, 1000);
    }

    /**
     * Update timer display
     */
    updateTimerDisplay(seconds) {
        const timerEl = document.getElementById('meditation-timer');
        const statusEl = document.getElementById('meditation-status');
        const ringEl = document.getElementById('meditation-progress-ring');

        if (timerEl) {
            timerEl.textContent = this.formatTime(seconds);
        }

        if (statusEl) {
            if (seconds === 0) {
                statusEl.textContent = 'COMPLETE';
            } else {
                statusEl.textContent = this.isPlaying ? 'MEDITATING...' : 'PAUSED';
            }
        }

        // Update progress ring
        if (ringEl) {
            const progress = this.elapsedTime / this.timerDuration;
            const circumference = 339.292;
            const offset = circumference - (progress * circumference);
            ringEl.style.strokeDashoffset = offset;
        }
    }

    /**
     * Toggle pause/resume
     */
    togglePause() {
        this.isPlaying = !this.isPlaying;

        const pauseBtn = document.getElementById('meditation-pause-btn');

        if (this.isPlaying) {
            this.startTime = Date.now() - (this.elapsedTime * 1000);
            if (pauseBtn) {
                pauseBtn.innerHTML = '<i class="fas fa-pause mr-2"></i> Pause';
            }
            // Resume audio
            this.synths.forEach(({ synth }) => {
                if (synth.volume) {
                    synth.volume.rampTo(-15, 2); // Fade back in
                }
            });
            notify.info('Meditation resumed');
        } else {
            if (pauseBtn) {
                pauseBtn.innerHTML = '<i class="fas fa-play mr-2"></i> Resume';
            }
            // Pause audio (fade to silence)
            this.synths.forEach(({ synth }) => {
                if (synth.volume) {
                    synth.volume.rampTo(-60, 2); // Fade out
                }
            });
            notify.info('Meditation paused');
        }
    }

    /**
     * Extend meditation time
     */
    extendTime(seconds) {
        this.timerDuration += seconds;
        notify.success(`Added ${Math.floor(seconds / 60)} minutes`);
    }

    /**
     * Set volume
     */
    setVolume(value) {
        Tone.getDestination().volume.value = Tone.gainToDb(value);
    }

    /**
     * Complete meditation
     */
    complete() {
        clearInterval(this.timerInterval);
        this.isPlaying = false;

        notify.success('Meditation complete! Well done.');

        // Show completion message
        const statusEl = document.getElementById('meditation-status');
        if (statusEl) {
            statusEl.innerHTML = `
                <div class="mt-4">
                    <i class="fas fa-check-circle text-green-400 text-3xl mb-2"></i>
                    <p class="text-green-400">Session Complete!</p>
                </div>
            `;
        }

        // Fade out synths
        this.synths.forEach(({ synth }) => {
            if (synth.volume) {
                synth.volume.rampTo(-60, 30); // 30 second fade out
            }
        });

        // Auto-close after fade out
        setTimeout(() => {
            if (!this.isPlaying) {
                this.stop();
            }
        }, 35000);
    }

    /**
     * Stop meditation
     */
    stop() {
        clearInterval(this.timerInterval);
        this.isPlaying = false;
        this.elapsedTime = 0;

        // Clean up audio
        this.cleanupSynths();

        // Close modal
        if (this.modal) {
            this.modal.remove();
            this.modal = null;
        }

        notify.info('Meditation session ended');
    }

    /**
     * Clean up synthesizers
     */
    cleanupSynths() {
        this.synths.forEach(({ synth, lfo }) => {
            try {
                synth.triggerRelease();
                lfo.stop();
                lfo.dispose();
                synth.dispose();
            } catch (error) {
                console.error('Error cleaning up synth:', error);
            }
        });
        this.synths = [];
    }

    /**
     * Format time (MM:SS)
     */
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}

// Global instance
let meditationPlayer = null;

// Initialize when ready
if (typeof Tone !== 'undefined') {
    meditationPlayer = new MeditationPlayer();
    console.log('Meditation Player loaded');
}
