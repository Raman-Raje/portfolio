/* =============================================================
   config.ts
   Central site configuration. Update once, applied everywhere.
   ============================================================= */

export const SITE = {
  name: 'Raman Shinde',
  handle: 'raman-shinde',
  role: 'Senior Lead Engineer, Qualcomm AI Research',
  yearsExp: '10+ yrs',
  email: 'raman.shinde15@gmail.com',
  bio: 'I build <strong>efficient on-device ML systems</strong> — compiler backends, GPU kernels, and the runtime plumbing that lets large models run on small hardware. Deep in TVM, llama.cpp, and Adreno GPU optimization. Previously at Imagination Technologies, Xpanxion, Siemens, and TCS.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
  title: 'Portfolio · Senior AI Engineer',
  description:
    'Senior Lead Engineer at Qualcomm AI Research. On-device ML, GPU compiler backends, LLM inference at the edge.',
} as const;
