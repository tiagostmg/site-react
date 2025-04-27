import styles from './MainContent.module.css';
import { Service } from './Service';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa';

export function MainContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <div className={styles.blueBackground}>
          <div className={styles.textContent}>
            <h1>Nós somos a</h1>
          </div>
        <div className={styles.services}>
          <Service icon={FaBeer} title="aaaa" desc="1"/>
          <Service icon={FaCoffee} title="2222" desc="2"/>
          <Service icon={FaApple} title="hhhh" desc="3"/>
        </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.peoplePhoto}>
          <img 
            src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Foto das pessoas" 
          />
        </div>
      </div>
    </div>
  );
}