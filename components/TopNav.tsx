'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { SITE } from '@/lib/config';
import { useTheme } from './ThemeProvider';
import { TweaksPanel } from './TweaksPanel';
import styles from './TopNav.module.css';

export function TopNav() {
  const pathname = usePathname();
  const { theme, toggleMode } = useTheme();
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const gearRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/';
  const isLight = theme.mode === 'light';

  // Close tweaks on outside click or Escape
  useEffect(() => {
    if (!tweaksOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (
        panelRef.current?.contains(e.target as Node) ||
        gearRef.current?.contains(e.target as Node)
      ) return;
      setTweaksOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTweaksOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [tweaksOpen]);

  return (
    <nav className={styles.topnav} aria-label="Primary">
      <Link href="/" className={styles.brand}>~/{SITE.handle}</Link>

      <div className={styles.actions}>
        {isHome && (
          <Link href="/blogs" className={styles.navLink}>
            blogs
          </Link>
        )}

        <button
          type="button"
          className={`${styles.iconBtn} ${isLight ? '' : styles.iconBtnDark}`}
          onClick={toggleMode}
          aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          title={isLight ? 'Light mode' : 'Dark mode'}
        >
          {isLight ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <div className={styles.tweaksWrap}>
          <button
            type="button"
            ref={gearRef}
            className={`${styles.iconBtn} ${tweaksOpen ? styles.iconBtnActive : ''}`}
            onClick={() => setTweaksOpen((v) => !v)}
            aria-label="Theme settings"
            aria-expanded={tweaksOpen}
            title="Customize"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          {tweaksOpen && (
            <div ref={panelRef}>
              <TweaksPanel onClose={() => setTweaksOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
