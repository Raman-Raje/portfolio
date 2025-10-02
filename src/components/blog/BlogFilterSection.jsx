import { categories,tags } from '@/constants/blogData';
import styles from '@/styles/components/blog/BlogFilterSection.module.css'

const BlogFilterSection = ({ selectedTags, setSelectedTags, selectedCategory, setSelectedCategory }) => {
  const toggleTag = tag =>
    setSelectedTags(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedCategory('all');
  };

  const hasActiveFilters = selectedTags.length > 0 || selectedCategory !== 'all';

  return (
    <div className={styles.filterSection}>
      <div className={styles.filterContainer}>
        {/* Category Filter */}
        <div className={styles.filterGroup}>
          <h3 className={styles.filterLabel}>
            <span className={styles.filterIcon}>📂</span>
            Category
          </h3>
          <div className={styles.categoryFilter}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`${styles.categoryBtn} ${selectedCategory === cat.id ? styles.active : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tags Filter */}
        <div className={styles.filterGroup}>
          <div className={styles.tagsHeader}>
            <h3 className={styles.filterLabel}>
              <span className={styles.filterIcon}>🏷️</span>
              Tags
              {selectedTags.length > 0 && (
                <span className={styles.selectedCount}>({selectedTags.length} selected)</span>
              )}
            </h3>
          </div>
          <div className={styles.tagsFilter}>
            {tags.map(tag => (
              <button
                key={tag}
                className={`${styles.tagBtn} ${selectedTags.includes(tag) ? styles.active : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && <span className={styles.checkmark}>✓</span>}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <button className={styles.clearBtn} onClick={clearFilters}>
            <span>✕</span> Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}

export default BlogFilterSection;
