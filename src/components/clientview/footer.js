"use client";
import styles from "./footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const links = ["Home", "About", "Portfolio", "Skills", "Pricing"];

  // Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Menu Links */}
      <ul className={styles.menu}>
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={styles.link}
              onClick={(e) => handleScroll(e, item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className={styles.socials}>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>

      {/* Copy */}
      <p className={styles.copy}>© 2025 Anosh Khan. All rights reserved.</p>
    </footer>
  );
}
