"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Reviews.module.css";

gsap.registerPlugin(ScrollTrigger);

const reviewsData = [
  {
    rating: 5,
    text: "Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.",
    additionalText:
      "Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque...",
    name: "Devon Simpson",
    role: "Customer",
    avatar: null,
  },
];

const Reviews = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.reviews} ref={sectionRef}>
      <div className={styles.reviewsGrid}>
        {/* Left - Review Card */}
        <div className={styles.reviewCard} ref={cardRef}>
          <h2 className={styles.title}>Customer Reviews</h2>

          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#FDB022" stroke="#FDB022" />
            ))}
          </div>

          <div className={styles.reviewText}>
            <p>{reviewsData[0].text}</p>
            <p>{reviewsData[0].additionalText}</p>
          </div>

          <div className={styles.reviewer}>
            <div className={styles.avatar}>
              {reviewsData[0].avatar ? (
                <Image
                  src={reviewsData[0].avatar}
                  alt={reviewsData[0].name}
                  width={60}
                  height={60}
                />
              ) : (
                <div className={styles.avatarPlaceholder}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="10" r="6" fill="#D4D4D4" />
                    <path
                      d="M5 26C5 21 9 18 15 18C21 18 25 21 25 26"
                      fill="#D4D4D4"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className={styles.reviewerInfo}>
              <h4>{reviewsData[0].name}</h4>
              <span>{reviewsData[0].role}</span>
            </div>
          </div>
        </div>

        {/* Right - Background Image */}
        <div className={styles.imageSection}>
          <div className={styles.backgroundImage}></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
