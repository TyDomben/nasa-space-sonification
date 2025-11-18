/**
 * NASA Space Sonification - Gallery Manager
 * Handles gallery display, filtering, and playback
 */

class GalleryManager {
    constructor() {
        this.currentCategory = 'all';
        this.currentPlayer = null;
        this.isPlaying = false;
    }

    /**
     * Initialize gallery
     */
    init() {
        this.renderGallery();
        this.setupEventListeners();
        this.loadFeatured();
    }

    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Category filter tabs
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterByCategory(category);
            });
        });

        // Search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.search(e.target.value);
            });
        }
    }

    /**
     * Render gallery grid
     */
    renderGallery(sonifications = null) {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;

        const items = sonifications || sonificationLibrary.getByCategory(this.currentCategory);

        if (items.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-20">
                    <i class="fas fa-search text-6xl text-gray-600 mb-4"></i>
                    <p class="text-gray-400 text-xl">No sonifications found</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = items.map(item => this.createGalleryCard(item)).join('');

        // Add click handlers
        items.forEach(item => {
            const card = document.getElementById(`card-${item.id}`);
            if (card) {
                card.addEventListener('click', () => this.openPlayer(item));

                // Hover preview (optional - can be resource intensive)
                // card.addEventListener('mouseenter', () => this.previewSound(item));
                // card.addEventListener('mouseleave', () => this.stopPreview());
            }
        });

        // Add fade-in animation
        this.animateCards();
    }

    /**
     * Create gallery card HTML
     */
    createGalleryCard(item) {
        return `
            <div id="card-${item.id}" class="glass-card overflow-hidden cursor-pointer fade-in">
                <div class="relative aspect-square overflow-hidden">
                    <img
                        src="${item.thumbnailUrl}"
                        alt="${item.name}"
                        class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        onerror="this.src='https://via.placeholder.com/400x400/1a0933/667eea?text=Loading...'"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <div class="text-white">
                            <h3 class="font-bold text-lg mb-1">${item.name}</h3>
                            <p class="text-xs text-gray-300">
                                <i class="fas fa-clock mr-1"></i>
                                ${item.duration}s
                                <span class="ml-3">
                                    <i class="fas fa-layer-group mr-1"></i>
                                    ${item.difficulty}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="absolute top-4 right-4">
                        <div class="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-purple-500 transition">
                            <i class="fas fa-play text-white"></i>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-gray-300 text-sm line-clamp-2">${item.description}</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        ${item.tags.slice(0, 3).map(tag => `
                            <span class="text-xs px-2 py-1 bg-purple-900/30 rounded-full text-purple-300">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Filter gallery by category
     */
    filterByCategory(category) {
        this.currentCategory = category;

        // Update active tab
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.category === category) {
                tab.classList.add('active');
            }
        });

        // Re-render gallery
        this.renderGallery();
    }

    /**
     * Search sonifications
     */
    search(query) {
        if (!query.trim()) {
            this.renderGallery();
            return;
        }

        const results = sonificationLibrary.search(query);
        this.renderGallery(results);
    }

    /**
     * Open player modal for a sonification
     */
    async openPlayer(item) {
        const modal = document.getElementById('player-modal');
        const title = document.getElementById('player-title');
        const content = document.getElementById('player-content');

        if (!modal || !title || !content) return;

        // Store current sonification for export
        this.currentSonification = item;

        // Initialize audio engine if needed
        await audioEngine.init();

        title.textContent = item.name;

        content.innerHTML = `
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Image and visualization -->
                <div>
                    <img
                        src="${item.imageUrl}"
                        alt="${item.name}"
                        class="w-full rounded-lg mb-4"
                        onerror="this.src='https://via.placeholder.com/800x600/1a0933/667eea?text=${encodeURIComponent(item.name)}'"
                    />
                    <div class="audio-viz h-32 mb-4">
                        <canvas id="visualization-canvas" class="w-full h-full"></canvas>
                    </div>

                    <!-- Controls -->
                    <div class="glass-card p-4">
                        <div class="flex items-center justify-between mb-4">
                            <button id="play-btn" class="btn-primary flex items-center">
                                <i class="fas fa-play mr-2"></i>
                                <span>Play</span>
                            </button>
                            <div class="flex items-center space-x-4">
                                <label class="text-sm text-gray-400">
                                    <i class="fas fa-volume-up mr-1"></i>
                                    Volume
                                </label>
                                <input
                                    type="range"
                                    id="volume-slider"
                                    min="0"
                                    max="100"
                                    value="70"
                                    class="w-24"
                                />
                            </div>
                        </div>

                        <!-- Progress bar -->
                        <div class="mb-4">
                            <div class="flex justify-between text-sm text-gray-400 mb-2">
                                <span id="current-time">0:00</span>
                                <span id="total-time">${this.formatTime(item.duration)}</span>
                            </div>
                            <div class="bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div id="progress-bar" class="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all" style="width: 0%"></div>
                            </div>
                        </div>

                        <!-- Additional controls -->
                        <div class="grid grid-cols-2 gap-3">
                            <button class="btn-secondary text-sm" onclick="galleryManager.exportAudio()">
                                <i class="fas fa-download mr-1"></i>
                                Export
                            </button>
                            <button class="btn-secondary text-sm" onclick="galleryManager.shareLink('${item.id}')">
                                <i class="fas fa-share mr-1"></i>
                                Share
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Information -->
                <div class="space-y-4">
                    <!-- Description -->
                    <div class="glass-card p-4">
                        <h4 class="font-bold mb-2 flex items-center">
                            <i class="fas fa-info-circle text-blue-400 mr-2"></i>
                            About
                        </h4>
                        <p class="text-gray-300 text-sm">${item.description}</p>
                        <p class="text-xs text-gray-500 mt-2">Credit: ${item.credit}</p>
                    </div>

                    <!-- Scientific Info -->
                    <div class="glass-card p-4">
                        <h4 class="font-bold mb-3 flex items-center">
                            <i class="fas fa-flask text-green-400 mr-2"></i>
                            Scientific Facts
                        </h4>
                        <div class="space-y-2 text-sm">
                            ${Object.entries(item.scientificInfo || {}).map(([key, value]) => `
                                <div class="flex justify-between">
                                    <span class="text-gray-400 capitalize">${key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                    <span class="text-white font-mono">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Mapping Info -->
                    <div class="glass-card p-4">
                        <h4 class="font-bold mb-3 flex items-center">
                            <i class="fas fa-wave-square text-purple-400 mr-2"></i>
                            What You're Hearing
                        </h4>
                        <div class="space-y-2 text-sm">
                            ${Object.entries(item.mappingInfo || {}).map(([key, value]) => `
                                <div>
                                    <span class="text-purple-300 font-semibold">${key}:</span>
                                    <span class="text-gray-300"> ${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2">
                        ${item.tags.map(tag => `
                            <span class="text-xs px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 border border-purple-700">
                                #${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Show modal
        modal.classList.remove('hidden');

        // Set up player controls
        this.setupPlayer(item);
    }

    /**
     * Set up player controls and playback
     */
    async setupPlayer(item) {
        const playBtn = document.getElementById('play-btn');
        const volumeSlider = document.getElementById('volume-slider');
        const progressBar = document.getElementById('progress-bar');
        const currentTimeEl = document.getElementById('current-time');

        if (!playBtn) return;

        let sonificationData = null;
        let isPlaying = false;

        // Play/pause handler
        playBtn.addEventListener('click', async () => {
            if (!isPlaying) {
                // Start playback
                playBtn.disabled = true;
                playBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Loading...';

                try {
                    // Generate or load sonification data
                    sonificationData = await this.prepareSonification(item);

                    // Start playback with progress callback
                    this.playSonificationWithProgress(
                        sonificationData,
                        item.duration,
                        (progress) => {
                            progressBar.style.width = `${progress * 100}%`;
                            currentTimeEl.textContent = this.formatTime(progress * item.duration);
                        },
                        () => {
                            // On complete
                            isPlaying = false;
                            playBtn.innerHTML = '<i class="fas fa-play mr-2"></i> Play Again';
                            progressBar.style.width = '0%';
                            currentTimeEl.textContent = '0:00';
                        }
                    );

                    isPlaying = true;
                    playBtn.disabled = false;
                    playBtn.innerHTML = '<i class="fas fa-pause mr-2"></i> Playing...';

                    // Start visualization
                    this.startVisualization();

                } catch (error) {
                    console.error('Playback error:', error);
                    playBtn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error';
                    setTimeout(() => {
                        playBtn.disabled = false;
                        playBtn.innerHTML = '<i class="fas fa-play mr-2"></i> Try Again';
                    }, 2000);
                }
            }
        });

        // Volume control
        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                const volume = e.target.value / 100;
                audioEngine.setMasterVolume(volume);
            });
        }
    }

    /**
     * Prepare sonification data based on type
     */
    async prepareSonification(item) {
        const config = item.sonificationConfig;

        if (config.type === 'procedural') {
            // Generate procedural sound
            return await this.generateProceduralSound(config);
        } else if (config.type === 'live') {
            // Fetch live data
            return await this.generateLiveDataSound(config);
        } else {
            // Image-based sonification
            const imageData = await nasaAPI.loadImageData(item.imageUrl);
            return await sonificationEngine.sonifyImage(imageData, config);
        }
    }

    /**
     * Generate procedural sounds
     */
    async generateProceduralSound(config) {
        const { generator, duration } = config;

        switch (generator) {
            case 'pulsar':
                return {
                    type: 'procedural',
                    play: () => SpaceSoundGenerator.generatePulsarSound(
                        config.frequency,
                        config.pulseRate,
                        duration
                    )
                };

            case 'solar-wind':
                return {
                    type: 'procedural',
                    play: () => SpaceSoundGenerator.generateSolarWind(
                        config.speed,
                        duration
                    )
                };

            case 'black-hole':
                return {
                    type: 'procedural',
                    play: () => SpaceSoundGenerator.generateBlackHoleResonance(
                        config.mass,
                        duration
                    )
                };

            case 'gravitational-waves':
                return {
                    type: 'procedural',
                    play: () => SpaceSoundGenerator.generateGravitationalWaves(
                        config.amplitude,
                        config.frequency,
                        duration
                    )
                };

            default:
                throw new Error(`Unknown generator: ${generator}`);
        }
    }

    /**
     * Generate sounds from live data
     */
    async generateLiveDataSound(config) {
        if (config.source === 'apod') {
            const apod = await nasaAPI.getAPOD();
            if (apod.media_type === 'image') {
                const imageData = await nasaAPI.loadImageData(apod.url);
                return await sonificationEngine.sonifyImage(imageData, config);
            }
        }
        throw new Error('Live data not available');
    }

    /**
     * Play sonification with progress updates
     */
    async playSonificationWithProgress(sonificationData, duration, onProgress, onComplete) {
        if (sonificationData.type === 'procedural') {
            // Procedural sounds handle their own timing
            const sound = sonificationData.play();

            // Manual progress tracking
            const startTime = Date.now();
            const interval = setInterval(() => {
                const elapsed = (Date.now() - startTime) / 1000;
                const progress = Math.min(elapsed / duration, 1);
                onProgress(progress);

                if (progress >= 1) {
                    clearInterval(interval);
                    onComplete();
                }
            }, 50);

        } else {
            // Standard sonification
            await sonificationEngine.playSonification(sonificationData, onProgress);
            onComplete();
        }
    }

    /**
     * Start waveform visualization
     */
    startVisualization() {
        const canvas = document.getElementById('visualization-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const draw = () => {
            const data = audioEngine.getAnalyserData();
            if (!data) return;

            ctx.fillStyle = 'rgba(10, 14, 39, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;
            ctx.strokeStyle = '#667eea';
            ctx.beginPath();

            const sliceWidth = canvas.width / data.length;
            let x = 0;

            for (let i = 0; i < data.length; i++) {
                const v = (data[i] + 1) / 2; // Normalize to 0-1
                const y = v * canvas.height;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            ctx.stroke();

            requestAnimationFrame(draw);
        };

        draw();
    }

    /**
     * Close player modal
     */
    closePlayer() {
        const modal = document.getElementById('player-modal');
        if (modal) {
            modal.classList.add('hidden');
        }

        // Stop all sounds
        audioEngine.stopAll();
        sonificationEngine.stopPlayback();
    }

    /**
     * Open player for tour (no modal, just play)
     */
    async openPlayerInTour(item) {
        // Store current sonification
        this.currentSonification = item;

        // Initialize audio engine if needed
        await audioEngine.init();

        // Stop any currently playing audio
        this.stopCurrentSonification();

        // Prepare and play sonification
        try {
            const sonificationData = await this.prepareSonification(item);
            await sonificationEngine.playSonification(sonificationData);
        } catch (error) {
            console.error('Error playing tour sonification:', error);
            throw error;
        }
    }

    /**
     * Stop currently playing sonification without closing modal
     */
    stopCurrentSonification() {
        audioEngine.stopAll();
        sonificationEngine.stopPlayback();
    }

    /**
     * Load featured sonification
     */
    async loadFeatured() {
        const container = document.getElementById('featured-content');
        if (!container) return;

        try {
            const featured = sonificationLibrary.getFeatured();

            container.innerHTML = `
                <div class="cursor-pointer" onclick="galleryManager.openPlayer(sonificationLibrary.getById('${featured.id}'))">
                    <img
                        src="${featured.imageUrl}"
                        alt="${featured.name}"
                        class="w-full max-w-2xl mx-auto rounded-lg mb-4 hover:opacity-90 transition"
                        onerror="this.src='https://via.placeholder.com/800x400/1a0933/667eea?text=Featured'"
                    />
                    <h4 class="text-2xl font-bold mb-2">${featured.name}</h4>
                    <p class="text-gray-300 mb-4">${featured.description}</p>
                    <button class="btn-primary">
                        <i class="fas fa-headphones mr-2"></i>
                        Experience Now
                    </button>
                </div>
            `;
        } catch (error) {
            console.error('Failed to load featured:', error);
        }

        // Set current date
        const dateEl = document.getElementById('current-date');
        if (dateEl) {
            dateEl.textContent = new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
        }
    }

    /**
     * Animate cards on load
     */
    animateCards() {
        const cards = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));
    }

    /**
     * Format time in MM:SS
     */
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    /**
     * Export audio - now fully functional!
     */
    async exportAudio() {
        // Get current playing item (stored during openPlayer)
        if (!this.currentSonification) {
            notify.warning('Please play a sonification first');
            return;
        }

        notify.info('Starting audio export... This may take a moment.');

        try {
            await audioEngine.init();

            // Start recording
            const started = await audioRecorder.startRecording();
            if (!started) {
                notify.error('Failed to start audio recording');
                return;
            }

            // Prepare and play sonification
            const sonificationData = await this.prepareSonification(this.currentSonification);

            if (sonificationData.type === 'procedural') {
                sonificationData.play();
                await new Promise(resolve => setTimeout(resolve, this.currentSonification.duration * 1000));
            } else {
                await sonificationEngine.playSonification(sonificationData);
            }

            // Stop recording and download
            const blob = await audioRecorder.stopRecording();
            const filename = `${this.currentSonification.id}-${Date.now()}.webm`;
            audioRecorder.downloadAudio(blob, filename);

            notify.success(`Audio exported as ${filename}!`);

        } catch (error) {
            console.error('Export error:', error);
            notify.error('Failed to export audio. Please try again.');
        }
    }

    /**
     * Share link with notification
     */
    shareLink(id) {
        const url = `${window.location.origin}${window.location.pathname}?play=${id}`;
        navigator.clipboard.writeText(url).then(() => {
            notify.success('Share link copied to clipboard!');
        }).catch(() => {
            notify.error('Failed to copy. URL: ' + url);
        });
    }
}

// Close player when clicking outside
window.closePlayer = function() {
    if (window.galleryManager) {
        window.galleryManager.closePlayer();
    }
};

// Global gallery manager instance
const galleryManager = new GalleryManager();

console.log('Gallery Manager loaded');
