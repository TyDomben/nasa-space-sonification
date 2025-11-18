/**
 * NASA Space Sonification - Educational Modal System
 * Complete implementation of educational content modals
 */

class EducationalModal {
    constructor() {
        this.currentModal = null;
    }

    /**
     * Show educational modal with content
     */
    show(topic) {
        const content = educationalContent[topic];

        if (!content) {
            notify.error('Educational content not found for this topic');
            return;
        }

        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'educational-modal';

        // Build content HTML
        let sectionsHTML = content.sections.map(section => `
            <div class="mb-8">
                <h3 class="text-2xl font-bold mb-4 text-purple-400">${section.heading}</h3>
                <div class="text-gray-300">
                    ${section.content}
                </div>
            </div>
        `).join('');

        overlay.innerHTML = `
            <div class="modal-content">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="text-3xl font-bold gradient-text">${content.title}</h2>
                    <button onclick="educationalModal.close()" class="text-3xl hover:text-purple-400 transition">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="space-y-6">
                    ${sectionsHTML}
                </div>

                <div class="mt-8 pt-6 border-t border-gray-700 flex justify-between">
                    <button onclick="educationalModal.close()" class="btn-secondary">
                        Close
                    </button>
                    <button onclick="educationalModal.nextTopic('${topic}')" class="btn-primary">
                        Next Topic <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        `;

        // Add to page
        document.body.appendChild(overlay);
        this.currentModal = overlay;

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.close();
            }
        });

        // Close on ESC key
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                this.close();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }

    /**
     * Close the modal
     */
    close() {
        if (this.currentModal) {
            this.currentModal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                if (this.currentModal && this.currentModal.parentNode) {
                    this.currentModal.parentNode.removeChild(this.currentModal);
                }
                this.currentModal = null;
            }, 300);
        }
    }

    /**
     * Navigate to next topic
     */
    nextTopic(currentTopic) {
        const topics = Object.keys(educationalContent);
        const currentIndex = topics.indexOf(currentTopic);
        const nextIndex = (currentIndex + 1) % topics.length;
        const nextTopic = topics[nextIndex];

        this.close();
        setTimeout(() => {
            this.show(nextTopic);
        }, 350);
    }
}

// Global instance
const educationalModal = new EducationalModal();

// Global function for onclick handlers
window.showLearnModal = function(topic) {
    educationalModal.show(topic);
};

console.log('Educational Modal System loaded');
