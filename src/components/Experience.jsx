// File: components/Experience.js
import styles from '@/styles/components/Experience.module.css';
import { experienceData } from '@/constants/staticData';

const Experience = () => {

  return (
    <section className={`${styles.section} ${styles.experience}`} id="experience">
      <h2 className={styles.sectionTitle}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experienceData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <span className={styles.timelineDate}>
              {item.startDate.month} {item.startDate.year} -{" "}
              {item.endDate.month} {item.endDate.year || ""}
            </span>
            <h3 className={styles.timelineTitle}>{item.title}</h3>
            <div className={styles.timelineCompany}>{item.company}</div>
            <ul className={styles.timelineDescription}>
                {item.description.map((point, i) => (
                  <li key={i} className={styles.descriptionItem}>
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;