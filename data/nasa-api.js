/**
 * NASA Space Sonification - NASA API Integration
 * Fetch data from various NASA APIs
 */

class NASADataAPI {
    constructor() {
        // NASA API key - DEMO_KEY for development, get your own at https://api.nasa.gov/
        this.apiKey = 'DEMO_KEY';
        this.baseURL = 'https://api.nasa.gov';
        this.cache = new Map();
        this.cacheExpiry = 3600000; // 1 hour
    }

    /**
     * Set custom API key
     */
    setApiKey(key) {
        this.apiKey = key;
    }

    /**
     * Generic fetch with caching
     */
    async fetch(endpoint, params = {}) {
        const cacheKey = `${endpoint}_${JSON.stringify(params)}`;

        // Check cache
        if (this.cache.has(cacheKey)) {
            const cached = this.cache.get(cacheKey);
            if (Date.now() - cached.timestamp < this.cacheExpiry) {
                console.log(`Using cached data for ${endpoint}`);
                return cached.data;
            }
        }

        // Build URL
        const url = new URL(`${this.baseURL}${endpoint}`);
        url.searchParams.append('api_key', this.apiKey);

        Object.keys(params).forEach(key => {
            url.searchParams.append(key, params[key]);
        });

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`NASA API error: ${response.statusText}`);
            }

            const data = await response.json();

            // Cache the result
            this.cache.set(cacheKey, {
                data,
                timestamp: Date.now()
            });

            return data;
        } catch (error) {
            console.error('NASA API fetch error:', error);
            throw error;
        }
    }

    /**
     * Get Astronomy Picture of the Day
     */
    async getAPOD(date = null) {
        const params = date ? { date } : {};
        return await this.fetch('/planetary/apod', params);
    }

    /**
     * Get multiple APODs
     */
    async getAPODRange(startDate, endDate, count = 10) {
        const params = {
            start_date: startDate,
            end_date: endDate,
            count: count
        };
        return await this.fetch('/planetary/apod', params);
    }

    /**
     * Get Near Earth Objects
     */
    async getNearEarthObjects(startDate, endDate) {
        const params = {
            start_date: startDate,
            end_date: endDate
        };
        return await this.fetch('/neo/rest/v1/feed', params);
    }

    /**
     * Get Mars Rover Photos
     */
    async getMarsRoverPhotos(rover = 'curiosity', sol = 1000, camera = null) {
        const params = { sol };
        if (camera) params.camera = camera;

        return await this.fetch(`/mars-photos/api/v1/rovers/${rover}/photos`, params);
    }

    /**
     * Get Mars Weather Data (InSight mission)
     */
    async getMarsWeather() {
        return await this.fetch('/insight_weather/', { feedtype: 'json', ver: '1.0' });
    }

    /**
     * Get Earth imagery
     */
    async getEarthImagery(lat, lon, date, dim = 0.1) {
        const params = {
            lat,
            lon,
            date,
            dim
        };
        return await this.fetch('/planetary/earth/imagery', params);
    }

    /**
     * Get Earth assets (available imagery for location)
     */
    async getEarthAssets(lat, lon, begin, end) {
        const params = { lat, lon, begin, end };
        return await this.fetch('/planetary/earth/assets', params);
    }

    /**
     * Search NASA Image and Video Library
     */
    async searchImageLibrary(query, mediaType = 'image', yearStart = null) {
        const searchURL = 'https://images-api.nasa.gov/search';
        const url = new URL(searchURL);

        url.searchParams.append('q', query);
        url.searchParams.append('media_type', mediaType);
        if (yearStart) url.searchParams.append('year_start', yearStart);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`NASA Image Library error: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('NASA Image Library error:', error);
            throw error;
        }
    }

    /**
     * Get EPIC (Earth Polychromatic Imaging Camera) images
     */
    async getEPICImages(type = 'natural', date = null) {
        const endpoint = date
            ? `/EPIC/api/${type}/date/${date}`
            : `/EPIC/api/${type}`;

        return await this.fetch(endpoint);
    }

    /**
     * Get exoplanet data from NASA Exoplanet Archive
     */
    async getExoplanets() {
        const url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json&select=pl_name,pl_orbper,pl_bmassj,pl_radj,pl_eqt';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Exoplanet API error: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Exoplanet API error:', error);
            // Return fallback data
            return this.getFallbackExoplanets();
        }
    }

    /**
     * Fallback exoplanet data
     */
    getFallbackExoplanets() {
        return [
            {
                pl_name: 'Kepler-186f',
                pl_orbper: 129.9,
                pl_radj: 0.104,
                pl_bmassj: null,
                pl_eqt: 188
            },
            {
                pl_name: 'TRAPPIST-1e',
                pl_orbper: 6.1,
                pl_radj: 0.084,
                pl_bmassj: 0.0026,
                pl_eqt: 230
            },
            {
                pl_name: 'Proxima Centauri b',
                pl_orbper: 11.2,
                pl_radj: 0.11,
                pl_bmassj: 0.004,
                pl_eqt: 234
            }
        ];
    }

    /**
     * Get ISS current location
     */
    async getISSLocation() {
        const url = 'http://api.open-notify.org/iss-now.json';

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`ISS API error: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('ISS API error:', error);
            return null;
        }
    }

    /**
     * Get solar flare data (DONKI API)
     */
    async getSolarFlares(startDate, endDate) {
        const params = {
            startDate,
            endDate
        };
        return await this.fetch('/DONKI/FLR', params);
    }

    /**
     * Get coronal mass ejection data
     */
    async getCoronalMassEjections(startDate, endDate) {
        const params = {
            startDate,
            endDate
        };
        return await this.fetch('/DONKI/CME', params);
    }

    /**
     * Get geomagnetic storm data
     */
    async getGeomagneticStorms(startDate, endDate) {
        const params = {
            startDate,
            endDate
        };
        return await this.fetch('/DONKI/GST', params);
    }

    /**
     * Load image from URL and get ImageData
     */
    async loadImageData(imageUrl) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                try {
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    resolve(imageData);
                } catch (error) {
                    reject(error);
                }
            };

            img.onerror = () => {
                reject(new Error('Failed to load image'));
            };

            img.src = imageUrl;
        });
    }

    /**
     * Get curated space images for sonification
     */
    getCuratedImages() {
        return [
            {
                id: 'hubble-deep-field',
                name: 'Hubble Deep Field',
                category: 'deep-space',
                description: 'One of the most iconic images in astronomy, showing thousands of distant galaxies.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/HubbleDeepField.800px.jpg/800px-HubbleDeepField.800px.jpg',
                credit: 'NASA/ESA Hubble Space Telescope',
                preset: 'galaxy'
            },
            {
                id: 'pillars-of-creation',
                name: 'Pillars of Creation',
                category: 'deep-space',
                description: 'Towering pillars of gas and dust in the Eagle Nebula where new stars are forming.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/800px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
                credit: 'NASA/ESA Hubble Space Telescope',
                preset: 'nebula'
            },
            {
                id: 'crab-nebula',
                name: 'Crab Nebula',
                category: 'deep-space',
                description: 'Remnant of a supernova explosion witnessed in 1054 AD.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/800px-Crab_Nebula.jpg',
                credit: 'NASA/ESA Hubble Space Telescope',
                preset: 'nebula'
            },
            {
                id: 'andromeda-galaxy',
                name: 'Andromeda Galaxy',
                category: 'deep-space',
                description: 'Our nearest large galactic neighbor, containing about one trillion stars.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/800px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                credit: 'Adam Evans',
                preset: 'galaxy'
            },
            {
                id: 'jupiter',
                name: 'Jupiter',
                category: 'solar-system',
                description: 'The largest planet in our solar system, with its iconic Great Red Spot.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/800px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg',
                credit: 'NASA Hubble Space Telescope',
                preset: 'planet'
            },
            {
                id: 'saturn',
                name: 'Saturn',
                category: 'solar-system',
                description: 'The ringed giant, one of the most beautiful sights in our solar system.',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg',
                credit: 'NASA Cassini Mission',
                preset: 'planet'
            }
        ];
    }

    /**
     * Format date for NASA API (YYYY-MM-DD)
     */
    formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    /**
     * Get today's date formatted
     */
    getTodayFormatted() {
        return this.formatDate(new Date());
    }

    /**
     * Clear cache
     */
    clearCache() {
        this.cache.clear();
    }
}

// Global NASA API instance
const nasaAPI = new NASADataAPI();

console.log('NASA API module loaded');
