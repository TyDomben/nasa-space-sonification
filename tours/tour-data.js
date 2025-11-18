/**
 * NASA Space Sonification - Guided Tours Data
 * Pre-programmed journeys through space with narration
 */

const guidedTours = {
    'deep-space-journey': {
        id: 'deep-space-journey',
        title: 'Journey Through Deep Space',
        description: 'Travel billions of light years from Earth, experiencing the most distant and ancient objects in the universe.',
        duration: 600, // 10 minutes
        difficulty: 'beginner',
        category: 'educational',
        icon: 'fa-galaxy',
        steps: [
            {
                sonificationId: 'hubble-deep-field',
                title: 'The Edge of the Observable Universe',
                narration: 'We begin our journey 13 billion light years away, at the edge of time itself. The Hubble Deep Field reveals thousands of galaxies, each containing billions of stars. Listen as the faint light from ancient galaxies transforms into sound.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'andromeda-galaxy',
                title: 'Our Nearest Galactic Neighbor',
                narration: 'Traveling closer to home, we arrive at Andromeda - our nearest major galaxy, 2.5 million light years away. This spiral galaxy will eventually collide with the Milky Way in about 4 billion years. Hear the spiral arms as sweeping melodic patterns.',
                duration: 55,
                autoAdvance: true
            },
            {
                sonificationId: 'whirlpool-galaxy',
                title: 'The Grand Design Spiral',
                narration: 'The Whirlpool Galaxy showcases the perfect spiral structure. Its companion galaxy creates gravitational tides, triggering massive star formation. The bright blue regions are where thousands of new stars are being born.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'orion-nebula',
                title: 'A Stellar Nursery',
                narration: 'Only 1,300 light years away, the Orion Nebula is the closest massive star-forming region. Over 700 young stars are being born here, their intense radiation illuminating the surrounding gas and dust.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'pillars-of-creation',
                title: 'The Pillars of Creation',
                narration: 'Perhaps the most iconic image in astronomy: towering columns of gas and dust in the Eagle Nebula, where new stars are forming. These pillars are 4-5 light years tall - imagine traveling for years at light speed to traverse them!',
                duration: 55,
                autoAdvance: true
            },
            {
                sonificationId: 'crab-nebula',
                title: 'The Aftermath of a Supernova',
                narration: 'This beautiful nebula is the remnant of a supernova explosion witnessed by Chinese astronomers in 1054 CE. At its center, a pulsar spins 30 times per second, sending out beams of radiation like a cosmic lighthouse.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'cassiopeia-a',
                title: 'The Youngest Supernova Remnant',
                narration: 'Cassiopeia A is the youngest known supernova remnant in our galaxy, from a star that exploded around 1680. The debris is expanding at 4,000-6,000 kilometers per second. Listen to the violent energy of stellar death.',
                duration: 55,
                autoAdvance: true
            },
            {
                sonificationId: 'cats-eye-nebula',
                title: 'The Complex Planetary Nebula',
                narration: 'When sun-like stars die, they shed their outer layers in complex patterns. The Cat\'s Eye Nebula shows 11 concentric shells of gas, revealing multiple episodes of mass loss over thousands of years.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'helix-nebula',
                title: 'The Eye of God',
                narration: 'Our journey ends with the Helix Nebula, one of the closest planetary nebulae. In about 5 billion years, our own Sun will create a similar structure when it dies, leaving behind a white dwarf core.',
                duration: 45,
                autoAdvance: true
            },
            {
                sonificationId: 'hubble-deep-field',
                title: 'Full Circle',
                narration: 'We return to the Hubble Deep Field, reminded that we are made of star stuff - the atoms in our bodies were forged in the cores of dying stars billions of years ago. Thank you for this cosmic journey.',
                duration: 50,
                autoAdvance: false
            }
        ]
    },

    'solar-system-symphony': {
        id: 'solar-system-symphony',
        title: 'Solar System Symphony',
        description: 'A musical journey through our cosmic neighborhood, from the Sun to the outer planets.',
        duration: 540, // 9 minutes
        difficulty: 'beginner',
        category: 'educational',
        icon: 'fa-sun',
        steps: [
            {
                sonificationId: 'sun-surface',
                title: 'The Heart of Our Solar System',
                narration: 'We begin at the Sun - a ball of plasma 109 times wider than Earth. Every second, the Sun converts 4 million tons of matter into pure energy. Listen to the roiling, turbulent surface where magnetic fields create sunspots and solar flares.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'mercury-surface',
                title: 'The Swift Planet',
                narration: 'Mercury, the closest planet to the Sun, races around its orbit in just 88 days. With no atmosphere to moderate temperatures, the surface swings from 430°C in daylight to -180°C at night.',
                duration: 45,
                autoAdvance: true
            },
            {
                sonificationId: 'venus-atmosphere',
                title: 'The Morning Star',
                narration: 'Venus, Earth\'s evil twin, has a runaway greenhouse effect creating surface temperatures of 465°C - hot enough to melt lead. The thick atmosphere creates a crushing pressure 92 times that of Earth.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'mars-polar-caps',
                title: 'The Red Planet',
                narration: 'Mars, humanity\'s next destination. Its polar ice caps contain both water ice and frozen carbon dioxide. In winter, up to 30% of the atmosphere freezes onto the polar caps!',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'jupiter-great-red-spot',
                title: 'The King of Planets',
                narration: 'Jupiter, so massive that 1,300 Earths could fit inside. The Great Red Spot is a storm larger than Earth that has raged for at least 350 years. Hear the swirling chaos of this giant planet.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'europa-surface',
                title: 'The Ocean Moon',
                narration: 'Europa, Jupiter\'s mysterious moon, has a global ocean beneath its icy crust - one of the best places in our solar system to search for life. The ice cracks and shifts, creating chaotic terrain.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'saturn-rings',
                title: 'The Ringed World',
                narration: 'Saturn, the jewel of the solar system. Its magnificent rings are made of billions of particles of ice and rock, ranging from dust grains to house-sized boulders. Each ring particle orbits Saturn independently.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'uranus',
                title: 'The Tilted Planet',
                narration: 'Uranus spins on its side, probably due to a massive collision early in its history. This gives it extreme seasons - each pole experiences 42 years of continuous sunlight, then 42 years of darkness.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'neptune',
                title: 'The Windy World',
                narration: 'Neptune, the outermost planet, has the fastest winds in the solar system - up to 2,100 kilometers per hour. Despite being so far from the Sun, it radiates more heat than it receives.',
                duration: 45,
                autoAdvance: true
            },
            {
                sonificationId: 'kuiper-belt',
                title: 'The Edge of the Solar System',
                narration: 'Beyond Neptune lies the Kuiper Belt, home to countless icy bodies including Pluto. This is the edge of the planetary solar system, but the Sun\'s influence extends much farther, to the Oort Cloud.',
                duration: 40,
                autoAdvance: false
            }
        ]
    },

    'cosmic-violence': {
        id: 'cosmic-violence',
        title: 'Cosmic Violence: Explosions & Collisions',
        description: 'Experience the most energetic events in the universe - supernovae, black holes, and stellar collisions.',
        duration: 480, // 8 minutes
        difficulty: 'intermediate',
        category: 'dramatic',
        icon: 'fa-explosion',
        steps: [
            {
                sonificationId: 'black-hole-accretion',
                title: 'The Event Horizon',
                narration: 'Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape. As matter falls toward a black hole, it heats to millions of degrees, emitting intense radiation before crossing the event horizon.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'pulsar-timing',
                title: 'Stellar Lighthouses',
                narration: 'Pulsars are rapidly spinning neutron stars - the collapsed cores of massive stars. Some spin hundreds of times per second, beaming radiation like cosmic lighthouses. Their timing is so precise they rival atomic clocks.',
                duration: 55,
                autoAdvance: true
            },
            {
                sonificationId: 'gravitational-waves',
                title: 'Ripples in Spacetime',
                narration: 'When two black holes collide, they create ripples in the fabric of spacetime itself. These gravitational waves travel across the universe at the speed of light. In 2015, we detected them for the first time.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'crab-nebula',
                title: 'Supernova: The Death of a Star',
                narration: 'When massive stars exhaust their nuclear fuel, they explode as supernovae - for a brief time outshining entire galaxies. The Crab Nebula is the remnant of such an explosion witnessed in 1054 CE.',
                duration: 55,
                autoAdvance: true
            },
            {
                sonificationId: 'cassiopeia-a',
                title: 'The Youngest Remnant',
                narration: 'Cassiopeia A is expanding at incredible speeds, creating shock waves that heat the surrounding gas to millions of degrees. This violence seeds the galaxy with heavy elements necessary for planets and life.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'solar-wind',
                title: 'The Solar Storm',
                narration: 'Even our own Sun is violent. Solar flares and coronal mass ejections hurl billions of tons of charged particles into space. When they hit Earth, they create auroras and can disrupt satellites and power grids.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'near-earth-objects',
                title: 'Cosmic Impact',
                narration: 'Asteroids and comets have shaped the history of Earth. 66 million years ago, a 10-kilometer asteroid impact caused the extinction of the dinosaurs. We now track thousands of near-Earth objects.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'andromeda-galaxy',
                title: 'Galaxy Collision',
                narration: 'In 4 billion years, the Andromeda Galaxy will collide with the Milky Way. Despite containing trillions of stars, individual stellar collisions are unlikely - the distances between stars are vast. The galaxies will merge into a new elliptical galaxy.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'hubble-deep-field',
                title: 'A Universe of Violence',
                narration: 'Every galaxy in the Hubble Deep Field has experienced violent events - supernovae, galaxy collisions, black hole mergers. This cosmic violence creates the elements, triggers star formation, and shapes the universe we see today.',
                duration: 50,
                autoAdvance: false
            }
        ]
    },

    'human-exploration': {
        id: 'human-exploration',
        title: 'Human Exploration: Our Journey Beyond Earth',
        description: 'Celebrate humanity\'s greatest achievements in space exploration, from Apollo to Mars rovers.',
        duration: 420, // 7 minutes
        difficulty: 'beginner',
        category: 'inspirational',
        icon: 'fa-rocket',
        steps: [
            {
                sonificationId: 'apollo-11-landing',
                title: 'One Small Step',
                narration: 'July 20, 1969 - Neil Armstrong and Buzz Aldrin became the first humans to walk on another world. "That\'s one small step for man, one giant leap for mankind." Listen to the surface of the Moon at Tranquility Base.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'voyager-golden-record',
                title: 'A Message to the Stars',
                narration: 'In 1977, Voyager 1 and 2 launched carrying the Golden Record - sounds and images of Earth for any alien civilization that might find them. Voyager 1 has now left the solar system, traveling through interstellar space.',
                duration: 60,
                autoAdvance: true
            },
            {
                sonificationId: 'hubble-infrared',
                title: 'Eyes on the Universe',
                narration: 'The Hubble Space Telescope has revolutionized astronomy since 1990. Orbiting above Earth\'s atmosphere, it has captured images of unprecedented clarity, revealing the universe in stunning detail.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'cassini-saturn',
                title: 'The Cassini Mission',
                narration: 'For 13 years, Cassini explored the Saturn system, discovering geysers on Enceladus, liquid methane lakes on Titan, and revealing the complexity of Saturn\'s rings. In 2017, it dove into Saturn\'s atmosphere in a grand finale.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'new-horizons-pluto',
                title: 'The Pluto Flyby',
                narration: 'After a 9-year journey covering 3 billion miles, New Horizons flew past Pluto in 2015, revealing a geologically active world with ice mountains, nitrogen glaciers, and a heart-shaped plain.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'jwst-first-image',
                title: 'The James Webb Space Telescope',
                narration: 'In 2022, the most powerful space telescope ever built began operations. JWST sees in infrared, piercing cosmic dust to reveal the first galaxies, the atmospheres of exoplanets, and the birth of stars.',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'perseverance-mars',
                title: 'Perseverance on Mars',
                narration: 'The Perseverance rover is searching for signs of ancient life in Jezero Crater, which once held a lake. It\'s collecting samples that a future mission will return to Earth. And it brought the first helicopter to another planet!',
                duration: 50,
                autoAdvance: true
            },
            {
                sonificationId: 'mars-weather',
                title: 'Living on Mars',
                narration: 'Human missions to Mars are being planned for the 2030s. Astronauts will face challenges - radiation, low gravity, dust storms, isolation. But Mars may become the first world beyond Earth to host a permanent human presence.',
                duration: 50,
                autoAdvance: false
            }
        ]
    }
};

// Export for use in tour player
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { guidedTours };
}

console.log('Guided Tours Data loaded - 4 tours available');
