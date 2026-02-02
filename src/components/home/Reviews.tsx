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
    text: "The craftsmanship is absolutely stunning! We bought the Classic Curve Armchair and it has become the centerpiece of our living room. The cane work is intricate and the comfort is unmatched.",
    name: "Priya Mehta",
    role: "Interior Designer, Delhi",
    avatar: null,
  },
  {
    rating: 5,
    text: "Woody Touch exceeded all my expectations. The furniture is not only beautiful but incredibly durable. I've had my daybed for over a year now and it still looks brand new!",
    name: "Raj Kumar",
    role: "Architect, Mumbai",
    avatar: null,
  },
  {
    rating: 4,
    text: "Excellent quality and eco-friendly materials. The delivery was prompt and the team was very professional. Highly recommend for anyone looking for sustainable furniture.",
    name: "Anjali Sharma",
    role: "Homeowner, Bangalore",
    avatar: null,
  },
  {
    rating: 5,
    text: "I am in love with my new dining chairs! The traditional weaving technique combined with modern design is exactly what I was looking for. Worth every rupee!",
    name: "Vikram Singh",
    role: "Business Owner, Jaipur",
    avatar: null,
  },
  {
    rating: 5,
    text: "The attention to detail is remarkable. Each piece tells a story of heritage and craftsmanship. Our guests always compliment our Woody Touch furniture!",
    name: "Neha Patel",
    role: "Doctor, Pune",
    avatar: null,
  },
];

const Reviews = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for review cards
      const cards = cardsRef.current.filter(Boolean);
      gsap.from(cards, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.reviews} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Real experiences from customers who brought natural elegance into
            their homes
          </p>
        </div>

        <div className={styles.reviewsContainer}>
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className={styles.reviewCard}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" stroke="#D4AF37" />
                ))}
              </div>

              <p className={styles.reviewText}>{review.text}</p>

              <div className={styles.reviewer}>
                <div className={styles.avatar}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#F5F5F5" />
                    <circle cx="20" cy="15" r="7" fill="#4A3426" />
                    <path
                      d="M8 35C8 28 13 24 20 24C27 24 32 28 32 35"
                      fill="#4A3426"
                    />
                  </svg>
                </div>
                <div className={styles.reviewerInfo}>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
