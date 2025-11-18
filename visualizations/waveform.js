/**
 * NASA Space Sonification - Waveform Visualization
 * Real-time audio waveform display
 */

class WaveformVisualizer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.animationId = null;
        this.isRunning = false;
    }

    /**
     * Start waveform visualization
     */
    start() {
        if (!this.canvas || !this.ctx) return;

        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;

        this.isRunning = true;
        this.draw();
    }

    /**
     * Draw waveform
     */
    draw() {
        if (!this.isRunning) return;

        const data = audioEngine.getAnalyserData();

        if (data) {
            // Clear canvas with fade effect
            this.ctx.fillStyle = 'rgba(10, 14, 39, 0.2)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Draw waveform
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = '#667eea';
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = '#667eea';

            this.ctx.beginPath();

            const sliceWidth = this.canvas.width / data.length;
            let x = 0;

            for (let i = 0; i < data.length; i++) {
                const v = (data[i] + 1) / 2;
                const y = v * this.canvas.height;

                if (i === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            this.ctx.stroke();
            this.ctx.shadowBlur = 0;
        }

        this.animationId = requestAnimationFrame(() => this.draw());
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

console.log('Waveform Visualizer loaded');
