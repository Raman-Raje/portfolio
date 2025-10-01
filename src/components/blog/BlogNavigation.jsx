// File: src/components/blog/BlogNavigation.jsx
'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';
import styles from '@/styles/components/blog/BlogNavigation.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <div className={styles.themeToggle} onClick={toggleTheme}>
      <div className={`${styles.themeToggleSlider} ${theme === 'dark' ? styles.dark : ''}`}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </div>
    </div>
  );
};

const BlogNavigation = () => {

  return (
    <nav className={styles.blogNav}>
      <div className={styles.navContainer}>
        <Link href="/blog" className={styles.blogLogo}>
          <div className={styles.avatar}>RS</div>
          <div className={styles.blogLogoText}>
            <div className={styles.blogLogoName}>Raman Shinde</div>
            <div className={styles.blogLogoTagline}>Developer Blog</div>
          </div>
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/" className={styles.backToPortfolio}>
            <ArrowLeft size={18} />
            <span>Portfolio</span>          
          </Link>
          
        <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default BlogNavigation;