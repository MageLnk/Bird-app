// Components
import { TitleContainer } from './TitleContainer/TitleContainer';
// Styles
import styles from './Bird.module.scss';
// App
const Bird = () => {
  return (
    <section className={styles.bird}>
      <section className={styles.bird__title}>
        <TitleContainer />
      </section>

      <section className={styles.bird__notes}></section>

      <section className={styles.bird__languagues}></section>
    </section>
  );
};

export default Bird;
