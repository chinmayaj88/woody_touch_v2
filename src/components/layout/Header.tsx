"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      {/* Promotion Bar */}
      <div className={styles.promoBar}>
        <div className="container">
          <p>
            FREE HOME DELIVERY IN BHUBANESWAR • <strong>UP TO 30% OFF</strong>{" "}
            ON HANDCRAFTED CLASSICS
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        <div className="container">
          <div className={styles.navContent}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              {/* <Image
                src="/images/wt_logo.png"
                alt="Woody Touch"
                width={48}
                height={48}
                className={styles.logoImage}
              /> */}
              <span>Woody Touch</span>
            </Link>

            {/* Navigation Links */}
            <ul className={styles.navLinks}>
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? styles.active : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className={pathname === "/shop" ? styles.active : ""}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={pathname === "/about" ? styles.active : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={pathname === "/contact" ? styles.active : ""}
                >
                  Contact Us
                </Link>
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
