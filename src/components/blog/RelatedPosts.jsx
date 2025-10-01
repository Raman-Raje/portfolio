import Link from 'next/link';
import styles from '@/styles/components/blog/RelatedPosts.module.css';

const RelatedPosts = () => {
  const relatedPosts = [
    {
      id: 'react-performance',
      date: "July 15, 2025",
      title: "Optimizing React Performance: Best Practices",
      excerpt: "A comprehensive guide to improving React application performance through code splitting, memoization, and efficient state management.",
      icon: "⚡"
    },
    {
      id: 'nodejs-apis',
      date: "July 10, 2025", 
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to design and implement robust, scalable APIs using Node.js, Express, and modern architectural patterns.",
      icon: "🚀"
    },
    {
      id: 'modern-css',
      date: "July 5, 2025",
      title: "Modern CSS: Container Queries and Beyond",
      excerpt: "Explore the latest CSS features including container queries, cascade layers, and how they're changing responsive design.",
      icon: "🎨"
    }
  ];

  return (
    <section className={styles.relatedPosts}>
      <div className={styles.relatedContainer}>
        <h2 className={styles.relatedTitle}>📚 Related Articles</h2>
        <div className={styles.relatedGrid}>
          {relatedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className={styles.relatedCard}>
              <div className={styles.relatedImage}>{post.icon}</div>
              <div className={styles.relatedContent}>
                <div className={styles.relatedDate}>{post.date}</div>
                <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                <p className={styles.relatedExcerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;