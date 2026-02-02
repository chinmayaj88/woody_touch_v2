"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutHero.module.css";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate first section
      gsap.from(".section1-content", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section1-content",
          start: "top 80%",
        },
      });

      // Animate second section
      gsap.from(".section2-content", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section2-content",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Section 1 - Founder Section */}
      <section className={styles.heroSection} ref={section1Ref}>
        <div className={styles.heroGrid}>
          <div className={styles.founderSection}>
            <div className={styles.founderImageWrapper}>
              <div className={styles.heroImage}></div>
              <div className={styles.quoteBox}>
                <p className={styles.quote}>
                  "Bringing natural elegance to every Indian home through
                  handcrafted excellence."
                </p>
                <h3 className={styles.founderName}>
                  Santosh Barik{" "}
                  <span className={styles.founderTitle}>— Founder</span>
                </h3>
              </div>
            </div>
          </div>

          <div className={`${styles.contentSection} section1-content`}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Our Journey & <br />
                Vision
              </h1>

              <div className={styles.text}>
                <p>
                  Established in Bhubaneswar, Woody Touch began with a simple
                  vision: to celebrate the timeless beauty of cane and wooden
                  craftsmanship. We believe that furniture isn't just about
                  utility; it's about creating a soul for your living spaces.
                </p>

                <p>
                  Every piece in our collection is a testament to the skill of
                  local artisans, blending traditional techniques with modern
                  design sensibilities to suit the contemporary Indian home. We
                  are committed to sustainability and the natural aesthetic that
                  only real wood and cane can provide.
                </p>
              </div>

              <Link href="/shop" className={styles.ctaButton}>
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Furniture That Will Last */}
      <section className={styles.heroSection} ref={section2Ref}>
        <div className={`${styles.heroGrid} ${styles.reverse}`}>
          <div
            className={`${styles.contentSection} ${styles.lightBg} section2-content`}
          >
            <div className={styles.content}>
              <h2 className={styles.title}>
                Furniture That Will Last
                <br />A Lifetime
              </h2>

              <div className={styles.text}>
                <p>
                  Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur
                  lectus viverra in sit tortor. Magna tristique tristique
                  blandit nunc tincidunt et duis adipiscing ac. Nulla dictum
                  semper commodo sit habitant nam neque vitae leo. Nibh
                  vestibulum ac sollicitudin a quam id. Quam dui ac risus
                  egestas.
                </p>
              </div>

              <Link href="/about" className={styles.ctaButton}>
                Learn more
              </Link>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.heroImage}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
