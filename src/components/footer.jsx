export default function Footer() {
  return (
  
  <div
  style={{
    width: '100vw',
    background: "linear-gradient(135deg, #0f172a, #1e293b)",  // deep blue mix
    color: "white",
    padding: "80px 60px",
    marginTop: "160px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "60px",
      maxWidth: "1800px",
      margin: "0 auto",
    }}
  >
    {/* 1. Brand Column */}
    <div style={{ flex: "1", minWidth: "250px" }}>
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "800",
          fontFamily: "Roboto Condensed, sans-serif",
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Crik.ai
      </h2>

      <p
        style={{
          fontSize: "20px",
          lineHeight: "1.6",
          opacity: 0.8,
          marginTop: "16px",
          maxWidth: "350px",
        }}
      >
        Next-generation AI-powered cricket technology designed to bring
        professional-grade analysis, DRS systems, and advanced insights to every
        match.
      </p>
    </div>

    {/* 2. Quick Links */}
    <div style={{ flex: "1", minWidth: "200px" }}>
      <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
        Quick Links
      </h3>

      <ul style={{ listStyle: "none", padding: 0, fontSize: "20px", lineHeight: "2" }}>
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>About</li>
      </ul>
    </div>

    {/* 3. Resources (same layout as Quick Links) */}
    <div style={{ flex: "1", minWidth: "200px" }}>
      <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
        Resources
      </h3>

      <ul style={{ listStyle: "none", padding: 0, fontSize: "20px", lineHeight: "2" }}>
        <li>Blog</li>
        <li>Support</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    {/* 4. Contact Us */}
    <div style={{ flex: "1", minWidth: "250px" }}>
      <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "24px" }}>
        Contact Us
      </h3>

      <div style={{ fontSize: "20px", lineHeight: "2" }}>
        {/* Email */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "24px" }}>📧</span>
          <span>info@crik.ai</span>
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "24px" }}>📞</span>
          <span>+91 9876543210</span>
        </div>

        {/* Address */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <span style={{ fontSize: "24px" }}>📍</span>
          <span>New Delhi, India</span>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Bottom Line */}
  <div
    style={{
      marginTop: "60px",
      textAlign: "center",
      fontSize: "18px",
      opacity: 0.6,
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: "20px",
    }}
  >
    © {new Date().getFullYear()} Crik.ai — All Rights Reserved.
  </div>
</div>
  
  );
}