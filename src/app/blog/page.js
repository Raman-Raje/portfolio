import BlogNavigation from '@/components/blog/BlogNavigation';
import BlogFooter from '@/components/blog/BlogFooter';
import { ThemeProvider } from '@/contexts/ThemeContext';
import BlogsBody from '@/components/blog/BlogsBody';

export default function BlogList() {
  return (
    <ThemeProvider>
      <BlogNavigation />
      <BlogsBody />
      <BlogFooter />
    </ThemeProvider>
  );
}