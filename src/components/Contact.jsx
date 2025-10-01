import { useState } from 'react';
import Image from 'next/image';
import { socialLinks } from '@/constants/staticData';
import styles from '@/styles/components/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className={`${styles.section} ${styles.contact}`} id="contact">
      <h2 className={styles.sectionTitle}>Let's Work Together</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3>Ready to start your next project?</h3>
          <p>
            I'm always interested in new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Image
                src="/social/email.svg"
                alt="Email"
                width={20}
                height={20}
                className={styles.contactIconImage}
              />
            </div>
            <div>
              <strong>Email</strong><br />
              raman.shinde15@gmail.com
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Image
                src="/social/location.svg"
                alt="Location"
                width={20}
                height={20}
                className={styles.contactIconImage}
              />
            </div>
            <div>
              <strong>Location</strong><br />
              Bengaluru, India
            </div>
          </div>
       <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`${styles.socialLink} ${styles[social.platform]}`}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.iconSrc}
                  alt={social.alt}
                  width={22}
                  height={22}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.contactForm}>
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;