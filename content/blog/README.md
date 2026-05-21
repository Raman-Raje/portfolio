# Blog posts

This folder holds the source of every blog post on the site. Each post is a
single Markdown file. Filenames are the **slug** — they become the URL.

## Adding a new post

1. **Create the markdown file.** Pick a slug (lowercase, hyphenated) and save
   the file as `blog/<slug>.md`. Example: `blog/on-flash-attention.md`.

2. **Write the post.** Use standard CommonMark / GFM:

   ~~~markdown
   # Post title

   *Published May 20, 2026 · ~6 min read*

   Opening paragraph...

   ## A section heading

   Body...

   > A blockquote.

   - bullet
   - bullet

   `inline code` and:

   ```python
   def fn(): ...
   ```
   ~~~

   The site has styles for headings (h1-h3), paragraphs, lists, blockquotes,
   inline code, code blocks, and horizontal rules. The first italic paragraph
   after the title is rendered in a monospaced byline style.

3. **Register the post in the manifest.** Open `content/posts.ts` and add
   a new entry to the `POSTS` array:

   ```ts
   {
     slug: 'on-flash-attention',
     title: 'On Flash Attention',
     date: '2026-05-20',              // ISO YYYY-MM-DD (sort key)
     tags: ['ml', 'systems'],         // any strings — filter chips auto-generate
     excerpt: 'Short tagline shown on the index list.',
   },
   ```

   The `slug` must match the markdown filename minus `.md`.

4. **Done.** Reload the site. The new post appears in the list, sorted by
   date (newest first), and is reachable at `/blog/<slug>`.

## Tag filtering

The filter chips above the post list are generated from the union of all
tags. Counts update automatically. There's nothing else to maintain — just
tag posts consistently and they group themselves.

## Images in blog posts

Drop images into `public/images/blog/` and reference them in markdown:

```markdown
![Quantization diagram](/images/blog/on-quantization-diagram.png)
```

Name images with the post slug as a prefix for easy association:
- `on-quantization-cover.jpg`
- `on-quantization-diagram.png`

Images are styled automatically (max-width, border-radius, border).

## Tips

- Keep the first line a Markdown `# Heading`. It becomes the visible post
  title (so you don't repeat it in the manifest title twice).
- The `excerpt` in the manifest is what shows on the index — it does *not*
  come from the markdown.
- `date` is just a sort key + display string. Future dates will appear at
  the top, so use real publish dates.
