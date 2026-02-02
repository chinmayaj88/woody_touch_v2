"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import styles from "./Reviews.module.css";

const reviewsData = [
  {
    rating: 5,
    text: "The craftsmanship is outstanding! Our Classic Curve Armchair is the centerpiece of our living room.",
    name: "Priya Mehta",
    role: "Interior Designer",
  },
  {
    rating: 5,
    text: "Beautiful, durable furniture that still looks brand new after a year. Highly recommend!",
    name: "Raj Kumar",
    role: "Architect",
  },
  {
    rating: 5,
    text: "Eco-friendly materials and excellent quality. The delivery was prompt and professional.",
    name: "Anjali Sharma",
    role: "Homeowner",
  },
];

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Trusted by homeowners and designers across India
          </p>
        </div>

        <div className={styles.reviewsGrid}>
          {reviewsData.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.quoteIcon}>
                <Quote size={32} stroke="#4A3426" strokeWidth={1.5} />
              </div>

              <div className={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#B8860B" stroke="#B8860B" />
                ))}
              </div>

              <p className={styles.reviewText}>{review.text}</p>

              <div className={styles.reviewer}>
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
