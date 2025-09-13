"use client"
import styles from "../clientview/home.module.css";
import { FaBehance, FaLinkedin, FaTwitter, FaEnvelope, FaDribbble } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Left Content */}
      <div className={styles.content}>
        <p className={styles.subtitle}>This is Anosh Khan</p>
        <h1 className={styles.title}>Mentor and <br /> Mern Stack Developer</h1>
        <p className={styles.experience}>With 4+ years of experience</p>

        {/* Buttons */}
        <div className={styles.buttons}>
         <button
  className={styles.sayHello}
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Contact me
</button>

<button
  className={styles.workDemo}
  onClick={() => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Projects
</button>

        </div>

        {/* Clients */}
        <div className={styles.clients}>
          <div className={styles.avatars}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="client" />
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="client" />
            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="client" />
          </div>
          <span>44+ Recent client</span>
        </div>

        {/* Stats */}
        <div className={styles.stats} style={{gap: '150px'}}>
          <div >
            <h2>4+</h2>
            <p>Years of experience</p>
          </div>
          <div>
            <h2>2+</h2>
            <p>Years of  Mentorship</p>
          </div>
        
          <div>
            <h2>100+</h2>
            <p>Project completed</p>
          </div>
         
          <div>
            <h2>100+</h2>
            <p>Happy Clients</p>
          </div>
        
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.rightSection}>
        {/* Hero Image */}
        <div className={styles.imageWrapper}>
          <img src="/Dp.png" alt="designer" className={styles.image} />
        </div>

        {/* Social Icons (Overlay Right Corner) */}
        <div className={styles.socialIcons}>
          <a href="#"><FaDribbble style={{placeItems: 'center', paddingTop: '4px', paddingLeft: '10px'}}/></a>
          <a href="#"><FaBehance style={{placeItems: 'center', paddingTop: '4px', paddingLeft: '10px'}} /></a>
          <a href="#"><FaLinkedin style={{placeItems: 'center', paddingTop: '4px', paddingLeft: '10px'}} /></a>
          <a href="#"><FaTwitter style={{placeItems: 'center', paddingTop: '4px', paddingLeft: '10px'}} /></a>
          <a href="#"><FaEnvelope style={{placeItems: 'center', paddingTop: '4px', paddingLeft: '10px'}} /></a>
        </div>
      </div>
    </section>
  );
}
