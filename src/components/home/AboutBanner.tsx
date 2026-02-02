"use client";

import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutBanner.module.css";

gsap.registerPlugin(ScrollTrigger);

const AboutBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.aboutBanner} ref={sectionRef}>
      <div className={styles.bannerGrid}>
        {/* Left - Video/Image Section */}
        <div className={styles.mediaSection}>
          <div className={styles.videoWrapper}>
            <div className={styles.backgroundImage}></div>
            <button className={styles.playButton} aria-label="Play video">
              <Play size={32} fill="white" />
            </button>
          </div>
        </div>

        {/* Right - Content Section */}
        <div className={styles.contentSection} ref={textRef}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Our Heritage</span>
            <h2 className={styles.title}>
              Preserving the Lost Art of <br />
              Ancient Weaving
            </h2>

            <div className={styles.text}>
              <p>
                At Woody Touch, we believe every piece of furniture has a story
                to tell. Our journey is about more than just making chairs—it's
                about reviving centuries-old weaving techniques and giving them
                a permanent place in the modern Indian home.
              </p>

              <p>
                Using 100% sustainable, hand-picked cane from local forests, our
                master artisans craft each piece with precision that no machine
                can match. Experience heirlooms built for generations.
              </p>
            </div>

            <div className={styles.ctaWrapper}>
              <a href="/about" className={styles.learnMore}>
                Our Craftsmanship Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
