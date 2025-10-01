import { Inter } from 'next/font/google';
import "@/styles/global.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Raman Shinde - Developer Blog',
  description: 'Insights about modern web development, emerging technologies, and best practices.',
  keywords: 'Gen AI/ML development, AI Compute, AI compilers and programming blog',
};

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}