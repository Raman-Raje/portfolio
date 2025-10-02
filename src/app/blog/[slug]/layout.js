import { Inter } from 'next/font/google';
import { getBlogPost, getAllPostSlugs } from '@/utils/blogUtils';
import "@/styles/global.css";

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({
        slug: String(slug), // Ensure it's a string
    }));
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
