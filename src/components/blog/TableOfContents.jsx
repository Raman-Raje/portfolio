'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/components/blog/TableOfContents.module.css';

const TableOfContents = ( ) => {
  const [activeId, setActiveId] = useState('');

  const tocItems = [
    { id: 'ai-integration', title: '1. AI-Powered Development' },
    { id: 'serverless', title: '2. Serverless Architecture Evolution' },
    { id: 'frameworks', title: '3. Next-Gen JavaScript Frameworks' },
    { id: 'performance', title: '4. Performance-First Approach' },
    { id: 'accessibility', title: '5. Accessibility as Standard' },
    { id: 'conclusion', title: '6. Looking Ahead' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.tocContainer}>
      <h3 className={styles.tocTitle}>📋 Table of Contents</h3>
      <ul className={styles.tocList}>
        {tocItems.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`${styles.tocLink} ${activeId === id ? styles.active : ''}`}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;