import { useState } from "react";
import useWindowSize from "../hooks/useWindowsize";

export default function Header() {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <div
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: "88px",
          display: "flex",
          backgroundColor: "rgba(255,255,255,0.2)",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
          backdropFilter: "blur(10px)",
          // position: "fixed",
        }}
      >
        {/* Logo */}
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

        {/* Desktop Menu */}
        {!isMobile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "72px",
              marginRight: "20px",
            }}
          >
            <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed", fontWeight: 500 }}>Home</span>
            <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed", fontWeight: 500 }}>Services</span>
            <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed", fontWeight: 500 }}>About</span>
            <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed", fontWeight: 500 }}>Portfolio</span>
            <span style={{ fontSize: "25px", fontFamily: "Roboto Condensed", fontWeight: 500 }}>Pricing</span>

            <button
              style={{
                background: "#a1118e",
                color: "white",
                fontFamily: "Roboto Condensed",
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
          </div>
        ) : (
          // MOBILE HAMBURGER ICON
          <div
            onClick={() => setMenuOpen(true)}
            style={{ fontSize: "32px", cursor: "pointer", marginRight: "25px" }}
          >
            ☰
          </div>
        )}
      </div>

      {/* ===== MOBILE SIDE MENU ===== */}

      {/* Black overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            background: "rgba(0,0,0,0.4)",
            zIndex: 15,
          }}
        ></div>
      )}

      {/* Slide-in Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: menuOpen ? "0" : "-260px",
          width: "260px",
          height: "100vh",
          background: "#fff",
          padding: "20px",
          boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
          transition: "left 0.3s ease",
          zIndex: 20,
        }}
      >
        {/* Close Button */}
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            fontSize: "32px",
            cursor: "pointer",
            textAlign: "right",
            marginBottom: "20px",
          }}
        >
          ✕
        </div>

        {/* Menu List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <span style={{ fontSize: "22px", fontWeight: 500 }}>Home</span>
          <span style={{ fontSize: "22px", fontWeight: 500 }}>Services</span>
          <span style={{ fontSize: "22px", fontWeight: 500 }}>About</span>
          <span style={{ fontSize: "22px", fontWeight: 500 }}>Portfolio</span>
          <span style={{ fontSize: "22px", fontWeight: 500 }}>Pricing</span>

          <button
            style={{
              marginTop: "20px",
              background: "#a1118e",
              color: "white",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              fontSize: "20px",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
