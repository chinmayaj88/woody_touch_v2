"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart } from "lucide-react";
import styles from "./ShopListing.module.css";

const products = [
  {
    id: 1,
    name: "Classic Curve Armchair",
    category: "Armchairs",
    price: "18,500",
    image: "/images/product-chair.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 2,
    name: "The Orbit Loom Sofa",
    category: "Sofas",
    price: "22,000",
    image: "/images/product-lounge.png",
    colors: ["#A0A0A0", "#D4D4D4", "#6B6B6B"],
  },
  {
    id: 3,
    name: "Majestic Daybed",
    category: "Sofas",
    price: "35,000",
    image: "/images/product-basket.png",
    colors: ["#C4A885", "#9A7B5C", "#D4C4B0"],
  },
  {
    id: 4,
    name: "Artisan Coffee Table",
    category: "Tables",
    price: "12,999",
    image: "/images/product-table.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 5,
    name: "Woven Pendant Light",
    category: "Lighting",
    price: "4,500",
    image: "/images/artisan-craft.png",
    colors: ["#C4A885", "#9A7B5C", "#D4C4B0"],
  },
  {
    id: 6,
    name: "Rattan Side Table",
    category: "Tables",
    price: "8,200",
    image: "/images/product-table.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 7,
    name: "Executive Lounge Chair",
    category: "Armchairs",
    price: "16,000",
    image: "/images/product-lounge.png",
    colors: ["#A0A0A0", "#D4D4D4", "#6B6B6B"],
  },
  {
    id: 8,
    name: "Handwoven Storage Basket",
    category: "Decor",
    price: "2,500",
    image: "/images/product-basket.png",
    colors: ["#C4A885", "#9A7B5C", "#D4C4B0"],
  },
  {
    id: 9,
    name: "Cane Dining Chair Set",
    category: "Chairs",
    price: "24,999",
    image: "/images/product-chair.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 10,
    name: "Vintage Reading Chair",
    category: "Armchairs",
    price: "19,500",
    image: "/images/product-chair.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 11,
    name: "Contemporary Console Table",
    category: "Tables",
    price: "15,800",
    image: "/images/product-table.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 12,
    name: "Luxury 3-Seater Sofa",
    category: "Sofas",
    price: "42,000",
    image: "/images/product-lounge.png",
    colors: ["#A0A0A0", "#D4D4D4", "#6B6B6B"],
  },
  {
    id: 13,
    name: "Artisan Wall Decor",
    category: "Decor",
    price: "3,200",
    image: "/images/artisan-craft.png",
    colors: ["#C4A885", "#9A7B5C", "#D4C4B0"],
  },
  {
    id: 14,
    name: "Heritage Rocking Chair",
    category: "Armchairs",
    price: "21,500",
    image: "/images/product-chair.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 15,
    name: "Modern Nesting Tables",
    category: "Tables",
    price: "11,500",
    image: "/images/product-table.png",
    colors: ["#8B7355", "#D4A574", "#6B5442"],
  },
  {
    id: 16,
    name: "Decorative Planter Set",
    category: "Decor",
    price: "5,800",
    image: "/images/product-basket.png",
    colors: ["#C4A885", "#9A7B5C", "#D4C4B0"],
  },
];

const ShopListing = () => {
  return (
    <div className={styles.shopPage}>
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
        <div className={styles.listingsHeader}>
          <span className={styles.resultsCount}>
            Showing all {products.length} products
          </span>
          <select className={styles.sortSelect}>
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
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
    </div>
  );
};

export default ShopListing;
