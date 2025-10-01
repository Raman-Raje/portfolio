import { useTheme } from '@/hooks/useTheme';
import { navItems } from '@/constants/staticData';
import styles from '@/styles/components/Navigation.module.css';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeToggle} onClick={toggleTheme}>
      <div className={`${styles.themeToggleSlider} ${theme === 'dark' ? styles.dark : ''}`}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>RS</div>

        <ul className={styles.navLinks}>
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className={styles.mobileControls}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
