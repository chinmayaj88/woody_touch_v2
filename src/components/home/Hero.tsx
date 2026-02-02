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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <span className={styles.tag}>Furniture</span>
            <div ref={textRef}>
              <h1 className={styles.title}>
                Where Traditional
                <br />
                Meets Modern
              </h1>
              <p className={styles.description}>
                Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et
                cursus pharetra tellus tincidunt.
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
            <div className={styles.productGrid}>
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
