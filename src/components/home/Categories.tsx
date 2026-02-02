"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Categories.module.css";

gsap.registerPlugin(ScrollTrigger);

const categoriesData = [
  {
    name: "Tables",
    count: "24products",
    image: "/images/product-table.png",
  },
  {
    name: "Chairs",
    count: "28 products",
    image: "/images/product-chair.png",
  },
  {
    name: "Armchairs",
    count: "18 products",
    image: "/images/artisan-craft.png",
  },
  {
    name: "Sofas",
    count: "42 products",
    image: "/images/product-lounge.png",
  },
];

const Categories = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.categories} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Shop by Categories</h2>
          <Link href="/categories" className={styles.viewAllBtn}>
            View all
          </Link>
        </div>

        <div className={styles.grid}>
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <span className={styles.count}>{category.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
