/**
 * NASA Space Sonification - Guided Tour Player
 * Automated playback system for guided tours with narration
 */

class TourPlayer {
    constructor(galleryManager) {
        this.galleryManager = galleryManager;
        this.currentTour = null;
        this.currentStepIndex = 0;
        this.isPlaying = false;
        this.isPaused = false;
        this.autoAdvanceTimer = null;
        this.tourModal = null;
    }

    /**
     * Start playing a guided tour
     */
    async startTour(tourId) {
        const tour = guidedTours[tourId];

        if (!tour) {
            notify.error('Tour not found');
            return;
        }

        this.currentTour = tour;
        this.currentStepIndex = 0;
        this.isPlaying = true;
        this.isPaused = false;

        // Show tour modal
        this.showTourModal();

        // Start first step
        await this.playStep(0);

        notify.success(`Started tour: ${tour.title}`);
    }

    /**
     * Show the tour modal interface
     */
    showTourModal() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'tour-modal';

        const progressPercent = ((this.currentStepIndex + 1) / this.currentTour.steps.length) * 100;

        modal.innerHTML = `
            <div class="modal-content max-w-4xl">
                <!-- Header -->
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h2 class="text-3xl font-bold gradient-text">${this.currentTour.title}</h2>
                        <p class="text-gray-400 mt-2">${this.currentTour.description}</p>
                    </div>
                    <button onclick="tourPlayer.stopTour()" class="text-3xl hover:text-purple-400 transition">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- Progress Bar -->
                <div class="mb-6">
                    <div class="flex justify-between text-sm text-gray-400 mb-2">
                        <span id="tour-step-info">Step 1 of ${this.currentTour.steps.length}</span>
                        <span id="tour-time-info">0:00 / ${Math.floor(this.currentTour.duration / 60)}:00</span>
                    </div>
                    <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div id="tour-progress-bar" class="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500" style="width: ${progressPercent}%"></div>
                    </div>
                </div>

                <!-- Current Step Content -->
                <div id="tour-step-content" class="bg-black bg-opacity-30 rounded-lg p-6 mb-6">
                    <h3 id="tour-step-title" class="text-2xl font-bold text-purple-400 mb-4">Loading...</h3>
                    <p id="tour-narration" class="text-gray-300 text-lg leading-relaxed">
                        Loading tour content...
                    </p>
                </div>

                <!-- Sonification Player Area -->
                <div id="tour-sonification-area" class="mb-6">
                    <div class="text-center text-gray-400 py-8">
                        <i class="fas fa-compact-disc fa-3x mb-4 opacity-30"></i>
                        <p>Sonification will play here</p>
                    </div>
                </div>

                <!-- Controls -->
                <div class="flex justify-between items-center pt-6 border-t border-gray-700">
                    <button onclick="tourPlayer.previousStep()" id="tour-prev-btn" class="btn-secondary" disabled>
                        <i class="fas fa-chevron-left mr-2"></i> Previous
                    </button>

                    <div class="flex gap-3">
                        <button onclick="tourPlayer.togglePause()" id="tour-pause-btn" class="btn-primary">
                            <i class="fas fa-pause"></i>
                        </button>
                        <button onclick="tourPlayer.stopTour()" class="btn-secondary">
                            <i class="fas fa-stop"></i> Stop Tour
                        </button>
                    </div>

                    <button onclick="tourPlayer.nextStep()" id="tour-next-btn" class="btn-primary">
                        Next <i class="fas fa-chevron-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.tourModal = modal;

        // Prevent closing on overlay click during tour
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                e.stopPropagation();
            }
        });
    }

    /**
     * Play a specific step in the tour
     */
    async playStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= this.currentTour.steps.length) {
            return;
        }

        this.currentStepIndex = stepIndex;
        const step = this.currentTour.steps[stepIndex];

        // Update modal content
        this.updateModalContent(step);

        // Update buttons
        this.updateButtons();

        // Load and play sonification
        const sonification = sonificationLibrary.getById(step.sonificationId);

        if (sonification) {
            // Show sonification in tour area
            this.displaySonification(sonification);

            // Play the sonification
            try {
                await this.galleryManager.openPlayerInTour(sonification);
                notify.info(`Playing: ${sonification.name}`);
            } catch (error) {
                console.error('Error playing sonification:', error);
                notify.error('Failed to play sonification');
            }
        }

        // Set auto-advance timer if enabled
        if (step.autoAdvance && !this.isPaused) {
            this.setAutoAdvance(step.duration * 1000);
        }
    }

    /**
     * Update modal content for current step
     */
    updateModalContent(step) {
        const titleEl = document.getElementById('tour-step-title');
        const narrationEl = document.getElementById('tour-narration');
        const stepInfoEl = document.getElementById('tour-step-info');
        const progressBar = document.getElementById('tour-progress-bar');

        if (titleEl) titleEl.textContent = step.title;
        if (narrationEl) narrationEl.textContent = step.narration;
        if (stepInfoEl) {
            stepInfoEl.textContent = `Step ${this.currentStepIndex + 1} of ${this.currentTour.steps.length}`;
        }

        if (progressBar) {
            const progressPercent = ((this.currentStepIndex + 1) / this.currentTour.steps.length) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
    }

    /**
     * Display sonification info in tour area
     */
    displaySonification(sonification) {
        const areaEl = document.getElementById('tour-sonification-area');

        if (areaEl) {
            areaEl.innerHTML = `
                <div class="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-6">
                    <div class="flex gap-6">
                        <img src="${sonification.thumbnailUrl}" alt="${sonification.name}"
                             class="w-32 h-32 object-cover rounded-lg"
                             onerror="this.src='https://via.placeholder.com/128?text=NASA'">
                        <div class="flex-1">
                            <h4 class="text-xl font-bold text-purple-400 mb-2">${sonification.name}</h4>
                            <p class="text-gray-300 mb-3">${sonification.description}</p>
                            <div class="flex gap-4 text-sm text-gray-400">
                                <span><i class="fas fa-clock mr-1"></i> ${sonification.duration}s</span>
                                <span><i class="fas fa-signal mr-1"></i> ${sonification.difficulty}</span>
                                <span><i class="fas fa-music mr-1"></i> ${sonification.sonificationConfig.scale}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    /**
     * Set auto-advance timer
     */
    setAutoAdvance(ms) {
        this.clearAutoAdvance();

        this.autoAdvanceTimer = setTimeout(() => {
            if (this.isPlaying && !this.isPaused) {
                this.nextStep();
            }
        }, ms);
    }

    /**
     * Clear auto-advance timer
     */
    clearAutoAdvance() {
        if (this.autoAdvanceTimer) {
            clearTimeout(this.autoAdvanceTimer);
            this.autoAdvanceTimer = null;
        }
    }

    /**
     * Go to next step
     */
    async nextStep() {
        this.clearAutoAdvance();

        if (this.currentStepIndex < this.currentTour.steps.length - 1) {
            await this.playStep(this.currentStepIndex + 1);
        } else {
            // Tour complete
            this.completeTour();
        }
    }

    /**
     * Go to previous step
     */
    async previousStep() {
        this.clearAutoAdvance();

        if (this.currentStepIndex > 0) {
            await this.playStep(this.currentStepIndex - 1);
        }
    }

    /**
     * Toggle pause/resume
     */
    togglePause() {
        this.isPaused = !this.isPaused;

        const pauseBtn = document.getElementById('tour-pause-btn');

        if (this.isPaused) {
            this.clearAutoAdvance();
            if (pauseBtn) {
                pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
            notify.info('Tour paused');
        } else {
            const step = this.currentTour.steps[this.currentStepIndex];
            if (step.autoAdvance) {
                this.setAutoAdvance(step.duration * 1000);
            }
            if (pauseBtn) {
                pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            notify.info('Tour resumed');
        }
    }

    /**
     * Update button states
     */
    updateButtons() {
        const prevBtn = document.getElementById('tour-prev-btn');
        const nextBtn = document.getElementById('tour-next-btn');

        if (prevBtn) {
            prevBtn.disabled = this.currentStepIndex === 0;
        }

        if (nextBtn) {
            if (this.currentStepIndex === this.currentTour.steps.length - 1) {
                nextBtn.innerHTML = 'Finish <i class="fas fa-check ml-2"></i>';
            } else {
                nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right ml-2"></i>';
            }
        }
    }

    /**
     * Complete the tour
     */
    completeTour() {
        notify.success(`Tour completed: ${this.currentTour.title}!`);

        // Show completion message
        const narrationEl = document.getElementById('tour-narration');
        if (narrationEl) {
            narrationEl.innerHTML = `
                <div class="text-center py-8">
                    <i class="fas fa-check-circle text-6xl text-green-400 mb-4"></i>
                    <h3 class="text-2xl font-bold text-green-400 mb-4">Tour Complete!</h3>
                    <p class="text-gray-300 mb-6">Thank you for joining us on this cosmic journey.</p>
                    <button onclick="tourPlayer.stopTour()" class="btn-primary">
                        Close Tour
                    </button>
                </div>
            `;
        }

        this.isPlaying = false;
        this.clearAutoAdvance();
    }

    /**
     * Stop the tour
     */
    stopTour() {
        this.clearAutoAdvance();
        this.isPlaying = false;
        this.isPaused = false;
        this.currentTour = null;
        this.currentStepIndex = 0;

        // Close modal
        if (this.tourModal) {
            this.tourModal.remove();
            this.tourModal = null;
        }

        // Stop any playing audio
        if (this.galleryManager) {
            this.galleryManager.stopCurrentSonification();
        }

        notify.info('Tour stopped');
    }
}

// Will be initialized when gallery manager is ready
let tourPlayer = null;

console.log('Tour Player system loaded');
