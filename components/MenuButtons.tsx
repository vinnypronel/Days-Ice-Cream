"use client";

import RippleButton from "./RippleButton";

interface MenuButtonsProps {
  align?: "center" | "left" | "right";
  isNavbar?: boolean;
}

export default function MenuButtons({ align = "center", isNavbar = false }: MenuButtonsProps) {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isNavbar ? "column" : "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: isNavbar ? "4px" : "16px",
    width: "fit-content",
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
          padding: isNavbar ? "3px 10px" : "10px 24px",
          fontSize: isNavbar ? "9px" : "12px",
          alignSelf: align === "right" ? "flex-end" : align === "left" ? "flex-start" : "center",
        }}
      >
        AND OUR TOPPINGS!
      </RippleButton>
    </div>
  );
}
