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
  if (name.includes("nuts")) return { background: "#D29E6C", color: "#020100" };
  if (name.includes("sprinkles")) return { 
    background: "linear-gradient(to right, #FF4F79, #FF6B35, #FFD700, #98E6B3, #00BFFF, #9B59B6)", 
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
  if (name.includes("nuts")) return "#D29E6C";
  if (name.includes("sprinkles")) return "#FF4F79"; 
  return "#98E6B3"; // fallback
}

export default function FilterGrid({ items, categories, pageTitle, pageSubtitle, showImagePlaceholder = true, headerImage }: FilterGridProps) {
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "var(--color-base)", minHeight: "100vh", paddingBottom: "120px", color: "var(--color-cream)", position: "relative" }}>
      {/* Hero Section with Background */}
      <div style={{ 
        width: "100%", 
        backgroundImage: headerImage ? `url('${headerImage}')` : "none", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        position: "relative",
        borderTop: "1.5px solid #020100",
        borderBottom: "1.5px solid #020100"
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
        .waffle-texture {
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(139, 99, 64, 0.28) 15px, rgba(139, 99, 64, 0.28) 16px),
            repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(139, 99, 64, 0.28) 15px, rgba(139, 99, 64, 0.28) 16px);
        }

        .melting-drip {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 40px;
          background: var(--drip-background);
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
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40' preserveAspectRatio='none'%3E%3Cpath d='M120 5c-5 0-5 30-10 30s-5-30-10-30c-5 0-5 15-10 15s-5-15-10-15c-5 0-5 25-10 25s-5-25-10-25c-5 0-5 12-10 12s-5-12-10-12c-5 0-5 20-10 20s-5-20-10-20c-5 0-5 10-10 10s-5-10-10-10c-5 0-5 35-10 35s-5-35-10-35' fill='none' stroke='%23020100' stroke-width='0.2'/%3E%3C/svg%3E");
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
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
        }
      `}</style>

      {/* Grid rendering by category section */}
      <div style={{ width: "100%", padding: "0", position: "relative", zIndex: 2 }}>
        {sortedCategories.map(cat => {
          const catItems = items.filter(item => item.category?.slug === cat.slug);
          if (catItems.length === 0) return null;
          const style = getCategoryStyle(cat.title);

          return (
            <div key={cat._id} id={`category-${cat.slug}`} style={{ width: "100%", marginBottom: "40px", scrollMarginTop: "96px" }}>
              {/* Full Bleed Header */}
              <div style={{ 
                background: style.background, 
                color: style.color, 
                textShadow: style.textShadow,
                borderTop: (style as any).isItalianIce ? "1.5px solid #020100" : "none",
                padding: "12px 24px 8px 24px", 
                width: "calc(100% + 4px)", 
                marginLeft: "-2px",
                position: "relative",
                overflow: "visible",
                zIndex: 5
              }}>
                <div style={{ maxWidth: "1540px", margin: "0 auto", textAlign: "center" }}>
                  <h2 className="heading" style={{ fontSize: "clamp(24px, 3.5vw, 34px)", margin: 0, lineHeight: 1, letterSpacing: "0.02em" }}>
                    {cat.title}
                  </h2>
                </div>
                {/* Dynamic Drip Edge */}
                {(style as any).isItalianIce ? (
                  <div className="melting-drip-italian" />
                ) : (
                  <div 
                    className="melting-drip" 
                    style={{ "--drip-background": style.background } as React.CSSProperties} 
                  />
                )}
                {/* Thin Outline applied to all */}
                <div className="melting-drip-outline" />
              </div>

              {/* Grid Constraints */}
              <div style={{ maxWidth: "1540px", margin: "0 auto", padding: "48px 24px 0" }}>
                <BalancedGrid itemCount={catItems.length}>
                  {catItems.map((item, i) => (
                    <AnimatedCard key={item._id} item={item} index={i} categoryTitle={cat.title} showImagePlaceholder={showImagePlaceholder} />
                  ))}
                </BalancedGrid>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Grid Balancing Component
function BalancedGrid({ children, itemCount }: { children: React.ReactNode, itemCount: number }) {
  const [naturalMaxCols, setNaturalMaxCols] = useState(6);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      // Mirroring the 1540px container + padding logic
      const availableW = Math.min(w, 1540) - 48; 
      const cardW = 260;
      const gap = 24;
      const cols = Math.floor((availableW + gap) / (cardW + gap));
      setNaturalMaxCols(cols);
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  // Logical Balancing: Force a lower column count if it avoids 1 or 2 orphan "widow" cards
  let bestCols = Math.min(naturalMaxCols, itemCount);
  if (bestCols > 1) {
    const remainder = itemCount % bestCols;
    // If we have 1 or 2 lonely cards at bottom
    if ((remainder === 1 || remainder === 2) && itemCount > bestCols) {
      // Try reducing column count until we get a better balance (orphan >= 3 or 0)
      for (let c = bestCols - 1; c >= 3; c--) {
        const r = itemCount % c;
        if (r === 0 || r >= 3) {
          bestCols = c;
          break;
        }
      }
    }
  }

  const cardW = 260;
  const gap = 24;
  const maxWidth = bestCols * cardW + (bestCols - 1) * gap;

  return (
    <div 
      ref={containerRef}
      className="masonry-container" 
      style={{ 
        maxWidth: maxWidth > 0 ? `${maxWidth}px` : "100%", 
        margin: "0 auto" 
      }}
    >
      {children}
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

  const placeholderHeight = "195px";
  const tintColor = getCategoryColorHex(categoryTitle);

  const currentCardHeight = showImagePlaceholder ? "280px" : "130px";

  return (
    <article
      ref={rootRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease",
        height: currentCardHeight,
        width: "260px",
        flex: "0 1 260px",
        marginBottom: "0",
        backgroundColor: "#FCCE97", 
        border: "1.2px solid #020100",
        borderRadius: "6px",
        overflow: "hidden", 
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
        boxShadow: "0 4px 12px rgba(2,1,0,0.06)",
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
          borderBottom: "1.2px solid #020100",
          transition: "opacity 0.3s ease"
        }} className="placeholder-image" />
      )}
      <style>{`
        .filter-card:hover .placeholder-image {
          opacity: 0.18 !important;
        }
      `}</style>

      {/* Text Content */}
      <div style={{ 
        flex: 1, 
        padding: "16px 20px", 
        height: "165px", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start" 
      }}>
        <h3 className="heading" style={{ fontFamily: "var(--font-rozha), Georgia, serif", fontSize: showImagePlaceholder ? "22px" : "20px", color: "var(--color-cream)", marginBottom: "4px", letterSpacing: "0.02em", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{item.name}</h3>
        {item.description && (
          <p style={{ fontFamily: "var(--font-lora), serif", fontStyle: "italic", fontSize: "14px", color: "#020100", lineHeight: 1.4, margin: 0, opacity: 0.85, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}
