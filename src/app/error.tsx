"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorIcon}>⚠️</div>
        <h1 className={styles.title}>Oops! Something Went Wrong</h1>
        <p className={styles.description}>
          We encountered an unexpected error. Don't worry, our team has been
          notified.
        </p>

        {error.message && (
          <div className={styles.errorMessage}>
            <code>{error.message}</code>
          </div>
        )}

        <div className={styles.actions}>
          <button onClick={reset} className={styles.primaryBtn}>
            <RefreshCw size={20} />
            Try Again
          </button>
          <Link href="/" className={styles.secondaryBtn}>
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
