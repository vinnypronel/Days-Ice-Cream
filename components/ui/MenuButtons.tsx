"use client";

import RippleButton from "./RippleButton";

interface MenuButtonsProps {
  align?: "center" | "left" | "right";
  isNavbar?: boolean;
  layout?: "row" | "column";
}

export default function MenuButtons({ align = "center", isNavbar = false, layout = "column" }: MenuButtonsProps) {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: layout,
    alignItems: layout === "column" 
      ? (align === "right" ? "flex-end" : align === "left" ? "flex-start" : "center")
      : "center",
    justifyContent: "center",
    gap: isNavbar ? "14px" : (layout === "row" ? "16px" : "28px"),
    width: "fit-content",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <RippleButton
        variant="primary"
        href="/flavors"
        style={{
          padding: isNavbar ? "6px 20px" : "14px 32px",
          fontSize: isNavbar ? "11px" : "13px",
          letterSpacing: isNavbar ? "0.18em" : "0.16em",
        }}
      >
        VIEW OUR FLAVORS
      </RippleButton>
      <RippleButton
        variant="mint"
        href="/toppings"
        style={{
          padding: isNavbar ? "5px 12px" : "13px 26px",
          fontSize: isNavbar ? "10px" : "12px",
          alignSelf: align === "right" ? "flex-end" : align === "left" ? "flex-start" : "center",
        }}
      >
        AND OUR TOPPINGS!
      </RippleButton>
    </div>
  );
}
