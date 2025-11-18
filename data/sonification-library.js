/**
 * NASA Space Sonification - Pre-made Sonification Library
 * Curated collection of space sonifications
 */

class SonificationLibrary {
    constructor() {
        this.sonifications = this.initializeSonifications();
    }

    /**
     * Initialize the library of sonifications
     */
    initializeSonifications() {
        return [
            // DEEP SPACE
            {
                id: 'hubble-deep-field',
                name: 'Hubble Deep Field',
                category: 'deep-space',
                tags: ['galaxies', 'hubble', 'deep-field'],
                description: 'Journey through thousands of distant galaxies captured in one of astronomy\'s most iconic images. Each galaxy becomes a note in this cosmic symphony.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/HubbleDeepField.800px.jpg/800px-HubbleDeepField.800px.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/HubbleDeepField.800px.jpg/400px-HubbleDeepField.800px.jpg',
                credit: 'NASA/ESA Hubble Space Telescope',
                duration: 45,
                difficulty: 'intermediate',
                scientificInfo: {
                    discovered: '1995',
                    distance: '13 billion light years',
                    significance: 'Revealed thousands of previously unknown galaxies',
                    telescope: 'Hubble Space Telescope'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 45,
                    stereo: true
                },
                mappingInfo: {
                    brightness: 'Pitch - Brighter galaxies = higher notes',
                    position: 'Stereo pan - Position in image determines left/right',
                    color: 'Timbre - Redder galaxies = warmer tones',
                    size: 'Duration - Larger galaxies = longer notes'
                }
            },
            {
                id: 'pillars-of-creation',
                name: 'Pillars of Creation',
                category: 'deep-space',
                tags: ['nebula', 'star-formation', 'hubble'],
                description: 'Hear the cosmic pillars where stars are born. The towering columns of gas and dust create an ethereal soundscape.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/800px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/400px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
                credit: 'NASA/ESA Hubble Space Telescope',
                duration: 35,
                difficulty: 'beginner',
                scientificInfo: {
                    discovered: '1995',
                    distance: '7,000 light years',
                    location: 'Eagle Nebula (M16)',
                    significance: 'Active star-forming region'
                },
                sonificationConfig: {
                    scanMode: 'vertical',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 35,
                    stereo: true
                },
                mappingInfo: {
                    brightness: 'Volume - Brighter areas = louder',
                    height: 'Pitch - Higher in image = higher pitch',
                    density: 'Timbre - Dense gas = richer harmonics'
                }
            },
            {
                id: 'crab-nebula',
                name: 'Crab Nebula',
                category: 'deep-space',
                tags: ['supernova', 'nebula', 'pulsar'],
                description: 'The aftermath of a stellar explosion witnessed in 1054 AD. Experience the energetic remnant through pulsing, rhythmic tones.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/800px-Crab_Nebula.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/400px-Crab_Nebula.jpg',
                credit: 'NASA/ESA Hubble Space Telescope',
                duration: 30,
                difficulty: 'intermediate',
                scientificInfo: {
                    discovered: '1054 AD',
                    distance: '6,500 light years',
                    type: 'Supernova remnant',
                    pulsar: 'Rotates 30 times per second'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'blues',
                    synthType: 'fm',
                    duration: 30,
                    stereo: true
                },
                mappingInfo: {
                    brightness: 'Rhythm intensity',
                    color: 'Harmonic content - Blue = metallic, Red = warm',
                    structure: 'Pulse patterns'
                }
            },
            {
                id: 'andromeda-galaxy',
                name: 'Andromeda Galaxy',
                category: 'deep-space',
                tags: ['galaxy', 'spiral', 'neighbor'],
                description: 'Our nearest large galactic neighbor containing a trillion stars. Listen to the spiral structure as harmonic layers.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/800px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/400px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                credit: 'Adam Evans',
                duration: 50,
                difficulty: 'advanced',
                scientificInfo: {
                    distance: '2.5 million light years',
                    stars: '~1 trillion',
                    type: 'Spiral galaxy',
                    fate: 'Will merge with Milky Way in 4 billion years'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'harmonic',
                    synthType: 'ambient',
                    duration: 50,
                    stereo: true
                },
                mappingInfo: {
                    radius: 'Pitch - Center to edge',
                    brightness: 'Volume',
                    spiral: 'Harmonic progression'
                }
            },

            // SOLAR SYSTEM
            {
                id: 'jupiter-storms',
                name: 'Jupiter\'s Great Red Spot',
                category: 'solar-system',
                tags: ['planet', 'storm', 'jupiter'],
                description: 'A storm larger than Earth that has raged for centuries. Hear the swirling patterns as dynamic, evolving tones.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/800px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/400px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg',
                credit: 'NASA Hubble Space Telescope',
                duration: 25,
                difficulty: 'beginner',
                scientificInfo: {
                    size: 'Larger than Earth',
                    age: 'At least 350 years old',
                    windSpeed: '430 km/h',
                    type: 'Anticyclonic storm'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'major',
                    synthType: 'melodic',
                    duration: 25,
                    stereo: true
                },
                mappingInfo: {
                    color: 'Pitch - Red bands = lower, white = higher',
                    intensity: 'Volume',
                    rotation: 'Rhythm'
                }
            },
            {
                id: 'saturn-rings',
                name: 'Saturn\'s Rings',
                category: 'solar-system',
                tags: ['planet', 'rings', 'saturn'],
                description: 'Scan across Saturn\'s magnificent ring system. Each ring creates distinct harmonic layers.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/400px-Saturn_during_Equinox.jpg',
                credit: 'NASA Cassini Mission',
                duration: 30,
                difficulty: 'beginner',
                scientificInfo: {
                    composition: 'Ice and rock particles',
                    width: '282,000 km',
                    thickness: '10-100 meters',
                    gaps: 'Created by gravitational resonances'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'pentatonic',
                    synthType: 'melodic',
                    duration: 30,
                    stereo: true
                },
                mappingInfo: {
                    ringDensity: 'Volume - Denser rings = louder',
                    distance: 'Pitch - Inner rings = lower notes',
                    gaps: 'Silence between notes'
                }
            },
            {
                id: 'sun-surface',
                name: 'Solar Surface',
                category: 'solar-system',
                tags: ['sun', 'solar', 'surface'],
                description: 'The roiling surface of our star. Granulation patterns become rhythmic textures.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/800px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/400px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg',
                credit: 'NASA Solar Dynamics Observatory',
                duration: 20,
                difficulty: 'intermediate',
                scientificInfo: {
                    temperature: '5,500°C surface',
                    activity: 'Constant convection',
                    granules: '1,000 km across',
                    lifespan: 'Granules last 8-20 minutes'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'chromatic',
                    synthType: 'noise',
                    duration: 20,
                    stereo: false
                },
                mappingInfo: {
                    brightness: 'Intensity',
                    turbulence: 'Noise texture',
                    activity: 'Rhythm density'
                }
            },

            // PHENOMENA
            {
                id: 'pulsar-signal',
                name: 'Pulsar Rhythms',
                category: 'phenomena',
                tags: ['pulsar', 'neutron-star', 'rhythm'],
                description: 'The precise cosmic clock of a spinning neutron star. Experience the mathematical perfection of pulsar timing.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Artist%E2%80%99s_impression_of_a_pulsar.jpg/800px-Artist%E2%80%99s_impression_of_a_pulsar.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Artist%E2%80%99s_impression_of_a_pulsar.jpg/400px-Artist%E2%80%99s_impression_of_a_pulsar.jpg',
                credit: 'ESO/L. Calçada',
                duration: 15,
                difficulty: 'beginner',
                scientificInfo: {
                    type: 'Neutron star',
                    rotation: '0.001 to 30 seconds',
                    precision: 'More accurate than atomic clocks',
                    mass: '1.4 solar masses'
                },
                sonificationConfig: {
                    type: 'procedural',
                    generator: 'pulsar',
                    frequency: 440,
                    pulseRate: 2, // Hz
                    duration: 15
                },
                mappingInfo: {
                    rotation: 'Pulse rate',
                    magneticField: 'Intensity',
                    precision: 'Timing accuracy'
                }
            },
            {
                id: 'solar-wind',
                name: 'Solar Wind',
                category: 'phenomena',
                tags: ['solar', 'wind', 'space-weather'],
                description: 'The constant stream of charged particles flowing from the Sun. Hear the invisible wind that shapes our space environment.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Solar_wind_speed_and_magn_field.svg/800px-Solar_wind_speed_and_magn_field.svg.png',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Solar_wind_speed_and_magn_field.svg/400px-Solar_wind_speed_and_magn_field.svg.png',
                credit: 'NASA',
                duration: 25,
                difficulty: 'intermediate',
                scientificInfo: {
                    speed: '400 km/s average',
                    fastWind: 'Up to 800 km/s',
                    composition: 'Electrons and protons',
                    magnetosphere: 'Deflected by Earth\'s magnetic field'
                },
                sonificationConfig: {
                    type: 'procedural',
                    generator: 'solar-wind',
                    speed: 0.6,
                    duration: 25
                },
                mappingInfo: {
                    speed: 'Filter modulation rate',
                    density: 'Volume',
                    variability: 'Noise texture'
                }
            },
            {
                id: 'black-hole-m87',
                name: 'Black Hole M87',
                category: 'phenomena',
                tags: ['black-hole', 'gravity', 'event-horizon'],
                description: 'The first black hole ever photographed. Experience the deep resonance of warped spacetime.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/800px-Black_hole_-_Messier_87_crop_max_res.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/400px-Black_hole_-_Messier_87_crop_max_res.jpg',
                credit: 'Event Horizon Telescope',
                duration: 40,
                difficulty: 'advanced',
                scientificInfo: {
                    mass: '6.5 billion solar masses',
                    distance: '55 million light years',
                    discovered: '2019 (image)',
                    eventHorizon: '40 billion km across'
                },
                sonificationConfig: {
                    type: 'procedural',
                    generator: 'black-hole',
                    mass: 0.8,
                    duration: 40
                },
                mappingInfo: {
                    mass: 'Base frequency',
                    accretionDisk: 'Harmonic layers',
                    gravity: 'Resonance depth'
                }
            },
            {
                id: 'gravitational-waves',
                name: 'Gravitational Waves',
                category: 'phenomena',
                tags: ['gravity', 'waves', 'ligo'],
                description: 'Ripples in spacetime from colliding black holes. Hear the chirp of merging massive objects.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/LIGO_measurement_of_gravitational_waves.svg/800px-LIGO_measurement_of_gravitational_waves.svg.png',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/LIGO_measurement_of_gravitational_waves.svg/400px-LIGO_measurement_of_gravitational_waves.svg.png',
                credit: 'LIGO',
                duration: 10,
                difficulty: 'advanced',
                scientificInfo: {
                    detected: '2015 (first detection)',
                    source: 'Binary black hole merger',
                    distance: '1.3 billion light years',
                    nobelPrize: '2017 Physics Prize'
                },
                sonificationConfig: {
                    type: 'procedural',
                    generator: 'gravitational-waves',
                    amplitude: 0.7,
                    frequency: 35,
                    duration: 10
                },
                mappingInfo: {
                    strain: 'Amplitude',
                    frequency: 'Pitch increase (chirp)',
                    merger: 'Peak intensity'
                }
            },

            // MISSIONS
            {
                id: 'voyager-golden-record',
                name: 'Voyager\'s Journey',
                category: 'missions',
                tags: ['voyager', 'interstellar', 'exploration'],
                description: 'Follow Voyager\'s path to interstellar space through data sonification.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Voyager_spacecraft_model.png/800px-Voyager_spacecraft_model.png',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Voyager_spacecraft_model.png/400px-Voyager_spacecraft_model.png',
                credit: 'NASA/JPL',
                duration: 35,
                difficulty: 'intermediate',
                scientificInfo: {
                    launched: '1977',
                    distance: '23 billion km (Voyager 1)',
                    status: 'Still transmitting',
                    speed: '17 km/s'
                },
                sonificationConfig: {
                    type: 'dataset',
                    data: 'distance-over-time',
                    scale: 'pentatonic',
                    duration: 35
                },
                mappingInfo: {
                    distance: 'Pitch - Further = higher',
                    time: 'Rhythm',
                    signalStrength: 'Volume'
                }
            },

            // LIVE DATA
            {
                id: 'apod-today',
                name: 'Today\'s Astronomy Picture',
                category: 'live-data',
                tags: ['apod', 'daily', 'live'],
                description: 'Sonification of NASA\'s Astronomy Picture of the Day. Updates daily!',
                imageUrl: 'dynamic',
                thumbnailUrl: 'dynamic',
                credit: 'NASA APOD',
                duration: 30,
                difficulty: 'beginner',
                scientificInfo: {
                    updated: 'Daily',
                    source: 'NASA APOD API',
                    variety: 'Different object each day'
                },
                sonificationConfig: {
                    type: 'live',
                    source: 'apod',
                    scale: 'pentatonic',
                    duration: 30
                },
                mappingInfo: {
                    varies: 'Based on image type'
                }
            }
        ];
    }

    /**
     * Get all sonifications
     */
    getAll() {
        return this.sonifications;
    }

    /**
     * Get sonification by ID
     */
    getById(id) {
        return this.sonifications.find(s => s.id === id);
    }

    /**
     * Get sonifications by category
     */
    getByCategory(category) {
        if (category === 'all') return this.sonifications;
        return this.sonifications.filter(s => s.category === category);
    }

    /**
     * Search sonifications
     */
    search(query) {
        const lowerQuery = query.toLowerCase();
        return this.sonifications.filter(s =>
            s.name.toLowerCase().includes(lowerQuery) ||
            s.description.toLowerCase().includes(lowerQuery) ||
            s.tags.some(tag => tag.includes(lowerQuery))
        );
    }

    /**
     * Get random sonification
     */
    getRandom() {
        const index = Math.floor(Math.random() * this.sonifications.length);
        return this.sonifications[index];
    }

    /**
     * Get featured sonification for today
     */
    getFeatured() {
        // Use day of year to deterministically pick a featured item
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const index = dayOfYear % this.sonifications.length;
        return this.sonifications[index];
    }
}

// Global sonification library
const sonificationLibrary = new SonificationLibrary();

console.log('Sonification Library loaded with', sonificationLibrary.getAll().length, 'items');
