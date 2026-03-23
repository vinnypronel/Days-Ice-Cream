"use client";

import { useState } from "react";
import RippleButton from "./RippleButton";

export default function ContactForm() {
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
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
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
      <div style={{ padding: "40px 24px", background: "var(--color-surface)", border: "1px solid rgba(201,168,124,0.3)", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-rozha), Georgia, serif", color: "var(--color-cream)", fontSize: "28px", marginBottom: "16px" }}>Message Sent</h3>
        <p style={{ fontFamily: "var(--font-lora), serif", color: "var(--color-warm-white)", fontSize: "16px", opacity: 0.8 }}>
          Thank you for reaching out to Day&rsquo;s Ice Cream. We will get back to you soon.
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
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "600px" }}>
      {submitStatus === "error" && (
        <div style={{ padding: "16px", background: "rgba(220, 53, 69, 0.1)", border: "1px solid #dc3545", color: "#f8d7da", marginBottom: "24px", fontFamily: "var(--font-lora), serif" }}>
          There was an error sending your message. Please try again.
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
        <label htmlFor="phone" style={labelStyle}>Phone Number (Optional)</label>
        <input type="tel" id="phone" name="phone" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message *</label>
        <textarea id="message" name="message" rows={4} required style={{ ...inputStyle, resize: "vertical" }}></textarea>
      </div>

      <RippleButton
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        style={{
          marginTop: "48px",
          width: "100%",
          padding: "16px 40px",
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </RippleButton>
    </form>
  );
}
