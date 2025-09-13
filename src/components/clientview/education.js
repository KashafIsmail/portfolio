import styles from "../clientview/education.module.css";
import Image from "next/image";

const posts = [
  {
    id: 1,
    date: "12th June, 2023",
    title: "How to become a good designer",
    desc:
      "To become a good designer, immerse yourself in design theory and practice, continually seek feedback.",
    img: "/edu1.jpg",
  },
  {
    id: 2,
    date: "21st Dec, 2023",
    title: "Best Practices for Inclusive User Experiences",
    desc:
      "To become a good designer, immerse yourself in design theory and practice.",
    img: "/edu2.jpg",
  },
  {
    id: 3,
    date: "20th Aug, 2023",
    title: "Effective Personas for Better Design Decisions",
    desc:
      "To become a good designer, immerse yourself in design theory design theory.",
    img: "/edu3.avif",
  },
];

export default function Education() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.heading}>
        A journey to the science of <br /> <span>Website Development</span>
      </h2>

      <div className={styles.grid}>
        {posts.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.thumb}>
              <Image src={p.img} alt={p.title} fill priority sizes="(max-width: 1200px) 33vw, 400px" />
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>
                <img src="/images/calendar.svg" alt="" className={styles.icon} />
                <span>{p.date}</span>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}