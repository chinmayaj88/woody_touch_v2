import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.companyInfo}>
              <Link href="/" className={styles.footerLogo}>
                <Image
                  src="/images/logo.png"
                  alt="Woody Touch"
                  width={24}
                  height={24}
                  className={styles.logoImage}
                />
                <span>Woody Touch</span>
              </Link>

              <address className={styles.address}>
                Unit 3, Kharvela Nagar, Bhubaneswar, Odisha
                <br />
                Backside of GPO, 751001
              </address>

              <p className={styles.contactInfo}>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@woodytouch.com">
                  contact@woodytouch.com
                </a>
              </p>

              <p className={styles.contactInfo}>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919437123456">+91 94371 23456</a>
              </p>

              <div className={styles.socials}>
                <a href="#" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Shop Links */}
            <div className={styles.footerLinks}>
              <h3>Shop</h3>
              <ul>
                <li>
                  <Link href="/shop/chairs">Chairs</Link>
                </li>
                <li>
                  <Link href="/shop/beds">Beds</Link>
                </li>
                <li>
                  <Link href="/shop/sofas">Sofas</Link>
                </li>
                <li>
                  <Link href="/shop/cabinets">Cabinets</Link>
                </li>
                <li>
                  <Link href="/shop/armchairs">Armchairs</Link>
                </li>
                <li>
                  <Link href="/shop/sale">Sale</Link>
                </li>
              </ul>
            </div>

            {/* Customer Service Links */}
            <div className={styles.footerLinks}>
              <h3>Customer service</h3>
              <ul>
                <li>
                  <Link href="/orders">Orders</Link>
                </li>
                <li>
                  <Link href="/addresses">Addresses</Link>
                </li>
                <li>
                  <Link href="/returns">Returns</Link>
                </li>
                <li>
                  <Link href="/account">Account details</Link>
                </li>
                <li>
                  <Link href="/faq">F.A.Q</Link>
                </li>
              </ul>
            </div>

            {/* Delivery Links */}
            <div className={styles.footerLinks}>
              <h3>Delivery</h3>
              <ul>
                <li>
                  <Link href="/delivery/orders">Orders</Link>
                </li>
                <li>
                  <Link href="/delivery/return">Return</Link>
                </li>
                <li>
                  <Link href="/delivery/free">Free Delivery</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>© Copyright Woody Touch 2024. Design by Figma.guru</p>

            <div className={styles.paymentMethods}>
              <span className={styles.paymentIcon}>UPI</span>
              <span className={styles.paymentIcon}>RuPay</span>
              <span className={styles.paymentIcon}>VISA</span>
              <span className={styles.paymentIcon}>Mastercard</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
