"use client";

import React, { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./InstagramGallery.module.css";

gsap.registerPlugin(ScrollTrigger);

const instagramPhotos = [
  "/images/product-chair.png",
  "/images/product-lounge.png",
  "/images/product-table.png",
  "/images/product-basket.png",
  "/images/artisan-craft.png",
  "/images/hero-furniture.png",
];

const InstagramGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      photosRef.current.forEach((photo, index) => {
        gsap.from(photo, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: photo,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.instagram} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <Instagram size={40} className={styles.icon} />
          <h2 className={styles.title}>Follow us on Instagram</h2>
          <p className={styles.subtitle}>@woodytouch</p>
        </div>

        <div className={styles.gallery}>
          {instagramPhotos.map((photo, index) => (
            <div
              key={index}
              className={styles.photoWrapper}
              ref={(el) => {
                photosRef.current[index] = el;
              }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.photo}
              >
                <div
                  className={styles.photoImage}
                  style={{ backgroundImage: `url(${photo})` }}
                ></div>
                <div className={styles.overlay}>
                  <Instagram size={32} />
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followButton}
          >
            <Instagram size={20} />
            Follow us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
