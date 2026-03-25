"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface RippleButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark" | "purple" | "mint";
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  target?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function waffleBg(color: string) {
  return `
    repeating-linear-gradient(45deg, ${color} 0px, ${color} 1.5px, transparent 1.5px, transparent 9px),
    repeating-linear-gradient(135deg, ${color} 0px, ${color} 1.5px, transparent 1.5px, transparent 9px)
  `;
}

const EXPAND_DURATION = 1400;
const RETRACT_DURATION = 600;

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case "outline":
      return {
        bg: "#ffffff",
        border: "#020100",
        text: "#020100",
        fillColor: "#020100",
      };
    case "dark":
      return {
        bg: "#ffffff",
        border: "#020100",
        text: "#020100",
        fillColor: "#98E6B3",
      };
    case "purple":
      return {
        bg: "#ffffff",
        border: "#9333EA",
        text: "#7E22CE",
        fillColor: "#CAB6FF",
      };
    case "mint":
      return {
        bg: "#ffffff",
        border: "#059669",
        text: "#059669",
        fillColor: "#98E6B3",
      };
    default: // primary — pink
      return {
        bg: "#ffffff",
        border: "#C4005A",
        text: "#C4005A",
        fillColor: "#FF4F79",
      };
  }
};

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  style,
  target,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const radiusRef = useRef(0);
  const startRRef = useRef(0);
  const phaseRef = useRef("idle");

  const [phase, setPhase] = useState("idle");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(0);
  const [pressed, setPressed] = useState(false);

  const c = getVariantStyles(variant);

  const cancelAnim = () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  const setR = (r: number) => { radiusRef.current = r; setRadius(r); };
  const setP = (p: string) => { phaseRef.current = p; setPhase(p); };

  const getMaxRadius = (x: number, y: number) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return 300;
    return Math.max(...([[0,0],[rect.width,0],[0,rect.height],[rect.width,rect.height]] as [number,number][])
      .map(([cx, cy]) => Math.sqrt((cx - x) ** 2 + (cy - y) ** 2))) + 4;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    cancelAnim();
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
    const maxR = getMaxRadius(x, y);
    let startTime: number | null = null;
    setP("expanding");
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / EXPAND_DURATION, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setR(eased * maxR);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      else setP("full");
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    setPressed(false);
    cancelAnim();
    startRRef.current = radiusRef.current;
    setP("retracing");
    let startTime: number | null = null;
    const animateOut = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / RETRACT_DURATION, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setR(startRRef.current * (1 - eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(animateOut);
      else { setR(0); setP("idle"); }
    };
    rafRef.current = requestAnimationFrame(animateOut);
  };

  useEffect(() => () => cancelAnim(), []);

  const isHovered = phase === "expanding" || phase === "full";
  const activeColor = isHovered ? c.fillColor : c.border;
  const shadowTranslate = isHovered ? "translate(8px, 8px)" : "translate(5px, 5px)";
  const btnTranslate = pressed ? "translate(4px, 4px)" : isHovered ? "translate(-4px, -4px)" : "translate(0, 0)";

const wrapperStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    ...style,
    width: "auto",
  };

  const shadowStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: "50px",
    background: waffleBg(activeColor),
    border: `2.5px solid ${activeColor}`,
    transform: shadowTranslate,
    transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.4s ease, border-color 0.4s ease",
    pointerEvents: "none",
    zIndex: 0,
    boxSizing: "border-box" as const,
  };

  const buttonStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 48px",
    fontSize: "13px",
    fontWeight: 700,
    fontFamily: "var(--font-jakarta), sans-serif",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    cursor: "pointer",
    borderRadius: "50px",
    background: c.bg,
    border: `2.5px solid ${activeColor}`,
    color: c.text,
    textDecoration: "none",
    transform: btnTranslate,
    transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.4s ease",
    outline: "none",
    whiteSpace: "nowrap" as const,
    zIndex: 1,
    boxSizing: "border-box" as const,
    width: "auto",
    ...style,
  };

  const rippleStyle: React.CSSProperties = {
    position: "absolute",
    left: pos.x,
    top: pos.y,
    width: radius * 2,
    height: radius * 2,
    borderRadius: "50%",
    background: c.fillColor,
    opacity: 0.18,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 1,
    willChange: "width, height",
  };

  const innerContent = (
    <>
      {phase !== "idle" && <span style={rippleStyle} />}
      <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
    </>
  );

  const commonProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: buttonStyle,
    className: `ripple-button ${className}`,
  };

  return (
    <div style={wrapperStyle}>
      <div style={shadowStyle} />
      {href ? (
        <Link
          href={href}
          target={target}
          ref={btnRef as React.Ref<HTMLAnchorElement>}
          {...commonProps}
        >
          {innerContent}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          ref={btnRef as React.Ref<HTMLButtonElement>}
          {...commonProps}
        >
          {innerContent}
        </button>
      )}
    </div>
  );
};

export default RippleButton;
;
