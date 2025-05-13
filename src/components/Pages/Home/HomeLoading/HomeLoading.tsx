// Components
import { SearchBirdBar } from '../SearchBirdBar/SearchBirdBar';
// Styles
import styles from './HomeLoading.module.scss';
// App
export const HomeLoading = () => {
  return (
    <div className={styles.homeLoading}>
      <section className={styles.home}>
        <section className={styles.homeLoading__title}>
          <h1>Birds</h1>
        </section>

        <section className={styles.homeLoading__searchBirdBar}>
          <SearchBirdBar />
        </section>

        <section className={styles.homeLoading__birdList}>
          <h1>Loading...</h1>
        </section>
      </section>
    </div>
  );
};
