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
            <h2 className={styles.title}>
              Affordable furniture for
              <br />
              every home
            </h2>

            <div className={styles.text}>
              <p>
                Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas
                sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue
                ut nec a quisque libero imperdiet velit ut.
              </p>

              <p>
                Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur
                lectus viverra in sit tortor. Magna tristique tristique blandit
                nunc tincidunt et duis adipiscing ac. Nulla dictum semper
                commodo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
