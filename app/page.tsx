import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RippleButton from "@/components/RippleButton";
import MenuButtons from "@/components/MenuButtons";

/* ─── Shared ornamental divider ─── */
function OrnamentDots() {
  return (
    <div
      aria-hidden="true"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}
    >
      <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "96px" }} />
      <span style={{ color: "var(--color-accent)", fontSize: "20px", userSelect: "none" }}>✦</span>
      <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "96px" }} />
    </div>
  );
}

/* ─── Flavor data ─── */
const featuredFlavors = [
  { id: 1, name: "Vanilla Bean", tagline: "The original.", description: "Real Madagascar vanilla beans steeped in cream, the flavor that built this shop and kept it standing for 150 years.", bg: "#FAFAFA" },
  { id: 2, name: "Brown Butter Pecan", tagline: "Rich & roasted.", description: "Slow-browned butter folded into a custard base with toasted New Jersey pecans. A September tradition since the 1940s.", bg: "#F4F7F6" },
  { id: 3, name: "Salted Caramel Swirl", tagline: "Sweet with an edge.", description: "House-made caramel ribboned through a cream base, finished with a pinch of flaky sea salt. Deceptively simple.", bg: "#F8FAF9" },
];

const hoursData = [
  { days: "Sunday – Thursday", hours: "11:00 AM – 10:00 PM" },
  { days: "Friday – Saturday", hours: "11:00 AM – 11:00 PM" },
];

/* ─── SVG icons ─── */
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.86 19.86 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        padding: "3vh 24px 27vh",
        textAlign: "center",
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark tint overlay */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", pointerEvents: "none" }} />
      {/* Glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,124,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
      {/* Grain */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: "700px", width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "14px", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "8px", fontWeight: 800 }}>
          Ocean Grove, New Jersey
        </p>

        <Image
          src="/Days Logo.png"
          alt="Day's Ice Cream | Since 1876"
          width={400}
          height={400}
          priority
          style={{ 
            opacity: 0.97, 
            width: "clamp(220px, 32vw, 420px)", 
            height: "auto", 
            marginBottom: "12px", 
            marginTop: "0px", 
            filter: "drop-shadow(0 0 3px rgba(255,255,255,0.65))" 
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", justifyContent: "center", marginBottom: "0px" }}>
          <MenuButtons />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTRO STRIP
═══════════════════════════════════════════════════════════ */
function IntroStrip() {
  return (
    <section id="intro" aria-label="Shop intro" style={{ background: "var(--color-surface)", width: "100%", padding: "32px 24px", textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(18px, 3vw, 26px)", letterSpacing: "0.02em", lineHeight: 1.4 }}>
        150 years.&ensp;Same corner.&ensp;Same love.
      </p>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURED FLAVORS
═══════════════════════════════════════════════════════════ */
function FeaturedFlavors() {
  return (
    <section id="featured-flavors" aria-label="Staff favorites" style={{ background: "#CAB6FF", width: "100%", padding: "32px 24px" }}>
      {/* Center wrapper */}
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7, marginBottom: "12px" }}>Made Fresh Daily</p>
          <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "#020100", fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.15, marginBottom: "16px" }}>Staff Favorites</h2>
          <OrnamentDots />
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {featuredFlavors.map((flavor) => (
            <article key={flavor.id} style={{ background: flavor.bg, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
              <div style={{ height: "224px", background: `linear-gradient(135deg, ${flavor.bg} 0%, #FDFFFC 100%)`, position: "relative" }} aria-hidden="true">
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(201,168,124,0.15)", fontSize: "64px" }}>🍦</div>
                <div style={{ position: "absolute", inset: "auto 0 0 0", height: "80px", background: `linear-gradient(to bottom, transparent, ${flavor.bg})` }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "28px", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>{flavor.tagline}</p>
                <h3 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "22px", lineHeight: 1.2 }}>{flavor.name}</h3>
                <p style={{ fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "14px", lineHeight: 1.75, opacity: 0.8 }}>{flavor.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <MenuButtons />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OUR STORY TEASER
═══════════════════════════════════════════════════════════ */
function OurStoryTeaser() {
  return (
    <section id="our-story" aria-label="Our story" style={{ background: "var(--color-base)", width: "100%", padding: "112px 24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>

        {/* Left: decorative year */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Large masked logo in pink */}
          <div 
            aria-hidden="true"
            style={{ 
              width: "clamp(240px, 35vw, 420px)", 
              height: "clamp(120px, 18vw, 220px)", 
              backgroundColor: "var(--color-accent)",
              maskImage: "url('/Days Logo.png')",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              WebkitMaskImage: "url('/Days Logo.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              userSelect: "none"
            }} 
          />
          <span style={{ display: "block", height: "2px", width: "100%", background: "var(--color-accent)", opacity: 0.45, marginTop: "12px", marginBottom: "16px" }} />
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" }}>The Year It All Began</p>
        </div>

        {/* Right: copy */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "20px" }}>Our Story</p>
          <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.2, marginBottom: "28px" }}>New Hands.<br />Same Soul.</h2>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "16px", lineHeight: 1.85, opacity: 0.9, marginBottom: "20px" }}>
            Day&rsquo;s Ice Cream has been a fixture of Ocean Grove since Ulysses S. Grant was president. Over 150 years, the shop has survived two World Wars, the Great Depression, and every summer in between, serving scoops to generations of families who made it their ritual.
          </p>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "16px", lineHeight: 1.85, opacity: 0.9, marginBottom: "40px" }}>
            Under new ownership, Day&rsquo;s enters its next chapter with deep reverence for what came before. The recipes, the corner, the name, all honored. What&rsquo;s new is the commitment to carry it forward with the same care it deserves.
          </p>
          <OrnamentDots />
          <div style={{ marginTop: "40px" }}>
            <RippleButton variant="mint" href="/about">
              Read Our Full Story <span aria-hidden="true" style={{ marginLeft: "8px" }}>→</span>
            </RippleButton>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOURS & LOCATION
═══════════════════════════════════════════════════════════ */
function HoursLocationStrip() {
  return (
    <section id="hours-location" aria-label="Hours and location" style={{ background: "var(--color-surface)", width: "100%", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>

        {/* Header — centered */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>Find Us</p>
          <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(26px, 3.5vw, 42px)" }}>Hours &amp; Location</h2>
        </div>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px" }}>

          {/* Hours */}
          <div>
            <h3 style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <ClockIcon /> Hours of Operation
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
              {hoursData.map((row) => (
                <li key={row.days} style={{ display: "flex", justifyContent: "space-between", gap: "16px", borderBottom: "1px solid rgba(201,168,124,0.12)", paddingBottom: "16px", marginBottom: "16px" }}>
                  <span style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-cream)", fontSize: "15px" }}>{row.days}</span>
                  <span style={{ fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "15px", opacity: 0.9 }}>{row.hours}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "13px", opacity: 0.7, fontStyle: "italic", marginTop: "8px" }}>
              * Hours subject to change. Seasonal schedule may vary.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPinIcon /> Visit Us
            </h3>
            <address style={{ fontStyle: "normal", fontFamily: "var(--font-lora), serif", color: "var(--color-cream)", fontSize: "17px", lineHeight: 1.7, marginBottom: "12px" }}>
              48 Pitman Ave<br />Ocean Grove, NJ 07756
            </address>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-lora), serif", color: "#020100", fontSize: "15px", opacity: 0.85, marginBottom: "40px" }}>
              <PhoneIcon /> (TBD) - coming soon
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <RippleButton variant="primary" href="/contact">
                Get Directions
              </RippleButton>
              <RippleButton variant="outline" href="/employment">
                Join Our Team
              </RippleButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ width: "100%" }}>
        <HeroSection />
        <IntroStrip />
        <FeaturedFlavors />
        <OurStoryTeaser />
        <HoursLocationStrip />
      </main>
      <Footer />
    </>
  );
}
