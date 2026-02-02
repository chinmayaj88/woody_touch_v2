"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ShopListing.module.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "All Products", count: 48, id: "all" },
  { name: "Armchairs", count: 12, id: "armchairs" },
  { name: "Tables", count: 8, id: "tables" },
  { name: "Sofas", count: 6, id: "sofas" },
  { name: "Decor", count: 14, id: "decor" },
  { name: "Lighting", count: 8, id: "lighting" },
];

const products = [
  {
    id: 1,
    name: "Classic Curve Armchair",
    category: "Armchairs",
    price: "18,500",
    image: "/images/product-chair.png",
  },
  {
    id: 2,
    name: "The Orbit Loom Sofa",
    category: "Sofas",
    price: "22,000",
    image: "/images/product-lounge.png",
  },
  {
    id: 3,
    name: "Majestic Daybed",
    category: "Sofas",
    price: "35,000",
    image: "/images/product-basket.png",
  },
  {
    id: 4,
    name: "Artisan Coffee Table",
    category: "Tables",
    price: "12,999",
    image: "/images/product-table.png",
  },
  {
    id: 5,
    name: "Woven Pendant Light",
    category: "Lighting",
    price: "4,500",
    image: "/images/artisan-craft.png",
  },
  {
    id: 6,
    name: "Rattan Side Table",
    category: "Tables",
    price: "8,200",
    image: "/images/product-table.png",
  },
  {
    id: 7,
    name: "Executive Lounge Chair",
    category: "Armchairs",
    price: "16,000",
    image: "/images/product-lounge.png",
  },
  {
    id: 8,
    name: "Handwoven Storage Basket",
    category: "Decor",
    price: "2,500",
    image: "/images/product-basket.png",
  },
  {
    id: 9,
    name: "Cane Dining Chair Set",
    category: "Chairs",
    price: "24,999",
    image: "/images/product-chair.png",
  },
  {
    id: 10,
    name: "Vintage Reading Chair",
    category: "Armchairs",
    price: "19,500",
    image: "/images/product-chair.png",
  },
  {
    id: 11,
    name: "Contemporary Console Table",
    category: "Tables",
    price: "15,800",
    image: "/images/product-table.png",
  },
  {
    id: 12,
    name: "Luxury 3-Seater Sofa",
    category: "Sofas",
    price: "42,000",
    image: "/images/product-lounge.png",
  },
  {
    id: 13,
    name: "Artisan Wall Decor",
    category: "Decor",
    price: "3,200",
    image: "/images/artisan-craft.png",
  },
  {
    id: 14,
    name: "Heritage Rocking Chair",
    category: "Armchairs",
    price: "21,500",
    image: "/images/product-chair.png",
  },
  {
    id: 15,
    name: "Modern Nesting Tables",
    category: "Tables",
    price: "11,500",
    image: "/images/product-table.png",
  },
  {
    id: 16,
    name: "Decorative Planter Set",
    category: "Decor",
    price: "5,800",
    image: "/images/product-basket.png",
  },
];

const ShopListing = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Header
      gsap.from(`.${styles.bannerContent}`, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate Sidebar
      gsap.from(`.${styles.sidebar}`, {
        x: -30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Staggered Grid Animation
      const cards = cardsRef.current.filter(Boolean);
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []); // Run once on mount

  return (
    <div className={styles.shopPage} ref={containerRef}>
      {/* Header Banner */}
      <div className={styles.headerBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>Shop Collection</h1>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Main Content - Full Width */}
        <div className={styles.fullWidthLayout}>
          <div className={styles.listingsHeader}>
            <span className={styles.resultsCount}>
              Showing 1–8 of 48 results
            </span>
            <select className={styles.sortSelect}>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={styles.productCard}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.productImage}
                  />
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>
                      <ShoppingBag size={18} />
                    </button>
                    <button className={styles.actionBtn}>
                      <Heart size={18} />
                    </button>
                    <button className={styles.actionBtn}>
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

                <div className={styles.productInfo}>
                  <span className={styles.productCategory}>
                    {product.category}
                  </span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>₹{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopListing;
