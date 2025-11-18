/**
 * NASA Space Sonification - Particle Visualization
 * Audio-reactive 3D particle system
 */

class ParticleVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.animationId = null;
        this.isRunning = false;
    }

    /**
     * Initialize Three.js scene
     */
    init() {
        if (!this.container || !window.THREE) return;

        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0e27);

        // Camera
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.z = 500;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(width, height);
        this.container.appendChild(this.renderer.domElement);

        // Create particles
        this.createParticles();

        // Handle resize
        window.addEventListener('resize', () => this.onResize());
    }

    /**
     * Create particle system
     */
    createParticles() {
        const particleCount = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Random position in sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = Math.random() * 300 + 100;

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Color gradient
            const color = new THREE.Color();
            color.setHSL(Math.random() * 0.3 + 0.6, 1, 0.5); // Purple to pink
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 3,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    /**
     * Start animation
     */
    start() {
        if (!this.renderer) {
            this.init();
        }

        this.isRunning = true;
        this.animate();
    }

    /**
     * Animation loop
     */
    animate() {
        if (!this.isRunning) return;

        // Get audio data
        const data = audioEngine.getFrequencyData();

        if (data && this.particles) {
            // Update particle positions based on audio
            const positions = this.particles.geometry.attributes.position.array;
            const colors = this.particles.geometry.attributes.color.array;

            for (let i = 0; i < positions.length; i += 3) {
                const dataIndex = Math.floor((i / 3) * (data.length / (positions.length / 3)));
                const audioValue = (data[dataIndex] + 140) / 140; // Normalize

                // Scale particle position based on audio
                const scale = 1 + audioValue * 0.2;
                positions[i] *= scale;
                positions[i + 1] *= scale;
                positions[i + 2] *= scale;

                // Gravity pull back
                positions[i] *= 0.99;
                positions[i + 1] *= 0.99;
                positions[i + 2] *= 0.99;

                // Update color brightness
                colors[i] = Math.min(1, colors[i] * (1 + audioValue * 0.1));
                colors[i + 1] = Math.min(1, colors[i + 1] * (1 + audioValue * 0.1));
                colors[i + 2] = Math.min(1, colors[i + 2] * (1 + audioValue * 0.1));
            }

            this.particles.geometry.attributes.position.needsUpdate = true;
            this.particles.geometry.attributes.color.needsUpdate = true;

            // Rotate particle system
            this.particles.rotation.y += 0.001;
            this.particles.rotation.x += 0.0005;
        }

        this.renderer.render(this.scene, this.camera);
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    /**
     * Stop animation
     */
    stop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    /**
     * Handle resize
     */
    onResize() {
        if (!this.container || !this.camera || !this.renderer) return;

        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    /**
     * Clean up
     */
    dispose() {
        this.stop();

        if (this.particles) {
            this.scene.remove(this.particles);
            this.particles.geometry.dispose();
            this.particles.material.dispose();
        }

        if (this.renderer) {
            this.renderer.dispose();
            if (this.renderer.domElement.parentNode) {
                this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
            }
        }
    }
}

console.log('Particle Visualizer loaded');
