import { skillsData } from '@/constants/staticData';
import styles from '@/styles/components/Skills.module.css';

const Skills = () => {

  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3>{category.title}</h3>
            <div className={styles.skillTags}>
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;