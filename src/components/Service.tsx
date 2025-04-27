import styles from './Service.module.css';
import { IconType } from 'react-icons'; // <- Importa o tipo dos ícones

interface ServiceProps {
  icon: IconType;
  title: string;
  desc: string;
}

export function Service({ icon: Icon, title, desc }: ServiceProps) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Icon size={32} />
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={styles.description}>
        <p>{desc}</p>
      </div>
    </div>
  );
}
