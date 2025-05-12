// Components
import { SearchBirdBar } from './SearchBirdBar/SearchBirdBar';
// Styles
import styles from './Home.module.scss';
// App
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__title}>
        <h1>Birds</h1>
      </div>

      <div className={styles.home__searchBirdBar}>
        <SearchBirdBar />
      </div>
    </div>
  );
};

export default Home;
