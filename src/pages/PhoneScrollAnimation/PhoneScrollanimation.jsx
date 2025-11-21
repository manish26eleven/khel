import React, { useEffect, useState } from "react";

export default function PhoneScrollAnimation() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll ranges
  const animEnd = 800;     // end of animation
  const freezeEnd = 29900;  // end of freeze section

  let rotateY = 0;
  let rotateZ = 0;
  let scale = 1;
  let translateY = 0;
  let position = "sticky";
  let top = "200px";  // where it freezes

  if (scroll < animEnd) {
    // --- PHASE 1: ANIMATION ---
    const t = scroll / animEnd;

    rotateY = -20 + 20 * t;
    rotateZ = 8 - 8 * t;
    scale = 3.9 - 2.9 * t;
  } else if (scroll < freezeEnd) {
    // --- PHASE 2: FREEZE ---
    rotateY = 0;
    rotateZ = 0;
    scale = 1;
  } else {
    // --- PHASE 3: NORMAL SCROLL (after freeze)
    position = "relative";
    top = "0px";
  }

  return (
    <div style={{ height: "300vh", paddingTop: "200px" ,  MarginTop: "2800px", }}>
      <div
        style={{
          width: "500px",
          margin: "0 auto",
          perspective: "1200px",
          height: "100vh",
          MarginTop: "800px",
        }}
      >
        <img
          src="https://www.free-mockup.com/wp-content/uploads/edd/2025/08/Samsung-Galaxy-S25-Mockups-01.webp"
          alt="phone"
          style={{
            width: "100%",
            position,
            top,
            transform: `
              perspective(1200px)
              rotateY(${rotateY}deg)
              rotateZ(${rotateZ}deg)
              scale(${scale})
            `,
            transition: "transform 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}
