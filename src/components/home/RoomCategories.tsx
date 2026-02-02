"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./RoomCategories.module.css";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    name: "Bedroom",
    image: "/images/product-chair.png",
    size: "large", // Takes full height on left
  },
  {
    name: "Living room",
    image: "/images/product-lounge.png",
    size: "small",
  },
  {
    name: "Hallway",
    image: "/images/product-table.png",
    size: "small",
  },
  {
    name: "Kitchen",
    image: "/images/product-basket.png",
    size: "tall", // Takes full height on right
  },
];

const RoomCategories = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 30,
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
    <section className={styles.roomCategories} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Large Card - Bedroom */}
          <div
            className={`${styles.card} ${styles.large}`}
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
          >
            <div
              className={styles.cardBg}
              style={{ backgroundImage: `url(${rooms[0].image})` }}
            ></div>
            <Link
              href={`/rooms/${rooms[0].name.toLowerCase()}`}
              className={styles.cardLink}
            >
              <span>{rooms[0].name}</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Small Cards Column */}
          <div className={styles.smallColumn}>
            <div
              className={`${styles.card} ${styles.small}`}
              ref={(el) => {
                cardsRef.current[1] = el;
              }}
            >
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url(${rooms[1].image})` }}
              ></div>
              <Link
                href={`/rooms/${rooms[1].name.toLowerCase().replace(" ", "-")}`}
                className={styles.cardLink}
              >
                <span>{rooms[1].name}</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            <div
              className={`${styles.card} ${styles.small}`}
              ref={(el) => {
                cardsRef.current[2] = el;
              }}
            >
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url(${rooms[2].image})` }}
              ></div>
              <Link
                href={`/rooms/${rooms[2].name.toLowerCase()}`}
                className={styles.cardLink}
              >
                <span>{rooms[2].name}</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Tall Card - Kitchen */}
          <div
            className={`${styles.card} ${styles.tall}`}
            ref={(el) => {
              cardsRef.current[3] = el;
            }}
          >
            <div
              className={styles.cardBg}
              style={{ backgroundImage: `url(${rooms[3].image})` }}
            ></div>
            <Link
              href={`/rooms/${rooms[3].name.toLowerCase()}`}
              className={styles.cardLink}
            >
              <span>{rooms[3].name}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomCategories;
