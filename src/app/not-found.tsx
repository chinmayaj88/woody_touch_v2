"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className={styles.secondaryBtn}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
