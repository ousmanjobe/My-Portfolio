import styles from './style.module.scss';

export default function Index() {
  return (
    <div className={`${styles.footer} font-urbanist`}>
      <a href="mailto:jobe.o@northeastern.edu" target="_blank" rel="noopener noreferrer">EMAIL</a>
      <a href="https://www.linkedin.com/in/jobe-ousman" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
      <a href="https://www.instagram.com/lounge_tales/profilecard/?igsh=NXl1cnl5M3RlaWRs" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
    </div>
  );
}