import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmploymentForm from "@/components/EmploymentForm";

export default function EmploymentPage() {
  return (
    <>
      <Navbar />
      <main style={{ width: "100%", minHeight: "100vh", background: "var(--color-base)", paddingTop: "80px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
              Join Our Team
            </p>
            <h1 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              Employment<br />Application
            </h1>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "64px" }} />
              <span style={{ color: "var(--color-accent)", fontSize: "20px", userSelect: "none" }}>✦</span>
              <span style={{ background: "var(--color-accent)", opacity: 0.35, display: "block", height: "1px", width: "64px" }} />
            </div>
          </div>
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "16px", lineHeight: 1.8, opacity: 0.8 }}>
              Day&rsquo;s Ice Cream is always looking for friendly, hardworking individuals to join our team for the season.
              Please fill out the form below and we will be in touch if your qualifications match our current needs.
            </p>
          </div>
          <EmploymentForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
