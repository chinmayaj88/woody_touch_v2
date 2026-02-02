"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Hero.module.css";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Staggered Text Animations
      const title = textRef.current?.querySelector("h1");
      const desc = textRef.current?.querySelector("p");
      const tag = heroRef.current?.querySelector("span");

      if (tag && title && desc) {
        tl.from(tag, { y: 20, opacity: 0, duration: 0.8 })
          .from(title, { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(desc, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(
            buttonsRef.current,
            { y: 20, opacity: 0, duration: 0.8 },
            "-=0.6",
          );
      }

      // Product Cards Staggered Entry with Scale
      const cards = productGridRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 60,
          scale: 0.95,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <span className={styles.tag}>Handcrafted in Odisha</span>
            <div ref={textRef}>
              <h1 className={styles.title}>
                Bring the Soul of
                <br />
                Nature to Your Home
              </h1>
              <p className={styles.description}>
                Discover the timeless elegance of premium cane furniture.
                Sustainable, durable, and designed to turn your living space
                into a masterpiece of natural comfort.
              </p>
            </div>
            <div className={styles.buttonGroup} ref={buttonsRef}>
              <Link href="/shop" className={styles.primaryBtn}>
                Shop now
              </Link>
              <Link href="/about" className={styles.secondaryBtn}>
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Content - Product Grid */}
          <div className={styles.rightContent}>
            <div className={styles.productGrid} ref={productGridRef}>
              <div className={`${styles.productCard} ${styles.large}`}>
                <span className={styles.price}>₹14,999</span>
                <div className={styles.productImage}>
                  <Image
                    src="/images/product-chair.png"
                    alt="Furniture"
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={`${styles.productCard} ${styles.special}`}>
                <div className={styles.specialContent}>
                  <span className={styles.discount}>25% OFF</span>
                  <span className={styles.specialText}>
                    custom-made
                    <br />
                    furniture
                  </span>
                </div>
              </div>
              <div className={styles.productCard}>
                <span className={styles.price}>₹8,499</span>
                <div className={styles.productImage}>
                  <Image
                    src="/images/product-table.png"
                    alt="Furniture"
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.productCard}>
                <span className={styles.price}>₹12,999</span>
                <div className={styles.productImage}>
                  <Image
                    src="/images/product-lounge.png"
                    alt="Furniture"
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
