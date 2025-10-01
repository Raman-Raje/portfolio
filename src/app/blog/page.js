import BlogNavigation from '@/components/blog/BlogNavigation';
import BlogFooter from '@/components/blog/BlogFooter';
import styles from './blog-list.module.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import BlogPostCards from '@/components/blog/BlogPostCards';

export default function BlogList() {
  return (
    <ThemeProvider>
      <BlogNavigation />
      <main className={styles.blogList}>
        <div className={styles.blogListHeader}>
          <h1 className={styles.blogListTitle}>Developer Blog</h1>
          <p className={styles.blogListDescription}>
            Insights about modern web development, emerging technologies, and programming best practices.
          </p>
        </div>
        <BlogPostCards/>
      </main>
      <BlogFooter />
    </ThemeProvider>
  );
}