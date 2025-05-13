// Components
import { BirdList } from './BirdList/BirdList';
import { SearchBirdBar } from './SearchBirdBar/SearchBirdBar';
// Styles
import styles from './Home.module.scss';
import { Example } from '../../Example';
// App
const Home = () => {
  return (
    <section className={styles.home}>
      <section className={styles.home__title}>
        <h1>Birds</h1>
      </section>

      <section className={styles.home__searchBirdBar}>
        <SearchBirdBar />
      </section>

      <section className={styles.home__birdList}>
        <BirdList />
      </section>

      <Example />
    </section>
  );
};

export default Home;
