/* Shared row layout used by OpenSource */
import styles from './CardRow.module.css';
import type { ReactNode } from 'react';

export interface CardLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface CardRowProps {
  name: string;
  badge?: string;        // e.g. "★ 2.4k", "acq. 2022", "active"
  meta?: string;         // right-aligned metadata (lang · license, role · vintage)
  desc: ReactNode;
  links?: CardLink[];
}

export function CardRow({ name, badge, meta, desc, links }: CardRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.name}>
        {name}
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      {meta && <div className={styles.meta}>{meta}</div>}
      <div className={styles.desc}>{desc}</div>
      {links && links.length > 0 && (
        <div className={styles.links}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
            >
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function CardStack({ children }: { children: ReactNode }) {
  return <div className={styles.stack}>{children}</div>;
}
