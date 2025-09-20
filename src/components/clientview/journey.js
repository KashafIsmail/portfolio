"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../clientview/journey.module.css";

export default function Journey() {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className={`${styles.journeySection} ${
        windowWidth > 1200 ? styles.largeScreen : ""
      }`}
    >
      <div className={styles.journeyContainer}>
        {/* Left Image */}
        <div className={styles.journeyImageWrapper}>
          <Image
            src="/webdev.png"
            alt="Web Development"
            width={400}
            height={300}
            className={styles.journeyImage}
          />
        </div>

        {/* Right Content */}
        <div
          className={`${styles.journeyContent} ${
            windowWidth <= 768 ? styles.centerText : ""
          }`}
        >
          <p className={styles.journeySubtitle}>Journey of Anosh Khan</p>

          <h2 className={styles.journeyTitle}>
            Designing Experiences, Building Connections
          </h2>

          <p className={styles.journeyText}>
            Hi, I’m <b>Anosh Khan</b> a developer with{" "}
            <b>4 years of experience</b> in <b>MERN Stack, Firebase, and API
            development</b>. My journey started with curiosity about how websites
            work, and today, I build digital products that not only look great
            but also create real impact. From designing sleek interfaces to
            developing powerful solutions, every step is about learning, growing,
            and connecting with people through technology.
          </p>

          <a
            href="#skills"
            className={styles.journeyButton}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
