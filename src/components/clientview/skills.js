"use client";

import React, { useState, useEffect } from "react";
import { Lightbulb, BarChart2, PenTool, CheckSquare } from "lucide-react";
import styles from "./skills.module.css";

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncateText = (text, limit = 200) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  const cards = [
    {
      icon: <Lightbulb size={40} />,
      title: "Problem Solving",
      text: "I specialize in breaking down complex web development issues into smaller steps. Whether it's debugging, optimizing queries, or improving rendering, I focus on creating practical, scalable solutions.",
    },
    {
      icon: <BarChart2 size={40} />,
      title: "Development",
      text: "I have expertise in frontend and backend. From React and Next.js UIs to Node.js and MongoDB backends, I deliver secure, high-performance apps with smooth API integration and real-time Firebase features.",
    },
    {
      icon: <PenTool size={40} />,
      title: "Designing",
      text: "I design clean, functional, and responsive interfaces. My focus is on user-friendly layouts that enhance interactions, ensuring consistency across devices and balancing aesthetics with technical execution.",
    },
    {
      icon: <CheckSquare size={40} />,
      title: "Mentoring",
      text: "As a mentor, I simplify MERN concepts, frontend frameworks, and Firebase integration. I provide real-world examples, version control guidance, and help learners structure and deploy full projects step by step.",
    },
  ];

  return (
    <section id="skills" className={styles.section}> {/* 👈 id added */}
      <div className={styles.header}>
        <h3 className={styles.subtitle}>MY EXPERTISE</h3>
        <h1 className={styles.title}>Skills as a Developer & Mentor</h1>
        <p className={styles.description}>
          I combine technical expertise with mentoring skills to build scalable
          products and guide others in their learning journey.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              hoveredCard === index ? styles.cardHover : ""
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.icon}>{card.icon}</div>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardText}>{truncateText(card.text, 200)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
