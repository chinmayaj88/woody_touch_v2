"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import styles from "./DesignerBadge.module.css";

const DesignerBadge = () => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.badge}
      aria-label="Designed by Chinmaya Jena"
    >
      <div className={styles.iconWrapper}>
        <Sparkles size={16} />
      </div>
      <span className={styles.text}>
        Developed by <strong>Chinmaya Jena</strong>
      </span>
    </a>
  );
};

export default DesignerBadge;
