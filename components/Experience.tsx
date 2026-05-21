import styles from './Experience.module.css';

interface Role {
  company: string;
  location: string;
  role: string;
  when: string;
  highlights: string[];
  tags: string[];
}

const ROLES: Role[] = [
  {
    company: 'Qualcomm',
    location: 'Bangalore, India',
    role: 'Senior Lead Engineer · AI Research',
    when: 'Mar 2024 — Present',
    highlights: [
      'Implemented and upstreamed texture memory support for OpenCL and Vulkan backends in Apache TVM, optimizing data access patterns on Adreno GPUs to achieve a 50% reduction in inference time.',
      'Implemented Matrix ALU support via cooperative matrix extensions in TVM and llama.cpp Vulkan backends, delivering a 4× speedup in AI workloads and LLM prefill on Adreno GPUs.',
      'Enabled Q4 quantized inference for Adreno GPUs in the llama.cpp Vulkan backend, expanding on-device LLM compatibility and efficiency.',
      'Integrated CLML acceleration into GGML and llama.cpp, bypassing generic compute paths to deliver hardware-optimized on-device inference.',
      'Extended TVM and MLC-LLM with new operators, layers, and runtime features, enabling deployment of LLMs and Diffusion models on edge hardware.',
    ],
    tags: ['TVM', 'Vulkan', 'OpenCL', 'llama.cpp', 'Adreno GPU', 'LLM inference'],
  },
  {
    company: 'Imagination Technologies',
    location: 'Pune, India',
    role: 'Deep Learning Engineer',
    when: 'Sep 2021 — Mar 2024',
    highlights: [
      'Built a custom AI SDK on Apache TVM to enable high-performance neural network execution across heterogeneous GPU and NNA architectures for edge deployment.',
      'Implemented LSTM/RNN support in the Neural Compute SDK for PyTorch, TensorFlow, and ONNX, ensuring broader compatibility and accelerated performance.',
      'Developed custom graph transform passes in Relay IR, improving execution efficiency across diverse workloads.',
      'Developed quantization toolchains (Post-Training Quantization & QAT) across multiple frameworks, improving model compression and inference speed.',
    ],
    tags: ['TVM', 'Relay IR', 'quantization', 'GPU', 'NNA', 'edge AI'],
  },
  {
    company: 'Xpanxion',
    location: 'Pune, India',
    role: 'Data Scientist',
    when: 'Jan 2020 — Sep 2021',
    highlights: [
      'Developed an end-to-end NLP and OCR pipeline for medical document classification and information extraction, leveraging Fonduer, Tesseract, and OpenCV.',
      'Built reusable AI/ML components including content-based and collaborative recommendation systems and Question-Answering modules.',
      'Implemented advanced NLP components — NER, knowledge-base-driven QA systems, and sequence-to-sequence translation models.',
      'Delivered Computer Vision projects spanning object detection, image segmentation, and gesture recognition.',
    ],
    tags: ['NLP', 'OCR', 'computer vision', 'recommendation systems'],
  },
  {
    company: 'Siemens R&D',
    location: 'Pune, India',
    role: 'Product Development Engineer',
    when: 'Dec 2018 — Dec 2019',
    highlights: [
      'Developed a specialized application within Siemens NX to optimize the design of manufacturing sequences, improving efficiency and precision in assembly line operations.',
      'Identified and resolved coding issues, contributing to enhanced system performance and reliability across successive NX product releases.',
    ],
    tags: ['Siemens NX', 'manufacturing', 'C++'],
  },
  {
    company: 'TCS',
    location: 'Pune, India',
    role: 'Software Developer',
    when: 'Dec 2015 — Nov 2018',
    highlights: [
      'Developed monitoring and control applications for NCRA, including real-time issue monitoring, debugging, and GUI modifications based on client requirements.',
      'Provided support for financial applications (CRD, SRD) for Morgan Stanley, ensuring reliable performance and timely issue resolution.',
      'Built applications for various clients using Python and C++, contributing to diverse projects and delivering tailored software solutions.',
    ],
    tags: ['Python', 'C++', 'monitoring', 'financial systems'],
  },
];

export function Experience() {
  return (
    <section className="block" id="experience">
      <div className="section-head">
        <h2>Experience</h2>
        <span className="kicker">2015 — Present</span>
      </div>
      <div className={styles.list}>
        {ROLES.map((r) => (
          <div key={r.company + r.when} className={styles.item}>
            <div className={styles.header}>
              <div>
                <span className={styles.company}>{r.company}</span>
                <span className={styles.role}> — {r.role}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.when}>{r.when}</span>
                <span className={styles.location}>{r.location}</span>
              </div>
            </div>
            <ul className={styles.highlights}>
              {r.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {r.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
