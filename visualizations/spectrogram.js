/**
 * NASA Space Sonification - Spectrogram Visualization
 * Frequency spectrum over time
 */

class SpectrogramVisualizer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.animationId = null;
        this.isRunning = false;
        this.imageData = null;
    }

    /**
     * Start spectrogram visualization
     */
    start() {
        if (!this.canvas || !this.ctx) return;

        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;

        this.imageData = this.ctx.createImageData(this.canvas.width, this.canvas.height);

        this.isRunning = true;
        this.draw();
    }

    /**
     * Draw spectrogram
     */
    draw() {
        if (!this.isRunning) return;

        const data = audioEngine.getFrequencyData();

        if (data) {
            // Scroll image data left
            const pixels = this.imageData.data;
            const width = this.canvas.width;
            const height = this.canvas.height;

            // Shift pixels left
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width - 1; x++) {
                    const sourceIndex = ((y * width) + x + 1) * 4;
                    const targetIndex = ((y * width) + x) * 4;

                    pixels[targetIndex] = pixels[sourceIndex];
                    pixels[targetIndex + 1] = pixels[sourceIndex + 1];
                    pixels[targetIndex + 2] = pixels[sourceIndex + 2];
                    pixels[targetIndex + 3] = pixels[sourceIndex + 3];
                }
            }

            // Add new column on the right
            const barHeight = height / data.length;

            for (let i = 0; i < data.length; i++) {
                const value = (data[i] + 140) / 140; // Normalize
                const y = Math.floor((data.length - i - 1) * barHeight);
                const x = width - 1;

                // Color gradient based on intensity
                const color = this.valueToColor(value);

                for (let dy = 0; dy < Math.ceil(barHeight); dy++) {
                    const pixelY = y + dy;
                    if (pixelY >= 0 && pixelY < height) {
                        const index = ((pixelY * width) + x) * 4;
                        pixels[index] = color.r;
                        pixels[index + 1] = color.g;
                        pixels[index + 2] = color.b;
                        pixels[index + 3] = 255;
                    }
                }
            }

            this.ctx.putImageData(this.imageData, 0, 0);
        }

        this.animationId = requestAnimationFrame(() => this.draw());
    }

    /**
     * Map value to color gradient
     */
    valueToColor(value) {
        // Gradient: black -> blue -> purple -> pink -> white
        if (value < 0.2) {
            // Black to blue
            const t = value / 0.2;
            return { r: 0, g: 0, b: Math.floor(t * 100) };
        } else if (value < 0.5) {
            // Blue to purple
            const t = (value - 0.2) / 0.3;
            return { r: Math.floor(t * 126), g: 0, b: 100 + Math.floor(t * 34) };
        } else if (value < 0.8) {
            // Purple to pink
            const t = (value - 0.5) / 0.3;
            return { r: 126 + Math.floor(t * 114), g: Math.floor(t * 93), b: 234 - Math.floor(t * 83) };
        } else {
            // Pink to white
            const t = (value - 0.8) / 0.2;
            return {
                r: 240 + Math.floor(t * 15),
                g: 93 + Math.floor(t * 162),
                b: 151 + Math.floor(t * 104)
            };
        }
    }

    /**
     * Stop visualization
     */
    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    /**
     * Clear canvas
     */
    clear() {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

console.log('Spectrogram Visualizer loaded');
