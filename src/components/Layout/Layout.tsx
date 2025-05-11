import { Outlet } from "react-router-dom";
// APp
const Layout = () => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/bird/1">Bird</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
