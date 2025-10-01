// File: components/Projects.js
import Image from 'next/image';
import { projectsData } from '@/constants/staticData';
import styles from '@/styles/components/Projects.module.css';

const Projects = () => {

  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.sectionTitle}>Solo Ventures</h2>
      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <article key={index} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <div className={styles.logoContainer}>
                <div className={styles.logoCircle}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={48}
                    height={48}
                    className={styles.logoImage}
                  />
                </div>
              </div>
              <div className={styles.projectTitleGroup}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectTimeline}>{project.timeline}</div>
              </div>
              <span
                className={`${styles.projectStatus} ${
                  project.status === "Shutdown"
                    ? styles.statusShutdown
                    : styles.statusActive
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className={styles.projectContent}>
              <p className={styles.projectSummary}>{project.summary}</p>
              <ul className={styles.projectDescription}>
                {project.description.map((item, i) => (
                  <li key={i} className={styles.descriptionItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {project.link && (
              <div className={styles.projectFooter}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <span>Visit Project</span>
                  <span className={styles.linkIcon}>↗</span>
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;