"use client";
import styles from "../clientview/pricing.module.css";

const PricingPlan = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className={styles.pricingSection}>
      <h2 className={styles.pricingTitle}>
       Flexible Pricing Plans 
      </h2>

      <div className={styles.pricingContainer}>
        <div className={styles.pricingCard}>
          <h3>Hourly Basis</h3>
          <p className={styles.price}>
            $34.99 <span>Per hour</span>
          </p>
          <ul className={styles.list}>
            <li>Expert in MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>Firebase Integration & Real-time APIs</li>
            <li>Custom Web App Development</li>
            <li>Flexible & Scalable Codebase</li>
            <li>4 Years of Professional Experience</li>
          </ul>
          <button className={styles.btn} onClick={scrollToContact}>
            Start Project
          </button>
        </div>

        <div className={`${styles.pricingCard} ${styles.popular}`}>
          <h3>
            Project Based <span className={styles.popularBadge}>POPULAR</span>
          </h3>
          <p className={styles.price}>
            $600.00 <span>Per project</span>
          </p>
          <ul className={styles.list}>
            <li>End-to-End MERN Stack Solutions</li>
            <li>API Development & Integration</li>
            <li>Firebase Authentication & Hosting</li>
            <li>Optimized Database Design</li>
            <li>Clean, Maintainable Code</li>
          </ul>
          <button className={styles.btn} onClick={scrollToContact}>
            Start Project
          </button>
        </div>

        <div className={styles.pricingCard}>
          <h3>Full Time Engagement</h3>
          <p className={styles.price}>
            $1500.00 <span>Per month</span>
          </p>
          <ul className={styles.list}>
            <li>Dedicated 35-40 hrs/week availability</li>
            <li>Complete MERN Stack Development</li>
            <li>Firebase & Cloud Services</li>
            <li>Advanced API Architecture</li>
            <li>Proven 4 Years Industry Experience</li>
          </ul>
          <button className={styles.btn} onClick={scrollToContact}>
            Hire Full Time
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
