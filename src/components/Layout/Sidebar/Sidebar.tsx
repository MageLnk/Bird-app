// Components
import { Navigation } from "./Navigation/Navigation";
// Styles
import styles from "./Sidebar.module.scss";
// App
export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar__contentContainer}>
        <div className={styles.contentContainer__title}>
          <h3>The Birds App</h3>
        </div>
        <div className={styles.contentContainer__owner}>
          <p>By Copilot</p>
        </div>
        <div className={styles.contentContainer__nav}>
          <Navigation />
        </div>
      </div>
    </section>
  );
};
