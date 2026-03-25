"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import RippleButton from "./RippleButton";
import MenuButtons from "./MenuButtons";

const navLinks = [
  { label: "Flavors", href: "/flavors" },
  { label: "Toppings", href: "/toppings" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Employment", href: "/employment" },
];

/* Inline style builder for nav links — bypasses all CSS cascade issues */
function navLinkStyle(hovered: boolean, active: boolean): React.CSSProperties {
  // If active, we start with pink (#FF4F79) and fill with black (#020100) on hover.
  // If not active, we start with black (#020100) and fill with pink (#FF4F79) on hover.
  
  const backgroundPosition = active 
    ? (hovered ? "100% center" : "0% center") // Pink -> Black
    : (hovered ? "0% center" : "100% center"); // Black -> Pink
  return {
    fontFamily: "var(--font-lora), serif",
    fontSize: "18px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
    padding: "2px 0",
    cursor: "pointer",

    /* Left-to-right pink (Dusty Rose) fill via background-clip: text */
    backgroundImage: "linear-gradient(to right, #FF4F79 50%, #020100 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: backgroundPosition,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",

    transform: hovered ? "scale(1.08)" : "scale(1)",
    transition: "background-position 0.4s ease, transform 0.2s ease",
  };
}

export default function Navbar() {
  const pathname = usePathname();
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
          gap: "clamp(20px, 4vw, 50px)",
          padding: "4px 24px 2px 24px",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Day's Ice Cream | home"
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
            alt="Day's Ice Cream | Since 1876"
            width={140}
            height={140}
            priority
            style={{ width: "125px", height: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "clamp(12px, 2.5vw, 32px)", 
          listStyle: "none", 
          margin: 0, 
          padding: 0, 
          marginLeft: "20px",
          flexWrap: "nowrap"
        }}>
          {navLinks.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={navLinkStyle(hoveredIndex === i, pathname === item.href)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div style={{ marginLeft: "auto" }}>
          <MenuButtons isNavbar={true} align="right" />
        </div>
      </nav>
    </header>
  );
}
