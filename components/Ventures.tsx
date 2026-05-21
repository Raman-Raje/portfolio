import Image from 'next/image';
import styles from './Ventures.module.css';

interface Venture {
  title: string;
  timeline: string;
  image: string;
  status: 'In Progress' | 'Shutdown' | 'Exited';
  summary: string;
  link: string;
  highlights: string[];
}

const VENTURES: Venture[] = [
  {
    title: 'Ingreli',
    timeline: '2025',
    image: '/images/projects/ingreli.svg',
    status: 'Shutdown',
    link: 'https://www.ingreli.com',
    summary:
      'A mobile app that helps families make informed food choices by scanning product labels for simple ingredient analysis, safety alerts, and healthier alternatives.',
    highlights: [
      'Allows users to create personalized health profiles for their entire family to track unique dietary goals and restrictions.',
      'Instantly alerts users to harmful ingredients like allergens and carcinogens using a powerful OCR label scanner.',
      'Recommends healthier product alternatives tailored to individual dietary needs and preferences.',
    ],
  },
  {
    title: 'Medyzer',
    timeline: '2022 — 2023',
    image: '/images/projects/medyzer.png',
    status: 'Shutdown',
    link: 'https://www.medyzer.com',
    summary:
      'A SaaS platform designed to help doctors digitize their clinic workflow, from patient appointments to digital prescriptions.',
    highlights: [
      'Enabled doctors to manage appointments, patient records, and prescriptions across multiple clinics.',
      'Provided patients with QR-code appointment booking and access to their digital health records.',
      'Successfully onboarded practicing doctors and generated over 1,000 digital prescriptions.',
    ],
  },
];

const STATUS_CLASS: Record<Venture['status'], string> = {
  'In Progress': styles.statusActive,
  Shutdown: styles.statusShutdown,
  Exited: styles.statusExited,
};

export function Ventures() {
  return (
    <section className="block" id="ventures">
      <div className="section-head">
        <h2>Solo Ventures</h2>
        <span className="kicker">SIDE PROJECTS</span>
      </div>
      <div className={styles.list}>
        {VENTURES.map((v) => (
          <a
            key={v.title}
            href={v.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.avatar}>
              <Image
                src={v.image}
                alt={`${v.title} logo`}
                width={56}
                height={56}
              />
            </div>
            <div className={styles.body}>
              <div className={styles.top}>
                <span className={styles.title}>{v.title}</span>
                <span className={`${styles.status} ${STATUS_CLASS[v.status]}`}>
                  {v.status}
                </span>
                <span className={styles.timeline}>{v.timeline}</span>
              </div>
              <p className={styles.summary}>{v.summary}</p>
              <ul className={styles.highlights}>
                {v.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
