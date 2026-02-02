"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Collections.module.css";

gsap.registerPlugin(ScrollTrigger);

const collectionsData = [
  {
    title: "New Collection Quisque Libero",
    description:
      "Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum",
    image: "/images/product-chair.png",
  },
  {
    title: "New Collection Nisi Imperdiet",
    description:
      "Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in",
    image: "/images/product-lounge.png",
  },
];

const Collections = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
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
    <section className={styles.collections} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {collectionsData.map((collection, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className={styles.imageWrapper}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${collection.image})` }}
                ></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{collection.title}</h3>
                <p className={styles.cardDescription}>
                  {collection.description}
                </p>

                <Link href="/shop" className={styles.shopLink}>
                  Shop Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
