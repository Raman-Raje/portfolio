
import { notFound } from 'next/navigation';
import BlogNavigation from '@/components/blog/BlogNavigation';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Comments from '@/components/blog/Comments';
import NewsLetter from '@/components/blog/NewsLetter';
import BlogFooter from '@/components/blog/BlogFooter';
import ReadingProgress from '@/components/blog/ReadingProgress';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { getBlogPost } from '@/utils/blogUtils';

export default async function BlogPost({ params }) {

  const slug = params.slug;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }
  const { data, content } = post;

  return (
    <ThemeProvider>
      <ReadingProgress />
      <BlogNavigation />
      <BlogHeader {...data} />
      <BlogContent content={content}/>
      <RelatedPosts currentPostId={data.slug} />
      <Comments postId={data.slug} />
      <NewsLetter />
      <BlogFooter />
    </ThemeProvider>
  );
}