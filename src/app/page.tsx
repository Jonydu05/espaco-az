import { Header, Footer } from './components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}></main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
