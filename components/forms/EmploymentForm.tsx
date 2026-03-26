"use client";

import { useState } from "react";
import RippleButton from "../ui/RippleButton";

export default function EmploymentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      availability: formData.get("availability"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/employment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitStatus === "success") {
    return (
      <div style={{ textAlign: "center", padding: "40px", background: "var(--color-surface)", border: "1px solid rgba(201,168,124,0.3)" }}>
        <h3 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "28px", marginBottom: "16px" }}>Application Received</h3>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "16px", opacity: 0.8 }}>
          Thank you for applying to Day&rsquo;s Ice Cream. We will be in touch soon!
        </p>
      </div>
    );
  }

  const inputStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(201,168,124,0.4)",
    color: "var(--color-cream)",
    fontFamily: "var(--font-lora), serif",
    fontSize: "16px",
    padding: "12px 0",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    fontFamily: "var(--font-lora), serif",
    color: "var(--color-accent)",
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "4px",
    marginTop: "24px",
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      {submitStatus === "error" && (
        <div style={{ padding: "16px", background: "rgba(220, 53, 69, 0.1)", border: "1px solid #dc3545", color: "#f8d7da", marginBottom: "24px", fontFamily: "var(--font-lora), serif" }}>
          There was an error submitting your application. Please try again.
        </div>
      )}

      <div>
        <label htmlFor="name" style={labelStyle}>Full Name *</label>
        <input type="text" id="name" name="name" required style={inputStyle} />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email Address *</label>
        <input type="email" id="email" name="email" required style={inputStyle} />
      </div>

      <div>
        <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
        <input type="tel" id="phone" name="phone" required style={inputStyle} />
      </div>

      <div>
        <label htmlFor="position" style={labelStyle}>Position Interested In *</label>
        <select id="position" name="position" required style={{ ...inputStyle, WebkitAppearance: "none", appearance: "none", background: "var(--color-base)" }}>
          <option value="" disabled selected>Select a position</option>
          <option value="Scooper">Scooper / Counter Staff</option>
          <option value="Shift Lead">Shift Lead</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      <div>
        <label htmlFor="availability" style={labelStyle}>Availability *</label>
        <input type="text" id="availability" name="availability" placeholder="e.g. Weeknights and weekends" required style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Why do you want to work at Day's? (Optional)</label>
        <textarea id="message" name="message" rows={4} style={{ ...inputStyle, resize: "vertical" }}></textarea>
      </div>

      <RippleButton
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        style={{
          marginTop: "48px",
          padding: "16px 40px",
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </RippleButton>
    </form>
  );
}
