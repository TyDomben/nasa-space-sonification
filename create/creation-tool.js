/**
 * NASA Space Sonification - Creation Tool
 * Interactive tool for creating custom sonifications
 */

class CreationTool {
    constructor() {
        this.currentImage = null;
        this.imageData = null;
        this.previewPlayer = null;
    }

    /**
     * Initialize creation tool
     */
    init() {
        this.renderTool();
    }

    /**
     * Render creation tool interface
     */
    renderTool() {
        const container = document.getElementById('create-tool-container');
        if (!container) return;

        container.innerHTML = `
            <div class="space-y-6">
                <!-- Image Input -->
                <div class="glass-card p-6">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <i class="fas fa-image text-purple-400 mr-2"></i>
                        Step 1: Choose Your Image
                    </h3>

                    <div class="grid md:grid-cols-2 gap-4">
                        <!-- Upload -->
                        <div>
                            <label class="block text-sm text-gray-400 mb-2">Upload Image</label>
                            <input
                                type="file"
                                id="image-upload"
                                accept="image/*"
                                class="block w-full text-sm text-gray-400
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-purple-600 file:text-white
                                    hover:file:bg-purple-500 cursor-pointer"
                            />
                        </div>

                        <!-- URL -->
                        <div>
                            <label class="block text-sm text-gray-400 mb-2">Or Use Image URL</label>
                            <div class="flex gap-2">
                                <input
                                    type="text"
                                    id="image-url"
                                    placeholder="https://example.com/space-image.jpg"
                                    class="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                />
                                <button
                                    id="load-url-btn"
                                    class="btn-primary"
                                >
                                    Load
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- NASA Examples -->
                    <div class="mt-4">
                        <label class="block text-sm text-gray-400 mb-2">Or Try NASA Examples</label>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-2" id="nasa-examples">
                            <!-- Examples will be loaded here -->
                        </div>
                    </div>

                    <!-- Image Preview -->
                    <div id="image-preview" class="mt-6 hidden">
                        <label class="block text-sm text-gray-400 mb-2">Preview</label>
                        <img id="preview-image" class="w-full max-w-2xl mx-auto rounded-lg" alt="Preview" />
                    </div>
                </div>

                <!-- Sonification Parameters -->
                <div class="glass-card p-6" id="parameters-section" style="display: none;">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <i class="fas fa-sliders-h text-blue-400 mr-2"></i>
                        Step 2: Configure Sonification
                    </h3>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Scan Mode -->
                        <div>
                            <label class="block text-sm text-gray-400 mb-2">Scan Mode</label>
                            <select id="scan-mode" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                                <option value="horizontal">Horizontal (Left to Right)</option>
                                <option value="vertical">Vertical (Top to Bottom)</option>
                                <option value="radial" selected>Radial (Center Out)</option>
                                <option value="random">Random Sampling</option>
                            </select>
                        </div>

                        <!-- Musical Scale -->
                        <div>
                            <label class="block text-sm text-gray-400 mb-2">Musical Scale</label>
                            <select id="musical-scale" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                                <option value="pentatonic" selected>Pentatonic (Ambient)</option>
                                <option value="major">Major (Bright)</option>
                                <option value="minor">Minor (Dark)</option>
                                <option value="blues">Blues (Soulful)</option>
                                <option value="chromatic">Chromatic (All Notes)</option>
                                <option value="harmonic">Harmonic (Mysterious)</option>
                            </select>
                        </div>

                        <!-- Synth Type -->
                        <div>
                            <label class="block text-sm text-gray-400 mb-2">Synth Type</label>
                            <select id="synth-type" class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
                                <option value="ambient" selected>Ambient (Smooth)</option>
                                <option value="melodic">Melodic (Clear Notes)</option>
                                <option value="fm">FM (Complex)</option>
                                <option value="noise">Noise (Textural)</option>
                            </select>
                        </div>

                        <!-- Duration -->
                        <div>
                            <label class="block text-sm text-gray-400 mb-2">Duration (seconds): <span id="duration-value">30</span></label>
                            <input
                                type="range"
                                id="duration-slider"
                                min="10"
                                max="120"
                                value="30"
                                class="w-full"
                            />
                        </div>

                        <!-- Stereo -->
                        <div>
                            <label class="flex items-center cursor-pointer">
                                <input type="checkbox" id="stereo-enabled" checked class="mr-2" />
                                <span class="text-white">Enable Stereo Positioning</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Preview & Export -->
                <div class="glass-card p-6" id="preview-section" style="display: none;">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <i class="fas fa-play-circle text-green-400 mr-2"></i>
                        Step 3: Preview & Share
                    </h3>

                    <div class="text-center space-y-4">
                        <button id="preview-btn" class="btn-primary text-lg px-8 py-3">
                            <i class="fas fa-play mr-2"></i>
                            Preview Sonification
                        </button>

                        <div class="audio-viz h-32">
                            <canvas id="creation-viz" class="w-full h-full"></canvas>
                        </div>

                        <div class="flex justify-center gap-4">
                            <button id="save-btn" class="btn-secondary">
                                <i class="fas fa-save mr-2"></i>
                                Save Creation
                            </button>
                            <button id="share-btn" class="btn-secondary">
                                <i class="fas fa-share-alt mr-2"></i>
                                Share
                            </button>
                            <button id="export-btn" class="btn-secondary">
                                <i class="fas fa-download mr-2"></i>
                                Export Audio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setupEventListeners();
        this.loadNASAExamples();
    }

    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Image upload
        const uploadInput = document.getElementById('image-upload');
        if (uploadInput) {
            uploadInput.addEventListener('change', (e) => this.handleImageUpload(e));
        }

        // URL load
        const loadUrlBtn = document.getElementById('load-url-btn');
        if (loadUrlBtn) {
            loadUrlBtn.addEventListener('click', () => this.loadImageFromURL());
        }

        // Duration slider
        const durationSlider = document.getElementById('duration-slider');
        const durationValue = document.getElementById('duration-value');
        if (durationSlider && durationValue) {
            durationSlider.addEventListener('input', (e) => {
                durationValue.textContent = e.target.value;
            });
        }

        // Preview button
        const previewBtn = document.getElementById('preview-btn');
        if (previewBtn) {
            previewBtn.addEventListener('click', () => this.previewSonification());
        }

        // Save, share, export buttons
        document.getElementById('save-btn')?.addEventListener('click', () => this.saveCreation());
        document.getElementById('share-btn')?.addEventListener('click', () => this.shareCreation());
        document.getElementById('export-btn')?.addEventListener('click', () => this.exportAudio());
    }

    /**
     * Load NASA example images
     */
    loadNASAExamples() {
        const container = document.getElementById('nasa-examples');
        if (!container) return;

        const examples = nasaAPI.getCuratedImages().slice(0, 4);

        container.innerHTML = examples.map(example => `
            <div
                class="cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition"
                onclick="creationTool.loadExample('${example.imageUrl}')"
            >
                <img src="${example.thumbnailUrl}" alt="${example.name}" class="w-full aspect-square object-cover" />
                <p class="text-xs text-center mt-1 text-gray-400">${example.name}</p>
            </div>
        `).join('');
    }

    /**
     * Handle image upload
     */
    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            this.loadImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }

    /**
     * Load image from URL
     */
    async loadImageFromURL() {
        const urlInput = document.getElementById('image-url');
        if (!urlInput) return;

        const url = urlInput.value.trim();
        if (!url) {
            notify.warning('Please enter an image URL');
            return;
        }

        try {
            notify.info('Loading image from URL...');
            await this.loadImage(url);
            notify.success('Image loaded successfully!');
        } catch (error) {
            notify.error('Failed to load image. Please check the URL and CORS settings.');
        }
    }

    /**
     * Load example image
     */
    async loadExample(url) {
        await this.loadImage(url);
    }

    /**
     * Load and display image
     */
    async loadImage(src) {
        try {
            // Load image data
            this.imageData = await nasaAPI.loadImageData(src);

            // Display preview
            const previewImg = document.getElementById('preview-image');
            const previewContainer = document.getElementById('image-preview');

            if (previewImg && previewContainer) {
                previewImg.src = src;
                previewContainer.classList.remove('hidden');
            }

            // Show configuration sections
            document.getElementById('parameters-section').style.display = 'block';
            document.getElementById('preview-section').style.display = 'block';

            // Scroll to parameters
            document.getElementById('parameters-section').scrollIntoView({ behavior: 'smooth' });

        } catch (error) {
            console.error('Failed to load image:', error);
            notify.error('Failed to load image. Please try another image or check CORS settings.');
        }
    }

    /**
     * Preview sonification
     */
    async previewSonification() {
        if (!this.imageData) {
            notify.warning('Please load an image first');
            return;
        }

        const previewBtn = document.getElementById('preview-btn');
        if (!previewBtn) return;

        // Initialize audio
        await audioEngine.init();

        // Get configuration
        const config = {
            scanMode: document.getElementById('scan-mode').value,
            scale: document.getElementById('musical-scale').value,
            synthType: document.getElementById('synth-type').value,
            duration: parseInt(document.getElementById('duration-slider').value),
            stereo: document.getElementById('stereo-enabled').checked
        };

        // Disable button
        previewBtn.disabled = true;
        previewBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Generating...';

        try {
            // Generate sonification
            const sonificationData = await sonificationEngine.sonifyImage(this.imageData, config);

            // Start visualization
            const viz = new WaveformVisualizer('creation-viz');
            viz.start();

            // Play
            previewBtn.innerHTML = '<i class="fas fa-stop mr-2"></i> Stop';

            await sonificationEngine.playSonification(sonificationData, (progress) => {
                // Progress callback
            });

            // Cleanup
            viz.stop();
            previewBtn.disabled = false;
            previewBtn.innerHTML = '<i class="fas fa-play mr-2"></i> Preview Again';

        } catch (error) {
            console.error('Preview error:', error);
            previewBtn.disabled = false;
            previewBtn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Error';

            setTimeout(() => {
                previewBtn.innerHTML = '<i class="fas fa-play mr-2"></i> Try Again';
            }, 2000);
        }
    }

    /**
     * Save creation to local storage
     */
    saveCreation() {
        if (!this.imageData) {
            notify.warning('Please create a sonification first');
            return;
        }

        const config = {
            scanMode: document.getElementById('scan-mode').value,
            scale: document.getElementById('musical-scale').value,
            synthType: document.getElementById('synth-type').value,
            duration: parseInt(document.getElementById('duration-slider').value),
            stereo: document.getElementById('stereo-enabled').checked
        };

        // Get existing saved creations
        const saved = JSON.parse(localStorage.getItem('saved-sonifications') || '[]');

        // Add new creation
        const creation = {
            id: Date.now(),
            name: `Custom Sonification ${saved.length + 1}`,
            config: config,
            imageData: document.getElementById('preview-image')?.src || '',
            created: new Date().toISOString()
        };

        saved.push(creation);
        localStorage.setItem('saved-sonifications', JSON.stringify(saved));

        notify.success(`Saved as "${creation.name}"! (${saved.length} total saved)`);
    }

    /**
     * Share creation link
     */
    shareCreation() {
        const config = {
            scanMode: document.getElementById('scan-mode').value,
            scale: document.getElementById('musical-scale').value,
            synthType: document.getElementById('synth-type').value,
            duration: parseInt(document.getElementById('duration-slider').value),
            stereo: document.getElementById('stereo-enabled').checked
        };

        const shareData = encodeURIComponent(JSON.stringify(config));
        const url = `${window.location.origin}${window.location.pathname}?config=${shareData}`;

        navigator.clipboard.writeText(url).then(() => {
            notify.success('Share link copied to clipboard!');
        }).catch(() => {
            notify.error('Failed to copy link. Please copy manually: ' + url);
        });
    }

    /**
     * Export audio file
     */
    async exportAudio() {
        if (!this.imageData) {
            notify.warning('Please create a sonification first');
            return;
        }

        notify.info('Starting audio export... This may take a moment.');

        try {
            // Initialize audio
            await audioEngine.init();

            // Get configuration
            const config = {
                scanMode: document.getElementById('scan-mode').value,
                scale: document.getElementById('musical-scale').value,
                synthType: document.getElementById('synth-type').value,
                duration: parseInt(document.getElementById('duration-slider').value),
                stereo: document.getElementById('stereo-enabled').checked
            };

            // Start recording
            const started = await audioRecorder.startRecording();
            if (!started) {
                notify.error('Failed to start audio recording');
                return;
            }

            // Generate and play sonification
            const sonificationData = await sonificationEngine.sonifyImage(this.imageData, config);
            await sonificationEngine.playSonification(sonificationData);

            // Stop recording and get blob
            const blob = await audioRecorder.stopRecording();

            // Download file
            const filename = `sonification-${Date.now()}.webm`;
            audioRecorder.downloadAudio(blob, filename);

            notify.success(`Audio exported as ${filename}!`);

        } catch (error) {
            console.error('Export error:', error);
            notify.error('Failed to export audio. Please try again.');
        }
    }
}

// Global creation tool instance
const creationTool = new CreationTool();

console.log('Creation Tool loaded');
