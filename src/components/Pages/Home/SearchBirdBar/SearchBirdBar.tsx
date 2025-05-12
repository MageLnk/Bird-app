// Styles
import styles from './SearchBirdBar.module.scss';
// App
export const SearchBirdBar = () => {
  return (
    <label className={styles.searchBirdBar}>
      <input className={styles.input} placeholder="Search for birds" />
    </label>
  );
};
