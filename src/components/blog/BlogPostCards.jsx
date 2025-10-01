import Link from 'next/link';
import { getAllPosts } from '@/utils/blogUtils';
import { formatDateForSEO } from '@/utils/dateUtils';
import styles from '@/styles/components/blog/BlogPosts.module.css'

const BlogPosts = () => {

  const allPosts = getAllPosts();

  return (
        <div className={styles.postsGrid}>
          {allPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
              <div className={styles.postImage}>{post.icon}</div>
              <div className={styles.postContent}>
                <div className={styles.postCategory}>{post.category}</div>
                <div className={styles.postMeta}>
                  <span>{formatDateForSEO(post.date)}</span> • <span>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <span className={styles.readMore}>Read More →</span>
                  <span className={styles.postViews}>{post.views}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
  )
}

export default BlogPosts