import Image from 'next/image';
import { SITE } from '@/lib/config';
import { SOCIAL_LINKS } from './SocialIcons';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.top}>
        <div className={styles.avatar}>
          <Image
            src="/images/profile/profile.jpg"
            alt={`${SITE.name} profile photo`}
            width={168}
            height={168}
            priority
          />
        </div>
        <div>
          <h1 className={styles.name}>{SITE.name}</h1>
          <div className={styles.role}>
            {SITE.role}
            <span className={styles.pill}>{SITE.yearsExp}</span>
          </div>
        </div>
      </div>
      <p
        className={styles.bio}
        dangerouslySetInnerHTML={{ __html: SITE.bio }}
      />

      <nav className={styles.social} aria-label="Social links">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
          >
            {s.svg}
          </a>
        ))}
        <a className={styles.email} href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </nav>
    </header>
  );
}
