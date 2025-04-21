import styles from './MainContent.module.css'; // Crie este arquivo CSS Module
import pessoas from '../assets/pessoas.png'; // Imagem de exemplo

export function MainContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <div className={styles.blueBackground}>
          <div className={styles.textContent}>
            <h1>Nós somos a target contabilidade</h1>
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.serviceItem}>Serviço 1</div>
          <div className={styles.serviceItem}>Serviço 2</div>
          <div className={styles.serviceItem}>Serviço 3</div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.peoplePhoto}>
          <img 
            src={pessoas}
            alt="Foto das pessoas" 
          />
        </div>
      </div>
    </div>
  );
}