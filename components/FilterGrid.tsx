"use client";

import { useState, useEffect, useRef } from "react";

export type Category = {
  _id: string;
  title: string;
  slug: string;
  order: number;
};

export type FilterItem = {
  _id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  category: {
    title: string;
    slug: string;
  };
  isStaffPick?: boolean;
  staffPickMessage?: string;
};

interface FilterGridProps {
  items: FilterItem[];
  categories: Category[];
  pageTitle: string;
  pageSubtitle?: string | React.ReactNode;
  showImagePlaceholder?: boolean;
  headerImage?: string;
}

function getCategoryStyle(categoryName: string) {
  const name = categoryName.toLowerCase();
  
  if (name.includes("classic")) return { background: "#FF4F79", color: "#FDFFFC" };
  if (name.includes("chocolate")) return { background: "#572608", color: "#FDFFFC" };
  if (name.includes("fruit")) return { background: "#FF6B35", color: "#FDFFFC" };
  if (name.includes("vegan")) return { background: "#2CC72A", color: "#020100" };
  if (name.includes("italian ice")) return { 
    background: "linear-gradient(to right, #009246 0%, #009246 33.3%, #FDFFFC 33.3%, #FDFFFC 66.6%, #CE2B37 66.6%, #CE2B37 100%)", 
    color: "#020100", 
    textShadow: "0 0 10px #FDFFFC, 0 0 4px #FDFFFC",
    isItalianIce: true
  };
  if (name.includes("sauces")) return { background: "#C0392B", color: "#FDFFFC" };
  if (name.includes("candy")) return { background: "#9B59B6", color: "#FDFFFC" };
  if (name.includes("nuts")) return { background: "#8B6340", color: "#FDFFFC" };
  if (name.includes("sprinkles")) return { 
    background: "repeating-linear-gradient(45deg, #FF4F79, #FF4F79 20px, #98E6B3 20px, #98E6B3 40px)", 
    color: "#FDFFFC",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)"
  };
  return { background: "#98E6B3", color: "#020100" }; // fallback
}

function getCategoryColorHex(categoryName: string) {
  const name = categoryName.toLowerCase();
  if (name.includes("classic")) return "#FF4F79";
  if (name.includes("chocolate")) return "#572608";
  if (name.includes("fruit")) return "#FF6B35";
  if (name.includes("vegan")) return "#2CC72A";
  if (name.includes("italian ice")) return "#009246"; // Using Italian green as the tint base
  if (name.includes("sauces")) return "#C0392B";
  if (name.includes("candy")) return "#9B59B6";
  if (name.includes("nuts")) return "#8B6340";
  if (name.includes("sprinkles")) return "#FF4F79"; 
  return "#98E6B3"; // fallback
}

export default function FilterGrid({ items, categories, pageTitle, pageSubtitle, showImagePlaceholder = true, headerImage }: FilterGridProps) {
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <div style={{ background: "var(--color-base)", minHeight: "100vh", paddingBottom: "120px", color: "var(--color-cream)", position: "relative" }}>
      {/* Hero Section with Background */}
      <div style={{ 
        width: "100%", 
        backgroundImage: headerImage ? `url('${headerImage}')` : "none", 
        backgroundSize: "100% auto", 
        backgroundPosition: "center",
        position: "relative"
      }}>
        {/* Subtle light overlay for readability */}
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: "rgba(253, 255, 252, 0.15)", 
          zIndex: 1 
        }} />

        <section style={{ 
          padding: "85px 24px 95px", 
          textAlign: "center", 
          maxWidth: "800px", 
          margin: "0 auto", 
          position: "relative", 
          zIndex: 2 
        }}>
          <h1 className="heading" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: "var(--color-cream)", marginBottom: "8px" }}>
            {pageTitle}
          </h1>
          {pageSubtitle && (
            <div style={{ fontSize: "18px", opacity: 0.9, color: "var(--color-cream)", lineHeight: 1.6, fontWeight: 500 }}>
              {pageSubtitle}
            </div>
          )}
        </section>
      </div>

      {/* Global Menu Styles */}
      <style>{`
        .gutter-doodles {
          position: absolute;
          top: 0;
          bottom: 0;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          background-size: 200px 600px;
          background-repeat: repeat-y;
          opacity: 0.6; /* Higher opacity for better visibility */
        }

        .gutter-doodles.left {
          left: 0;
          width: calc((100% - 1220px) / 2);
          background-position: right top;
        }

        .gutter-doodles.right {
          right: 0;
          width: calc((100% - 1220px) / 2);
          background-position: left top;
        }

        @media (max-width: 1250px) {
          .gutter-doodles { display: none; }
        }

        /* Themed Colored SVG with BOLD Strokes */
        .gutter-doodles.left, .gutter-doodles.right {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='600'%3E%3Cg fill='none' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 50l5 5' stroke='%23FF4F79'/%3E%3Cg transform='translate(50, 150) rotate(-30)'%3E%3Cellipse cx='0' cy='0' rx='4' ry='7' stroke='%233B1A08'/%3E%3Cpath d='M0 7 L 0 25' stroke='%233B1A08'/%3E%3C/g%3E%3Cg transform='translate(30, 300)'%3E%3Ccircle cx='0' cy='10' r='5' stroke='%23FF6B35'/%3E%3Cpath d='M0 5 Q 5 -5, 10 0' stroke='%23FF6B35'/%3E%3C/g%3E%3Cg transform='translate(60, 450)'%3E%3Cpath d='M-8-15 L 8-15 L 5 10 L-5 10 Z' stroke='%234A7C59'/%3E%3Cpath d='M0-15 L 0-25 L 5-25' stroke='%234A7C59'/%3E%3C/g%3E%3Cpath d='M10 550h8' stroke='%2398E6B3'/%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.75;
        }

        .waffle-texture {
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(139, 99, 64, 0.15) 15px, rgba(139, 99, 64, 0.15) 16px),
            repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(139, 99, 64, 0.15) 15px, rgba(139, 99, 64, 0.15) 16px);
        }

        .melting-drip {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 40px;
          background-color: var(--drip-color);
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40' preserveAspectRatio='none'%3E%3Cpath d='M0 0h120v5c-5 0-5 30-10 30s-5-30-10-30-5 15-10 15-5-15-10-15-5 25-10 25-5-25-10-25-5 12-10 12-5-12-10-12-5 20-10 20-5-20-10-20-5 10-10 10-5-10-10-10-5 35-10 35-5-35-10-35z' fill='%23000'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40' preserveAspectRatio='none'%3E%3Cpath d='M0 0h120v5c-5 0-5 30-10 30s-5-30-10-30-5 15-10 15-5-15-10-15-5 25-10 25-5-25-10-25-5 12-10 12-5-12-10-12-5 20-10 20-5-20-10-20-5 10-10 10-5-10-10-10-5 35-10 35-5-35-10-35z' fill='%23000'/%3E%3C/svg%3E");
          -webkit-mask-repeat: repeat-x;
          mask-repeat: repeat-x;
          -webkit-mask-size: 320px 100%;
          mask-size: 320px 100%;
          z-index: 10;
          pointer-events: none;
        }

        /* Italian Ice tricolor drip — gradient follows the drip shape */
        .melting-drip-italian {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(to right, #009246 0%, #009246 33.3%, #FDFFFC 33.3%, #FDFFFC 66.6%, #CE2B37 66.6%, #CE2B37 100%);
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40' preserveAspectRatio='none'%3E%3Cpath d='M0 0h120v5c-5 0-5 30-10 30s-5-30-10-30-5 15-10 15-5-15-10-15-5 25-10 25-5-25-10-25-5 12-10 12-5-12-10-12-5 20-10 20-5-20-10-20-5 10-10 10-5-10-10-10-5 35-10 35-5-35-10-35z' fill='%23000'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40' preserveAspectRatio='none'%3E%3Cpath d='M0 0h120v5c-5 0-5 30-10 30s-5-30-10-30-5 15-10 15-5-15-10-15-5 25-10 25-5-25-10-25-5 12-10 12-5-12-10-12-5 20-10 20-5-20-10-20-5 10-10 10-5-10-10-10-5 35-10 35-5-35-10-35z' fill='%23000'/%3E%3C/svg%3E");
          -webkit-mask-repeat: repeat-x;
          mask-repeat: repeat-x;
          -webkit-mask-size: 320px 100%;
          mask-size: 320px 100%;
          z-index: 10;
          pointer-events: none;
        }

        /* Black outline that follows the drip contour */
        .melting-drip-outline {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 40px;
          z-index: 11;
          pointer-events: none;
          background-repeat: repeat-x;
          background-size: 320px 100%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40' preserveAspectRatio='none'%3E%3Cpath d='M120 5c-5 0-5 30-10 30s-5-30-10-30c-5 0-5 15-10 15s-5-15-10-15c-5 0-5 25-10 25s-5-25-10-25c-5 0-5 12-10 12s-5-12-10-12c-5 0-5 20-10 20s-5-20-10-20c-5 0-5 10-10 10s-5-10-10-10c-5 0-5 35-10 35s-5-35-10-35' fill='none' stroke='%23020100' stroke-width='1.2'/%3E%3C/svg%3E");
        }

        @media (max-width: 600px) {
          .melting-drip, .melting-drip-italian {
            -webkit-mask-size: 200px 100%;
            mask-size: 200px 100%;
            height: 25px;
          }
          .melting-drip-outline {
            background-size: 200px 100%;
            height: 25px;
          }
        }

        .masonry-container {
          column-count: 3;
          column-gap: 24px;
        }
        @media (max-width: 1000px) { .masonry-container { column-count: 2 !important; } }
        @media (max-width: 600px) { .masonry-container { column-count: 1 !important; } }

      `}</style>

      {/* Side Gutter Doodles (visible only on wide screens and below hero) */}
      <div style={{ position: "absolute", top: "600px", left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
        <div className="gutter-doodles left" />
        <div className="gutter-doodles right" />
      </div>

      {/* Grid rendering by category section */}
      <div style={{ padding: "0", position: "relative", zIndex: 2 }}>
        {sortedCategories.map(cat => {
          const catItems = items.filter(item => item.category?.slug === cat.slug);
          if (catItems.length === 0) return null;
          const style = getCategoryStyle(cat.title);

          return (
            <div key={cat._id} id={`category-${cat.slug}`} style={{ marginBottom: "64px", scrollMarginTop: "96px" }}>
              {/* Full Bleed Header */}
              <div style={{ 
                background: style.background, 
                color: style.color, 
                textShadow: style.textShadow,
                borderTop: (style as any).isItalianIce ? "2px solid #020100" : "none",
                padding: "14px 24px 10px 24px", 
                width: "100%", 
                position: "relative",
                overflow: "visible",
                zIndex: 5
              }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                  <h2 className="heading" style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: 0, lineHeight: 1, letterSpacing: "0.02em" }}>
                    {cat.title}
                  </h2>
                </div>
                {/* Dynamic Drip Edge */}
                {(style as any).isItalianIce ? (
                  <>
                    <div className="melting-drip-italian" />
                    <div className="melting-drip-outline" />
                  </>
                ) : (
                  <div 
                    className="melting-drip" 
                    style={{ "--drip-color": style.background } as React.CSSProperties} 
                  />
                )}
              </div>

              {/* Masonry Grid Constraints Option 3 */}
              <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 0" }}>
                <div className="masonry-container">
                  {catItems.map((item, i) => (
                    <AnimatedCard key={item._id} item={item} index={i} categoryTitle={cat.title} showImagePlaceholder={showImagePlaceholder} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnimatedCard({ item, index, categoryTitle, showImagePlaceholder }: { item: FilterItem, index: number, categoryTitle: string, showImagePlaceholder: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isTaller = index % 3 === 2; // Every 3rd card is taller
  const placeholderHeight = isTaller ? "320px" : "180px";
  const tintColor = getCategoryColorHex(categoryTitle);

  return (
    <article
      ref={rootRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease",
        breakInside: "avoid",
        marginBottom: "24px",
        backgroundColor: "var(--color-surface)", 
        border: "1px solid rgba(201, 168, 124, 0.15)",
        borderRadius: "6px",
        overflow: "hidden", 
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        position: "relative",
        "--glow-color": `${tintColor}30`
      } as React.CSSProperties}
      className="filter-card waffle-texture"
    >
      <style>{`
        .filter-card:hover {
          background: rgba(43, 44, 40, 0.4); 
          border-color: rgba(201, 168, 124, 0.3);
          box-shadow: 0 10px 30px var(--glow-color);
          transform: translateY(-4px) !important;
        }

        .staff-pick-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--color-gold);
          color: var(--color-navy);
          font-family: var(--font-rozha), serif;
          font-size: 10px;
          padding: 8px 6px;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.1;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transform: rotate(15deg);
          border: 1px dashed rgba(0,0,0,0.2);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      {item.isStaffPick && (
        <div className="staff-pick-badge">
          {item.staffPickMessage || "Staff Pick"}
        </div>
      )}
      
      {/* Category Tinted Placeholder — only for toppings */}
      {showImagePlaceholder && (
        <div style={{ 
          width: "100%", 
          height: placeholderHeight, 
          backgroundColor: tintColor, 
          opacity: 0.12,
          transition: "opacity 0.3s ease"
        }} className="placeholder-image" />
      )}
      <style>{`
        .filter-card:hover .placeholder-image {
          opacity: 0.18 !important;
        }
      `}</style>

      {/* Text Content */}
      <div style={{ padding: showImagePlaceholder ? "28px" : "18px 22px" }}>
        <h3 className="heading" style={{ fontFamily: "var(--font-rozha), Georgia, serif", fontSize: showImagePlaceholder ? "24px" : "18px", color: "var(--color-cream)", marginBottom: "6px", letterSpacing: "0.02em" }}>{item.name}</h3>
        {item.description && (
          <p style={{ fontFamily: "var(--font-lora), serif", fontStyle: "italic", fontSize: "14px", color: "#020100", lineHeight: 1.5, margin: 0, opacity: 0.85 }}>
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}
