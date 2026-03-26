"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import RippleButton from "../ui/RippleButton";
import MenuButtons from "../ui/MenuButtons";

const navLinks = [
  { label: "Flavors", href: "/flavors" },
  { label: "Toppings", href: "/toppings" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
  { label: "Employment", href: "/employment" },
];



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
          {navLinks.map((item, i) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredIndex === i;
            const isHighlighted = isActive || isHovered;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "4px 0",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "2px",
                    position: "relative",
                    transform: isHovered ? "scale(1.04)" : "scale(1)",
                    
                    /* Left-to-right text fill */
                    backgroundImage: "linear-gradient(to right, #FF4F79 50%, #020100 50%)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: isHighlighted ? "0% center" : "100% center",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "background-position 0.5s ease-out, transform 0.2s ease",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.label}
                  {/* Drawing Underline — Retraces to the left */}
                  <span
                    style={{
                      height: "2px",
                      width: "100%",
                      backgroundColor: "#FF4F79",
                      transform: isHighlighted ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      borderRadius: "2px",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA buttons */}
        <div style={{ marginLeft: "auto" }}>
          <MenuButtons isNavbar={true} align="right" />
        </div>
      </nav>
    </header>
  );
}
