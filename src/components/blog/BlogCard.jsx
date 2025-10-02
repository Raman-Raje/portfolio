
import styles from '@/styles/components/blog/BlogCard.module.css';

const BlogCard = ({ post }) => {

  return (
    <article className={styles.postCard}>
      <div className={styles.postHeader}>
        <span className={styles.postDate}>{post.date}</span>
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

      <button className={styles.readMoreBtn}>Read More →</button>
    </article>
  );
}

export default BlogCard;
