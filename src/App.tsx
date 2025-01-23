import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import RouterToTop from './utils/RouterToTop';
import useLenisScroll from './utils/useLenisScroll';

const App: React.FC = () => {
  useLenisScroll();
  return (
    <>
      <Router>
        <RouterToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
