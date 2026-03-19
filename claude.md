
Build a complete, modern creative digital agency website using Next.js 14 (App Router), Tailwind CSS, and Framer Motion. The design is dark & bold — near-black backgrounds (#0D0D0D, #111111) with a purple accent (#6C47FF) and off-white text (#F5F5F0). Every section should feel premium, intentional, and animated.

GLOBAL SETUP

Font: Inter via next/font/google, variable font
Custom cursor: a 36px ring (border: 2px solid #6C47FF) that follows the mouse with lerp lag (JS mousemove), scales up on hover over links/cards
Smooth scroll: scroll-behavior: smooth + Lenis smooth scroll library
All scroll animations use Framer Motion whileInView={{ opacity: 1, y: 0 }} with initial={{ opacity: 0, y: 24 }} and viewport={{ once: true }}
Stagger children using Framer Motion variants with staggerChildren: 0.1


1. NAVBAR

Fixed top, full width, starts fully transparent
On scroll past 80px: backdrop-blur-md + bg-black/70 fades in with Framer Motion animate
Left: text logo "Geez Digitals" in white, 500 weight
Center: nav links — Work, Services, About, Contact — small caps, 12px, text-white/60 hover → text-white, underline slide-in on hover (pseudo-element scaleX transition)
Right: pill CTA button "Let's Talk" — bg-[#6C47FF] hover → bg-[#5535EE], scale(0.97) on active
Mobile: hamburger icon, full-screen dark overlay menu, links stagger-animate in on open


2. HERO SECTION

Full viewport height (min-h-screen), dark background
Subtle animated background: CSS radial-gradient that slowly shifts using @keyframes hue-rotate, or a Spline/canvas particle field (use tsparticles if Spline unavailable)
Top: small uppercase tag "Creative Digital Agency" — outlined pill badge, border border-white/20, fade in first
Headline: "We Build Digital Experiences That Last" — 80px, weight 700, each word animates in with stagger slide-up (Framer Motion motion.span per word, split by spaces)
Subtext: "Branding · Web Design · Motion · Strategy" — 16px, text-white/50, fade in after headline
Two buttons side by side: "View Our Work" (filled purple) + "Get in Touch" (outlined white). On hover: filled button arrow slides right; outlined button fills white
Bottom center: bouncing ↓ scroll indicator using Framer Motion animate={{ y: [0, 8, 0] }} loop


3. MARQUEE / TICKER STRIP

Full-width strip between Hero and Services
Dark border top + bottom (border-white/10)
Text: Web Development · Branding · UI/UX · Motion Graphics · App Dev · SEO · Strategy · — repeated twice
CSS @keyframes marquee infinite translateX(-50%) at 30s linear
Pauses on hover (animation-play-state: paused)
Text style: 13px, uppercase, letter-spacing 0.1em, text-white/40


4. SERVICES SECTION

Section heading: "What We Do" — 52px, stagger fade-up
3-column grid (grid-cols-1 md:grid-cols-3), 24px gap
Each service card:

bg-[#1A1A1A] background, border border-white/8, rounded-2xl, p-8
Top: icon in a small 40x40 dark square (bg-white/5 rounded-xl), using Lucide icons
Service title: 20px, 500 weight, white
Description: 14px, text-white/50, line-height 1.6
Bottom: "Learn more →" link in purple, arrow slides right on hover
Hover: card lifts translateY(-4px), border color transitions to #6C47FF, subtle purple glow (box-shadow: 0 0 30px rgba(108,71,255,0.15))


Services: Web Development, Brand Identity, UI/UX Design, Motion & Video, SEO & Strategy, App Development


5. STATS COUNTER SECTION

Dark background section, full width
4 stats in a row: 50+ Projects, 3+ Years, 100% Satisfaction, 20+ Clients
Each: large number (64px, 700 weight, white) + label below (13px, text-white/40)
Numbers animate count-up when scrolled into view — use a custom useCountUp React hook with requestAnimationFrame, triggered by Intersection Observer
Thin border-white/10 dividers between stats on desktop


6. PORTFOLIO / WORK SECTION

Section heading: "Selected Work"
Filter tabs: All · Branding · Web · Motion — pill tabs, active = bg-[#6C47FF] filled, inactive = outlined
On tab click: grid re-filters with Framer Motion AnimatePresence + layout prop for smooth reflow
Grid: grid-cols-1 md:grid-cols-2, 16px gap
First project: full-width (col-span-2)
Each project card:

Aspect ratio 16/10, overflow-hidden rounded-2xl
Image/placeholder with dark tinted overlay
On hover: image scales to 1.05, dark overlay fades in from bottom with project title + category tag + "View →" button (Framer Motion variants)
Tags: small pill badges in purple/teal




7. PROCESS / TIMELINE SECTION

Light section (bg-[#F5F5F0], dark text) for contrast against dark sections
Heading: "How We Work" — dark, 52px
4 horizontal steps on desktop, vertical on mobile
Each step: number badge (outlined circle, purple), step title (20px, dark), short description (14px, muted)
Connecting line between steps: SVG <line> with stroke-dashoffset animation — draws itself left-to-right when scrolled into view
Each step dot pulses once on reveal (Framer Motion scale: [1, 1.3, 1])
Steps: Discovery → Strategy → Design → Launch


8. TESTIMONIALS SECTION

Dark background
Heading: "What Clients Say"
Horizontal carousel using Embla Carousel (embla-carousel-react)
Each testimonial card: bg-[#1A1A1A], rounded-2xl, p-8

Large decorative " in purple (text-6xl text-[#6C47FF] opacity-30) top-left
Quote text: 16px, text-white/70, italic, line-height 1.7
5 gold stars (★★★★★, text-yellow-400, 12px)
Author: initials avatar (circle, bg-[#6C47FF]/20, purple text) + name + role


Auto-scrolls every 4s, pauses on hover
Dot indicators below


9. CONTACT / CTA SECTION

Full-width dark section with a subtle purple radial glow in background (radial-gradient(ellipse at center, rgba(108,71,255,0.15) 0%, transparent 70%))
Large heading: "Ready to Build Something Great?" — 64px, white, centered
Subtext + email link (hello@geezdigitals.com) with animated underline on hover
Contact form below: Name, Email, Project type (styled <select>), Message (<textarea>)

Inputs: bg-white/5, border border-white/10, rounded-xl, p-4, text-white, focus: border-[#6C47FF] with ring-2 ring-[#6C47FF]/30
Floating label animation: label moves up + shrinks on focus/filled (CSS transition)
Submit button: full-width, bg-[#6C47FF], pill shape, hover fills brighter, loading spinner state




10. FOOTER

bg-[#0A0A0A], border-t border-white/8
Left: logo + tagline "Crafting digital experiences." + copyright
Right: nav links column + social icons (Twitter, Instagram, LinkedIn, GitHub) — Lucide icons, text-white/40 hover → white, scale on hover
Bottom row: "Built with Next.js" small credit text, centered, text-white/20


PERFORMANCE NOTES

Use next/image for all images with priority on hero
Dynamic import heavy components (Spline, tsparticles) with ssr: false
Use will-change: transform only on actively animating elements
Framer Motion LazyMotion + domAnimation to reduce bundle size