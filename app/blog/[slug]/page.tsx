import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostHtml, getPostMeta, getPostSlugs } from '@/lib/posts';
import { TopNav } from '@/components/TopNav';
import { Footer } from '@/components/Footer';
import styles from './post.module.css';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const meta = getPostMeta(params.slug);
  if (!meta) return {};
  return {
    title: `${meta.title} · Portfolio`,
    description: meta.excerpt,
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      images: [{ url: `/images/og/${params.slug}.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: meta.title,
      description: meta.excerpt,
      images: [`/images/og/${params.slug}.jpg`],
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const meta = getPostMeta(params.slug);
  if (!meta) notFound();
  const html = await getPostHtml(params.slug);

  return (
    <>
      <TopNav />
      <main className="page">
        <Link href="/blogs" className={styles.back}>← all posts</Link>
        <article
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Footer />
      </main>
    </>
  );
}
