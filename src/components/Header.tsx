import styles from './Header.module.css'; 
import logo from '../assets/react.svg'; 

export function Header() {
  return (
    <header className={styles.header}>
      
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo da Target" className={styles.logo} />
        <span className={styles.companyName}>Target</span>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/#" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#" className={styles.navLink}>Sobre</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#" className={styles.navLink}>Serviços</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#" className={styles.navLink}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
