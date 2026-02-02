"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./NewProducts.module.css";

gsap.registerPlugin(ScrollTrigger);

const tabs = ["All", "Chairs", "Tables", "Armchairs", "Sofas", "Decor"];

const products = [
  {
    name: "Modern Armchair",
    price: "18,500",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
    image: "/images/product-chair.png",
  },
  {
    name: "Egg chair",
    price: "22,000",
    colors: ["#A0A0A0", "#D4D4D4", "#6B6B6B"],
    image: "/images/product-lounge.png",
  },
  {
    name: "Chaise Lounge",
    price: "35,000",
    colors: ["#C4A885", "#9A7B5C", "#D4C4B0"],
    image: "/images/product-basket.png",
  },
];

const NewProducts = () => {
  const [activeTab, setActiveTab] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
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
    <section className={styles.newProducts} ref={sectionRef}>
      <div className="container">
        <h2 className={styles.title}>New Products</h2>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div
              key={index}
              className={styles.productCard}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.productImage}
                />
                <button
                  className={styles.wishlistBtn}
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.bottomRow}>
                  <div className={styles.colorDots}>
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className={styles.colorDot}
                        style={{ background: color }}
                      ></span>
                    ))}
                  </div>
                  <span className={styles.price}>₹{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
