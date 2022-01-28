/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Home from './components/Home.js';
import Roadmaps from './components/Roadmaps.js';
import useDarkMode from './hooks/useDarkMode';
import Header from './components/Header.js';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
const App = () => {
  useDarkMode();
  return (
    <div className="font-Rubik bg-learnplat-light">

      <div className="dark:bg-learnplat-dark transition duration-500">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
