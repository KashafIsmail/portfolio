"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../clientview/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <span>Anosh Khan</span>
      </div>

      {/* Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><Link href="#hero" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        <li><Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
       
    <a href="/#pricing" className={styles.hireBtn}>
  Hire me
</a>

       
      </ul>

      {/* Hamburger */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={26} color="#ff4ecd" /> : <FaBars size={26} color="#ff4ecd" />}
      </div>
    </nav>
  );
}
