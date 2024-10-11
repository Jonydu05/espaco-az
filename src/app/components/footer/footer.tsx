import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__top']}>
        <nav>
          <ul>
            <li>Mapa do site</li>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Relatos</a>
            </li>
            <li>
              <a href="/">Fotos</a>
            </li>
            <li>
              <a href="/">Sobre mim</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Marcar consulta</a>
            </li>
            <li>
              <a href="/">Termos de uso</a>
            </li>
            <li>
              <a href="/">Termos de privacidade</a>
            </li>
          </ul>
        </nav>

        <div>
          <h3>Deseja receber notificações sobre eventos realizados pela Espaço AZ?</h3>
          <p>Não enviaremos spam, mas se não quiser receber é possível cancelar a qualquer momento!</p>

          <div className={styles['footer__input']}>
            <div>
              <input type="text" placeholder="Digite seu número" />
            </div>
            <button>Zap</button>
          </div>
        </div>
      </div>
      <div className={styles['footer__bottom']}>
        <ul>
          <li>Whatsapp</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>

        <p>Espaço AZ - ₢ 2024</p>

        <p>
          <a href="/">Termos de uso</a> | <a href="/">Termos de privacidade</a>
        </p>
      </div>
    </footer>
  );
}
