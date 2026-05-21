import { TopNav } from '@/components/TopNav';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { OpenSource } from '@/components/OpenSource';
import { Ventures } from '@/components/Ventures';
import { BlogPreview } from '@/components/BlogPreview';
import { Footer } from '@/components/Footer';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <>
      <TopNav />
      <main className="page" id="top">
        <Hero />
        <Experience />
        <Skills />
        <OpenSource />
        <Ventures />
        <BlogPreview posts={posts} />
        <Footer />
      </main>
    </>
  );
}
