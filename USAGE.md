# 📖 NASA Space Sonification - Usage Guide

Complete guide to using the NASA Space Sonification Archive.

---

## 🚀 Quick Start (30 Seconds)

1. **Open the application:**
   ```bash
   # Just open index.html in your browser!
   open index.html
   ```

2. **Click any space image** in the gallery to hear it sonified

3. **Adjust volume** and explore different sonifications

That's it! No installation, no setup, just pure space sounds.

---

## 🎵 Using the Gallery

### Browse Sonifications

**By Category:**
- Click category tabs at top of gallery (Deep Space, Solar System, etc.)
- Each category shows relevant space objects

**By Search:**
- Type in search bar (e.g., "nebula", "jupiter", "pulsar")
- Instantly filters results

**Random Discovery:**
- Click "Random Experience" button on home page
- Discover something new each time!

### Play a Sonification

1. **Click any gallery card**
2. **Modal opens** with:
   - Space image
   - Play button
   - Controls (volume, progress)
   - Scientific information
   - Mapping explanation ("What you're hearing")

3. **Click Play** to start sonification
4. **Watch visualizations** sync with audio
5. **Read about the science** while listening

### Controls

- **Play/Pause:** Start or stop the sonification
- **Volume Slider:** Adjust loudness (0-100%)
- **Progress Bar:** See playback progress
- **Export:** Download audio file (coming soon)
- **Share:** Copy link to share with others

---

## 🎨 Create Your Own

### Step 1: Choose Image

**Three Options:**

1. **Upload from Computer**
   - Click "Choose File"
   - Select any space image (JPG, PNG)
   - Works best with 800x600 or larger

2. **Use URL**
   - Paste image URL
   - Must be publicly accessible
   - CORS-enabled URLs work best

3. **NASA Examples**
   - Click any example image
   - Pre-selected beautiful space images

### Step 2: Configure Sonification

**Scan Mode** (How image is read):
- **Horizontal:** Left to right, top to bottom
- **Vertical:** Top to bottom, left to right
- **Radial:** Center outward (great for circular objects)
- **Random:** Random sampling (creates unique patterns)

**Musical Scale:**
- **Pentatonic:** Ambient, always pleasant
- **Major:** Bright, happy sound
- **Minor:** Dark, mysterious
- **Blues:** Soulful, emotional
- **Chromatic:** All notes (complex)
- **Harmonic:** Mysterious resonance

**Synth Type:**
- **Ambient:** Smooth, evolving tones (nebulae)
- **Melodic:** Clear individual notes (stars)
- **FM:** Complex, bell-like (pulsars)
- **Noise:** Textural (solar wind)

**Duration:**
- Drag slider (10-120 seconds)
- Longer = slower scan = more detail

**Stereo Positioning:**
- Check box to enable left-right panning
- Position in image → stereo position

### Step 3: Preview & Share

1. **Click "Preview Sonification"**
2. **Listen** to your creation
3. **Adjust parameters** if desired
4. **Preview again** until perfect
5. **Click "Share"** to get shareable link

### Tips for Best Results

**Good Images:**
- ✅ High resolution (800x600+)
- ✅ Good contrast
- ✅ Interesting structures
- ✅ NASA space images
- ✅ Galaxies, nebulae, planets

**Avoid:**
- ❌ Very low resolution
- ❌ All one color
- ❌ Mostly black/white
- ❌ Text-heavy images

**Recommended Settings:**

| Subject | Scan Mode | Scale | Synth | Duration |
|---------|-----------|-------|-------|----------|
| Galaxy | Radial | Harmonic | Ambient | 40-60s |
| Nebula | Radial | Pentatonic | Ambient | 30-50s |
| Planet | Horizontal | Major | Melodic | 20-30s |
| Star Cluster | Random | Blues | FM | 20-30s |
| Solar Surface | Random | Chromatic | Noise | 15-25s |

---

## 📡 Live Space Data

### ISS Position Tracker

**What it does:**
- Shows current ISS latitude/longitude
- Updates every 10 seconds
- Displays time of last update

**How to use:**
1. Go to "Live Data" section
2. View current position
3. Click "Hear ISS Movement"
4. Audio pitch represents latitude
5. Tone changes represent longitude

**What you'll hear:**
- Higher pitch = Further north
- Lower pitch = Further south
- Tone changes = East-west movement

### Solar Activity Monitor

**What it does:**
- Shows recent solar flares (past 7 days)
- Displays flare classifications
- Updates every 5 minutes

**How to use:**
1. Go to "Live Data" section
2. View recent flares list
3. Click "Hear Solar Activity"
4. Intensity mapped to sound

**What you'll hear:**
- More flares = More intense sound
- Supernova-like burst effect
- Duration shows activity level

---

## 🎓 Understanding Sonifications

### What is Sonification?

**Sonification** is the process of converting data into sound. Instead of looking at graphs or images, you *hear* the data as audio.

### How It Works

**1. Data Extraction:**
```
Space Image → Pixel Data → Brightness, Color, Position
```

**2. Parameter Mapping:**
```
Brightness → Volume or Pitch
Color Hue → Timbre (warm/cool)
Position → Stereo Pan (left/right)
Time Series → Melody
```

**3. Sound Synthesis:**
```
Data Values → Musical Notes → Audio Output
```

### Mapping Examples

**Nebula Sonification:**
- Bright areas = Higher volume
- Red colors = Warm, low tones
- Blue colors = Cool, high tones
- Center to edge = Rising pitch

**Pulsar Sonification:**
- Rotation period = Pulse rate
- Magnetic field = Intensity
- Precision = Timing accuracy

**Galaxy Sonification:**
- Spiral arms = Harmonic layers
- Core brightness = Bass frequency
- Outer stars = Higher frequencies

---

## 🔧 Troubleshooting

### Audio Not Playing

**Problem:** Click play but no sound

**Solutions:**
1. Click anywhere on page first (browser requirement)
2. Check browser audio isn't muted
3. Check computer/device volume
4. Try different browser
5. Refresh page and try again

### Image Won't Load

**Problem:** "Failed to load image" error

**Solutions:**
1. **CORS Issue:** Image URL blocked
   - Use NASA direct URLs
   - Try uploading instead
   - Use provided examples

2. **Invalid URL:** Check URL is correct
   - Must start with http:// or https://
   - Must be direct image link
   - Try opening URL in new tab first

3. **Too Large:** Image file too big
   - Resize image before uploading
   - Use images under 5MB
   - Lower resolution if needed

### Performance Issues

**Problem:** Slow or laggy

**Solutions:**
1. Close other browser tabs
2. Disable 3D visualizations
3. Reduce duration
4. Use simpler synth type (Ambient)
5. Try different browser (Chrome recommended)

### ISS Data Not Loading

**Problem:** "Data temporarily unavailable"

**Solutions:**
1. Check internet connection
2. Wait 30 seconds and refresh
3. ISS API may be down (rare)
4. Fallback data will display

---

## 🎹 Advanced Usage

### Custom API Key

**Why:** Higher rate limits (1000/hour vs 30/hour)

**How:**
1. Get free key at: https://api.nasa.gov/
2. Open `data/nasa-api.js` in text editor
3. Find line: `this.apiKey = 'DEMO_KEY';`
4. Replace with: `this.apiKey = 'YOUR_KEY_HERE';`
5. Save file

### Embedding in Your Website

**Option 1: iframe**
```html
<iframe
  src="path/to/nasa-sonification/index.html?play=hubble-deep-field"
  width="800"
  height="600"
  frameborder="0">
</iframe>
```

**Option 2: Direct Link**
```html
<a href="path/to/index.html?play=crab-nebula">
  Hear the Crab Nebula
</a>
```

### URL Parameters

**Share specific sonification:**
```
index.html?play=hubble-deep-field
```

**Share custom configuration:**
```
index.html?config=%7B%22scale%22%3A%22pentatonic%22...%7D
```

### Keyboard Shortcuts

- **ESC** - Close modal
- **Space** - Play/Pause (when modal open)
- **Arrow Keys** - Navigate gallery
- **Enter** - Open selected item

---

## 📱 Mobile Usage

### Best Practices

1. **Use WiFi** for faster loading
2. **Rotate to landscape** for better view
3. **Use headphones** for best audio quality
4. **Close other apps** for better performance
5. **Enable full screen** for immersive experience

### Mobile Features

- ✅ Full touch support
- ✅ Swipe to scroll
- ✅ Pinch to zoom images
- ✅ Mobile-optimized UI
- ✅ Reduced particle count (better performance)

### Mobile Limitations

- 3D visualizations may be slower
- Lower audio quality on some devices
- Smaller screen = less detail visible
- Some browsers require headphone mode

---

## 🎓 Educational Use

### For Teachers

**Lesson Ideas:**
1. **Data Visualization** - What is sonification?
2. **Astronomy** - Learn about space objects
3. **Sound Science** - Frequency, amplitude, timbre
4. **Music Theory** - Scales, harmony, rhythm
5. **Coding** - How the application works

**Classroom Setup:**
1. Project on screen
2. Play sonifications with sound system
3. Discuss what students hear
4. Compare different objects
5. Create custom sonifications

### For Students

**Learning Activities:**
1. Compare 3 different sonifications
2. Guess the space object from sound
3. Create your own sonification
4. Write about what you learned
5. Share favorite sonification with class

**Study Questions:**
- What makes a galaxy sound different from a nebula?
- Why does brightness map to pitch?
- How do different scales change the mood?
- What would Earth sound like sonified?

---

## 🤝 Sharing & Collaboration

### Share Your Creations

**Get Share Link:**
1. Create custom sonification
2. Click "Share" button
3. Link copied to clipboard
4. Paste in email/social media

**Share on Social Media:**
- Add hashtag: #SpaceSonification
- Tag: @NASA (if using NASA images)
- Include screenshot
- Describe what you created

### Community

**Want to contribute?**
- Report bugs on GitHub
- Suggest new features
- Share your sonifications
- Create tutorials
- Translate to other languages

---

## 📚 Further Reading

### Learn More About:

**Sonification:**
- [Sonification Handbook](https://sonification.de/handbook/)
- [NASA's Sonification Projects](https://chandra.si.edu/sound/)
- [Data Sonification Archive](https://sonify.io)

**Web Audio:**
- [Web Audio API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Tone.js Documentation](https://tonejs.github.io/)

**NASA Data:**
- [NASA Open Data Portal](https://data.nasa.gov/)
- [NASA API Documentation](https://api.nasa.gov/)
- [NASA Image Gallery](https://images.nasa.gov/)

---

## ❓ FAQ

### Q: Is this officially from NASA?
**A:** No, this is an independent project using NASA's public data. Not affiliated with NASA.

### Q: Can I use this commercially?
**A:** The code is MIT licensed (free for any use). NASA images are public domain. Check individual image credits.

### Q: How accurate is the science?
**A:** Sonifications are artistic interpretations of real data. The data is accurate, the mapping is creative.

### Q: Can I download the audio?
**A:** Export feature coming soon! Currently you can record your system audio.

### Q: Why does it require a click first?
**A:** Browser security requirement. All websites must get user permission before playing audio.

### Q: Does it work offline?
**A:** Partially. UI works, but live data and some images need internet. PWA support coming soon.

### Q: Can I add my own space images?
**A:** Yes! Use the "Create Your Own" tool to upload any image.

### Q: What browsers are supported?
**A:** Chrome 80+, Firefox 75+, Safari 14+, Edge 80+. Mobile: iOS 14+, Android 10+.

---

## 🎯 Next Steps

**New Users:**
1. Try 5 different sonifications
2. Create your first custom sonification
3. Share with a friend
4. Read about one space object in detail

**Advanced Users:**
1. Try all parameter combinations
2. Create sonification series
3. Contribute to project
4. Use in teaching/presentation

**Developers:**
1. Read the code
2. Modify and experiment
3. Add new features
4. Submit pull requests

---

*Happy Sonic Exploration!* 🎵🌌

**Questions?** Check IMPROVEMENTS.md or open a GitHub issue.
