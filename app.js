/**
 * NASA Space Sonification - Main Application
 * Initializes and coordinates all modules
 */

class SpaceSonificationApp {
    constructor() {
        this.initialized = false;
    }

    /**
     * Initialize the application
     */
    async init() {
        if (this.initialized) return;

        console.log('🚀 NASA Space Sonification Archive initializing...');

        try {
            // Generate starfield background
            this.createStarfield();

            // Initialize gallery manager
            if (typeof galleryManager !== 'undefined') {
                galleryManager.init();
            }

            // Initialize creation tool
            if (typeof creationTool !== 'undefined') {
                creationTool.init();
            }

            // Initialize live data features
            this.initializeLiveData();

            // Set up global event listeners
            this.setupGlobalListeners();

            // Check URL for shared sonifications
            this.checkURLParameters();

            this.initialized = true;
            console.log('✅ Application initialized successfully');

        } catch (error) {
            console.error('❌ Failed to initialize application:', error);
        }
    }

    /**
     * Create animated starfield background
     */
    createStarfield() {
        const starfield = document.getElementById('starfield');
        if (!starfield) return;

        const starCount = 150;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Random size
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Random animation delay
            star.style.animationDelay = `${Math.random() * 3}s`;

            starfield.appendChild(star);
        }
    }

    /**
     * Initialize live data features
     */
    async initializeLiveData() {
        // Load ISS position
        this.updateISSPosition();
        setInterval(() => this.updateISSPosition(), 10000); // Update every 10 seconds

        // Load solar activity
        this.updateSolarActivity();
        setInterval(() => this.updateSolarActivity(), 300000); // Update every 5 minutes
    }

    /**
     * Update ISS position display
     */
    async updateISSPosition() {
        const container = document.getElementById('iss-position');
        if (!container) return;

        try {
            const data = await nasaAPI.getISSLocation();

            if (data && data.iss_position) {
                const { latitude, longitude } = data.iss_position;
                const timestamp = new Date(data.timestamp * 1000);

                container.innerHTML = `
                    <div class="text-sm space-y-2">
                        <div class="flex justify-between">
                            <span class="text-gray-400">Latitude:</span>
                            <span class="text-white font-mono">${parseFloat(latitude).toFixed(2)}°</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400">Longitude:</span>
                            <span class="text-white font-mono">${parseFloat(longitude).toFixed(2)}°</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-400">Updated:</span>
                            <span class="text-white text-xs">${timestamp.toLocaleTimeString()}</span>
                        </div>
                        <div class="mt-3 text-center">
                            <div class="inline-block px-3 py-1 bg-green-900/30 rounded-full">
                                <span class="text-green-400 text-xs">
                                    <i class="fas fa-circle animate-pulse mr-1"></i>
                                    Live
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Failed to update ISS position:', error);
            container.innerHTML = `
                <div class="text-center text-gray-500 text-sm">
                    <i class="fas fa-exclamation-triangle mb-2"></i>
                    <p>Data temporarily unavailable</p>
                </div>
            `;
        }
    }

    /**
     * Update solar activity display
     */
    async updateSolarActivity() {
        const container = document.getElementById('solar-activity');
        if (!container) return;

        try {
            const endDate = nasaAPI.getTodayFormatted();
            const startDate = nasaAPI.formatDate(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days ago

            const flares = await nasaAPI.getSolarFlares(startDate, endDate);

            const recentFlares = flares ? flares.slice(0, 5) : [];

            if (recentFlares.length > 0) {
                container.innerHTML = `
                    <div class="text-sm space-y-2">
                        <p class="text-gray-400 mb-2">Recent solar flares (7 days):</p>
                        ${recentFlares.map(flare => `
                            <div class="flex justify-between items-center py-1 border-b border-gray-800">
                                <span class="text-white">${flare.classType || 'Unknown'}</span>
                                <span class="text-xs text-gray-500">${new Date(flare.beginTime).toLocaleDateString()}</span>
                            </div>
                        `).join('')}
                        <div class="mt-3 text-center">
                            <div class="inline-block px-3 py-1 bg-yellow-900/30 rounded-full">
                                <span class="text-yellow-400 text-xs">
                                    <i class="fas fa-sun mr-1"></i>
                                    ${recentFlares.length} events
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <div class="text-center text-gray-400 text-sm">
                        <i class="fas fa-sun text-3xl mb-2 block"></i>
                        <p>No significant solar activity</p>
                        <p class="text-xs mt-1">in the past 7 days</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Failed to update solar activity:', error);
            container.innerHTML = `
                <div class="text-center text-gray-500 text-sm">
                    <i class="fas fa-exclamation-triangle mb-2"></i>
                    <p>Data temporarily unavailable</p>
                </div>
            `;
        }
    }

    /**
     * Set up global event listeners
     */
    setupGlobalListeners() {
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Close modal on outside click
        const modal = document.getElementById('player-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closePlayer();
                }
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('player-modal');
                if (modal && !modal.classList.contains('hidden')) {
                    closePlayer();
                }
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            });

            // Close mobile menu when clicking a link
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                });
            });
        }
    }

    /**
     * Check URL parameters for shared sonifications
     */
    checkURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);

        // Check for shared sonification
        const playId = urlParams.get('play');
        if (playId) {
            const sonification = sonificationLibrary.getById(playId);
            if (sonification) {
                // Delay to allow page to load
                setTimeout(() => {
                    galleryManager.openPlayer(sonification);
                }, 500);
            }
        }

        // Check for shared configuration
        const configData = urlParams.get('config');
        if (configData) {
            try {
                const config = JSON.parse(decodeURIComponent(configData));
                console.log('Shared configuration loaded:', config);
                // Apply configuration to creation tool
            } catch (error) {
                console.error('Failed to parse shared configuration:', error);
            }
        }
    }

    /**
     * Play ISS tracking sonification
     */
    async playISSTracking() {
        await audioEngine.init();

        try {
            const data = await nasaAPI.getISSLocation();

            if (data && data.iss_position) {
                const { latitude, longitude } = data.iss_position;

                // Map position to frequency
                const latFreq = mapToScale((parseFloat(latitude) + 90) / 180, 'pentatonic', 3, 5);
                const lonFreq = mapToScale((parseFloat(longitude) + 180) / 360, 'pentatonic', 3, 5);

                // Create ambient tone
                const synth = spaceSynth.createAmbientDrone({ baseFreq: latFreq });
                synth.triggerAttack(latFreq);

                // Modulate with longitude
                setTimeout(() => {
                    synth.triggerAttack(lonFreq);
                }, 1000);

                // Auto-stop after 10 seconds
                setTimeout(() => {
                    if (synth.triggerRelease) {
                        synth.triggerRelease();
                    }
                    setTimeout(() => {
                        synth.dispose();
                    }, 2000);
                }, 10000);

                notify.success('🛰️ Hearing the ISS! Higher pitch = further north, tone changes = longitude.');
            }
        } catch (error) {
            notify.error('Failed to load ISS data. Please try again later.');
        }
    }

    /**
     * Play solar activity sonification
     */
    async playSolarActivity() {
        await audioEngine.init();

        try {
            const endDate = nasaAPI.getTodayFormatted();
            const startDate = nasaAPI.formatDate(Date.now() - 7 * 24 * 60 * 60 * 1000);

            const flares = await nasaAPI.getSolarFlares(startDate, endDate);

            if (flares && flares.length > 0) {
                // Sonify flare intensity
                const intensity = flares.length / 10; // Normalize
                SpaceSoundGenerator.generateSupernova(intensity, 8);

                notify.success(`☀️ Hearing ${flares.length} solar flares from the past week!`);
            } else {
                notify.info('No significant solar activity in the past week. Our star is calm!');
            }
        } catch (error) {
            notify.error('Failed to load solar activity data. Please try again later.');
        }
    }
}

// Global helper functions
window.scrollToGallery = function() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        gallery.scrollIntoView({ behavior: 'smooth' });
    }
};

window.showRandomSonification = function() {
    const random = sonificationLibrary.getRandom();
    if (random && galleryManager) {
        galleryManager.openPlayer(random);
    }
};

window.playISSTracking = function() {
    if (app) {
        app.playISSTracking();
    }
};

window.playSolarActivity = function() {
    if (app) {
        app.playSolarActivity();
    }
};

window.showLearnModal = function(topic) {
    alert(`Educational content for "${topic}" coming soon! This will include interactive tutorials and explanations.`);
};

// Initialize application when DOM is ready
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new SpaceSonificationApp();
    app.init();
});

console.log('Main application loaded');
