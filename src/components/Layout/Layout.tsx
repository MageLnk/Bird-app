import { Outlet } from 'react-router-dom';
// Components
import { Sidebar } from './Sidebar/Sidebar';
// Styles
import styles from './Layout.module.scss';
// App
const Layout = () => {
  return (
    <main className={styles.layout}>
      <header className={styles.layout__sidebarContainer}>
        <Sidebar />
      </header>
      <main className={styles.layout__mainContainer}>
        <Outlet />
      </main>
    </main>
  );
};

export default Layout;
