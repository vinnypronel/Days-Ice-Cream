"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export type Category = {
  _id: string;
  title: string;
  slug: string;
  order: number;
};

export type FilterItem = {
  _id: string;
  name: string;
  description: string;
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
}

export default function FilterGrid({ items, categories, pageTitle, pageSubtitle }: FilterGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter(item => item.category?.slug === activeCategory);

  return (
    <div style={{ background: "var(--color-base)", minHeight: "100vh", paddingBottom: "120px", color: "var(--color-cream)" }}>
      {/* Hero Section */}
      <section style={{ padding: "80px 24px 40px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="heading" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: "var(--color-cream)", marginBottom: "16px" }}>
          {pageTitle}
        </h1>
        {pageSubtitle && (
          <p style={{ fontSize: "18px", opacity: 0.8, color: "var(--color-cream)", lineHeight: 1.6 }}>
            {pageSubtitle}
          </p>
        )}
      </section>

      {/* Sticky Filter Bar */}
      <div 
        style={{ 
          position: "sticky", 
          top: "80px", // Align right underneath sticky navbar
          zIndex: 40, 
          background: "rgba(253, 255, 252, 0.95)", // Fallback to porcelain with opacity
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(84, 106, 118, 0.15)", // Slate boundary
          padding: "16px 24px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap"
        }}
      >
        <button
          onClick={() => setActiveCategory("all")}
          style={{
            background: activeCategory === "all" ? "var(--color-accent)" : "transparent",
            color: activeCategory === "all" ? "var(--color-base)" : "var(--color-cream)",
            border: `1px solid ${activeCategory === "all" ? "var(--color-accent)" : "rgba(84, 106, 118, 0.3)"}`,
            padding: "8px 20px",
            borderRadius: "999px",
            fontSize: "13px",
            fontFamily: "var(--font-lora), serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat._id}
            onClick={() => setActiveCategory(cat.slug)}
            style={{
              background: activeCategory === cat.slug ? "var(--color-accent)" : "transparent",
              color: activeCategory === cat.slug ? "var(--color-base)" : "var(--color-cream)",
              border: `1px solid ${activeCategory === cat.slug ? "var(--color-accent)" : "rgba(84, 106, 118, 0.3)"}`,
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "13px",
              fontFamily: "var(--font-lora), serif",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ maxWidth: "1200px", margin: "64px auto 0", padding: "0 24px" }}>
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "64px 0", opacity: 0.6 }}>
            <p>No items found in this section right now.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "40px" }}>
            {filteredItems.map(item => (
              <AnimatedCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Separate observer component bound safely to the viewport
function AnimatedCard({ item }: { item: FilterItem }) {
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

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

  return (
    <article
      ref={rootRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "pointer"
      }}
      className="filter-card"
    >
      <style>{`
        .filter-card:hover .img-scaler {
          transform: scale(1.05);
        }
      `}</style>
      
      <div style={{ width: "100%", aspectRatio: "4/3", background: "var(--color-surface)", overflow: "hidden", position: "relative", borderRadius: "12px" }}>
        {item.imageUrl ? (
          <Image 
            src={item.imageUrl} 
            alt={item.name} 
            fill 
            style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            className="img-scaler"
          />
        ) : (
          <div className="img-scaler" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", opacity: 0.2, transition: "transform 0.4s ease" }}>🍦</div>
        )}
        <div style={{ position: "absolute", top: "12px", right: "12px", background: "var(--color-base)", color: "var(--color-cream)", padding: "4px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
          {item.category?.title || "Limited"}
        </div>
      </div>
      <div>
        <h3 className="heading" style={{ fontSize: "24px", color: "var(--color-cream)", marginBottom: "8px" }}>{item.name}</h3>
        {item.description && (
          <p style={{ fontSize: "15px", color: "var(--color-warm-white)", lineHeight: 1.6, margin: 0 }}>
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}
