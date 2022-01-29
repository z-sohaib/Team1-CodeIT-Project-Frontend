/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Home from './pages/Home.js';
import Roadmaps from './pages/Roadmaps.js';
import Roadmap from './pages/Roadmap.js';
import useDarkMode from './hooks/useDarkMode';
import Header from './components/Header.js';
import Leaderboard from './pages/Leaderboard.js';
import Articles from './pages/Articles.js';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer.js';
const App = () => {
  useDarkMode();
  return (
    <div className="font-Rubik bg-learnplat-light">
      <div className="dark:bg-learnplat-dark transition duration-500">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />

      </div>
    </div>
  );
};

export default App;
