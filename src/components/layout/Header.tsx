import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Promotion Bar */}
      <div className={styles.promoBar}>
        <div className="container">
          <p>
            THIS WEEKEND <strong>SALE 20% OFF</strong> ON ALL PRODUCTS
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        <div className="container">
          <div className={styles.navContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Woody Touch"
                width={32}
                height={32}
                className={styles.logoImage}
              />
              <span>Woody Touch</span>
            </Link>

            {/* Navigation Links */}
            <ul className={styles.navLinks}>
              <li>
                <Link href="/" className={styles.active}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            {/* Action Icons */}
            <div className={styles.actions}>
              <button className={styles.iconBtn} aria-label="Account">
                <User size={20} />
              </button>
              <button className={styles.iconBtn} aria-label="Wishlist">
                <Heart size={20} />
              </button>
              <button className={styles.iconBtn} aria-label="Cart">
                <ShoppingBag size={20} />
                <span className={styles.badge}>0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
