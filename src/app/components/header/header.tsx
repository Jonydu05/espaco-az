import Icon from '../Icon/Icon';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <p>AZ</p>
      <nav>
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Relatos</a>
          </li>
          <li>
            <a href="">Fotos</a>
          </li>
          <li>
            <a href="">Marcar consulta</a>
          </li>
        </ul>
      </nav>
      <Icon classIcon={styles.icon}>account_circle</Icon>
    </header>
  );
}
