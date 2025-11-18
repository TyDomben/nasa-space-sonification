/**
 * NASA Space Sonification - Utilities
 * Shared utility functions and notification system
 */

class NotificationSystem {
    constructor() {
        this.createNotificationContainer();
    }

    createNotificationContainer() {
        if (document.getElementById('notification-container')) return;

        const container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 400px;
        `;
        document.body.appendChild(container);
    }

    show(message, type = 'info', duration = 4000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;

        const colors = {
            success: 'rgba(34, 197, 94, 0.95)',
            error: 'rgba(239, 68, 68, 0.95)',
            info: 'rgba(59, 130, 246, 0.95)',
            warning: 'rgba(251, 191, 36, 0.95)'
        };

        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle'
        };

        notification.style.cssText = `
            background: ${colors[type] || colors.info};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            gap: 12px;
            animation: slideIn 0.3s ease;
            cursor: pointer;
            backdrop-filter: blur(10px);
        `;

        notification.innerHTML = `
            <i class="fas ${icons[type] || icons.info}"></i>
            <span style="flex: 1;">${message}</span>
            <i class="fas fa-times" style="opacity: 0.7; cursor: pointer;"></i>
        `;

        const container = document.getElementById('notification-container');
        container.appendChild(notification);

        // Click to dismiss
        notification.addEventListener('click', () => {
            this.dismiss(notification);
        });

        // Auto dismiss
        if (duration > 0) {
            setTimeout(() => this.dismiss(notification), duration);
        }

        return notification;
    }

    dismiss(notification) {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }

    success(message, duration) {
        return this.show(message, 'success', duration);
    }

    error(message, duration) {
        return this.show(message, 'error', duration);
    }

    info(message, duration) {
        return this.show(message, 'info', duration);
    }

    warning(message, duration) {
        return this.show(message, 'warning', duration);
    }
}

/**
 * Audio Recorder for exporting sonifications
 */
class AudioRecorder {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;
    }

    /**
     * Start recording audio from Tone.js destination
     */
    async startRecording() {
        try {
            // Get audio stream from Tone.js destination
            const dest = Tone.getDestination();
            const stream = dest.context.createMediaStreamDestination();

            // Connect Tone master to stream
            Tone.Master.connect(stream);

            // Create MediaRecorder
            this.mediaRecorder = new MediaRecorder(stream.stream, {
                mimeType: 'audio/webm;codecs=opus'
            });

            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.audioChunks.push(event.data);
                }
            };

            this.mediaRecorder.start();
            this.isRecording = true;

            return true;
        } catch (error) {
            console.error('Failed to start recording:', error);
            return false;
        }
    }

    /**
     * Stop recording and return audio blob
     */
    async stopRecording() {
        return new Promise((resolve, reject) => {
            if (!this.mediaRecorder || !this.isRecording) {
                reject(new Error('Not recording'));
                return;
            }

            this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
                this.isRecording = false;
                resolve(audioBlob);
            };

            this.mediaRecorder.stop();
        });
    }

    /**
     * Download audio blob as file
     */
    downloadAudio(blob, filename = 'sonification.webm') {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    /**
     * Convert WebM to WAV (simplified - returns blob as-is for browser compatibility)
     */
    async convertToWAV(blob) {
        // In a full implementation, this would use Web Audio API to convert
        // For now, return original blob (browsers can play WebM)
        return blob;
    }
}

/**
 * Educational Content Database
 */
const educationalContent = {
    'how-it-works': {
        title: 'How Sonification Works',
        sections: [
            {
                heading: 'What is Data Sonification?',
                content: `
                    <p class="mb-4">Data sonification is the process of representing data as sound. Instead of looking at graphs, charts, or images, you <em>hear</em> the data as audio patterns.</p>
                    <p class="mb-4">Think of it like this: just as a graph uses position and color to show data visually, sonification uses pitch, volume, and timbre to convey information through sound.</p>
                `
            },
            {
                heading: 'The Sonification Process',
                content: `
                    <div class="bg-black bg-opacity-30 p-4 rounded-lg mb-4">
                        <div class="font-mono text-sm">
                            <div class="text-purple-400">1. Data Acquisition</div>
                            <div class="ml-4 text-gray-300">↓ Fetch space image or dataset</div>

                            <div class="text-blue-400 mt-2">2. Data Extraction</div>
                            <div class="ml-4 text-gray-300">↓ Extract pixel data (brightness, color, position)</div>

                            <div class="text-green-400 mt-2">3. Parameter Mapping</div>
                            <div class="ml-4 text-gray-300">↓ Map data to sound (brightness → pitch, position → stereo)</div>

                            <div class="text-yellow-400 mt-2">4. Sound Synthesis</div>
                            <div class="ml-4 text-gray-300">↓ Generate audio using synthesizers</div>

                            <div class="text-pink-400 mt-2">5. Playback</div>
                            <div class="ml-4 text-gray-300">→ Hear the universe!</div>
                        </div>
                    </div>
                `
            },
            {
                heading: 'Common Mappings',
                content: `
                    <ul class="space-y-2">
                        <li><strong class="text-purple-400">Brightness → Pitch:</strong> Brighter pixels = higher notes</li>
                        <li><strong class="text-blue-400">Color → Timbre:</strong> Red = warm tones, Blue = cool tones</li>
                        <li><strong class="text-green-400">Position → Stereo:</strong> Left side = left speaker, right = right</li>
                        <li><strong class="text-yellow-400">Time → Melody:</strong> Data over time = musical sequence</li>
                        <li><strong class="text-pink-400">Density → Volume:</strong> More data = louder sound</li>
                    </ul>
                `
            },
            {
                heading: 'Why Sonification?',
                content: `
                    <p class="mb-4"><strong>Accessibility:</strong> Makes visual data accessible to blind and visually impaired people.</p>
                    <p class="mb-4"><strong>Pattern Detection:</strong> Humans are excellent at detecting patterns in sound, sometimes better than in visuals.</p>
                    <p class="mb-4"><strong>Multitasking:</strong> Listen to data while doing other visual tasks.</p>
                    <p class="mb-4"><strong>Artistic Expression:</strong> Creates beautiful, meaningful art from scientific data.</p>
                `
            }
        ]
    },
    'data-sources': {
        title: 'NASA Data Sources',
        sections: [
            {
                heading: 'Astronomy Picture of the Day (APOD)',
                content: `
                    <p class="mb-4">NASA's APOD features a different astronomical image or photograph each day, along with a brief explanation written by a professional astronomer.</p>
                    <p class="mb-4"><strong>API Endpoint:</strong> <code class="bg-black bg-opacity-50 px-2 py-1 rounded">https://api.nasa.gov/planetary/apod</code></p>
                    <p>We sonify the daily image, creating a new cosmic soundscape every day.</p>
                `
            },
            {
                heading: 'International Space Station (ISS) Location',
                content: `
                    <p class="mb-4">Real-time tracking of the ISS as it orbits Earth at ~27,600 km/h.</p>
                    <p class="mb-4"><strong>Update Frequency:</strong> Every 10 seconds</p>
                    <p class="mb-4"><strong>Sonification:</strong> Latitude → Pitch, Longitude → Tone shift</p>
                    <p>Higher pitch means the ISS is further north. Listen to it travel around our planet!</p>
                `
            },
            {
                heading: 'Solar Activity & Space Weather',
                content: `
                    <p class="mb-4">Data from NASA's DONKI (Space Weather Database Of Notifications, Knowledge, Information).</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li>Solar Flares - Sudden bursts of energy</li>
                        <li>Coronal Mass Ejections (CMEs) - Massive solar eruptions</li>
                        <li>Geomagnetic Storms - Disruptions in Earth's magnetosphere</li>
                    </ul>
                `
            },
            {
                heading: 'Mars Rover Images',
                content: `
                    <p class="mb-4">Photos from Curiosity, Opportunity, Spirit, and Perseverance rovers on Mars.</p>
                    <p class="mb-4"><strong>Cameras:</strong> FHAZ, RHAZ, MAST, CHEMCAM, NAVCAM, and more</p>
                    <p>Sonify the Martian landscape - hear the Red Planet's alien terrain.</p>
                `
            },
            {
                heading: 'NASA Image and Video Library',
                content: `
                    <p class="mb-4">Access to over 140,000+ NASA images, videos, and audio files.</p>
                    <p class="mb-4">Search by mission, subject, location, and more. Every image tells a story - and now you can hear it.</p>
                `
            },
            {
                heading: 'Exoplanet Archive',
                content: `
                    <p class="mb-4">Data on thousands of confirmed exoplanets discovered by missions like Kepler and TESS.</p>
                    <ul class="list-disc list-inside space-y-2">
                        <li>Orbital period → Musical tempo</li>
                        <li>Planet size → Bass depth</li>
                        <li>Distance from star → Harmonic structure</li>
                    </ul>
                `
            }
        ]
    },
    'tutorials': {
        title: 'Tutorials & Guides',
        sections: [
            {
                heading: 'Tutorial 1: Your First Sonification',
                content: `
                    <div class="space-y-4">
                        <div class="bg-purple-900 bg-opacity-20 border-l-4 border-purple-400 p-4">
                            <p class="font-bold mb-2">Step 1: Choose an Image</p>
                            <p>Click "Create Your Own" and try one of the NASA example images. Start with the Pillars of Creation - it's visually stunning and creates beautiful sounds!</p>
                        </div>

                        <div class="bg-blue-900 bg-opacity-20 border-l-4 border-blue-400 p-4">
                            <p class="font-bold mb-2">Step 2: Configure Settings</p>
                            <p>Use these beginner-friendly settings:</p>
                            <ul class="list-disc list-inside ml-4 mt-2">
                                <li>Scan Mode: Radial</li>
                                <li>Musical Scale: Pentatonic</li>
                                <li>Synth Type: Ambient</li>
                                <li>Duration: 30 seconds</li>
                            </ul>
                        </div>

                        <div class="bg-green-900 bg-opacity-20 border-l-4 border-green-400 p-4">
                            <p class="font-bold mb-2">Step 3: Preview & Listen</p>
                            <p>Click "Preview Sonification" and listen! Notice how the bright stars become higher pitches, and the dark space is silence.</p>
                        </div>

                        <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-400 p-4">
                            <p class="font-bold mb-2">Step 4: Experiment</p>
                            <p>Try changing the scan mode to "Horizontal" - hear the difference? Each setting creates a completely different sonic experience!</p>
                        </div>
                    </div>
                `
            },
            {
                heading: 'Tutorial 2: Understanding Musical Scales',
                content: `
                    <p class="mb-4">Musical scales determine which notes are used in your sonification.</p>

                    <div class="space-y-3">
                        <div class="bg-black bg-opacity-30 p-3 rounded">
                            <p class="font-bold text-purple-400">Pentatonic (5 notes)</p>
                            <p class="text-sm">Always sounds pleasant, great for beginners. Used in many world music traditions.</p>
                        </div>

                        <div class="bg-black bg-opacity-30 p-3 rounded">
                            <p class="font-bold text-blue-400">Major (7 notes)</p>
                            <p class="text-sm">Happy, bright sound. Western music's most common scale.</p>
                        </div>

                        <div class="bg-black bg-opacity-30 p-3 rounded">
                            <p class="font-bold text-green-400">Minor (7 notes)</p>
                            <p class="text-sm">Darker, more emotional. Great for dramatic space phenomena.</p>
                        </div>

                        <div class="bg-black bg-opacity-30 p-3 rounded">
                            <p class="font-bold text-yellow-400">Chromatic (12 notes)</p>
                            <p class="text-sm">All notes! More complex, experimental sounds.</p>
                        </div>
                    </div>
                `
            },
            {
                heading: 'Tutorial 3: Advanced Techniques',
                content: `
                    <p class="mb-4"><strong>Layering Multiple Scans:</strong></p>
                    <p class="mb-4">Create the same sonification with different scan modes, then play them together for rich, complex soundscapes.</p>

                    <p class="mb-4"><strong>Time-Based Sonification:</strong></p>
                    <p class="mb-4">For datasets that change over time (like solar activity), map time to musical progression. Early data = beginning of piece, recent data = end.</p>

                    <p class="mb-4"><strong>Parameter Isolation:</strong></p>
                    <p class="mb-4">Focus on one data dimension at a time. Sonify just brightness first, then just color, then combine them.</p>
                `
            }
        ]
    }
};

// Global notification system instance
const notify = new NotificationSystem();

// Global audio recorder instance
const audioRecorder = new AudioRecorder();

console.log('Utilities module loaded');
