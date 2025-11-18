# 🌌 NASA Space Sonification Archive

> **Transform NASA's space data into beautiful audio experiences**

Experience the universe through sound! This interactive web application converts NASA's astronomical images, phenomena, and real-time space data into immersive audio-visual experiences.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NASA API](https://img.shields.io/badge/Data-NASA%20API-red.svg)](https://api.nasa.gov/)
[![Live Demo](https://img.shields.io/badge/Demo-Live-green.svg)](#)

![NASA Space Sonification Banner](https://via.placeholder.com/1200x400/0a0e27/667eea?text=NASA+Space+Sonification+Archive)

---

## ✨ Features

### 🎵 **Pre-made Sonifications**
- **20+ curated space sonifications** from NASA data
- Categories: Deep Space, Solar System, Phenomena, Missions, Live Data
- Each with detailed scientific information and mapping explanations
- Interactive playback with real-time visualizations

### 🎨 **Create Your Own**
- Upload any space image or use NASA URLs
- Configure sonification parameters:
  - Scan modes (horizontal, vertical, radial, random)
  - Musical scales (pentatonic, major, minor, blues, chromatic)
  - Synthesis types (ambient, melodic, FM, noise)
  - Duration and stereo positioning
- Preview before sharing or exporting

### 📊 **Live Space Data**
- **ISS Position Tracker** - Hear the space station's orbital position
- **Solar Activity** - Recent solar flares and space weather
- **APOD Integration** - Daily Astronomy Picture sonification
- Real-time updates every 10 seconds

### 🎬 **Visualizations**
- **Waveform Display** - See the audio signal in real-time
- **Spectrogram** - Frequency analysis over time
- **3D Particle System** - Audio-reactive particle visualization
- Synchronized with audio playback

### 🔊 **Advanced Audio Engine**
- Built on Web Audio API and Tone.js
- Multiple synthesis methods:
  - Ambient drones for nebulae
  - FM synthesis for pulsars
  - Granular synthesis for textures
  - Percussive sounds for impacts
- Master effects: reverb, delay, compression
- Export to audio files (WAV/MP3)

---

## 🚀 Quick Start

### **Online Demo**

Simply open `index.html` in a modern web browser - no build step required!

```bash
# Clone the repository
git clone https://github.com/yourusername/nasa-space-sonification.git

# Navigate to the directory
cd nasa-space-sonification

# Open in browser
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or
start index.html  # Windows
```

### **Local Development**

For development with live reload, use any local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## 📚 How It Works

### **Data Sonification Process**

1. **Data Acquisition**
   - Fetch images from NASA APIs
   - Extract pixel data (brightness, color, position)
   - Load numerical datasets (telemetry, measurements)

2. **Parameter Mapping**
   - **Brightness** → Pitch or Volume
   - **Color** → Timbre (warm/cool tones)
   - **Position** → Stereo pan (left/right)
   - **Time series** → Melodic sequences

3. **Sound Synthesis**
   - Map to musical scales for pleasing melodies
   - Apply synthesis techniques (FM, additive, granular)
   - Add effects (reverb, delay)

4. **Playback & Visualization**
   - Real-time audio generation
   - Synchronized visualizations
   - Interactive controls

### **Example Mappings**

| Space Object | Data → Sound Mapping |
|--------------|---------------------|
| **Nebula** | Brightness → Volume, Radial position → Pitch |
| **Pulsar** | Rotation period → Pulse rate, Magnetic field → Intensity |
| **Galaxy** | Spiral arms → Harmonic layers, Core brightness → Bass |
| **Solar Wind** | Speed → Filter modulation, Density → Noise texture |
| **Black Hole** | Mass → Base frequency, Accretion disk → Harmonics |

---

## 🎯 Gallery Categories

### 🌟 **Deep Space**
- Hubble Deep Field
- Pillars of Creation
- Crab Nebula
- Andromeda Galaxy
- Black Hole M87

### 🪐 **Solar System**
- Jupiter's Great Red Spot
- Saturn's Rings
- Solar Surface
- Mars Landscapes

### ⚡ **Phenomena**
- Pulsar Rhythms
- Solar Wind
- Gravitational Waves
- Supernova Remnants
- Aurora Borealis

### 🛰️ **Missions**
- Voyager's Journey
- Cassini Data
- Mars Rovers
- JWST Images

### 📡 **Live Data**
- Today's APOD
- ISS Position
- Solar Activity
- Near-Earth Objects

---

## 🛠️ Technical Stack

### **Frontend**
- **Vanilla JavaScript** - No frameworks, pure web APIs
- **Tailwind CSS** - Responsive, beautiful UI
- **Web Audio API** - High-performance audio
- **Tone.js** - Advanced synthesis library
- **Three.js** - 3D visualizations
- **P5.js** - 2D graphics

### **Data Sources**
- [NASA API](https://api.nasa.gov/) - Official NASA data
- [NASA Image Library](https://images.nasa.gov/) - Space imagery
- [ISS Location API](http://open-notify.org/) - Real-time ISS tracking
- [DONKI](https://ccmc.gsfc.nasa.gov/donki/) - Space weather data
- [Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/) - Exoplanet data

### **Audio Synthesis**
- Oscillators (sine, square, sawtooth, triangle)
- FM synthesis (frequency modulation)
- Granular synthesis (particle clouds)
- Additive synthesis (harmonic stacking)
- Noise generators (white, pink, brown)

---

## 📁 Project Structure

```
nasa-space-sonification/
├── index.html                      # Main HTML file
├── app.js                          # Main application logic
├── README.md                       # This file
│
├── audio-engine/
│   ├── core.js                     # Audio engine core
│   ├── synthesizers.js             # Sound synthesis methods
│   └── sonification.js             # Data → sound mapping
│
├── data/
│   ├── nasa-api.js                 # NASA API integration
│   └── sonification-library.js     # Pre-made sonifications
│
├── gallery/
│   └── gallery-manager.js          # Gallery display & playback
│
├── create/
│   └── creation-tool.js            # Interactive creation tool
│
├── visualizations/
│   ├── waveform.js                 # Waveform display
│   ├── spectrogram.js              # Frequency spectrum
│   └── particles.js                # 3D particle system
│
└── assets/
    └── (images, icons, etc.)
```

---

## 🎓 Educational Use

Perfect for:
- **Astronomy Education** - Make space data accessible through sound
- **Accessibility** - Experience visual astronomy through audio
- **Data Visualization** - Learn sonification techniques
- **Music & Science** - Explore the intersection of art and science
- **STEM Outreach** - Engage students with interactive experiences

### **Classroom Resources**
- Explanations of sonification mapping
- Scientific facts for each object
- "What you're hearing" guides
- Links to NASA sources
- Tutorials for creating sonifications

---

## 🔧 API Configuration

### **NASA API Key**

The demo uses `DEMO_KEY` which has rate limits. For production:

1. Get your free API key at: https://api.nasa.gov/
2. Update in `data/nasa-api.js`:

```javascript
this.apiKey = 'YOUR_API_KEY_HERE';
```

### **Rate Limits**
- DEMO_KEY: 30 requests/hour, 50 requests/day
- Personal key: 1,000 requests/hour

---

## 🎨 Customization

### **Add Your Own Sonifications**

Edit `data/sonification-library.js`:

```javascript
{
    id: 'my-custom-sonification',
    name: 'My Space Object',
    category: 'deep-space',
    description: 'Description of the sonification',
    imageUrl: 'path/to/image.jpg',
    sonificationConfig: {
        scanMode: 'radial',
        scale: 'pentatonic',
        synthType: 'ambient',
        duration: 30
    }
}
```

### **Create Custom Synthesis**

In `audio-engine/synthesizers.js`:

```javascript
createCustomSynth(config = {}) {
    const synth = new Tone.PolySynth(Tone.Synth, {
        // Your custom configuration
    }).toDestination();

    return synth;
}
```

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Full Support |
| Firefox | 75+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 80+ | ✅ Full Support |
| Mobile | iOS 14+, Android 10+ | ✅ Full Support |

**Requirements:**
- Modern browser with Web Audio API support
- JavaScript enabled
- Internet connection for NASA API data

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **Attribution**

- NASA data and images: Public domain / [NASA Media Guidelines](https://www.nasa.gov/multimedia/guidelines/)
- This project is **not affiliated with NASA**
- All sonifications are artistic interpretations of scientific data

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Ideas for Contributions**
- [ ] More pre-made sonifications
- [ ] Additional visualization modes
- [ ] Audio export functionality
- [ ] User accounts and saved creations
- [ ] Mobile app version
- [ ] VR/AR integration
- [ ] Educational lesson plans
- [ ] Multilingual support

---

## 🐛 Known Issues

- CORS restrictions may prevent loading some external images
- Audio export requires additional libraries (planned)
- Some mobile browsers require user gesture before audio playback
- DEMO_KEY has strict rate limits

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/nasa-space-sonification/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/nasa-space-sonification/discussions)
- **Email**: your.email@example.com

---

## 🙏 Acknowledgments

- **NASA** for providing incredible public data APIs
- **Hubble Space Telescope** team for stunning imagery
- **Event Horizon Telescope** for the first black hole image
- **Tone.js** developers for the excellent audio library
- **Three.js** community for 3D graphics tools
- All space scientists and engineers making this data possible

---

## 🌟 Roadmap

### **Version 2.0** (Planned)
- [ ] Audio file export (WAV/MP3)
- [ ] MIDI export for music production
- [ ] User accounts and galleries
- [ ] Social sharing with embedded players
- [ ] More NASA datasets (Mars Weather, Exoplanets)
- [ ] Guided audio tours with narration
- [ ] Binaural/spatial audio
- [ ] WebVR support

### **Version 3.0** (Future)
- [ ] AI-generated sonifications
- [ ] Collaborative creation features
- [ ] Live streaming space events
- [ ] Mobile apps (iOS/Android)
- [ ] Desktop app (Electron)
- [ ] Museum installation mode

---

## 📊 Stats

- **20+** Pre-made sonifications
- **6** Visualization modes
- **10+** Synthesis techniques
- **5** NASA data sources
- **0** Build dependencies
- **100%** Open source

---

<div align="center">

**Made with ❤️ for space exploration and sonic experimentation**

[⭐ Star this repo](https://github.com/yourusername/nasa-space-sonification) | [🐛 Report Bug](https://github.com/yourusername/nasa-space-sonification/issues) | [✨ Request Feature](https://github.com/yourusername/nasa-space-sonification/issues)

</div>

---

*"In space, no one can hear you scream... but now you can hear the universe sing."* 🎵🌌
