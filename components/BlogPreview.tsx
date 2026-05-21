import Link from 'next/link';
import type { PostMeta } from '@/content/posts';
import styles from './BlogPreview.module.css';

const MAX_PREVIEW = 5;

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return d
    .toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    .toUpperCase();
}

export function BlogPreview({ posts }: { posts: PostMeta[] }) {
  const preview = posts.slice(0, MAX_PREVIEW);
  const hasMore = posts.length > MAX_PREVIEW;

  return (
    <section className="block" id="blogs">
      <div className="section-head">
        <h2>Blogs</h2>
        <span className="kicker">{posts.length} POSTS</span>
      </div>

      <div className={styles.list}>
        {preview.map((p) => (
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

      {hasMore && (
        <Link href="/blogs" className={styles.viewAll}>
          View all posts →
        </Link>
      )}
    </section>
  );
}
