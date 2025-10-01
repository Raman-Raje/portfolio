import Link from 'next/link';
import styles from '@/styles/components/blog/AuthorBio.module.css';

const AuthorBio = () => {
  return (
    <div className={styles.authorBio}>
      <div className={styles.authorAvatar}>RS</div>
      <div className={styles.authorInfo}>
        <h3>Raman Shinde</h3>
        <p>
          Senior Full-Stack Developer with 10+ years of experience building scalable web applications. 
          Passionate about emerging technologies, performance optimization, and sharing knowledge with the developer community. 
          When not coding, you can find me contributing to open-source projects or mentoring junior developers.
        </p>
        <div className={styles.authorLinks}>
          <Link href="/" className={styles.authorLink}>← Back to Portfolio</Link>
          <Link href="/blog" className={styles.authorLink}>More Articles</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;