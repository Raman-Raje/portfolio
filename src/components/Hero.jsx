"use client";

import { useState, useEffect } from 'react';
import { Rss,CloudDownload } from 'lucide-react';
import styles from '@/styles/components/Hero.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Raman Shinde';

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = (e) => {
    e.preventDefault();
    // Resume download logic (same as in Navigation component)
    // ... (resume download code)
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>{displayText}</h1>
          <p className={styles.tagline}>AI Engineer</p>
          <p className={styles.description}>
            Driving innovation in GenAI and AI compute with 10 years of expertise. Specializing in ML compilers, deep learning and scalable deployments.
            I transform complex problems into elegant, scalable solutions.
          </p>
          <div className={styles.ctaButtons}>
            <a 
              href="/blog" 
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <Rss/>
              <span>Developer Blogs</span>
            </a>
            <a 
              href="#" 
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={downloadResume}
              style={{background: 'linear-gradient(135deg, var(--accent), #0891b2)'}}
            >
              <CloudDownload/>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <div className={`${styles.codeDot} ${styles.dotRed}`}></div>
              <div className={`${styles.codeDot} ${styles.dotYellow}`}></div>
              <div className={`${styles.codeDot} ${styles.dotGreen}`}></div>
            </div>
            <div className={styles.codeContent}>
              <div className={styles.codeLine}>
                <span className={styles.keyword}>const</span> <span className={styles.string}>developer</span> = {'{'}
              </div>
              <div className={styles.codeLine}>
                  name: <span className={styles.string}>'Raman Shinde'</span>,
              </div>
              <div className={styles.codeLine}>
                  experience: <span className={styles.string}>'10 years'</span>,
              </div>
              <div className={styles.codeLine}>
                  passion: <span className={styles.string}>'Clean Code'</span>,
              </div>
              <div className={styles.codeLine}>
                  <span className={styles.comment}>// Always learning</span>
              </div>
              <div className={styles.codeLine}>{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;