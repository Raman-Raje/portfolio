import styles from './Skills.module.css';

interface Skill {
  name: string;
  primary?: boolean;
}

interface SkillGroup {
  label: string;
  items: Skill[];
}

const SKILLS: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'C', primary: true },
      { name: 'C++', primary: true },
      { name: 'Python', primary: true },
      { name: 'CUDA', primary: true },
      { name: 'OpenCL', primary: true },
      { name: 'Vulkan', primary: true },
    ],
  },
  {
    label: 'AI Inference & Compilers',
    items: [
      { name: 'Apache TVM', primary: true },
      { name: 'MLC-LLM', primary: true },
      { name: 'llama.cpp', primary: true },
      { name: 'vLLM' },
    ],
  },
  {
    label: 'Optimization',
    items: [
      { name: 'Quantization', primary: true },
      { name: 'Scheduling' },
      { name: 'Parallelism' },
      { name: 'Fusion' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'PyTorch', primary: true },
      { name: 'scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'ONNX' },
    ],
  },
  {
    label: 'Deployment & Tools',
    items: [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'GCP' },
      { name: 'Git' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
    ],
  },
];

export function Skills() {
  return (
    <section className="block" id="skills">
      <div className="section-head">
        <h2>Tech Stack</h2>
        <span className="kicker">SKILLS</span>
      </div>
      <div className={styles.grid}>
        {SKILLS.map((g) => (
          <div key={g.label} className={styles.group}>
            <div className={styles.label}>{g.label}</div>
            <div className={styles.items}>
              {g.items.map((item) => (
                <span
                  key={item.name}
                  className={`${styles.chip} ${item.primary ? styles.primary : ''}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
