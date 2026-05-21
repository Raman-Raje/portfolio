import type { Metadata } from 'next';
import { TopNav } from '@/components/TopNav';
import { BlogList } from '@/components/BlogList';
import { Footer } from '@/components/Footer';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blogs · Portfolio',
  description: 'All blog posts on systems, ML, and engineering.',
};

export default function BlogsPage() {
  const posts = getAllPosts();
  return (
    <>
      <TopNav />
      <main className="page">
        <BlogList posts={posts} />
        <Footer />
      </main>
    </>
  );
}
