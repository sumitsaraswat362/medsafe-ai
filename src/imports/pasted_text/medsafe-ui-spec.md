 MedSafe AI — Complete UI/UX Screen Specification
For Figma Design — Every screen, every button, every pixel described.

🎨 DESIGN SYSTEM
Color Palette

BACKGROUNDS (Never Plain!)
━━━━━━━━━━━━━━━━━━━━━━━━━
Primary BG:        #0A0E1A (deep space navy — NOT pure black)
Secondary BG:      #111827 (slightly lighter navy for cards)
Card Surface:      #1A1F35 (glass card surface)
Card Surface Hover:#222845 (hover state)
Glass Overlay:     rgba(255, 255, 255, 0.04) (frosted glass)
Glass Border:      rgba(255, 255, 255, 0.08) (subtle glass edge)
ACCENTS
━━━━━━━━━━━━━━━━━━━━━━━━━
Primary Accent:    #00E5A0 (mint/emerald green — "safety, health")
Secondary Accent:  #6C5CE7 (soft purple — "intelligence, AI")
Tertiary Accent:   #00B4D8 (electric cyan — "technology")
SEVERITY COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━
Safe/None:         #00E5A0 (green)
Mild:              #FFD93D (warm yellow)
Moderate:          #FF8C42 (orange)
Severe:            #FF4757 (red)
Fatal/Critical:    #FF1744 (bright red with glow)
TEXT
━━━━━━━━━━━━━━━━━━━━━━━━━
Heading Text:      #FFFFFF
Body Text:         #B0B8CC (soft blue-grey)
Muted Text:        #6B7394
Link Text:         #00E5A0
Typography

Headings:     "Outfit" (Google Fonts) — Weight 600/700
Body:         "Inter" (Google Fonts) — Weight 400/500
Mono/Code:    "JetBrains Mono" — for drug names, scores
Numbers:      "Outfit" — Weight 700 (for big stats)
SIZES:
Hero Title:    56px / 64px line-height
Section Title: 36px / 44px
Card Title:    20px / 28px
Body:          16px / 26px
Small/Caption: 13px / 20px
Button:        15px / weight 600
Background Treatment (NEVER PLAIN)
Every screen uses a layered background system:


Layer 1 (Base):    Solid #0A0E1A
Layer 2 (Mesh):    Radial gradient blobs (blurred, 40% opacity)
                   - Top-left: #6C5CE7 blob (400px radius, blur 150px)
                   - Bottom-right: #00E5A0 blob (350px radius, blur 180px)
                   - Center-right: #00B4D8 blob (300px radius, blur 200px)
Layer 3 (Grid):    Very subtle dot grid pattern (opacity 0.03)
Layer 4 (Noise):   Subtle noise texture overlay (opacity 0.02)
This creates a living, breathing dark background with soft color pools — like looking into deep space with distant nebulae.

Glassmorphism Cards

Background:     rgba(26, 31, 53, 0.6)
Backdrop-filter: blur(20px)
Border:         1px solid rgba(255, 255, 255, 0.08)
Border-radius:  16px (large cards), 12px (small cards), 8px (buttons)
Box-shadow:     0 8px 32px rgba(0, 0, 0, 0.3)
SCREEN 1: HERO / LANDING PAGE
What User Sees First (Above the Fold)

┌─────────────────────────────────────────────────────┐
│  NAVBAR                                             │
├─────────────────────────────────────────────────────┤
│                                                     │
│         ◉ animated particle dots floating           │
│                                                     │
│    🛡️  (shield icon with pulse animation)           │
│                                                     │
│    MedSafe AI                                       │
│    ───────────                                      │
│    Your Medications. Your Privacy.                  │
│    Your Safety.                                     │
│                                                     │
│    "Check drug interactions instantly —              │
│     100% private, 100% in your browser.             │
│     Your medical data never leaves your device."    │
│                                                     │
│    ┌──────────────────┐  ┌─────────────────┐        │
│    │ 🔍 Check Now     │  │ How It Works ↓  │        │
│    └──────────────────┘  └─────────────────┘        │
│                                                     │
│    ── Trusted by ──                                 │
│    🏥 WHO Data  📊 FDA FAERS  🔒 Zero Data Sent    │
│                                                     │
│         ↓ scroll indicator (bouncing)               │
└─────────────────────────────────────────────────────┘
Element Details:
NAVBAR (sticky, glassmorphism)


Position:       Fixed top, full width
Height:         64px
Background:     rgba(10, 14, 26, 0.7) + backdrop-filter: blur(20px)
Border-bottom:  1px solid rgba(255, 255, 255, 0.06)
LEFT SIDE:
- Logo: Shield icon (🛡️ as SVG) + "MedSafe" text
  - "Med" in #FFFFFF, "Safe" in #00E5A0
  - Font: Outfit 700, 20px
  - Shield icon: 24x24px, #00E5A0 color, subtle glow
CENTER LINKS (desktop only):
- "Home" | "Check Drugs" | "How It Works" | "Privacy"
- Font: Inter 500, 14px, color #B0B8CC
- Active link: #FFFFFF with small dot indicator below
- Hover: color transitions to #FFFFFF (0.2s ease)
RIGHT SIDE:
- "GitHub" icon button (ghost style, 36x36px)
- Small green dot + "100% Private" badge
  - Background: rgba(0, 229, 160, 0.1)
  - Border: 1px solid rgba(0, 229, 160, 0.3)
  - Text: #00E5A0, 12px, Inter 500
HERO SECTION


Height:         100vh (full viewport)
Padding:        Top 140px (below navbar)
Text-align:     Center
Max-width:      800px (centered)
BACKGROUND SPECIAL EFFECTS:
- 3 animated gradient orbs slowly moving/pulsing behind content:
  Orb 1: #6C5CE7 (top-left, 500px, blur 200px, opacity 0.15)
  Orb 2: #00E5A0 (bottom-right, 400px, blur 180px, opacity 0.12)
  Orb 3: #00B4D8 (center, 350px, blur 220px, opacity 0.08)
  Animation: each orb moves in a slow circular path (30s loop)
- Floating particle dots:
  ~40 tiny dots (2-4px), white, opacity 0.1-0.3
  Slowly drifting upward, random speeds
  Creates "digital organism" feel
SHIELD ICON (above title):
- Size: 64x64px
- Color: #00E5A0
- Animation: gentle pulse glow (2s infinite)
  - Box shadow oscillates: 0 0 20px rgba(0,229,160,0.3) ↔ 0 0 40px rgba(0,229,160,0.5)
TITLE: "MedSafe AI"
- Font: Outfit 700, 56px
- Color: #FFFFFF
- Letter-spacing: -1.5px
- Below it: thin gradient line (200px wide, centered)
  - Gradient: #6C5CE7 → #00E5A0 → #00B4D8
  - Height: 3px, border-radius: 2px
SUBTITLE: "Your Medications. Your Privacy. Your Safety."
- Font: Outfit 500, 24px
- Color: #B0B8CC
- Margin-top: 16px
DESCRIPTION PARAGRAPH:
- Font: Inter 400, 17px
- Color: #8892B0
- Max-width: 600px
- Line-height: 28px
- Margin-top: 20px
BUTTONS ROW:
- Two buttons side by side, centered, gap: 16px
"🔍 Check Now" (PRIMARY BUTTON):
  - Background: linear-gradient(135deg, #00E5A0, #00B4D8)
  - Color: #0A0E1A (dark text on light button)
  - Padding: 16px 36px
  - Border-radius: 12px
  - Font: Outfit 600, 16px
  - Box-shadow: 0 0 30px rgba(0, 229, 160, 0.3)
  - Hover: scale(1.03), box-shadow intensifies
  - Has small magnifying glass icon (16px) left of text
  - Cursor: pointer
"How It Works ↓" (SECONDARY/GHOST BUTTON):
  - Background: transparent
  - Border: 1.5px solid rgba(255, 255, 255, 0.15)
  - Color: #B0B8CC
  - Padding: 16px 32px
  - Border-radius: 12px
  - Font: Inter 500, 16px
  - Hover: border-color rgba(255,255,255,0.3), color #FFFFFF
  - Arrow bounces subtly on hover
TRUST BADGES ROW:
- 3 inline items, centered, gap: 32px
- Margin-top: 48px
- Each badge:
  - Icon (20px) + text
  - Font: Inter 400, 13px, color #6B7394
  - "🏥 WHO Data" | "📊 FDA FAERS" | "🔒 Zero Data Sent"
SCROLL INDICATOR:
- Bottom of hero section
- Small line (2px wide, 24px tall) + "Scroll" text
- Color: #6B7394
- Animation: bouncing up-down (2s infinite)
SCREEN 1B: "HOW IT WORKS" SECTION (scroll down from hero)

┌─────────────────────────────────────────────────────┐
│                                                     │
│    HOW IT WORKS                                     │
│    Three Steps to Safer Medications                 │
│                                                     │
│    ┌─────────┐    ┌─────────┐    ┌─────────┐       │
│    │   01    │    │   02    │    │   03    │        │
│    │  💊    │    │  🧠    │    │  📋    │         │
│    │ Enter  │───▶│Analyze │───▶│Report  │         │
│    │ Drugs  │    │ Risks  │    │ & Save │          │
│    │        │    │        │    │        │           │
│    │Type or │    │AI scans│    │Get a   │           │
│    │paste   │    │all     │    │PDF for │           │
│    │your    │    │pairs + │    │your    │           │
│    │meds    │    │predicts│    │doctor  │           │
│    └────────┘    └────────┘    └────────┘           │
│                                                     │
└─────────────────────────────────────────────────────┘
Section Details:


Background:     Same layered BG, but shift gradient orbs position
Padding:        100px top/bottom
Max-width:      1100px centered
SECTION LABEL: "HOW IT WORKS"
- Font: Inter 600, 13px
- Color: #00E5A0
- Letter-spacing: 3px
- Text-transform: uppercase
SECTION HEADING: "Three Steps to Safer Medications"
- Font: Outfit 600, 36px
- Color: #FFFFFF
- Margin-top: 12px
THREE CARDS (row, gap: 28px):
Each card:
- Width: ~320px (flexible)
- Padding: 36px 28px
- Background: glassmorphism (rgba(26, 31, 53, 0.5))
- Backdrop-filter: blur(16px)
- Border: 1px solid rgba(255, 255, 255, 0.06)
- Border-radius: 16px
- Hover: border-color rgba(0, 229, 160, 0.2), translateY(-4px)
- Transition: all 0.3s ease
Step Number:
  - Font: Outfit 700, 48px
  - Color: rgba(0, 229, 160, 0.15) (very subtle, background number)
  - Position: top-left of card
Icon:
  - Size: 48x48px
  - Background: rgba(0, 229, 160, 0.1) circle (64px diameter)
  - Icon color: #00E5A0
Step Title: "Enter Drugs" / "Analyze Risks" / "Report & Save"
  - Font: Outfit 600, 20px
  - Color: #FFFFFF
Step Description:
  - Font: Inter 400, 15px
  - Color: #8892B0
  - Line-height: 24px
CONNECTING ARROWS between cards:
  - Dashed line with arrow head
  - Color: rgba(0, 229, 160, 0.3)
  - Only visible on desktop
SCREEN 1C: STATS SECTION

┌─────────────────────────────────────────────────────┐
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│  │ 1 in 30  │ │   $42B   │ │   50%+   │ │  100%  ││
│  │ patients │ │ annual   │ │  is      │ │ client ││
│  │ harmed   │ │ cost     │ │ prevent- │ │ side   ││
│  │          │ │ globally │ │ able     │ │ private││
│  │   WHO    │ │   WHO    │ │   WHO    │ │MedSafe ││
│  └──────────┘ └──────────┘ └──────────┘ └────────┘│
│                                                     │
└─────────────────────────────────────────────────────┘

4 stat cards in a row, gap: 20px
Each stat card:
  - Padding: 32px 24px
  - Background: rgba(26, 31, 53, 0.4)
  - Border: 1px solid rgba(255, 255, 255, 0.05)
  - Border-radius: 14px
  - Text-align: center
  Big number:
    - Font: Outfit 700, 40px
    - Color: #00E5A0 (green numbers) or #FF4757 (alarming ones)
    - Counter animation on scroll-in (numbers count up)
  Description:
    - Font: Inter 400, 14px, color: #8892B0
  Source tag:
    - Font: Inter 500, 11px
    - Color: #6B7394
    - Background: rgba(108, 92, 231, 0.1)
    - Padding: 4px 10px
    - Border-radius: 6px
    - Margin-top: 12px
SCREEN 2: DRUG INPUT PAGE
This is the CORE interaction screen.


┌─────────────────────────────────────────────────────┐
│  NAVBAR                                             │
├─────────────────────────────────────────────────────┤
│                                                     │
│    🔍 Enter Your Medications                        │
│    "Type each medication name and press Enter"      │
│                                                     │
│    ┌───────────────────────────────────────────┐     │
│    │ 🔍  Type a medication name...        ⏎  │      │
│    └───────────────────────────────────────────┘     │
│                                                     │
│    ┌─────────┐ ┌───────────┐ ┌──────────┐          │
│    │💊Aspirin│ │💊Metformin│ │💊Lisinop…│ ← chips  │
│    │    ✕   │ │     ✕    │ │    ✕    │           │
│    └─────────┘ └───────────┘ └──────────┘          │
│                                                     │
│    ── or try an example ──                          │
│    [Elderly Diabetes] [Heart Patient] [Student Mix] │
│                                                     │
│    ┌────────────────────────────────────────┐        │
│    │  ⚡ Analyze Interactions (3 drugs)    │        │
│    └────────────────────────────────────────┘        │
│                                                     │
│    🔒 Everything runs in your browser.              │
│       No data is sent to any server.                │
│                                                     │
└─────────────────────────────────────────────────────┘
Element Details:

PAGE BACKGROUND:
- Same layered mesh gradient background
- Gradient orbs shifted to different positions than hero
SECTION TITLE: "Enter Your Medications"
- Small pill icon (💊 as SVG) left of title
- Font: Outfit 600, 32px, #FFFFFF
- Subtitle: Inter 400, 16px, #8892B0
SEARCH INPUT:
- Width: 100% (max 640px)
- Height: 56px
- Background: rgba(26, 31, 53, 0.6)
- Backdrop-filter: blur(12px)
- Border: 1.5px solid rgba(255, 255, 255, 0.1)
- Border-radius: 14px
- Padding: 0 20px
- Font: Inter 400, 16px, color #FFFFFF
- Placeholder: "Type a medication name..." in #6B7394
- LEFT: magnifying glass icon (18px, #6B7394)
- RIGHT: small "⏎" enter hint badge
- FOCUS STATE:
  - Border: 1.5px solid #00E5A0
  - Box-shadow: 0 0 0 4px rgba(0, 229, 160, 0.1)
- AUTOCOMPLETE DROPDOWN (appears when typing):
  ┌───────────────────────────────────────────┐
  │ 💊 Aspirin (Acetylsalicylic Acid)        │
  │ 💊 Atorvastatin (Lipitor)                │
  │ 💊 Amoxicillin                           │
  └───────────────────────────────────────────┘
  - Background: #1A1F35
  - Border: 1px solid rgba(255,255,255,0.08)
  - Border-radius: 12px
  - Box-shadow: 0 12px 40px rgba(0,0,0,0.5)
  - Each item: padding 14px 20px
  - Hover: background rgba(0, 229, 160, 0.06)
  - Drug name: Inter 500, 15px, #FFFFFF
  - Generic name: Inter 400, 13px, #6B7394
DRUG CHIPS (added medications):
- Display: flex, wrap, gap: 10px
- Margin-top: 20px
Each chip:
  - Background: rgba(0, 229, 160, 0.08)
  - Border: 1px solid rgba(0, 229, 160, 0.2)
  - Border-radius: 10px
  - Padding: 8px 14px 8px 12px
  - Display: flex, align-items center, gap: 8px
  - Pill icon: 14px, #00E5A0
  - Drug name: Inter 500, 14px, #00E5A0
  - "✕" remove button: 14px circle
    - Color: #6B7394
    - Hover: color #FF4757, background rgba(255,71,87,0.1)
  - Hover (whole chip): border-color rgba(0,229,160,0.4)
  - Animation: chip slides in from left with slight bounce (0.3s)
EXAMPLE PRESETS:
- Divider: "── or try an example ──"
  - Line: 1px rgba(255,255,255,0.06)
  - Text: Inter 400, 13px, #6B7394
- 3 preset buttons in a row, gap: 10px:
  "[Elderly Diabetes]" "[Heart Patient]" "[Student Common Mix]"
  - Background: rgba(108, 92, 231, 0.08)
  - Border: 1px solid rgba(108, 92, 231, 0.2)
  - Border-radius: 8px
  - Padding: 8px 16px
  - Font: Inter 500, 13px, color #6C5CE7
  - Hover: background rgba(108, 92, 231, 0.15), border brightens
  - Click: fills input with preset drug list
ANALYZE BUTTON:
  - Width: 100% (max 640px)
  - Height: 56px
  - Background: linear-gradient(135deg, #00E5A0, #00B4D8)
  - Color: #0A0E1A
  - Font: Outfit 600, 17px
  - Border-radius: 14px
  - Box-shadow: 0 4px 24px rgba(0, 229, 160, 0.25)
  - Shows count: "Analyze Interactions (3 drugs)"
  - ⚡ lightning icon left of text
  - Hover: scale(1.02), shadow intensifies
  - DISABLED state (0 drugs): opacity 0.4, cursor not-allowed
PRIVACY NOTICE (bottom):
  - Icon: 🔒 lock (16px, #00E5A0)
  - Text: Inter 400, 13px, #6B7394
  - "Everything runs in your browser. No data is sent to any server."
  - Subtle green left border (2px)
  - Background: rgba(0, 229, 160, 0.03)
  - Padding: 12px 16px
  - Border-radius: 8px
SCREEN 3: ANALYSIS LOADING (2-3 seconds)

┌─────────────────────────────────────────────────────┐
│                                                     │
│              ┌────────────────────┐                 │
│              │                    │                 │
│              │   ◉ ━━━━━━━━━━━   │                 │
│              │                    │                 │
│              │  Analyzing 5 drugs │                 │
│              │                    │                 │
│              │  ✓ Parsing names   │                 │
│              │  ✓ Building graph  │                 │
│              │  ◉ Checking 10     │                 │
│              │    interactions    │                 │
│              │  ○ Calculating     │                 │
│              │    risk scores    │                 │
│              │                    │                 │
│              └────────────────────┘                 │
│                                                     │
└─────────────────────────────────────────────────────┘

LOADING CARD:
  - Centered, max-width: 420px
  - Glassmorphism card
  - Padding: 40px
PROGRESS BAR:
  - Width: 100%
  - Height: 6px
  - Background: rgba(255,255,255,0.06)
  - Border-radius: 3px
  - Fill: linear-gradient(90deg, #6C5CE7, #00E5A0)
  - Animation: fills from 0% to 100% over ~2.5s
  - Glow: box-shadow 0 0 12px rgba(0, 229, 160, 0.3)
TITLE: "Analyzing 5 drugs"
  - Font: Outfit 600, 22px, #FFFFFF
  - Pill icon spinning beside it
STEP CHECKLIST:
  Each step:
  - ✓ (completed): green checkmark (#00E5A0), text #B0B8CC
  - ◉ (in progress): pulsing dot (#00E5A0), text #FFFFFF
  - ○ (pending): grey circle (#6B7394), text #6B7394
  - Font: Inter 400, 14px
  - Line-height: 32px
  - Completed steps have subtle strikethrough animation
Steps:
  1. "Parsing medication names"
  2. "Building interaction graph"
  3. "Checking X possible interactions"
  4. "Calculating risk scores"
  5. "Generating recommendations"
SCREEN 4: INTERACTION GRAPH RESULTS (THE MAIN WOW SCREEN)

┌─────────────────────────────────────────────────────┐
│  NAVBAR                                             │
├────────────────────────────────────┬────────────────┤
│                                    │                │
│     INTERACTIVE KNOWLEDGE GRAPH    │  RISK PANEL    │
│                                    │                │
│         ◉ Aspirin                  │ Overall Risk   │
│        / \                         │ ┌────────────┐ │
│       /   \                        │ │            │ │
│  ◉ Metf   ◉ Ibupro ←RED LINE     │ │   6 / 10   │ │
│    ormin     fen                   │ │  MODERATE   │ │
│       \   /                        │ └────────────┘ │
│        \ /                         │                │
│         ◉ Lisinopril               │ ⚠ 2 Severe    │
│         |                          │ ⚡ 3 Moderate  │
│         ◉ Atorvastatin             │ ✓ 5 Safe      │
│                                    │                │
│   [zoom +] [zoom -] [reset]       │ INTERACTIONS   │
│                                    │ LIST           │
│                                    │ ┌────────────┐ │
│                                    │ │🔴 Aspirin  │ │
│                                    │ │ + Ibuprofen│ │
│                                    │ │  SEVERE    │ │
│                                    │ ├────────────┤ │
│                                    │ │🟡 Metform │ │
│                                    │ │ + Lisinop  │ │
│                                    │ │  MODERATE  │ │
│                                    │ └────────────┘ │
│                                    │                │
│  ┌──────────────────┐              │ [📄 Get PDF]   │
│  │ 🔒 Zero data    │              │ [🔗 Share]     │
│  │    transmitted   │              │                │
├────────────────────────────────────┴────────────────┤
│  DETAIL PANEL (expands when clicking an interaction)│
└─────────────────────────────────────────────────────┘
Left Panel — Interactive Graph (70% width)

GRAPH AREA:
  - Background: #0A0E1A with subtle grid dots (opacity 0.03)
  - Full height of viewport (minus navbar)
  - Interactive: pan, zoom, drag nodes
DRUG NODES (circles):
  - Size: 56px diameter
  - Background: radial-gradient(circle, #1A1F35, #111827)
  - Border: 2.5px solid (color based on drug category):
    - Pain/Anti-inflammatory: #FF8C42
    - Cardiovascular: #FF4757
    - Diabetes: #6C5CE7
    - Other: #00B4D8
  - Box-shadow: 0 0 20px rgba(node_color, 0.2)
  - Inside: Drug name (Inter 600, 11px, #FFFFFF), truncated
  - Hover: scale(1.15), shadow intensifies, tooltip appears
  - Drag: cursor grab/grabbing
  TOOLTIP (on hover):
    - Background: #1A1F35
    - Border: 1px solid rgba(255,255,255,0.1)
    - Border-radius: 10px
    - Padding: 12px 16px
    - Content: Full drug name + generic name + category
    - Font: Inter 400, 13px
    - Small arrow pointing to node
INTERACTION LINES (edges):
  - Connect drug pairs that have interactions
  - Width varies by severity:
    - Safe: no line (or very faint dashed, 1px, #2A3050)
    - Mild: 1.5px solid #FFD93D
    - Moderate: 2.5px solid #FF8C42
    - Severe: 3.5px solid #FF4757, with animated pulse/glow
    - Fatal: 4px solid #FF1744, red glow animation
  - Click on line: opens detail panel below
  - Hover: line brightens, label appears at midpoint showing severity
GRAPH CONTROLS (bottom-left of graph area):
  - Row of 3 small buttons, gap: 8px
  - Background: rgba(26, 31, 53, 0.8)
  - Border: 1px solid rgba(255,255,255,0.06)
  - Border-radius: 8px
  - Each button: 36x36px
  - Icons: [+] [-] [↻ reset]
  - Hover: background brighten
PRIVACY BADGE (bottom-left):
  - "🔒 Zero data transmitted" pill
  - Background: rgba(0, 229, 160, 0.06)
  - Border: 1px solid rgba(0, 229, 160, 0.15)
  - Font: Inter 500, 12px, #00E5A0
Right Panel — Risk Summary (30% width)

PANEL:
  - Background: rgba(17, 24, 39, 0.9)
  - Border-left: 1px solid rgba(255,255,255,0.06)
  - Padding: 28px
  - Scrollable if content overflows
OVERALL RISK SCORE:
  ┌─────────────────────────┐
  │     Overall Risk        │
  │                         │
  │  ┌─────────────────┐    │
  │  │                 │    │
  │  │     6 / 10      │    │← circular progress ring
  │  │    MODERATE      │    │
  │  │                 │    │
  │  └─────────────────┘    │
  └─────────────────────────┘
  Circular progress ring:
    - Size: 140px x 140px
    - Track: rgba(255,255,255,0.06), 8px stroke
    - Fill: gradient based on score:
      - 0-3: #00E5A0 (safe green)
      - 4-6: #FF8C42 (moderate orange)
      - 7-8: #FF4757 (severe red)
      - 9-10: #FF1744 (critical red + pulse)
    - Center number: Outfit 700, 36px
    - Label below: Inter 600, 14px, uppercase
SEVERITY BREAKDOWN:
  3 rows:
  - "⚠️ 2 Severe"   — #FF4757
  - "⚡ 3 Moderate"  — #FF8C42
  - "✓ 5 Safe"      — #00E5A0
  Each row:
    - Height: 40px
    - Flex: icon + text + count
    - Background on hover: rgba(255,255,255,0.02)
    - Font: Inter 500, 14px
DIVIDER: 1px rgba(255,255,255,0.06), margin 20px 0
INTERACTIONS LIST:
  Section title: "All Interactions" — Outfit 600, 16px, #FFFFFF
  Each interaction card:
    ┌─────────────────────────┐
    │ 🔴 SEVERE               │
    │ Aspirin + Ibuprofen     │
    │ "Increased bleeding risk"│
    │                    →    │
    └─────────────────────────┘
    - Background: rgba(26, 31, 53, 0.4)
    - Border: 1px solid rgba(255,255,255,0.05)
    - Border-left: 3px solid severity_color
    - Border-radius: 10px
    - Padding: 14px 16px
    - Margin-bottom: 10px
    - Cursor: pointer
    - Severity badge: uppercase, 11px, Inter 700
      Color: severity_color
    - Drug pair: Inter 600, 15px, #FFFFFF
    - Description: Inter 400, 13px, #8892B0, 1 line truncated
    - Arrow icon: right side, 16px, #6B7394
    - Hover: background brighten, border-color brighten
    - Click: opens DETAIL PANEL (Screen 5)
ACTION BUTTONS (bottom):
  - "📄 Download PDF Report" — full-width button
    Background: linear-gradient(135deg, #6C5CE7, #00B4D8)
    Color: #FFFFFF
    Height: 48px
    Border-radius: 12px
    Font: Outfit 600, 15px
  - "🔗 Share Results" — ghost button below
    Border: 1px solid rgba(255,255,255,0.1)
    Color: #B0B8CC
    Height: 44px
SCREEN 5: INTERACTION DETAIL PANEL (slides up from bottom)

┌─────────────────────────────────────────────────────┐
│                                        [✕ Close]    │
│  🔴 SEVERE INTERACTION                              │
│                                                     │
│  Aspirin + Ibuprofen                                │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │ ⚠️ Taking Aspirin and Ibuprofen together    │    │
│  │ increases your risk of stomach bleeding      │    │
│  │ and ulcers by up to 3x. Ibuprofen may also  │    │
│  │ reduce the heart-protective effects of       │    │
│  │ low-dose Aspirin.                            │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  📋 What You Should Do:                             │
│  • Talk to your doctor about alternatives           │
│  • Never take both at the same time                 │
│  • Consider Acetaminophen instead of Ibuprofen      │
│                                                     │
│  📊 Evidence: FDA FAERS · 12,847 reports            │
│                                                     │
└─────────────────────────────────────────────────────┘

PANEL BEHAVIOR:
  - Slides up from bottom of screen (like a bottom sheet)
  - Background: #111827
  - Max-height: 60vh
  - Border-top: 1px solid rgba(255,255,255,0.08)
  - Border-radius: 20px 20px 0 0
  - Box-shadow: 0 -8px 40px rgba(0,0,0,0.5)
  - Padding: 32px
  - Has drag handle bar at top (40px wide, 4px tall, centered, #6B7394)
CLOSE BUTTON:
  - Top-right, 36x36px circle
  - Background: rgba(255,255,255,0.05)
  - Icon: ✕, 16px, #6B7394
  - Hover: background rgba(255,71,87,0.1), icon #FF4757
SEVERITY TAG:
  - "🔴 SEVERE INTERACTION"
  - Background: rgba(255, 71, 87, 0.1)
  - Border: 1px solid rgba(255, 71, 87, 0.2)
  - Color: #FF4757
  - Font: Inter 700, 12px, uppercase, letter-spacing 1px
  - Padding: 6px 14px
  - Border-radius: 8px
DRUG PAIR TITLE:
  - "Aspirin + Ibuprofen"
  - Font: Outfit 600, 28px, #FFFFFF
  - "+" in #6B7394
PLAIN LANGUAGE EXPLANATION (the KEY differentiator):
  - Card with left border 3px severity_color
  - Background: rgba(255, 71, 87, 0.04)
  - Border-radius: 12px
  - Padding: 20px 24px
  - Font: Inter 400, 16px, #B0B8CC, line-height: 28px
  - Written in PLAIN ENGLISH, not medical jargon
"WHAT YOU SHOULD DO" SECTION:
  - Title: Outfit 600, 18px, #FFFFFF
  - Clipboard icon: 📋 20px
  - Bullet points with checkmark icons
  - Each point: Inter 400, 15px, #B0B8CC
EVIDENCE SOURCE:
  - "📊 Evidence: FDA FAERS · 12,847 adverse event reports"
  - Font: Inter 400, 13px, #6B7394
  - Background: rgba(108, 92, 231, 0.05)
  - Border-radius: 8px
  - Padding: 10px 14px
SCREEN 6: PDF REPORT PREVIEW

┌─────────────────────────────────────────────────────┐
│                                                     │
│  📄 Your Drug Safety Report                         │
│     Generated May 21, 2026                          │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │  ┌─────────────────────────────────────┐    │    │
│  │  │  🛡️ MedSafe AI Report               │    │    │
│  │  │  ──────────────────────             │    │    │
│  │  │  Patient Medications: 5             │    │    │
│  │  │  Overall Risk: MODERATE (6/10)      │    │    │
│  │  │                                     │    │    │
│  │  │  ⚠️ 2 Severe Interactions Found     │    │    │
│  │  │  ...                                │    │    │
│  │  └─────────────────────────────────────┘    │    │
│  │          (PDF preview, page look)           │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ┌──────────────────────┐  ┌────────────────────┐   │
│  │ 📥 Download PDF      │  │ 🖨️ Print          │   │
│  └──────────────────────┘  └────────────────────┘   │
│                                                     │
│  🔒 Report generated locally. Nothing uploaded.     │
│                                                     │
└─────────────────────────────────────────────────────┘

This appears as a MODAL overlay:
  - Overlay background: rgba(0, 0, 0, 0.7) + backdrop-filter: blur(8px)
  - Modal card: max-width 700px, centered
  - Background: #111827
  - Border-radius: 20px
  - Padding: 36px
PDF PREVIEW:
  - White rectangle (#FFFFFF) inside the modal
  - Border-radius: 4px
  - Box-shadow: 0 4px 20px rgba(0,0,0,0.4)
  - Shows mini version of the PDF with MedSafe branding
  - Aspect ratio: ~letter size (8.5:11)
BUTTONS:
  - "📥 Download PDF" — primary (green gradient)
  - "🖨️ Print" — secondary (ghost/outline)
  - Side by side, gap: 12px
SCREEN 7: PRIVACY / ABOUT SECTION (bottom of landing page)

┌─────────────────────────────────────────────────────┐
│                                                     │
│    🔒 YOUR DATA STAYS WITH YOU                      │
│    "We don't just talk about privacy.               │
│     We architecturally guarantee it."               │
│                                                     │
│    ┌───────────┐  ┌───────────┐  ┌───────────┐     │
│    │ ❌ No     │  │ ❌ No     │  │ ❌ No     │     │
│    │ server    │  │ cookies   │  │ tracking  │     │
│    │ calls     │  │ stored    │  │ ever      │     │
│    └───────────┘  └───────────┘  └───────────┘     │
│                                                     │
│    ┌─────────────────────────────────────────┐      │
│    │  HOW IT WORKS TECHNICALLY:              │      │
│    │                                         │      │
│    │  Your Browser ───→ TF.js Model (local)  │      │
│    │       ↓                                 │      │
│    │  Drug Database (pre-loaded, 5MB)        │      │
│    │       ↓                                 │      │
│    │  Results (never leave browser)          │      │
│    │                                         │      │
│    │  ✓ Open source  ✓ Auditable            │      │
│    └─────────────────────────────────────────┘      │
│                                                     │
└─────────────────────────────────────────────────────┘

SECTION:
  - Background: slightly different gradient positioning
  - Top gradient blob: #FF4757 at 0.05 opacity (to create warm tone)
  - Padding: 100px top/bottom
TITLE: "YOUR DATA STAYS WITH YOU"
  - 🔒 icon: 32px, #00E5A0
  - Font: Outfit 700, 36px, #FFFFFF
SUBTITLE QUOTE:
  - Italic, Inter 400, 18px, #8892B0
3 CARDS ("No server calls", "No cookies", "No tracking"):
  - Each: glassmorphism, 200px wide
  - Red ❌ icon: 28px (using cross mark, not emoji)
  - Title: Outfit 600, 16px, #FFFFFF
  - Subtle red tint on border when hovering (showing what's blocked)
TECHNICAL DIAGRAM:
  - Glassmorphism card, max-width: 600px
  - Shows data flow with arrows
  - All within "Your Browser" boundary box
  - Uses monospace font for technical parts
  - Green checkmarks for "Open source" and "Auditable"
FOOTER

┌─────────────────────────────────────────────────────┐
│                                                     │
│  🛡️ MedSafe AI                                      │
│                                                     │
│  Built with ❤️ by Sumit Saraswat                    │
│  Meta Hackathon Finalist · Privacy-First Healthcare │
│                                                     │
│  [GitHub] [LinkedIn] [Portfolio]                     │
│                                                     │
│  ⚠️ Disclaimer: MedSafe AI is for informational     │
│  purposes only. Always consult your doctor or       │
│  pharmacist before making medication changes.       │
│                                                     │
│  ───────────────────────────────────────────         │
│  © 2026 MedSafe AI · Made in India 🇮🇳              │
│                                                     │
└─────────────────────────────────────────────────────┘

FOOTER:
  - Background: #070B14 (slightly darker than main bg)
  - Border-top: 1px solid rgba(255,255,255,0.04)
  - Padding: 60px top, 40px bottom
  - Text-align: center
LOGO:
  - Shield + "MedSafe AI"
  - Outfit 600, 18px
BUILT BY:
  - Inter 400, 14px, #8892B0
  - "Sumit Saraswat" as link (#00E5A0)
SOCIAL LINKS:
  - 3 icon buttons in a row, gap: 12px
  - Each: 40x40px circle
  - Background: rgba(255,255,255,0.04)
  - Border: 1px solid rgba(255,255,255,0.06)
  - Icon: 18px, #B0B8CC
  - Hover: background rgba(0, 229, 160, 0.1), icon #00E5A0
DISCLAIMER:
  - ⚠️ icon
  - Background: rgba(255, 140, 66, 0.05)
  - Border: 1px solid rgba(255, 140, 66, 0.1)
  - Border-radius: 10px
  - Padding: 16px 20px
  - Font: Inter 400, 12px, #6B7394
  - Max-width: 600px
COPYRIGHT:
  - Font: Inter 400, 12px, #6B7394
📱 MOBILE RESPONSIVE NOTES

BREAKPOINT: 768px and below
NAVBAR:
  - Logo only on left
  - Hamburger menu (3 lines) on right
  - Opens full-screen mobile menu overlay (dark, glassmorphism)
HERO:
  - Title: 36px (down from 56px)
  - Subtitle: 18px
  - Buttons: stack vertically, full width
  - Reduce particle count to 15
HOW IT WORKS:
  - Cards stack vertically (1 column)
  - Arrows become downward arrows between cards
DRUG INPUT:
  - Full width, padding 16px
  - Chips wrap naturally
GRAPH SCREEN:
  - Right panel moves BELOW graph (full width)
  - Graph takes full width
  - Touch: pinch to zoom, tap nodes
DETAIL PANEL:
  - Full screen bottom sheet (90vh)
  - Draggable to close
🎬 MICRO-ANIMATIONS

1. Page load: Elements fade in + slide up (staggered, 0.1s delay each)
2. Drug chip added: Scales from 0 to 1 with slight bounce
3. Drug chip removed: Scales to 0 + fades out (0.2s)
4. Graph nodes: Gentle floating animation (subtle, continuous)
5. Severe interaction line: Pulses red glow (1.5s infinite)
6. Risk score ring: Fills up with animation on load (1s ease-out)
7. Stat numbers: Count up from 0 on scroll-in
8. Buttons: Scale 1.02 on hover (0.2s ease)
9. Cards: translateY(-4px) on hover (0.3s ease)
10. Background orbs: Slow circular drift (30s cycle, infinite)
11. Scroll indicator: bounces up/down (2s infinite)
12. Loading steps: Checkmarks appear with micro-bounce
Design these in Figma, and tell me when you're ready to start coding! 🚀