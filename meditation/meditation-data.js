/**
 * NASA Space Sonification - Meditation Soundscapes
 * Long-form ambient audio for meditation, focus, and relaxation
 */

const meditationScapes = {
    'deep-space-meditation': {
        id: 'deep-space-meditation',
        name: 'Deep Space Meditation',
        description: 'Drift through the tranquil depths of space, surrounded by ancient nebulae and distant stars. Slow-evolving ambient textures create a peaceful sonic universe.',
        duration: 1800, // 30 minutes
        category: 'meditation',
        difficulty: 'beginner',
        benefits: ['Deep relaxation', 'Stress relief', 'Mindfulness'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/800px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/400px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
        config: {
            baseFrequency: 55, // Deep bass foundation
            harmonics: [1, 1.5, 2, 2.5, 3], // Rich harmonic structure
            evolution: 'very-slow', // Parameters change over minutes
            scale: 'pentatonic',
            synthType: 'ambient',
            layers: 3, // Multiple drone layers
            fadeIn: 30, // 30 second fade in
            fadeOut: 30, // 30 second fade out
            tempo: 0.1, // Extremely slow
            reverb: 0.9, // Heavy reverb
            filter: 'lowpass' // Gentle filtering
        },
        instructions: 'Find a comfortable position. Close your eyes. Breathe deeply and naturally. Let the cosmic sounds wash over you. If your mind wanders, gently return your attention to the sound.'
    },

    'solar-winds': {
        id: 'solar-winds',
        name: 'Solar Winds',
        description: 'Feel the gentle flow of solar particles streaming from the Sun. Flowing, evolving textures that ebb and flow like cosmic tides, perfect for focus and concentration.',
        duration: 1800, // 30 minutes
        category: 'focus',
        difficulty: 'beginner',
        benefits: ['Improved focus', 'Concentration', 'Mental clarity'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/800px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/400px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg',
        config: {
            baseFrequency: 110, // A2
            harmonics: [1, 1.5, 2, 3, 4],
            evolution: 'slow',
            scale: 'minor',
            synthType: 'fm',
            layers: 4,
            fadeIn: 20,
            fadeOut: 20,
            tempo: 0.15,
            reverb: 0.7,
            filter: 'bandpass',
            movement: 'flowing' // Gentle panning and evolution
        },
        instructions: 'Use this soundscape for work or study. The flowing textures help maintain focus without being distracting. Let it play in the background as you concentrate on your task.'
    },

    'cosmic-ocean': {
        id: 'cosmic-ocean',
        name: 'Cosmic Ocean',
        description: 'Immerse yourself in the primordial cosmic ocean where galaxies form and stars are born. Water-like textures meet celestial harmonies for deep sleep and relaxation.',
        duration: 1800, // 30 minutes
        category: 'sleep',
        difficulty: 'beginner',
        benefits: ['Better sleep', 'Deep relaxation', 'Anxiety relief'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hubble_ultra_deep_field.jpg/800px-Hubble_ultra_deep_field.jpg',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hubble_ultra_deep_field.jpg/400px-Hubble_ultra_deep_field.jpg',
        config: {
            baseFrequency: 40, // Very deep
            harmonics: [1, 1.414, 1.732, 2], // Natural ratios
            evolution: 'glacial', // Barely perceptible changes
            scale: 'harmonic-minor',
            synthType: 'granular',
            layers: 5,
            fadeIn: 45,
            fadeOut: 45,
            tempo: 0.05,
            reverb: 0.95,
            filter: 'lowpass',
            grain: 'smooth', // Smooth granular synthesis
            depth: 'deep' // Sub-bass frequencies
        },
        instructions: 'Perfect for bedtime. Lie down comfortably. Set a sleep timer if desired. Let the deep, oceanic tones guide you into restful sleep. The soundscape will gently fade out.'
    },

    'stellar-birth': {
        id: 'stellar-birth',
        name: 'Stellar Birth',
        description: 'Experience the gentle awakening of new stars in stellar nurseries. Slowly brightening tones and evolving harmonies inspire creativity and new beginnings.',
        duration: 1800, // 30 minutes
        category: 'creativity',
        difficulty: 'intermediate',
        benefits: ['Enhanced creativity', 'Inspiration', 'Energy boost'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hubble_Interacting_Galaxy_NGC_5257_%282008-04-24%29.jpg/800px-Hubble_Interacting_Galaxy_NGC_5257_%282008-04-24%29.jpg',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hubble_Interacting_Galaxy_NGC_5257_%282008-04-24%29.jpg/400px-Hubble_Interacting_Galaxy_NGC_5257_%282008-04-24%29.jpg',
        config: {
            baseFrequency: 82.4, // E2
            harmonics: [1, 1.2, 1.5, 2, 2.5, 3],
            evolution: 'progressive', // Gradually becomes brighter/higher
            scale: 'major',
            synthType: 'pluck',
            layers: 4,
            fadeIn: 15,
            fadeOut: 30,
            tempo: 0.2,
            reverb: 0.75,
            filter: 'highpass',
            brightness: 'increasing', // Tones become brighter over time
            energy: 'building' // Subtle energy increase
        },
        instructions: 'Use this for creative work, brainstorming, or morning meditation. The gradually evolving nature mirrors the creative process - slow beginnings building to inspired flow.'
    }
};

// Export for use in meditation player
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { meditationScapes };
}

console.log('Meditation Soundscapes Data loaded - 4 soundscapes available');
