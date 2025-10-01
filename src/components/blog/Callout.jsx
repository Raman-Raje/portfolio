import styles from '@/styles/components/blog/Callout.module.css';

const Callout = ({ type = 'info', title, children }) => {
  const getCalloutClass = () => {
    switch (type) {
      case 'warning': return styles.calloutWarning;
      case 'success': return styles.calloutSuccess;
      case 'error': return styles.calloutError;
      default: return styles.calloutInfo;
    }
  };

  return (
    <div className={`${styles.callout} ${getCalloutClass()}`}>
      <div className={styles.calloutTitle}>{title}</div>
      {children}
    </div>
  );
};

export default Callout;