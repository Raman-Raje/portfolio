'use client';

import { useState } from 'react';
import styles from '@/styles/components/blog/Newsletter.module.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterContainer}>
        <h3 className={styles.newsletterTitle}>📧 Stay Updated</h3>
        <p className={styles.newsletterDescription}>
          Get the latest articles, tutorials, and insights delivered straight to your inbox. 
          Join over 5,000 developers who trust our weekly newsletter.
        </p>
        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.emailInput}
          />
          <button type="submit" className={styles.subscribeBtn} disabled={subscribed}>
            {subscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
        <p className={styles.privacyNote}>
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;