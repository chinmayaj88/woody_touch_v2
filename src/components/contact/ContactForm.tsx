"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactForm.module.css";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Info Column
      gsap.from(infoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Animate Form Column
      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className={styles.contactForm} ref={sectionRef}>
      <div className={styles.formContainer}>
        <div className={styles.formGrid}>
          {/* Left - Contact Info */}
          <div className={styles.contactInfo} ref={infoRef}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
              Suspendisse leo at cursus pharetra tellus tincidunt. Risus nulla
              penatibus donec elementum nulla
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3>Physical address</h3>
                  <p>
                    Unit 3, Kharvela Nagar,
                    <br />
                    Bhubaneswar, Odisha
                    <br />
                    Backside of GPO, 751001
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div>
                  <h3>Phone number</h3>
                  <p>+91 94371 23456</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div>
                  <h3>Email address</h3>
                  <p>contact@woodytouch.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={styles.formWrapper} ref={formRef}>
            <h2 className={styles.formTitle}>Get in touch</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number..."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
