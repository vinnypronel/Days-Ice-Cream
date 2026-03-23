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
};

interface FilterGridProps {
  items: FilterItem[];
  categories: Category[];
  pageTitle: string;
  pageSubtitle?: string;
  showImagePlaceholder?: boolean;
}

function getCategoryStyle(categoryName: string) {
  const name = categoryName.toLowerCase();
  
  if (name.includes("classic")) return { background: "#FF4F79", color: "#FDFFFC" };
  if (name.includes("chocolate")) return { background: "#3B1A08", color: "#FDFFFC" };
  if (name.includes("fruit")) return { background: "#FF6B35", color: "#FDFFFC" };
  if (name.includes("vegan")) return { background: "#4A7C59", color: "#FDFFFC" };
  if (name.includes("italian ice")) return { 
    background: "linear-gradient(to right, #009246 0%, #009246 33.3%, #FDFFFC 33.3%, #FDFFFC 66.6%, #CE2B37 66.6%, #CE2B37 100%)", 
    color: "#020100", 
    textShadow: "0 0 10px #FDFFFC, 0 0 4px #FDFFFC" 
  };
  if (name.includes("sauces")) return { background: "#C0392B", color: "#FDFFFC" };
  if (name.includes("candy")) return { background: "#9B59B6", color: "#FDFFFC" };
  if (name.includes("nuts")) return { background: "#8B6340", color: "#FDFFFC" };
  if (name.includes("sprinkles")) return { 
    background: "repeating-linear-gradient(45deg, #FF4F79, #FF4F79 20px, #546A76 20px, #546A76 40px)", 
    color: "#FDFFFC",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)"
  };
  return { background: "#546A76", color: "#FDFFFC" }; // fallback
}

function getCategoryColorHex(categoryName: string) {
  const name = categoryName.toLowerCase();
  if (name.includes("classic")) return "#FF4F79";
  if (name.includes("chocolate")) return "#3B1A08";
  if (name.includes("fruit")) return "#FF6B35";
  if (name.includes("vegan")) return "#4A7C59";
  if (name.includes("italian ice")) return "#009246"; // Using Italian green as the tint base
  if (name.includes("sauces")) return "#C0392B";
  if (name.includes("candy")) return "#9B59B6";
  if (name.includes("nuts")) return "#8B6340";
  if (name.includes("sprinkles")) return "#FF4F79"; 
  return "#546A76"; // fallback
}

export default function FilterGrid({ items, categories, pageTitle, pageSubtitle, showImagePlaceholder = true }: FilterGridProps) {
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <div style={{ background: "var(--color-base)", minHeight: "100vh", paddingBottom: "120px", color: "var(--color-cream)" }}>
      {/* Hero Section */}
      <section style={{ padding: "48px 24px 32px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="heading" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: "var(--color-cream)", marginBottom: "16px" }}>
          {pageTitle}
        </h1>
        {pageSubtitle && (
          <p style={{ fontSize: "18px", opacity: 0.8, color: "var(--color-cream)", lineHeight: 1.6 }}>
            {pageSubtitle}
          </p>
        )}
      </section>

      {/* Grid rendering by category section */}
      <div style={{ padding: "24px 0" }}>
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
                padding: "20px 24px", 
                width: "100%", 
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                  <h2 className="heading" style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: 0, letterSpacing: "0.02em" }}>
                    {cat.title}
                  </h2>
                </div>
              </div>

              {/* Masonry Grid Constraints Option 3 */}
              <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 0" }}>
                <div style={{ columnCount: 3, columnGap: "24px" }} className="masonry-container">
                  <style>{`
                    .masonry-container {
                       column-count: 3;
                    }
                    @media (max-width: 1000px) { .masonry-container { column-count: 2 !important; } }
                    @media (max-width: 600px) { .masonry-container { column-count: 1 !important; } }
                  `}</style>
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
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        breakInside: "avoid",
        marginBottom: "24px",
        background: "var(--color-surface)", 
        border: "1px solid rgba(201, 168, 124, 0.15)",
        borderRadius: "6px",
        overflow: "hidden", 
        display: "flex",
        flexDirection: "column",
        cursor: "default"
      }}
      className="filter-card"
    >
      <style>{`
        .filter-card:hover {
          background: rgba(43, 44, 40, 0.4); 
          border-color: rgba(201, 168, 124, 0.3);
        }
      `}</style>
      
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
          <p style={{ fontFamily: "var(--font-lora), serif", fontStyle: "italic", fontSize: "14px", color: "var(--color-warm-white)", lineHeight: 1.5, margin: 0, opacity: 0.8 }}>
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}
