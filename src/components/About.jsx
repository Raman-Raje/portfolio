import styles from '@/styles/components/About.module.css';

const About = () => {
  return (
    <section className={`${styles.section} ${styles.about}`} id="about">
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
Senior Lead Engineer specializing in Machine Learning compilers and performance optimization with TVM. 
Experienced in building deep learning solutions across CNNs, RNNs/LSTMs, Transformers, Autoencoders, and LLMs. 
Skilled in classical ML algorithms and proficient in deploying scalable AI systems using AWS, GCP, Docker, and Kubernetes.
          </p>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;