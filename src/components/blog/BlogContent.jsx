"use client"

import TableOfContentsAuto from '@/components/blog/TableOfContetsAuto';
import ShareSection from '@/components/blog/ShareSection';
import styles from '@/styles/components/blog/BlogContent.module.css';
import { MDXRemote } from 'next-mdx-remote';
import { getMDXComponents } from '../../../mdx-components';

const BlogContent = ({ content }) => {

  const components = getMDXComponents();
  
  return (
    <main className={styles.blogContent}>
      <TableOfContentsAuto />
      <article className="prose lg:prose-xl">
        <MDXRemote {...content} components={components} />
      </article>      
      <ShareSection />
    </main>
  );
};

export default BlogContent;