/* eslint-disable prettier/prettier */
import Home from './components/Home.js';
import Roadmaps from './components/Roadmaps.js';
import useDarkMode from './hooks/useDarkMode';
import Header from './components/Header.js';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  useDarkMode();
  return (
      <div className="font-Rubik bg-learnplat-light dark:bg-learnplat-dark transition duration-500">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/roadmaps" element={<Roadmaps />} />
        </Routes>
      </div>
  );
};

export default App;
