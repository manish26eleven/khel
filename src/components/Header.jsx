import { useState } from "react";
import useWindowSize from "../hooks/useWindowsize";

export default function Header() {
  const { width } = useWindowSize();
    const isMobile = width <= 768;
    const [menuOpen, setMenuOpen] =  useState(false);
  return (
    <>
      <div
        style={{
          // position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "88px",
          display: "flex",
          backgroundColor: "rgba(255,255,255,0.2)",
          justifyContent: 'center',
          alignItems: "center",
          zIndex: 10,
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Left Logo */}
        <div
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginLeft: "30px",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Crik.ai
        </div>

        {/* Middle + Right grouped */}
       {/* {isMobile  ? <div onClick={() => setMenuOpen(!menuOpen)} style={{ fontSize: "30px", cursor: "pointer" }}>
  ☰
</div> :  <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "72px",
            marginRight: "20px",
          }}
        >
          <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed, sans-serif", fontWeight: 500 }}>Home</span>
          <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed, sans-serif", fontWeight: 500 }}>Services</span>
          <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed, sans-serif", fontWeight: 500 }}>About</span>
          <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed, sans-serif", fontWeight: 500 }}>PortFolio</span>
          <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed, sans-serif", fontWeight: 500 }}>Pricing</span>

          <button
            style={{
              background: "#a1118eff",
              color: "white",
              fontFamily: "Roboto Condensed, sans-serif",
              height: "56px",
              borderRadius: "10px",
              border: "none",
              fontSize: "25px",
              fontWeight: 500,
              padding: "0 25px",
            }}
          >
            Login
          </button>
        </div>} */}
      </div>
    </>
  );
}
