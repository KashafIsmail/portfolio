"use client";
import { useState, useEffect } from "react";

export default function Journey() {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive widths
  let imageFlex = "1 1 400px";
  let contentFlex = "1 1 400px";
  let fontSizeTitle = "26px";
  let fontSizeText = "16px";
  let paddingSection = "4rem 2rem";
  let buttonPadding = "0.9rem 1.8rem";

  if (windowWidth <= 768) {
    // Mobile
    imageFlex = "1 1 100%";
    contentFlex = "1 1 100%";
    fontSizeTitle = "18px";
    fontSizeText = "14px";
    paddingSection = "3rem 1rem";
    buttonPadding = "0.8rem 1.5rem";
  } else if (windowWidth <= 1024) {
    // Tablet
    imageFlex = "1 1 45%";
    contentFlex = "1 1 50%";
    fontSizeTitle = "32px";
    fontSizeText = "15px";
    paddingSection = "3.5rem 1.5rem";
    buttonPadding = "0.85rem 1.6rem";
  }

  return (
    <section
    id="about"
      style={{
        padding: paddingSection,
        fontFamily: "Poppins, sans-serif",
        marginRight: windowWidth > 1200 ? "150px" : "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Left Image */}
        <div
          style={{
            flex: imageFlex,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/webdev.png"
            alt="Web Development"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "1rem",
              objectFit: "cover",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.6)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(0, 0, 0, 0.8)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0, 0, 0, 0.6)";
            }}
          />
        </div>

        {/* Right Content */}
        <div style={{ flex: contentFlex, color: "#cfcfcf", textAlign: windowWidth <= 768 ? "center" : "left" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
              color: "#b3b3b3",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            Journey of Anosh Khan
          </p>

          <h2
            style={{
              fontSize: fontSizeTitle,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: "1rem",
            }}
          >
            Designing Experiences, Building Connections
          </h2>

          <p
            style={{
              fontSize: fontSizeText,
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Hi, I’m <b>Anosh Khan</b> — a developer with <b>4 years of experience</b> in <b>MERN Stack, Firebase, and API development</b>. My journey started
            with curiosity about how websites work, and today, I build digital
            products that not only look great but also create real impact. From
            designing sleek interfaces to developing powerful solutions, every
            step is about learning, growing, and connecting with people through
            technology.
          </p>

          <a
  href="#skills"
  style={{
    display: "inline-block",
    padding: buttonPadding,
    background: "linear-gradient(to right, #a855f7, #ec4899)",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "2rem",
    textDecoration: "none",
    transition: "all 0.4s ease",
    boxShadow: "0 8px 20px rgba(236, 72, 153, 0.3)",
    scrollBehavior: "smooth",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(to right, #ec4899, #a855f7)";
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 12px 25px rgba(168, 85, 247, 0.4)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background =
      "linear-gradient(to right, #a855f7, #ec4899)";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 20px rgba(236, 72, 153, 0.3)";
  }}
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Read More
</a>

        
        </div>
      </div>
    </section>
  );
}