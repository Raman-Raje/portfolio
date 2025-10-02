
import NextLink from 'next/link';
import styles from '@/styles/components/blog/LinkBlock.module.css';

const isExternal = (url) => /^https?:\/\//.test(url);

const LinkBlock = ({ href, children }) => {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {children}
        <span className={styles.externalIcon}>↗</span>
      </a>
    );
  }

  return (
    <NextLink href={href} className={styles.link}>
      {children}
    </NextLink>
  );
};

export default LinkBlock;
