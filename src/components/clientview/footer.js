"use client";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  const links = ["Home", "About", "Portfolio", "Skills", "Contact"];
  return (
    <footer className={styles.footer}>
      <p>© 2025 Anosh Khan. </p>
      <ul>
        {links.map((item) => (
          <li key={item}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={styles.link}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
