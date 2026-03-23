import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RippleButton from "@/components/RippleButton";

export const metadata: Metadata = {
  title: "Our Story — Day's Ice Cream | Since 1876, Ocean Grove NJ",
  description:
    "Learn the history of Day's Ice Cream — Ocean Grove's oldest continuously operating business, founded in 1876 by brothers William F. and Pennington Day, and now entering a new chapter under new ownership.",
};

function OrnamentDots() {
  return (
    <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
      <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "96px" }} />
      <span style={{ color: "var(--color-accent)", fontSize: "20px", userSelect: "none" }}>✦</span>
      <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "96px" }} />
    </div>
  );
}

/* ─── Vintage Photo Wrapper ─── */
function VintagePhoto({ src, alt, rotate = 0, style = {} }: { src: string, alt: string, rotate?: number, style?: React.CSSProperties }) {
  return (
    <figure
      style={{ 
        margin: 0,
        padding: "12px",
        background: "#FDFFFC", 
        border: "1px solid #546A76", 
        boxShadow: "4px 6px 14px rgba(2, 1, 0, 0.12)", 
        borderRadius: "3px", 
        display: "inline-block",
        transform: `rotate(${rotate}deg)`,
        transition: "transform 0.4s ease",
        ...style
      }}
    >
      <div style={{ border: "1px solid #020100", overflow: "hidden", borderRadius: "1px" }}>
        <Image 
          src={src} 
          alt={alt} 
          width={894} 
          height={714} 
          style={{ display: "block", width: "100%", height: "auto" }} 
        />
      </div>
    </figure>
  );
}

/* ─── Timeline milestones ─── */
const milestones = [
  { year: "1876", title: "A Scoop, a Corner, a Beginning", body: "Brothers William F. and Pennington Day open an ice cream parlor on Pitman Avenue in August 1876 — the same address it occupies today. Ocean Grove is barely five years old. Sand dunes stretch to the sea. A Methodist tent colony flanks the Great Auditorium. And at the foot of it all, Day's starts serving." },
  { year: "1882", title: "Day & Brothers Ice Cream Saloon", body: "Photographs from the era show the parlor in full Victorian splendor — tables arranged around a grassy courtyard filled with flowers, a design the brothers replicated at their Asbury Park location at 219 Asbury Avenue. By the 1890s, an Ocean Grove Record advertisement promotes both shore businesses simultaneously. A Newark outlet follows. The Day brothers are building something that looks a lot like an empire." },
  { year: "1920s", title: "Two Shore Towns, One Name", body: "Day's becomes inseparable from the identity of the Jersey Shore — a summer ritual as reliable as the tide. Families return year after year. The Pitman Avenue shop outlasts trends, recessions, and competition. Long after the Asbury Park and Newark locations close, the original endures." },
  { year: "2017", title: "Back to the Boardwalk", body: "Responding to years of customer demand, Day's opens a second outpost: Just Another Day's at 4 North End Boardwalk, inside the Dunes Café. Two locations, one legacy — with the same flavors that made the original famous." },
  { year: "2019", title: "Fire on the Boardwalk", body: "In April 2019, a devastating fire consumes the Dunes Café structure, taking the boardwalk location with it. Day's returns to where it has always belonged — 48 Pitman Avenue. Some chapters end. The story doesn't." },
  { year: "Today", title: "New Hands. Same Soul.", body: "Under new ownership, Day's Ice Cream enters its 150th year with one commitment: to be worthy of what came before. The name, the address, the recipes — all honored. What's new is who's keeping the lights on." },
];

/* ════════════════════════════════════════════════════════════
   ABOUT HERO
════════════════════════════════════════════════════════════ */
function AboutHero() {
  return (
    <section
      id="about-hero"
      aria-label="About page hero"
      style={{
        background: "var(--color-base)",
        position: "relative",
        overflow: "hidden",
        padding: "64px 24px",
        textAlign: "center",
        width: "100%",
      }}
    >
      {/* Glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,124,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      {/* Grain */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", pointerEvents: "none" }} />

      {/* Centered content column */}
      <div style={{ position: "relative", maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "12px" }}>
          Ocean Grove, NJ — Est. 1876
        </p>
        <h1 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(44px, 7vw, 82px)", lineHeight: 1.05, marginBottom: "16px" }}>
          Our Story
        </h1>
        <OrnamentDots />
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.85, opacity: 0.8, maxWidth: "560px", marginTop: "24px" }}>
          Ocean Grove&rsquo;s oldest continuously operating business. A parlor
          that has outlasted two World Wars, the Roaring Twenties, the Great
          Depression, and every Jersey Shore summer in between.
        </p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   OPENING NARRATIVE
════════════════════════════════════════════════════════════ */
function OpeningNarrative() {
  return (
    <section id="opening" aria-label="Opening story" style={{ background: "var(--color-warm-white)", width: "100%", padding: "56px 24px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-base)", fontSize: "clamp(22px, 3.5vw, 34px)", lineHeight: 1.5, marginBottom: "24px" }}>
          &ldquo;Delicious and Unique. A Step Back in Time.&rdquo;
        </p>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-surface)", fontSize: "17px", lineHeight: 1.9, opacity: 0.88, marginBottom: "24px" }}>
          That was the promise on the old sign. It still holds. Day&rsquo;s Ice
          Cream opened on Pitman Avenue in August of 1876 — when Ocean Grove was
          still a scrub pine settlement, a Methodist tent colony pitched beside
          the sea. Most businesses from that era are footnotes. Day&rsquo;s is
          still open. Come summer, the line still stretches out the door.
        </p>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-surface)", fontSize: "17px", lineHeight: 1.9, opacity: 0.88 }}>
          No gimmicks. No corporate rebrands. No pivot to soft serve trends or
          novelty flavors with names like &ldquo;Unicorn Swirl.&rdquo; Just
          honest, handcrafted ice cream from the corner that started it — made
          to be eaten slowly, outside, in the middle of a summer that feels like
          it might last forever.
        </p>

        {/* Photo Spread */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "24px", marginTop: "56px", width: "100%", flexWrap: "wrap", alignItems: "flex-start" }}>
          <VintagePhoto src="/oldoutsideshot.jpg" alt="Old outside shot of Day's Ice Cream" rotate={-2.5} style={{ width: "320px", maxWidth: "100%" }} />
          <VintagePhoto src="/windowlogo.jpg" alt="Vintage Day's Ice Cream window painting" rotate={2} style={{ width: "290px", maxWidth: "100%", marginTop: "32px", zIndex: 1 }} />
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   TIMELINE
════════════════════════════════════════════════════════════ */
function Timeline() {
  return (
    <section id="timeline" aria-label="Historical timeline" style={{ background: "var(--color-base)", width: "100%", padding: "80px 24px" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
            150 Years of History
          </p>
          <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
            The Road to Now
          </h2>
        </div>

        {/* Timeline list */}
        <ol style={{ listStyle: "none", position: "relative", display: "flex", flexDirection: "column", gap: "56px", paddingLeft: "48px" }} aria-label="Milestones in Day's Ice Cream history">
          {/* Spine */}
          <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "16px", width: "1px", height: "100%", background: "rgba(201,168,124,0.2)" }} />

          {milestones.map((m) => (
            <li key={m.year} style={{ position: "relative" }}>
              {/* Dot */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-48px", top: "2px", width: "32px", height: "32px", background: "var(--color-base)", border: "1px solid rgba(201,168,124,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--color-accent)", fontSize: "9px" }}>✦</span>
              </div>
              <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>
                {m.year}
              </p>
              <h3 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(20px, 2.5vw, 26px)", lineHeight: 1.25, marginBottom: "12px" }}>
                {m.title}
              </h3>
              <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "15px", lineHeight: 1.9, opacity: 0.75 }}>
                {m.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   NEW OWNERSHIP
════════════════════════════════════════════════════════════ */
function NewOwnership() {
  return (
    <section id="new-chapter" aria-label="New ownership" style={{ background: "var(--color-surface)", width: "100%", padding: "80px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "20px" }}>
          New Ownership — Same Promise
        </p>

        <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(28px, 4.5vw, 54px)", lineHeight: 1.1, marginBottom: "24px" }}>
          We Didn&rsquo;t Buy a Business.<br />We Accepted a Responsibility.
        </h2>

        <OrnamentDots />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "48px" }}>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "17px", lineHeight: 1.9, opacity: 0.85 }}>
            When you take over a shop that has operated continuously since
            1876, you feel the weight of it. Families have been coming here
            for four, five, six generations. There are people who got their
            first scoop as a child, brought their own children, and now watch
            their grandchildren do the same. That&rsquo;s not a customer base.
            That&rsquo;s a covenant.
          </p>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "17px", lineHeight: 1.9, opacity: 0.85 }}>
            We have no interest in &ldquo;reimagining&rdquo; Day&rsquo;s.
            The name, the corner, the recipes — they belong to Ocean Grove.
            Our job is to show up every summer, make it the way it&rsquo;s
            always been made, and hand you a cone that tastes like a memory
            you haven&rsquo;t made yet.
          </p>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "17px", lineHeight: 1.9, opacity: 0.85 }}>
            Day&rsquo;s has survived a century and a half. That kind of
            endurance doesn&rsquo;t happen by accident — it happens because
            each generation of stewards respected what they inherited. We
            intend to do the same.
          </p>
        </div>

        {/* Editorial Photo Spread */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "32px", marginTop: "72px", flexWrap: "wrap", alignItems: "center" }}>
          <VintagePhoto src="/drawing.jpg" alt="Historical drawing of Day's" rotate={1.5} style={{ width: "330px", maxWidth: "100%" }} />
          <VintagePhoto src="/insideshop.jpg" alt="Inside the ice cream shop" rotate={-1.5} style={{ width: "310px", maxWidth: "100%", marginTop: "-20px", marginLeft: "-16px", zIndex: 1 }} />
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "72px" }}>
          <RippleButton variant="primary" href="/menu" style={{ padding: "14px 32px" }}>
            See the Menu
          </RippleButton>
          <RippleButton variant="outline" href="/contact" style={{ padding: "14px 32px" }}>
            Visit Us
          </RippleButton>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   FLAVORS NOTE
════════════════════════════════════════════════════════════ */
function FlavorsNote() {
  const flavors = [
    "Toasted Coconut", "Black Raspberry Choc Chip", "Peanut Butter Moose Tracks",
    "Salted Caramel Pretzel", "Hazelnut Truffle Latte", "Cinnamon",
    "Almond Joy", "Dairy-Free Sorbets", "Low-Fat Frozen Yogurt",
    "Sugar-Free Options", "Soy & Coconut Milk Bases", "Almond Milk Options",
  ];

  return (
    <section id="flavors-note" aria-label="Flavors overview" style={{ background: "var(--color-base)", width: "100%", padding: "80px 24px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
          Something for Everyone
        </p>
        <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(26px, 4vw, 44px)", lineHeight: 1.2, marginBottom: "24px" }}>
          The Flavors That Keep<br />People Coming Back
        </h2>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "16px", lineHeight: 1.85, opacity: 0.72, maxWidth: "540px", marginBottom: "48px" }}>
          A rotating cast of flavors, from the classics that built the shop
          to seasonal specials. Dairy-free and sugar-free options always
          available — because everyone deserves a scoop.
        </p>

        <OrnamentDots />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px", width: "100%", marginTop: "48px" }}>
          {flavors.map((name) => (
            <div key={name} style={{ background: "var(--color-surface)", border: "1px solid rgba(201,168,124,0.1)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-cream)", fontSize: "13px", lineHeight: 1.5, opacity: 0.85 }}>
                {name}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px" }}>
          <Link href="/menu" style={{ color: "var(--color-accent)", fontFamily: "var(--font-lora), serif", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", borderBottom: "1px solid rgba(201,168,124,0.35)", paddingBottom: "2px", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            View Full Menu <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   LOCATION NOTE
════════════════════════════════════════════════════════════ */
function LocationNote() {
  return (
    <section id="location-note" aria-label="Location" style={{ background: "var(--color-warm-white)", width: "100%", padding: "64px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-surface)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.65, marginBottom: "20px" }}>
          Where to Find Us
        </p>
        <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-base)", fontSize: "clamp(26px, 4vw, 42px)", lineHeight: 1.2, marginBottom: "20px" }}>
          Same Corner.<br />All Summer Long.
        </h2>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-surface)", fontSize: "17px", lineHeight: 1.8, opacity: 0.78, marginBottom: "16px" }}>
          48 Pitman Avenue, on Auditorium Park<br />
          Ocean Grove, NJ 07756
        </p>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-surface)", fontSize: "15px", lineHeight: 1.8, opacity: 0.6, fontStyle: "italic", marginBottom: "40px" }}>
          Serving May through October. Open seven days a week,<br />Memorial Day through Labor Day.
        </p>
        <RippleButton variant="dark" href="/contact" style={{ padding: "14px 32px" }}>
          Get Directions &amp; Hours
        </RippleButton>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE EXPORT
════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ width: "100%" }}>
        <AboutHero />
        <OpeningNarrative />
        <Timeline />
        <NewOwnership />
        <FlavorsNote />
        <LocationNote />
      </main>
      <Footer />
    </>
  );
}
