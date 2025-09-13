"use client";
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/projects";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // 👈 Pagination import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./projects.module.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <main id="portfolio" className={styles.main}>
      <h1 className={styles.heading}>Recent Projects</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlay}
                  >
                    View Project
                  </a>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p> {/* 👈 desc added */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
