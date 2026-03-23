"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Flavors", href: "/flavors" },
  { label: "Toppings", href: "/toppings" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Employment", href: "/employment" },
];

function footerLinkStyle(hovered: boolean): React.CSSProperties {
  return {
    fontFamily: "var(--font-lora), serif",
    fontSize: "12px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
    padding: "2px 0",
    cursor: "pointer",

    /* Left-to-right fill via background-clip: text */
    backgroundImage: "linear-gradient(to right, #FF4F79 50%, #FDFFFC 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: hovered ? "0% center" : "100% center",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",

    transform: hovered ? "scale(1.08)" : "scale(1)",
    transition: "background-position 0.4s ease, transform 0.2s ease",
  };
}

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <footer
      role="contentinfo"
      style={{
        background: "#546A76",
        borderTop: "1px solid rgba(201,168,124,0.1)",
        width: "100%",
        padding: "40px 24px",
      }}
    >
      {/* Centered column */}
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Day's Ice Cream — home"
          style={{
            display: "flex",
            transition: "transform 0.3s ease",
            transform: logoHovered ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Image
            src="/Days Logo.png"
            alt="Day's Ice Cream — Since 1876"
            width={120}
            height={120}
            style={{ filter: "brightness(0) invert(1)", opacity: 0.9, width: "115px", height: "auto" }}
          />
        </Link>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={footerLinkStyle(hoveredIndex === i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div aria-label="Social media links" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <style>{`
            .social-icon {
              color: #FDFFFC;
              opacity: 0.8;
              display: flex;
              transition: transform 0.3s ease, opacity 0.3s ease;
            }
            .social-icon:hover {
              transform: scale(1.15);
              opacity: 1;
            }
          `}</style>
          <a href="https://www.instagram.com/days_ice_cream/" target="_blank" rel="noopener noreferrer" aria-label="Day's Ice Cream on Instagram" className="social-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://www.facebook.com/p/Days-Ice-Cream-100064279622117/" target="_blank" rel="noopener noreferrer" aria-label="Day's Ice Cream on Facebook" className="social-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", width: "100%" }}>
          <span style={{ background: "#FDFFFC", opacity: 0.3, display: "block", height: "1px", flex: 1 }} />
          <span style={{ color: "#FDFFFC", fontSize: "16px", opacity: 0.5 }}>✦</span>
          <span style={{ background: "#FDFFFC", opacity: 0.3, display: "block", height: "1px", flex: 1 }} />
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: "var(--font-lora), serif", color: "#FDFFFC", fontSize: "12px", letterSpacing: "0.08em", opacity: 0.7, textAlign: "center", lineHeight: 1.8 }}>
          &copy; {new Date().getFullYear()} Day&rsquo;s Ice Cream. All rights reserved.<br />
          48 Pitman Ave, Ocean Grove, NJ 07756
        </p>
      </div>
    </footer>
  );
}
