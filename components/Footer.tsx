import { SITE } from '@/lib/config';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.foot}>
      <span>© {year} {SITE.name}</span>
    </footer>
  );
}
