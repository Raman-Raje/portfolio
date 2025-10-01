'use client';

import { useState } from 'react';
import { Link, ClipboardCheck } from 'lucide-react';
import styles from '@/styles/components/blog/ShareSection.module.css';

const ShareSection = ({ title }) => {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const shareOnTwitter = () => {
    const text = `Check out this article: ${title}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  return (
    <div className={styles.shareSection}>
      <div className={styles.shareTitle}>📢 Share this article</div>
      <div className={styles.shareButtons}>
        <button onClick={shareOnTwitter} className={`${styles.shareBtn} ${styles.shareTwitter}`}>
          <span>tweet</span>
        </button>
        <button onClick={shareOnLinkedIn} className={`${styles.shareBtn} ${styles.shareLinkedIn}`}>
          <span>LinkedIn</span>
        </button>
        <button onClick={copyLink} className={`${styles.shareBtn} ${styles.shareCopy}`}>
          {copied ? (
            <ClipboardCheck size={20} />
          ) : (
            <Link size={20} />
          )}
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
};

export default ShareSection;
