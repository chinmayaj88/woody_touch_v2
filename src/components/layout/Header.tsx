"use client";

import React, { useState } from "react";
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
  X,
} from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
              <span>Woody Touch</span>
            </Link>

            {/* Navigation Links - Desktop */}
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

              {/* Hamburger Menu Button */}
              <button
                className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.active : ""}`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuTitle}>Menu</span>
          <button
            className={styles.closeBtn}
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className={styles.mobileNavLinks}>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.active : ""}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={pathname === "/shop" ? styles.active : ""}
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? styles.active : ""}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? styles.active : ""}
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
