import BlogNavigation from '@/components/blog/BlogNavigation';
import BlogFooter from '@/components/blog/BlogFooter';
import { ThemeProvider } from '@/contexts/ThemeContext';
import BlogsBody from '@/components/blog/BlogsBody';
import { getAllPosts } from '@/utils/blogUtils';

export default function BlogList() {

  const allPosts = getAllPosts();

  return (
    <ThemeProvider>
      <BlogNavigation />
      <BlogsBody allPosts={allPosts}/>
      <BlogFooter />
    </ThemeProvider>
  );
}