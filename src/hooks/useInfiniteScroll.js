'use client';

import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = ({ postsPerPage = 6, selectedTags, selectedCategory, allPosts }) => {
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getFilteredPosts = useCallback(() => {
    return allPosts.filter(post => {
      const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
      const tagsMatch = selectedTags.length === 0 || selectedTags.every(tag => post.tags.includes(tag));
      return categoryMatch && tagsMatch;
    });
  }, [selectedTags, selectedCategory, allPosts]);

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    setTimeout(() => {
      const filtered = getFilteredPosts();
      const start = (page - 1) * postsPerPage;
      const end = start + postsPerPage;
      const newPosts = filtered.slice(start, end);

      if (newPosts.length > 0) {
        setDisplayedPosts(prev => [...prev, ...newPosts]);
        setPage(prev => prev + 1);
        setHasMore(end < filtered.length);
      } else {
        setHasMore(false);
      }

      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore, page, postsPerPage, getFilteredPosts]);

  // Reset on filter change
  useEffect(() => {
    setDisplayedPosts([]);
    setPage(1);
    setHasMore(true);
    loadMore();
  }, [selectedTags, selectedCategory]);

  return { displayedPosts, loadMore, hasMore, isLoading };
}

export default useInfiniteScroll;
