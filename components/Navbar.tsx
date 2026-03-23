"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RippleButton from "./RippleButton";

const navLinks = [
  { label: "Flavors", href: "/flavors" },
  { label: "Toppings", href: "/toppings" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Employment", href: "/employment" },
];

/* Inline style builder for nav links — bypasses all CSS cascade issues */
function navLinkStyle(hovered: boolean): React.CSSProperties {
  return {
    fontFamily: "var(--font-lora), serif",
    fontSize: "15px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
    padding: "2px 0",
    cursor: "pointer",

    /* Left-to-right pink (Dusty Rose) fill via background-clip: text */
    backgroundImage: "linear-gradient(to right, #FF4F79 50%, #020100 50%)",
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

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <header
      role="banner"
      style={{
        background: "#FDFFFC",
        borderBottom: "1px solid rgba(201,168,124,0.12)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
      }}
    >
      <nav
        aria-label="Primary navigation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "40px",
          padding: "2px 24px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Day's Ice Cream — home"
          style={{
            flexShrink: 0,
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
            width={140}
            height={140}
            priority
            style={{ width: "135px", height: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul style={{ display: "flex", alignItems: "center", gap: "32px", listStyle: "none", margin: 0, padding: 0, marginLeft: "80px" }}>
          {navLinks.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={navLinkStyle(hoveredIndex === i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <RippleButton
          variant="primary"
          href="/flavors"
          style={{
            marginLeft: "auto",
            padding: "8px 20px",
          }}
        >
          See the Menu
        </RippleButton>
      </nav>
    </header>
  );
}
