import Link from 'next/link';
import { formatDateForSEO } from '@/utils/dateUtils';
import styles from '@/styles/components/blog/BlogCard.module.css';

const BlogCard = ({ post }) => {

  return (
    <article className={styles.postCard}>
      <div className={styles.postHeader}>
        <span className={styles.postDate}>{formatDateForSEO(post.date)}</span>
        <span className={styles.postReadTime}>{post.readTime}</span>
      </div>

      <h2 className={styles.postTitle}>{post.title}</h2>
      <p className={styles.postExcerpt}>{post.excerpt}</p>

      <div className={styles.postTags}>
        {post.tags.map(tag => (
          <span key={tag} className={styles.postTag}>
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn}>
        Read More →
      </Link>
      {/* <button className={styles.readMoreBtn}>Read More →</button> */}
    </article>
  );
}

export default BlogCard;
