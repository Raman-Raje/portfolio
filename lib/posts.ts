/* =============================================================
   posts.ts
   Server-only helpers for reading blog posts at build time.
   Used by the [slug] route's generateStaticParams + page.
   ============================================================= */

import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { POSTS, type PostMeta } from '@/content/posts';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/** Allowed HTML in rendered markdown — blocks scripts, event handlers, iframes. */
const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    'img', 'figure', 'figcaption', 'picture', 'source',
    'details', 'summary', 'mark', 'del', 'ins', 'sup', 'sub',
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ['src', 'alt', 'width', 'height', 'loading'],
    a: ['href', 'title', 'target', 'rel'],
    code: ['class'],
    span: ['class'],
    pre: ['class'],
  },
  allowedSchemes: ['http', 'https', 'mailto'],
};

export function getAllPosts(): PostMeta[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export async function getPostHtml(slug: string): Promise<string> {
  const file = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(file)) {
    throw new Error(
      `Markdown file not found for slug "${slug}". Expected: ${file}`
    );
  }

  const md = fs.readFileSync(file, 'utf8');
  const raw = marked.parse(md) as string;
  return sanitizeHtml(raw, SANITIZE_OPTIONS);
}
