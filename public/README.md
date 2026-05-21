# Static Assets

```
public/
  favicons/          -> favicon.ico, apple-touch-icon.png, site.webmanifest
  images/
    profile/         -> profile photo (profile.jpg)
    blog/            -> blog post images, named by slug (e.g. on-quantization-cover.jpg)
    og/              -> Open Graph / social share images (e.g. og-default.jpg)
```

## Usage in code

All files in `public/` are served from the site root:

```
public/images/profile/profile.jpg  ->  /images/profile/profile.jpg
public/images/blog/my-image.jpg    ->  /images/blog/my-image.jpg
```

In markdown blog posts, reference images like:

```markdown
![Alt text](/images/blog/on-quantization-diagram.png)
```

## Image guidelines

- **Profile photo:** square, at least 256x256px, JPEG or WebP
- **Blog images:** max width ~1200px, compress with quality ~80
- **OG images:** 1200x630px (standard social share size)
- **Favicons:** generate from a single source SVG/PNG using a favicon generator
