/* =============================================================
   content/posts.ts
   Blog manifest. Add a new post here AND drop the matching .md
   file in content/blog/<slug>.md.
   ============================================================= */

export interface PostMeta {
  slug: string;
  title: string;
  date: string;     // ISO YYYY-MM-DD
  tags: string[];
  excerpt: string;
}

export const POSTS: PostMeta[] = [
  {
    slug: 'imports-in-solidity',
    title: 'Imports in Solidity',
    date: '2025-02-21',
    tags: ['blockchain', 'solidity', 'ethereum', 'smart contracts'],
    excerpt:
      'Understanding imports in Solidity: local imports, importing directly from GitHub, and handling dependencies in Brownie.',
  },
  {
    slug: 'ai-compilers-overview',
    title: 'Exploring the World of AI Compilers: Powering AI Compute and Inference',
    date: '2025-02-20',
    tags: ['compilers', 'TVM', 'triton', 'IREE', 'ONNX'],
    excerpt:
      'From NVIDIA TensorRT to OpenAI Triton, discover the AI compilers revolutionizing performance across GPUs, CPUs, and edge devices.',
  },
];
