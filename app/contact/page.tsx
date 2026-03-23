import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

/* ─── Shared ornamental divider ─── */
function OrnamentDots() {
  return (
    <div
      aria-hidden="true"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", width: "100%" }}
    >
      <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "64px" }} />
      <span style={{ color: "var(--color-accent)", fontSize: "20px", userSelect: "none" }}>✦</span>
      <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "64px" }} />
    </div>
  );
}

const hoursData = [
  { days: "Sunday – Thursday", hours: "11:00 AM – 10:00 PM" },
  { days: "Friday – Saturday", hours: "11:00 AM – 11:00 PM" },
];

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

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ width: "100%", minHeight: "100vh", background: "var(--color-base)", paddingTop: "80px", paddingBottom: "120px" }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "80px", padding: "0 24px" }}>
          <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
            Reach Out
          </p>
          <h1 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
            Contact Us
          </h1>
          <OrnamentDots />
        </div>

        {/* Content Wrapper */}
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px" }}>
          
          {/* Left Column: Form */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "32px", marginBottom: "24px" }}>Send a Message</h2>
            <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "16px", lineHeight: 1.8, opacity: 0.8, marginBottom: "32px" }}>
              Have a question about our flavors, events, or just want to say hi? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Right Column: Info & Map */}
          <div style={{ display: "flex", flexDirection: "column", background: "var(--color-surface)", padding: "48px 32px", border: "2px solid var(--color-accent)", borderRadius: "16px" }}>
            
            <h2 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "32px", marginBottom: "32px" }}>Visit Us</h2>
            
            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <MapPinIcon /> Address
                </h3>
                <address style={{ fontStyle: "normal", fontFamily: "var(--font-lora), serif", color: "var(--color-cream)", fontSize: "16px", lineHeight: 1.6 }}>
                  48 Pitman Ave<br />Ocean Grove, NJ 07756
                </address>
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <ClockIcon /> Hours (Placeholder from Sanity)
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px", margin: 0, padding: 0 }}>
                  {hoursData.map((row) => (
                    <li key={row.days} style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
                      <span style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-cream)", fontSize: "15px" }}>{row.days}</span>
                      <span style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "15px", opacity: 0.75 }}>{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <PhoneIcon /> Phone
                </h3>
                <span style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-cream)", fontSize: "16px" }}>(TBD) — coming soon</span>
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <MailIcon /> Email
                </h3>
                <span style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-cream)", fontSize: "16px" }}>info@daysicecreamshop.com</span>
              </div>
            </div>

            {/* Google Maps iframe */}
            <div style={{ width: "100%", height: "240px", background: "var(--color-base)", position: "relative", border: "2px solid var(--color-accent)", borderRadius: "12px", overflow: "hidden" }}>
              <iframe
                title="Google Maps: Day's Ice Cream"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.606214151978!2d-74.00843282367807!3d40.217835871473216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2263cd319f3cb%3A0xc34a6ca7c3cc17f0!2s48%20Pitman%20Ave%2C%20Ocean%20Grove%2C%20NJ%2007756!5e0!3m2!1sen!2sus!4v1716301234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
