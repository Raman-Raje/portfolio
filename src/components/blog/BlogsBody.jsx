'use client';

import { useState } from 'react';
// import { allBlogPosts  } from '@/constants/blogData';
import styles from '@/styles/components/blog/BlogsBody.module.css';
import BlogCardList from './BlogCardList';
import BlogFilterSection from './BlogFilterSection';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const BlogsBody = ( { allPosts } ) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { displayedPosts, loadMore, hasMore, isLoading } = useInfiniteScroll({
    postsPerPage: 6,
    selectedTags,
    selectedCategory,
    allPosts,
  });

  return (
    <main className={styles.blogList}>
      <div className={styles.blogListHeader}>
        <h1 className={styles.blogListTitle}>Developer Blog</h1>
        <p className={styles.blogListDescription}>
          Insights about modern web development, emerging technologies, and programming best practices.
        </p>
      </div>

      <BlogFilterSection
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className={styles.postsSection}>
        <BlogCardList
          posts={displayedPosts}
          isLoading={isLoading}
          hasMore={hasMore}
          loadMore={loadMore}
        />
      </div>
    </main>
  );
}  

export default BlogsBody
