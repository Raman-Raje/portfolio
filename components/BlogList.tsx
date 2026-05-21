'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { PostMeta } from '@/content/posts';
import styles from './BlogList.module.css';

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return d
    .toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    .toUpperCase();
}

export function BlogList({ posts }: { posts: PostMeta[] }) {
  const [activeTag, setActiveTag] = useState<string>('all');

  const { counts, tags } = useMemo(() => {
    const c: Record<string, number> = { all: posts.length };
    posts.forEach((p) => p.tags.forEach((t) => (c[t] = (c[t] || 0) + 1)));
    const t = ['all', ...Object.keys(c).filter((k) => k !== 'all').sort()];
    return { counts: c, tags: t };
  }, [posts]);

  const filtered = useMemo(
    () => posts.filter((p) => activeTag === 'all' || p.tags.includes(activeTag)),
    [posts, activeTag]
  );

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Blogs</h1>
        <span className={styles.kicker}>{filtered.length} posts</span>
      </div>

      <div className={styles.filters}>
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            className={`${styles.chip} ${activeTag === t ? styles.active : ''}`}
            onClick={() => setActiveTag(t)}
          >
            {t}<span className={styles.count}>{counts[t]}</span>
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {filtered.length === 0 && (
          <div className={styles.empty}>No posts in this tag yet.</div>
        )}
        {filtered.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.row}>
            <div className={styles.date}>{fmtDate(p.date)}</div>
            <div className={styles.body}>
              <div className={styles.title}>{p.title}</div>
              <div className={styles.excerpt}>{p.excerpt}</div>
              <div className={styles.postTags}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
