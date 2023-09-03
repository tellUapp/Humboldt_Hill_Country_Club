import './Content.css';

import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';

const Content: React.FC = () => {
  return (
    <>
      <section className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </section>
    </>
  );
};

export default Content;