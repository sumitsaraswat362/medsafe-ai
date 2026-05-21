MedSafe AI — Apple-Inspired UI/UX Screen Specification
For Figma Design — Redesigned for an ultra-premium, Apple OS (VisionOS / iOS 18) aesthetic. Features a true live fluid background, Siri-style voice AI integration, and location-based emergency routing.

🎨 DESIGN SYSTEM (Apple Intelligence Aesthetic)
The "Live" Background (Crucial)
Do not use a static dark color. The background is a living, breathing WebGL fluid simulation or a dynamic glowing aura (like the iOS 18 Siri activation).

Idle State: Deep, midnight black #000000 base with very slow-moving, dark-hued ambient aurora waves (deep sapphire #0B132B, rich plum #1C0F24).
Active/Voice State: The edges of the screen glow with vibrant, flowing gradients (magenta, cyan, orange) that react to voice input, exactly like Apple Intelligence.
Apple Glassmorphism (VisionOS Style)
Cards aren't just semi-transparent; they use Apple's advanced material system:

Background: rgba(30, 30, 35, 0.4)
Backdrop-filter: blur(40px) saturate(150%) (Heavy blur, boosted colors behind it)
Border: 1px solid rgba(255, 255, 255, 0.15) with an inner white glow on the top edge inset 0 1px 0 rgba(255,255,255,0.1)
Shadow: Deep, soft shadow 0 20px 40px rgba(0,0,0,0.4)
Corner Radius: Squircle (smooth corners), 24px for large containers, 16px for small.
Typography
Primary: SF Pro Display (or use Inter with tight tracking to simulate it).
Weight: Heavy use of Medium (500) and Semibold (600). Clean, un-fussed, highly legible.
Severity Colors (Vibrant & Luminous)
Safe: #34C759 (Apple Green)
Caution: #FF9F0A (Apple Orange)
Severe: #FF453A (Apple Red)
Critical: #FF453A with a pulsing outer glow.
🎙️ NEW AI FEATURE: "Aura" Voice Assistant
Integrated directly into the UI, looking like the new Siri.

Visual: A glowing, multi-colored orb (or screen-edge glow) that undulates when listening.
Greeting: "Hi, I'm your MedSafe Assistant. Tell me what medications you're taking, or describe how you're feeling."
Multimodal AI: Parses natural speech ("I take aspirin in the morning and ibuprofen at night") directly into the drug chips.
SCREEN 1: HERO / LANDING PAGE
What User Sees First (Above the Fold)

┌─────────────────────────────────────────────────────┐
│  (Screen edges glowing softly like Apple Siri)      │
├─────────────────────────────────────────────────────┤
│  NAVBAR (Ultra-thin glass pill, centered)           │
│  [ MedSafe AI    Home    How it Works   Github ]    │
│                                                     │
│                                                     │
│            🎙️ (Pulsing Siri-like Orb)               │
│                                                     │
│    Intelligent Drug Safety.                         │
│    Always Private.                                  │
│                                                     │
│    "Ask me to check your medications, or            │
│     type them below."                               │
│                                                     │
│    ┌───────────────────────────────────────────┐    │
│    │ 🎙️  "I take Metformin and Aspirin..."      │    │
│    └───────────────────────────────────────────┘    │
│            [ Type manually instead ]                │
│                                                     │
│    ── Built with WHO & FDA Open Data ──             │
│                                                     │
└─────────────────────────────────────────────────────┘
Element Details:

Background: WebGL slowly morphing dark colors. No static areas.
Navbar: Floating "pill" style, not edge-to-edge. Blurred background.
Orb: Center-aligned above the title. Multi-color gradient (pink, purple, cyan) that spins and breathes.
Input Bar: Thick, plush glass pill. Prominent microphone icon. When clicked, it expands and the screen edges glow to indicate it's listening.
SCREEN 2: DRUG INPUT & AI PARSING

┌─────────────────────────────────────────────────────┐
│  (Live background ripples based on mouse movement)  │
│                                                     │
│    ┌───────────────────────────────────────────┐    │
│    │ 🔍 Aspirin, Ibuprofen, Lisinopril       ⏎ │    │
│    └───────────────────────────────────────────┘    │
│                                                     │
│    Recognized Medications:                          │
│    ┌─────────┐ ┌───────────┐ ┌──────────┐           │
│    │💊Aspirin│ │💊Ibuprofen│ │💊Lisinop…│           │
│    │    ✕   │ │     ✕    │ │    ✕    │            │
│    └─────────┘ └───────────┘ └──────────┘           │
│                                                     │
│    ✨ AI Insight:                                   │
│    "I noticed you added two NSAIDs (painkillers).   │
│     Let's analyze this combination for safety."     │
│                                                     │
│    ┌────────────────────────────────────────┐       │
│    │  ✨ Generate Safety Report (3 drugs)  │       │
│    └────────────────────────────────────────┘       │
│                                                     │
└─────────────────────────────────────────────────────┘
Element Details:

AI Insight Box: A frosted glass card with a subtle iridescent border. The AI proactively comments on the list before running the full analysis, showing intelligence immediately.
Generate Button: Apple-style prominent action button. Rounded, deep shadow, slight scale effect on click.
SCREEN 3: INTERACTION GRAPH (The MedGraph-AI Element)

┌─────────────────────────────────────────────────────┐
│  (Live background shifts to darker, focused state)  │
├────────────────────────────────────┬────────────────┤
│                                    │                │
│     INTERACTIVE KNOWLEDGE GRAPH    │  RISK PANEL    │
│                                    │                │
│         ◉ Aspirin                  │  Overall Risk  │
│        / \                         │  🔴 SEVERE     │
│       /   \                        │                │
│  ◉ Metf   ◉ Ibupro ←RED LINE     │  Interactions  │
│    ormin     fen                   │  ┌───────────┐ │
│       \   /                        │  │🔴 Asp+Ibu │ │
│        \ /                         │  │🟡 Met+Lis │ │
│         ◉ Lisinopril               │  └───────────┘ │
│                                    │                │
│                                    │ ✨ AI SUMMARY │
│                                    │ "High bleeding │
│                                    │ risk detected."│
│                                    │                │
│  [📍 Find Nearest Doctor]         │  [📄 PDF]     │
├────────────────────────────────────┴────────────────┤
└─────────────────────────────────────────────────────┘
Element Details (Unique Graph Styling):

Nodes: Instead of flat circles, nodes look like polished glass spheres (3D look, inner shadow, specular highlight).
Edges (Lines): They aren't just lines; they are glowing energetic beams. A severe interaction line has particles flowing along it, visually screaming "danger".
Risk Panel: iOS 18 style widgets. Rounded squares with high-contrast text.
🚨 SCREEN 4: EMERGENCY & LOCATION ROUTING (New Feature)
If a Severe or Fatal interaction is detected, or if the user asks "What should I do now?", the AI triggers the Emergency Routing UI.


┌─────────────────────────────────────────────────────┐
│  (Screen edges pulsing red/orange)                  │
│                                                     │
│  ⚠️ SEVERE INTERACTION DETECTED                     │
│  Aspirin + Ibuprofen requires medical consultation. │
│                                                     │
│  📍 Allow Location Access to find help?             │
│  [ Allow ]  [ Skip ]                                │
│                                                     │
│  IF ALLOWED, SHOWS:                                 │
│  ┌─────────────────────────────────────────────┐    │
│  │ 🏥 City Hospital ER                         │    │
│  │ 2.4 miles away • Open Now                   │    │
│  │ [ 📞 Call ]  [ 🗺️ Directions ]               │    │
│  ├─────────────────────────────────────────────┤    │
│  │ 🩺 Dr. Sharma's Clinic (Cardiology)         │    │
│  │ 3.1 miles away • Closes in 2h               │    │
│  │ [ 📞 Call ]  [ 📅 Book ]                    │    │
│  ├─────────────────────────────────────────────┤    │
│  │ 💻 24/7 Telehealth Consult                  │    │
│  │ Available immediately                       │    │
│  │ [ 💬 Start Chat ]                           │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘
Element Details:

Emergency UI: The entire UI shifts tone. The live background turns a muted, pulsing amber/red.
Location Prompt: A native-looking Apple-style permission dialog.
Hospital/Doctor Cards: Clean, Apple Maps-style location cards with bold primary action buttons (Call, Directions).
SCREEN 5: AI ALTERNATIVE SUGGESTIONS
Inside the Detail Panel for an interaction, the AI doesn't just say "Danger". It suggests alternatives.


┌─────────────────────────────────────────────────────┐
│                                        [✕ Close]    │
│  🔴 SEVERE: Aspirin + Ibuprofen                     │
│                                                     │
│  ✨ AI Recommendation:                              │
│  "Since you are taking Aspirin for heart health,    │
│   taking Ibuprofen for pain can block Aspirin's     │
│   benefits and cause bleeding."                     │
│                                                     │
│  💡 Safer Pain Relief Alternatives to ask about:    │
│  ┌─────────────────────────────────────────────┐    │
│  │ ✅ Acetaminophen (Tylenol)                  │    │
│  │ Does not interfere with Aspirin.            │    │
│  ├─────────────────────────────────────────────┤    │
│  │ ✅ Topical NSAIDs (Voltaren gel)            │    │
│  │ Localized relief, lower systemic risk.      │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  Disclaimer: I am an AI, not a doctor. Please       │
│  discuss these options with a physician.            │
└─────────────────────────────────────────────────────┘
Element Details:

AI Sparkles (✨): Used to denote generative AI content.
Alternative Cards: Highlighted with a soft green glow (#34C759) to indicate safety, contrasting heavily with the red alert of the interaction.
🎬 MICRO-ANIMATIONS (Apple Ecosystem Feel)
Siri Edge Glow: When the AI is listening or calculating, the very edges of the browser window glow with morphing colors.
Fluid Background: Slowly moves continuously. If the mouse moves, the fluid ripples slightly behind the glass cards.
Card Expansion: When clicking an interaction, the detail panel expands seamlessly using a spring physics animation (bouncy, not rigid linear easing).
Haptic Visuals: Buttons "press in" slightly on click (scale 0.96) and spring back.
Graph Entrance: When graph loads, nodes start in the center and "explode" outward into their physics-based positions with an elastic bounce.