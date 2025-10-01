import { formatDateForSEO } from '@/utils/dateUtils';
import styles from '@/styles/components/blog/BlogHeader.module.css';

const BlogHeader = ({ title, category, date, readTime, views, excerpt }) => {
  return (
    <header className={styles.blogHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.blogCategory}>{category}</div>
        <h1 className={styles.blogTitle}>{title}</h1>
        <div className={styles.blogMeta}>
          <div className={styles.metaItem}>
            <span>📅</span>
            <span>{formatDateForSEO(date)}</span>
          </div>
          <div className={styles.metaItem}>
            <span>⏱️</span>
            <span>{readTime}</span>
          </div>
          <div className={styles.metaItem}>
            <span>👁️</span>
            <span>{views}</span>
          </div>
        </div>
        <p className={styles.blogExcerpt}>{excerpt}</p>
      </div>
    </header>
  );
};

export default BlogHeader;