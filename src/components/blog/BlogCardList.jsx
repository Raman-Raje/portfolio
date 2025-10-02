'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/components/blog/BlogCardList.module.css';
import BlogCard from '@/components/blog/BlogCard';

const BlogCardList = ({ posts, isLoading, hasMore, loadMore }) => {

  const observerTarget = useRef(null);

  // Infinite scroll observer
  useEffect(() => {
    if (!observerTarget.current || !hasMore || isLoading) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) loadMore();
    });

    observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading, loadMore]);

  if (posts.length === 0) {
    return (
      <div className={styles.noResults}>
        <div className={styles.noResultsIcon}>🔍</div>
        <h3 className={styles.noResultsTitle}>No posts found</h3>
        <p className={styles.noResultsText}>Try adjusting your filters to see more results</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.resultsInfo}>
        <p className={styles.resultsCount}>
          Showing {posts.length} posts {hasMore && '(scroll for more)'}
        </p>
      </div>

      <div className={styles.postsGrid}>
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {isLoading && (
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner}></div>
          <p>Loading more posts...</p>
        </div>
      )}

      <div ref={observerTarget} className={styles.observerTarget}></div>

      {!hasMore && posts.length > 0 && (
        <div className={styles.endMessage}>
          <p>🎉 You've reached the end!</p>
        </div>
      )}
    </>
  );
}

export default BlogCardList;
