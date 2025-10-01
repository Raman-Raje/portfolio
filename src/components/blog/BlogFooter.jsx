import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/constants/staticData';
import styles from '@/styles/components/blog/BlogFooter.module.css';

const BlogFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Raman Shinde</h4>
            <p className={styles.footerDescription}>
              Technical insights and code on GenAI, deep learning, and compiler technology.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                key={index}
                href={social.href}
                className={`${styles.socialLink}`}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.iconSrc}
                  alt={social.alt}
                  width={22}
                  height={22}
                  className={styles.socialIcon}
                />
              </a>
            ))}
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Raman Shinde. All rights reserved. Built with passion for the web.</p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
