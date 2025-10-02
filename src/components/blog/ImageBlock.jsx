'use client';

import Image from 'next/image';
import styles from '@/styles/components/blog/ImageBlock.module.css';

const ImageBlock = ({ src, alt = '', width = 800, height = 450 }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 800px"
        priority
      />
      {alt && <p className={styles.caption}>{alt}</p>}
    </div>
  );
};

export default ImageBlock;
