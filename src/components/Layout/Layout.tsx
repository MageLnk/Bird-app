import { Outlet } from "react-router-dom";
// Styles
import styles from "./Layout.module.scss";
// App
const Layout = () => {
  return (
    <main className={styles.layoutContainer}>
      <header className={styles.layoutContainer__sidebarContainer}>
        <p>Sidebar</p>
      </header>
      <main className={styles.layoutContainer__mainContainer}>
        <Outlet />
      </main>
    </main>
  );
};

export default Layout;
