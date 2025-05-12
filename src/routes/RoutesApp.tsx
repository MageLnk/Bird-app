import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Components
import Home from '../components/Pages/Home/Home';
import Bird from '../components/Pages/Bird/Bird';
import Layout from '../components/Layout/Layout';
// App
const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bird/:id" element={<Bird />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesApp;
