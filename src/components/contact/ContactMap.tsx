"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactMap.module.css";

gsap.registerPlugin(ScrollTrigger);

const ContactMap = () => {
  const mapRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
        },
      });
    }, mapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.mapSection} ref={mapRef}>
      <div className={styles.mapContainer} ref={containerRef}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.147321045231!2d85.8365611750519!3d20.29410118121287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e4d1f2e96d%3A0x8e83b4b0e5d59040!2sKharvela%20Nagar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        />

        {/* Custom Marker Overlay */}
        <div className={styles.customMarker}>
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <path
              d="M30 0C13.5 0 0 13.5 0 30C0 52.5 30 80 30 80C30 80 60 52.5 60 30C60 13.5 46.5 0 30 0Z"
              fill="#9A7B5C"
            />
            <circle cx="30" cy="28" r="12" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
