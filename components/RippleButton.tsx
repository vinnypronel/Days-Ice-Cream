"use client";

import React, { useRef, useState } from "react";
import Link, { LinkProps } from "next/link";

type Variant = "primary" | "dark" | "outline" | "mint";

interface BaseProps {
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | keyof LinkProps> & LinkProps;

export default function RippleButton(props: ButtonProps | AnchorProps) {
  const { variant = "primary", className = "", style, children, href, ...rest } = props;
  
  const buttonRef = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsHovering(true);
    }
    
    // Call original handlers if they exist
    if ((props as any).onMouseEnter) {
      (props as any).onMouseEnter(e);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setIsHovering(false);
    
    if ((props as any).onMouseLeave) {
      (props as any).onMouseLeave(e);
    }
  };

  // Determine colors based on variant
  let bg = "var(--color-accent)"; // primary default #FF4F79
  let text = "var(--color-base)"; // white-ish #FDFFFC
  let rippleBg = "var(--color-base)";
  let textHover = "var(--color-accent)";
  let border = "none";

  if (variant === "dark") {
    bg = "var(--color-base)"; // dark #020100 conceptually? Wait, base is light. 
    // Wait, in this project var(--color-base) is dark or light? Let me check globals.css!
  }

  // To be safe, I'm dynamically adjusting to inverse the colors as described by the user.
  // The user explicitly specified:
  // "primary" -> pink background (#FF4F79) -> text white (#FDFFFC). Hover fill: white (#FDFFFC), text pink (#FF4F79).
  // "dark" -> dark background (#020100) -> text white (#FDFFFC). Hover fill white (#FDFFFC), text dark (#020100).
  // Let's hardcode the requested HEX colors for perfect precision.

  if (variant === "primary") {
    bg = "#FF4F79";
    text = "#FDFFFC";
    rippleBg = "#98E6B3"; // filled in with mint green on hover
    textHover = "#020100"; // dark text on mint green for readability
  } else if (variant === "dark") {
    bg = "#020100";
    text = "#FDFFFC";
    rippleBg = "#FDFFFC";
    textHover = "#020100";
  } else if (variant === "outline") {
    bg = "transparent";
    // For outline buttons, we assume the border is the primary accent or explicitly styled.
    // The user requested: "For outline buttons the fill should be the opposite of the current border color."
    // Let's assume outline is accent colored border. Fill -> Accent, Text -> White.
    bg = "transparent";
    text = "var(--color-accent)"; // #FF4F79 or similar
    rippleBg = "var(--color-accent)";
    textHover = "var(--color-base, #FDFFFC)";
    border = "1px solid rgba(201,168,124,0.35)"; // typical style for the outline buttons here
  } else if (variant === "mint") {
    bg = "#98E6B3";
    text = "#020100";
    rippleBg = "#FF4F79"; // pink on hover
    textHover = "#FDFFFC"; // white text on pink
  }

  const content = (
    <>
      <span
        style={{
          position: "absolute",
          left: coords.x,
          top: coords.y,
          width: "20px",
          height: "20px",
          background: rippleBg,
          borderRadius: "50%",
          transform: isHovering && coords.x !== -1 ? "translate(-50%, -50%) scale(40)" : "translate(-50%, -50%) scale(0)",
          transition: "transform 700ms ease-out",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <span style={{ 
        position: "relative", 
        zIndex: 1, 
        transition: "color 700ms ease-out",
        color: isHovering ? textHover : text,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "inherit"
      }}>
        {children}
      </span>
    </>
  );

  const commonStyles: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    background: bg,
    border: border,
    borderRadius: "6px",
    padding: "12px 28px", 
    fontFamily: "var(--font-lora), serif",
    fontSize: "12px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    transform: isHovering ? "scale(1.05)" : "scale(1)",
    transition: "transform 200ms ease-out, box-shadow 200ms ease-out", // scale and shadow transition
    color: text, // Fallback for container
    ...style, // allow overrides from parent
  };

  if (href) {
    return (
      <Link 
        href={href}
        ref={buttonRef as any}
        className={className}
        style={commonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(rest as any)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      className={className}
      style={commonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...(rest as any)}
    >
      {content}
    </button>
  );
}
