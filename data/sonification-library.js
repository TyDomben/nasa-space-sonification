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
            },

            // DEEP SPACE - Additional Items (10 more)
            {
                id: 'orion-nebula',
                name: 'Orion Nebula',
                category: 'deep-space',
                tags: ['nebula', 'star-formation', 'orion'],
                description: 'The closest massive star-forming region to Earth, a stellar nursery creating new suns.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/800px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/400px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg',
                credit: 'NASA/ESA Hubble',
                duration: 40,
                difficulty: 'beginner',
                scientificInfo: {
                    distance: '1,344 light years',
                    size: '24 light years across',
                    age: '~3 million years',
                    contains: 'Over 700 young stars'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 40
                },
                mappingInfo: {
                    brightness: 'Volume - Bright stars = louder',
                    color: 'Timbre - Red = warm, Blue = cool',
                    density: 'Harmony - Dense regions = richer chords'
                }
            },
            {
                id: 'horsehead-nebula',
                name: 'Horsehead Nebula',
                category: 'deep-space',
                tags: ['nebula', 'dark-nebula', 'iconic'],
                description: 'One of the most recognizable dark nebulae, a silhouette against bright emission gas.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Horsehead_Nebula_from_Hubble_2020.png/800px-Horsehead_Nebula_from_Hubble_2020.png',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Horsehead_Nebula_from_Hubble_2020.png/400px-Horsehead_Nebula_from_Hubble_2020.png',
                credit: 'NASA/ESA Hubble',
                duration: 35,
                difficulty: 'intermediate',
                scientificInfo: {
                    distance: '1,375 light years',
                    size: '3.5 light years tall',
                    type: 'Dark nebula',
                    location: 'Orion constellation'
                },
                sonificationConfig: {
                    scanMode: 'vertical',
                    scale: 'minor',
                    synthType: 'ambient',
                    duration: 35
                },
                mappingInfo: {
                    darkness: 'Volume - Dark = quiet, Bright = loud',
                    contrast: 'Pitch range',
                    silhouette: 'Bass frequencies'
                }
            },
            {
                id: 'ring-nebula',
                name: 'Ring Nebula',
                category: 'deep-space',
                tags: ['nebula', 'planetary-nebula', 'dying-star'],
                description: 'A dying star\'s last breath, creating a beautiful cosmic smoke ring in space.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/M57_The_Ring_Nebula.JPG/800px-M57_The_Ring_Nebula.JPG',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/M57_The_Ring_Nebula.JPG/400px-M57_The_Ring_Nebula.JPG',
                credit: 'NASA/ESA Hubble',
                duration: 30,
                difficulty: 'beginner',
                scientificInfo: {
                    distance: '2,300 light years',
                    age: '~1,610 years',
                    expanding: '1 light year per century',
                    central: 'White dwarf star'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'harmonic',
                    synthType: 'ambient',
                    duration: 30
                },
                mappingInfo: {
                    ring: 'Circular melodic pattern',
                    center: 'High sustained tone',
                    expansion: 'Increasing pitch'
                }
            },
            {
                id: 'whirlpool-galaxy',
                name: 'Whirlpool Galaxy',
                category: 'deep-space',
                tags: ['galaxy', 'spiral', 'grand-design'],
                description: 'A classic spiral galaxy with well-defined arms, locked in gravitational dance with a companion.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Messier51_sRGB.jpg/800px-Messier51_sRGB.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Messier51_sRGB.jpg/400px-Messier51_sRGB.jpg',
                credit: 'NASA/ESA Hubble',
                duration: 45,
                difficulty: 'intermediate',
                scientificInfo: {
                    distance: '23 million light years',
                    diameter: '76,000 light years',
                    type: 'Grand-design spiral',
                    companion: 'NGC 5195'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'harmonic',
                    synthType: 'ambient',
                    duration: 45
                },
                mappingInfo: {
                    spiral: 'Descending melodic lines',
                    core: 'Bass foundation',
                    arms: 'Layered harmonies'
                }
            },
            {
                id: 'sombrero-galaxy',
                name: 'Sombrero Galaxy',
                category: 'deep-space',
                tags: ['galaxy', 'spiral', 'dust-lane'],
                description: 'Named for its hat-like appearance, featuring a prominent dust lane and brilliant core.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/800px-M104_ngc4594_sombrero_galaxy_hi-res.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/400px-M104_ngc4594_sombrero_galaxy_hi-res.jpg',
                credit: 'NASA/ESA Hubble',
                duration: 40,
                difficulty: 'intermediate',
                scientificInfo: {
                    distance: '29 million light years',
                    diameter: '50,000 light years',
                    contains: '2,000 globular clusters',
                    blackHole: '1 billion solar masses'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'major',
                    synthType: 'ambient',
                    duration: 40
                },
                mappingInfo: {
                    dust: 'Low rumbling tones',
                    core: 'Bright high frequencies',
                    structure: 'Stereo imaging'
                }
            },
            {
                id: 'triangulum-galaxy',
                name: 'Triangulum Galaxy',
                category: 'deep-space',
                tags: ['galaxy', 'spiral', 'local-group'],
                description: 'Third-largest galaxy in our Local Group, visible to the naked eye under dark skies.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Triangulum_Galaxy.jpg/800px-Triangulum_Galaxy.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Triangulum_Galaxy.jpg/400px-Triangulum_Galaxy.jpg',
                credit: 'NASA/ESA',
                duration: 42,
                difficulty: 'beginner',
                scientificInfo: {
                    distance: '3 million light years',
                    diameter: '60,000 light years',
                    stars: '40 billion',
                    visible: 'Naked eye in dark skies'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 42
                },
                mappingInfo: {
                    brightness: 'Volume levels',
                    spiral: 'Rotating melodic themes',
                    depth: 'Reverb amount'
                }
            },
            {
                id: 'eagle-nebula',
                name: 'Eagle Nebula',
                category: 'deep-space',
                tags: ['nebula', 'star-formation', 'iconic'],
                description: 'Home to the famous Pillars of Creation, a vast stellar nursery birthing new stars.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Eagle_Nebula_from_ESO.jpg/800px-Eagle_Nebula_from_ESO.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Eagle_Nebula_from_ESO.jpg/400px-Eagle_Nebula_from_ESO.jpg',
                credit: 'ESO',
                duration: 45,
                difficulty: 'intermediate',
                scientificInfo: {
                    distance: '7,000 light years',
                    size: '70x55 light years',
                    age: '~5.5 million years',
                    famous: 'Pillars of Creation'
                },
                sonificationConfig: {
                    scanMode: 'vertical',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 45
                },
                mappingInfo: {
                    pillars: 'Ascending tones',
                    gas: 'Sustained drones',
                    stars: 'Twinkling high notes'
                }
            },
            {
                id: 'helix-nebula',
                name: 'Helix Nebula',
                category: 'deep-space',
                tags: ['nebula', 'planetary-nebula', 'eye-of-god'],
                description: 'Known as the "Eye of God," one of the closest planetary nebulae to Earth.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Helix_Nebula_-_Unraveling_at_the_Seams.jpg/800px-Helix_Nebula_-_Unraveling_at_the_Seams.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Helix_Nebula_-_Unraveling_at_the_Seams.jpg/400px-Helix_Nebula_-_Unraveling_at_the_Seams.jpg',
                credit: 'NASA/ESA Hubble',
                duration: 35,
                difficulty: 'beginner',
                scientificInfo: {
                    distance: '650 light years',
                    diameter: '2.87 light years',
                    age: '~10,600 years',
                    nickname: 'Eye of God'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'lydian',
                    synthType: 'ambient',
                    duration: 35
                },
                mappingInfo: {
                    spiral: 'Circular patterns',
                    center: 'Drone note',
                    layers: 'Harmonic overtones'
                }
            },
            {
                id: 'butterfly-nebula',
                name: 'Butterfly Nebula',
                category: 'deep-space',
                tags: ['nebula', 'planetary-nebula', 'bipolar'],
                description: 'A spectacular dying star with wings spanning 3 light years, reaching 2 million degrees.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/NGC6302.jpg/800px-NGC6302.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/NGC6302.jpg/400px-NGC6302.jpg',
                credit: 'NASA/ESA Hubble',
                duration: 32,
                difficulty: 'intermediate',
                scientificInfo: {
                    distance: '3,800 light years',
                    wingspan: '3 light years',
                    temperature: '2 million degrees',
                    type: 'Bipolar planetary nebula'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'blues',
                    synthType: 'fm',
                    duration: 32
                },
                mappingInfo: {
                    wings: 'Stereo spread',
                    temperature: 'Frequency intensity',
                    symmetry: 'Mirrored patterns'
                }
            },
            {
                id: 'tarantula-nebula',
                name: 'Tarantula Nebula',
                category: 'deep-space',
                tags: ['nebula', 'star-formation', 'massive'],
                description: 'The most active star-forming region in our Local Group, visible from the Southern Hemisphere.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tarantula_Nebula_JWST.png/800px-Tarantula_Nebula_JWST.png',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tarantula_Nebula_JWST.png/400px-Tarantula_Nebula_JWST.png',
                credit: 'NASA/ESA/CSA JWST',
                duration: 48,
                difficulty: 'advanced',
                scientificInfo: {
                    distance: '161,000 light years',
                    size: '650 light years across',
                    location: 'Large Magellanic Cloud',
                    activity: 'Extreme star formation'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'chromatic',
                    synthType: 'fm',
                    duration: 48
                },
                mappingInfo: {
                    activity: 'Rhythmic density',
                    brightness: 'Volume peaks',
                    complexity: 'Harmonic richness'
                }
            },

            // SOLAR SYSTEM - Additional Items (7 more)
            {
                id: 'mercury-surface',
                name: 'Mercury Surface',
                category: 'solar-system',
                tags: ['planet', 'rocky', 'craters'],
                description: 'The scorched, crater-covered surface of the solar system\'s smallest planet.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/800px-Mercury_in_color_-_Prockter07_centered.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/400px-Mercury_in_color_-_Prockter07_centered.jpg',
                credit: 'NASA MESSENGER',
                duration: 25,
                difficulty: 'beginner',
                scientificInfo: {
                    diameter: '4,880 km',
                    dayTemp: '430°C',
                    nightTemp: '-180°C',
                    orbit: '88 Earth days'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'minor',
                    synthType: 'percussive',
                    duration: 25
                },
                mappingInfo: {
                    craters: 'Percussive hits',
                    temperature: 'Pitch variance',
                    terrain: 'Texture'
                }
            },
            {
                id: 'venus-atmosphere',
                name: 'Venus Atmosphere',
                category: 'solar-system',
                tags: ['planet', 'atmosphere', 'greenhouse'],
                description: 'The thick, toxic atmosphere of Earth\'s evil twin, where it rains sulfuric acid.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/800px-Venus-real_color.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/400px-Venus-real_color.jpg',
                credit: 'NASA Mariner 10',
                duration: 28,
                difficulty: 'intermediate',
                scientificInfo: {
                    pressure: '92x Earth',
                    temperature: '462°C',
                    atmosphere: '96% CO2',
                    rotation: '243 Earth days (backwards)'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'phrygian',
                    synthType: 'noise',
                    duration: 28
                },
                mappingInfo: {
                    clouds: 'Swirling patterns',
                    pressure: 'Bass intensity',
                    heat: 'Harsh overtones'
                }
            },
            {
                id: 'mars-polar-caps',
                name: 'Mars Polar Ice Caps',
                category: 'solar-system',
                tags: ['mars', 'ice', 'polar'],
                description: 'Frozen CO2 and water ice caps that grow and shrink with the Martian seasons.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mars_NPArea-PIA00161_modest.jpg/800px-Mars_NPArea-PIA00161_modest.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mars_NPArea-PIA00161_modest.jpg/400px-Mars_NPArea-PIA00161_modest.jpg',
                credit: 'NASA Mars Global Surveyor',
                duration: 30,
                difficulty: 'beginner',
                scientificInfo: {
                    northCap: 'Water ice',
                    southCap: 'CO2 and water ice',
                    seasonal: 'Grows and shrinks',
                    temperature: '-125°C winter'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 30
                },
                mappingInfo: {
                    ice: 'Crystal-like tones',
                    spirals: 'Circular patterns',
                    layers: 'Harmonic depth'
                }
            },
            {
                id: 'europa-surface',
                name: 'Europa\'s Ice Shell',
                category: 'solar-system',
                tags: ['moon', 'jupiter', 'ice', 'ocean'],
                description: 'Jupiter\'s moon with a cracked ice shell hiding a subsurface ocean that may harbor life.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Europa-moon.jpg/800px-Europa-moon.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Europa-moon.jpg/400px-Europa-moon.jpg',
                credit: 'NASA Galileo',
                duration: 35,
                difficulty: 'intermediate',
                scientificInfo: {
                    ocean: 'Subsurface liquid water',
                    depth: 'Ice shell 15-25 km thick',
                    potential: 'May harbor life',
                    features: 'Chaos terrain'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'harmonic',
                    synthType: 'ambient',
                    duration: 35
                },
                mappingInfo: {
                    cracks: 'Linear sweeps',
                    ice: 'Crystalline timbres',
                    mystery: 'Eerie undertones'
                }
            },
            {
                id: 'titan-atmosphere',
                name: 'Titan\'s Atmosphere',
                category: 'solar-system',
                tags: ['moon', 'saturn', 'atmosphere', 'methane'],
                description: 'Saturn\'s largest moon with a thick atmosphere and methane lakes on the surface.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Titan_in_natural_color_Cassini.jpg/800px-Titan_in_natural_color_Cassini.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Titan_in_natural_color_Cassini.jpg/400px-Titan_in_natural_color_Cassini.jpg',
                credit: 'NASA Cassini',
                duration: 38,
                difficulty: 'advanced',
                scientificInfo: {
                    atmosphere: 'Thicker than Earth\'s',
                    composition: 'Nitrogen and methane',
                    lakes: 'Liquid methane and ethane',
                    temperature: '-179°C'
                },
                sonificationConfig: {
                    scanMode: 'vertical',
                    scale: 'dorian',
                    synthType: 'ambient',
                    duration: 38
                },
                mappingInfo: {
                    haze: 'Filtered frequencies',
                    lakes: 'Liquid-like flows',
                    density: 'Bass presence'
                }
            },
            {
                id: 'uranus',
                name: 'Uranus',
                category: 'solar-system',
                tags: ['planet', 'ice-giant', 'tilted'],
                description: 'The sideways planet, tilted 98 degrees and colored blue-green by methane in its atmosphere.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/800px-Uranus2.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/400px-Uranus2.jpg',
                credit: 'NASA Voyager 2',
                duration: 32,
                difficulty: 'beginner',
                scientificInfo: {
                    tilt: '98 degrees (sideways)',
                    temperature: '-224°C',
                    atmosphere: 'Hydrogen, helium, methane',
                    moons: '27 known moons'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'major',
                    synthType: 'ambient',
                    duration: 32
                },
                mappingInfo: {
                    color: 'Blue-green tones',
                    tilt: 'Unusual harmonic structure',
                    calm: 'Smooth textures'
                }
            },
            {
                id: 'neptune',
                name: 'Neptune',
                category: 'solar-system',
                tags: ['planet', 'ice-giant', 'winds'],
                description: 'The windiest planet with supersonic storms and the deepest blue color in our solar system.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/800px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/400px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
                credit: 'NASA Voyager 2',
                duration: 34,
                difficulty: 'intermediate',
                scientificInfo: {
                    windSpeed: '2,100 km/h (supersonic)',
                    temperature: '-218°C',
                    orbit: '165 Earth years',
                    spot: 'Great Dark Spot storm'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'blues',
                    synthType: 'fm',
                    duration: 34
                },
                mappingInfo: {
                    winds: 'Rapid frequency sweeps',
                    storms: 'Chaotic patterns',
                    blue: 'Cool timbres'
                }
            },

            // PHENOMENA - Additional Items (8 more)
            {
                id: 'aurora-borealis',
                name: 'Aurora Borealis',
                category: 'phenomena',
                tags: ['aurora', 'earth', 'magnetosphere'],
                description: 'The Northern Lights dancing across the sky as solar wind interacts with Earth\'s magnetic field.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Polarlicht_2.jpg/800px-Polarlicht_2.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Polarlicht_2.jpg/400px-Polarlicht_2.jpg',
                credit: 'Wikimedia Commons',
                duration: 25,
                difficulty: 'beginner',
                scientificInfo: {
                    cause: 'Solar wind + magnetosphere',
                    altitude: '100-400 km',
                    colors: 'Oxygen (green), nitrogen (red/blue)',
                    visible: 'High latitudes'
                },
                sonificationConfig: {
                    scanMode: 'vertical',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 25
                },
                mappingInfo: {
                    curtains: 'Flowing melodic lines',
                    shimmer: 'Chorus effects',
                    colors: 'Harmonic content'
                }
            },
            {
                id: 'comet-tail',
                name: 'Comet Tail',
                category: 'phenomena',
                tags: ['comet', 'tail', 'solar-system'],
                description: 'The magnificent tail of a comet, stretching millions of kilometers as it approaches the Sun.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Comet_Hale-Bopp_1995O1.jpg/800px-Comet_Hale-Bopp_1995O1.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Comet_Hale-Bopp_1995O1.jpg/400px-Comet_Hale-Bopp_1995O1.jpg',
                credit: 'NASA',
                duration: 28,
                difficulty: 'beginner',
                scientificInfo: {
                    tails: 'Two types - dust and ion',
                    length: 'Can extend millions of km',
                    direction: 'Always points away from Sun',
                    composition: 'Ice, dust, gases'
                },
                sonificationConfig: {
                    scanMode: 'vertical',
                    scale: 'major',
                    synthType: 'ambient',
                    duration: 28
                },
                mappingInfo: {
                    tail: 'Descending glissando',
                    dust: 'Granular texture',
                    motion: 'Doppler-like shifts'
                }
            },
            {
                id: 'asteroid-belt',
                name: 'Asteroid Belt',
                category: 'phenomena',
                tags: ['asteroid', 'belt', 'rocky'],
                description: 'Millions of rocky remnants orbiting between Mars and Jupiter, debris from planet formation.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Asteroid_belt.jpg/800px-Asteroid_belt.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Asteroid_belt.jpg/400px-Asteroid_belt.jpg',
                credit: 'NASA',
                duration: 35,
                difficulty: 'intermediate',
                scientificInfo: {
                    objects: 'Millions of asteroids',
                    largest: 'Ceres (dwarf planet)',
                    location: 'Between Mars and Jupiter',
                    formation: 'Failed planet'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'chromatic',
                    synthType: 'percussive',
                    duration: 35
                },
                mappingInfo: {
                    asteroids: 'Individual percussion hits',
                    density: 'Note frequency',
                    orbits: 'Rhythmic patterns'
                }
            },
            {
                id: 'kuiper-belt',
                name: 'Kuiper Belt',
                category: 'phenomena',
                tags: ['kuiper', 'icy', 'edge'],
                description: 'The icy frontier beyond Neptune, home to Pluto and countless frozen worlds.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Kuiper_belt_-_Oort_cloud-en.svg/800px-Kuiper_belt_-_Oort_cloud-en.svg.png',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Kuiper_belt_-_Oort_cloud-en.svg/400px-Kuiper_belt_-_Oort_cloud-en.svg.png',
                credit: 'NASA',
                duration: 40,
                difficulty: 'advanced',
                scientificInfo: {
                    location: 'Beyond Neptune',
                    contents: 'Icy bodies and dwarf planets',
                    famous: 'Pluto, Eris, Makemake',
                    edge: 'Solar system frontier'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'harmonic',
                    synthType: 'ambient',
                    duration: 40
                },
                mappingInfo: {
                    distance: 'Pitch descending',
                    ice: 'Crystal tones',
                    mystery: 'Sparse, distant notes'
                }
            },
            {
                id: 'solar-eclipse',
                name: 'Solar Eclipse',
                category: 'phenomena',
                tags: ['eclipse', 'moon', 'sun'],
                description: 'The Moon perfectly blocking the Sun, revealing the solar corona in a cosmic alignment.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Solar_eclipse_1999_4_NR.jpg/800px-Solar_eclipse_1999_4_NR.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Solar_eclipse_1999_4_NR.jpg/400px-Solar_eclipse_1999_4_NR.jpg',
                credit: 'NASA',
                duration: 22,
                difficulty: 'beginner',
                scientificInfo: {
                    duration: 'Maximum 7.5 minutes',
                    frequency: 'Every 18 months somewhere',
                    corona: 'Visible during totality',
                    alignment: 'Sun-Moon-Earth'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'minor',
                    synthType: 'ambient',
                    duration: 22
                },
                mappingInfo: {
                    darkness: 'Volume fade',
                    corona: 'Bright overtones',
                    totality: 'Dramatic pause'
                }
            },
            {
                id: 'lunar-eclipse',
                name: 'Lunar Eclipse',
                category: 'phenomena',
                tags: ['eclipse', 'moon', 'blood-moon'],
                description: 'Earth\'s shadow turning the Moon blood red during a total lunar eclipse.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lunar_eclipse_al-Biruni.jpg/800px-Lunar_eclipse_al-Biruni.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lunar_eclipse_al-Biruni.jpg/400px-Lunar_eclipse_al-Biruni.jpg',
                credit: 'NASA',
                duration: 26,
                difficulty: 'beginner',
                scientificInfo: {
                    color: 'Red from Earth\'s atmosphere',
                    duration: 'Can last over 3 hours',
                    visible: 'Entire night side of Earth',
                    safe: 'Safe to view with naked eye'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'minor',
                    synthType: 'ambient',
                    duration: 26
                },
                mappingInfo: {
                    red: 'Warm, low frequencies',
                    shadow: 'Filtering effects',
                    phases: 'Gradual changes'
                }
            },
            {
                id: 'meteor-shower',
                name: 'Meteor Shower',
                category: 'phenomena',
                tags: ['meteor', 'shooting-star', 'debris'],
                description: 'Dozens of shooting stars per hour as Earth plows through a comet\'s dusty trail.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Perseid_meteor_shower_2020.jpg/800px-Perseid_meteor_shower_2020.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Perseid_meteor_shower_2020.jpg/400px-Perseid_meteor_shower_2020.jpg',
                credit: 'NASA',
                duration: 30,
                difficulty: 'beginner',
                scientificInfo: {
                    cause: 'Comet debris trail',
                    speed: 'Up to 70 km/s',
                    famous: 'Perseids, Geminids, Leonids',
                    peak: '60-100 per hour'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'pentatonic',
                    synthType: 'pluck',
                    duration: 30
                },
                mappingInfo: {
                    meteors: 'Quick plucks',
                    trails: 'Decaying tones',
                    frequency: 'Event density'
                }
            },
            {
                id: 'zodiacal-light',
                name: 'Zodiacal Light',
                category: 'phenomena',
                tags: ['light', 'dust', 'glow'],
                description: 'A faint pyramid of light in the night sky, caused by sunlight reflecting off interplanetary dust.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zodiacal_light_at_Paranal.jpg/800px-Zodiacal_light_at_Paranal.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zodiacal_light_at_Paranal.jpg/400px-Zodiacal_light_at_Paranal.jpg',
                credit: 'ESO',
                duration: 24,
                difficulty: 'intermediate',
                scientificInfo: {
                    cause: 'Sunlight on dust',
                    visibility: 'Dark skies only',
                    shape: 'Pyramid of light',
                    best: 'Just after sunset/before sunrise'
                },
                sonificationConfig: {
                    scanMode: 'vertical',
                    scale: 'lydian',
                    synthType: 'ambient',
                    duration: 24
                },
                mappingInfo: {
                    glow: 'Soft pad',
                    fade: 'Volume envelope',
                    dust: 'Subtle shimmer'
                }
            },

            // MISSIONS - Additional Items (9 more)
            {
                id: 'apollo-11-landing',
                name: 'Apollo 11 Landing Site',
                category: 'missions',
                tags: ['apollo', 'moon', 'landing', 'historic'],
                description: 'The historic Sea of Tranquility where humanity first set foot on another world.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/800px-Aldrin_Apollo_11_original.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/400px-Aldrin_Apollo_11_original.jpg',
                credit: 'NASA Apollo 11',
                duration: 30,
                difficulty: 'beginner',
                scientificInfo: {
                    date: 'July 20, 1969',
                    location: 'Sea of Tranquility',
                    crew: 'Armstrong, Aldrin, Collins',
                    significance: 'First humans on Moon'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'major',
                    synthType: 'melodic',
                    duration: 30
                },
                mappingInfo: {
                    footprints: 'Rhythmic pulses',
                    achievement: 'Triumphant melody',
                    lunar: 'Sparse, distant tones'
                }
            },
            {
                id: 'hubble-infrared',
                name: 'Hubble Infrared Deep Field',
                category: 'missions',
                tags: ['hubble', 'infrared', 'galaxies'],
                description: 'Hubble\'s infrared view revealing galaxies invisible to the human eye.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hubble_ultra_deep_field.jpg/800px-Hubble_ultra_deep_field.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hubble_ultra_deep_field.jpg/400px-Hubble_ultra_deep_field.jpg',
                credit: 'NASA/ESA Hubble',
                duration: 50,
                difficulty: 'advanced',
                scientificInfo: {
                    exposure: 'Million seconds',
                    galaxies: '~10,000 visible',
                    distance: 'Up to 13 billion light years',
                    infrared: 'Sees through dust'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'harmonic',
                    synthType: 'ambient',
                    duration: 50
                },
                mappingInfo: {
                    infrared: 'Deep bass frequencies',
                    distance: 'Time-stretched tones',
                    count: 'Polyphonic density'
                }
            },
            {
                id: 'cassini-saturn',
                name: 'Cassini at Saturn',
                category: 'missions',
                tags: ['cassini', 'saturn', 'rings'],
                description: 'Cassini\'s breathtaking view of Saturn\'s rings, the result of 13 years orbiting the ringed giant.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/400px-Saturn_during_Equinox.jpg',
                credit: 'NASA Cassini',
                duration: 42,
                difficulty: 'intermediate',
                scientificInfo: {
                    mission: '1997-2017 (20 years)',
                    orbits: '294 orbits of Saturn',
                    discoveries: 'Enceladus geysers, Titan lakes',
                    end: 'Plunged into Saturn'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'pentatonic',
                    synthType: 'ambient',
                    duration: 42
                },
                mappingInfo: {
                    rings: 'Layered harmonics',
                    gaps: 'Silence between notes',
                    beauty: 'Rich orchestration'
                }
            },
            {
                id: 'new-horizons-pluto',
                name: 'New Horizons at Pluto',
                category: 'missions',
                tags: ['new-horizons', 'pluto', 'flyby'],
                description: 'The first close-up images of Pluto, revealing a surprisingly active world at the edge of the solar system.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/800px-Pluto_in_True_Color_-_High-Res.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/400px-Pluto_in_True_Color_-_High-Res.jpg',
                credit: 'NASA New Horizons',
                duration: 36,
                difficulty: 'intermediate',
                scientificInfo: {
                    flyby: 'July 14, 2015',
                    distance: '4.67 billion km traveled',
                    speed: '14 km/s at flyby',
                    heart: 'Tombaugh Regio'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'major',
                    synthType: 'melodic',
                    duration: 36
                },
                mappingInfo: {
                    heart: 'Warm melodic center',
                    mountains: 'High frequencies',
                    distance: 'Echoing reverb'
                }
            },
            {
                id: 'juno-jupiter',
                name: 'Juno at Jupiter',
                category: 'missions',
                tags: ['juno', 'jupiter', 'polar'],
                description: 'Juno\'s stunning polar views of Jupiter, revealing chaotic storms at the gas giant\'s poles.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/800px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/400px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg',
                credit: 'NASA Juno',
                duration: 38,
                difficulty: 'intermediate',
                scientificInfo: {
                    orbit: 'Polar orbit',
                    arrived: '2016',
                    discoveries: 'Polar cyclones, deep atmosphere',
                    radiation: 'Extreme radiation environment'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'mixolydian',
                    synthType: 'fm',
                    duration: 38
                },
                mappingInfo: {
                    cyclones: 'Swirling patterns',
                    clouds: 'Textural layers',
                    magnetism: 'Harsh harmonics'
                }
            },
            {
                id: 'parker-solar-probe',
                name: 'Parker Solar Probe',
                category: 'missions',
                tags: ['parker', 'sun', 'corona'],
                description: 'Humanity\'s closest approach to the Sun, flying through the solar corona at record speeds.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Artist%27s_concept_of_Parker_Solar_Probe_spacecraft_approaching_sun.jpg/800px-Artist%27s_concept_of_Parker_Solar_Probe_spacecraft_approaching_sun.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Artist%27s_concept_of_Parker_Solar_Probe_spacecraft_approaching_sun.jpg/400px-Artist%27s_concept_of_Parker_Solar_Probe_spacecraft_approaching_sun.jpg',
                credit: 'NASA',
                duration: 34,
                difficulty: 'advanced',
                scientificInfo: {
                    speed: '700,000 km/h (fastest human object)',
                    closest: '6.5 million km from Sun',
                    temperature: '1,377°C shield',
                    mission: 'Study solar wind origins'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'chromatic',
                    synthType: 'noise',
                    duration: 34
                },
                mappingInfo: {
                    heat: 'Intense high frequencies',
                    speed: 'Rapid modulation',
                    corona: 'Plasma-like textures'
                }
            },
            {
                id: 'jwst-first-image',
                name: 'JWST First Deep Field',
                category: 'missions',
                tags: ['jwst', 'infrared', 'galaxies'],
                description: 'The first deep field from James Webb Space Telescope, revealing the universe in unprecedented detail.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/JWST_First_Deep_Field.jpg/800px-JWST_First_Deep_Field.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/JWST_First_Deep_Field.jpg/400px-JWST_First_Deep_Field.jpg',
                credit: 'NASA/ESA/CSA JWST',
                duration: 55,
                difficulty: 'advanced',
                scientificInfo: {
                    released: 'July 12, 2022',
                    distance: 'Up to 13.1 billion light years',
                    detail: 'Sharpest infrared image ever',
                    galaxies: 'Thousands visible'
                },
                sonificationConfig: {
                    scanMode: 'random',
                    scale: 'harmonic',
                    synthType: 'ambient',
                    duration: 55
                },
                mappingInfo: {
                    infrared: 'Warm, deep tones',
                    detail: 'High resolution harmonics',
                    distance: 'Time-dilated rhythms'
                }
            },
            {
                id: 'perseverance-mars',
                name: 'Perseverance on Mars',
                category: 'missions',
                tags: ['perseverance', 'mars', 'rover'],
                description: 'NASA\'s newest Mars rover exploring Jezero Crater and searching for signs of ancient life.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PIA24542-Mars2020PerseveranceRover-FirstImage-20210218.jpg/800px-PIA24542-Mars2020PerseveranceRover-FirstImage-20210218.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PIA24542-Mars2020PerseveranceRover-FirstImage-20210218.jpg/400px-PIA24542-Mars2020PerseveranceRover-FirstImage-20210218.jpg',
                credit: 'NASA Perseverance',
                duration: 33,
                difficulty: 'beginner',
                scientificInfo: {
                    landed: 'February 18, 2021',
                    location: 'Jezero Crater',
                    goal: 'Search for ancient life',
                    companion: 'Ingenuity helicopter'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'pentatonic',
                    synthType: 'melodic',
                    duration: 33
                },
                mappingInfo: {
                    terrain: 'Textural variations',
                    rocks: 'Percussive elements',
                    exploration: 'Progressive melody'
                }
            },
            {
                id: 'insight-mars',
                name: 'InSight Lander',
                category: 'missions',
                tags: ['insight', 'mars', 'seismometer'],
                description: 'InSight listening to marsquakes and revealing the deep interior structure of Mars.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/InSight_Lander_PIA22876-full.jpg/800px-InSight_Lander_PIA22876-full.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/InSight_Lander_PIA22876-full.jpg/400px-InSight_Lander_PIA22876-full.jpg',
                credit: 'NASA InSight',
                duration: 29,
                difficulty: 'intermediate',
                scientificInfo: {
                    landed: 'November 26, 2018',
                    mission: 'Study Mars interior',
                    marsquakes: 'Detected over 1,300',
                    ended: 'December 2022'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'minor',
                    synthType: 'percussive',
                    duration: 29
                },
                mappingInfo: {
                    seismic: 'Rumbling bass',
                    quakes: 'Sudden percussion',
                    silence: 'Long quiet passages'
                }
            },

            // LIVE DATA (additional items)
            {
                id: 'near-earth-objects',
                name: 'Near-Earth Objects',
                category: 'live-data',
                tags: ['asteroids', 'live', 'near-earth', 'real-time'],
                description: 'Real-time tracking of asteroids and comets approaching Earth\'s orbit.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Asteroid_433_Eros.jpg/800px-Asteroid_433_Eros.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Asteroid_433_Eros.jpg/400px-Asteroid_433_Eros.jpg',
                credit: 'NASA/NEAR',
                duration: 35,
                difficulty: 'intermediate',
                scientificInfo: {
                    count: 'Over 30,000 known NEOs',
                    closest: 'Some pass within lunar distance',
                    monitoring: 'Tracked by NASA\'s NEO Observations Program',
                    sizes: 'Range from meters to kilometers'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'minor',
                    synthType: 'percussive',
                    duration: 35
                },
                mappingInfo: {
                    distance: 'Pitch - Closer objects = lower tones',
                    size: 'Volume - Larger = louder',
                    velocity: 'Tempo - Faster = quicker notes'
                }
            },
            {
                id: 'mars-weather',
                name: 'Mars Weather Report',
                category: 'live-data',
                tags: ['mars', 'weather', 'live', 'insight'],
                description: 'Current weather conditions on Mars from NASA\'s InSight lander.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/400px-OSIRIS_Mars_true_color.jpg',
                credit: 'ESA/Mars Express',
                duration: 30,
                difficulty: 'beginner',
                scientificInfo: {
                    temperature: 'Average: -60°C (-80°F)',
                    pressure: '0.6% of Earth\'s pressure',
                    winds: 'Up to 100 km/h during dust storms',
                    seasons: 'Mars has four seasons like Earth'
                },
                sonificationConfig: {
                    scanMode: 'horizontal',
                    scale: 'blues',
                    synthType: 'ambient',
                    duration: 30
                },
                mappingInfo: {
                    temperature: 'Pitch - Warmer = higher notes',
                    pressure: 'Volume - Higher pressure = louder',
                    wind: 'Noise layer - Wind speed = intensity'
                }
            },

            // DEEP SPACE (additional items)
            {
                id: 'cassiopeia-a',
                name: 'Cassiopeia A Supernova Remnant',
                category: 'deep-space',
                tags: ['supernova', 'remnant', 'cassiopeia', 'explosion'],
                description: 'The youngest known supernova remnant in the Milky Way, from a star that exploded around 1680 CE.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Cassiopeia_A_Spitzer.jpg/800px-Cassiopeia_A_Spitzer.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Cassiopeia_A_Spitzer.jpg/400px-Cassiopeia_A_Spitzer.jpg',
                credit: 'NASA/JPL-Caltech/Spitzer',
                duration: 45,
                difficulty: 'advanced',
                scientificInfo: {
                    distance: '11,000 light years from Earth',
                    age: '~340 years old',
                    expansion: 'Expanding at 4,000-6,000 km/s',
                    size: '10 light years across'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'chromatic',
                    synthType: 'metal',
                    duration: 45
                },
                mappingInfo: {
                    xray: 'High frequencies - Hot gas emissions',
                    infrared: 'Mid frequencies - Dust clouds',
                    expansion: 'Doppler effects - Motion outward'
                }
            },

            // PHENOMENA (additional items)
            {
                id: 'cats-eye-nebula',
                name: 'Cat\'s Eye Nebula',
                category: 'phenomena',
                tags: ['nebula', 'planetary-nebula', 'dying-star', 'complex'],
                description: 'One of the most complex planetary nebulae, revealing the final stages of a sun-like star.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cats_eye_nebula.jpg/800px-Cats_eye_nebula.jpg',
                thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cats_eye_nebula.jpg/400px-Cats_eye_nebula.jpg',
                credit: 'NASA/ESA Hubble',
                duration: 38,
                difficulty: 'intermediate',
                scientificInfo: {
                    distance: '3,000 light years from Earth',
                    age: '~1,000 years old',
                    structure: '11 or more concentric shells',
                    central_star: 'White dwarf at 80,000 K'
                },
                sonificationConfig: {
                    scanMode: 'radial',
                    scale: 'harmonic-minor',
                    synthType: 'fm',
                    duration: 38
                },
                mappingInfo: {
                    shells: 'Layered harmonics - Each shell = different timbre',
                    brightness: 'Volume - Bright center = louder',
                    symmetry: 'Stereo balance - Symmetrical structure'
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
