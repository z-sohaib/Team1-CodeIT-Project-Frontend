/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { Link } from 'react-router-dom';
const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [toggle, setIsToggle] = useState(false);
  return (
    <header>
      <nav className="container flex flex-col ">
        <div className="flex justify-between items-center py-4">
          <div className="py-1">
            <Link to="/">
              <h3 className="font-bold text-xl lg:text-2xl dark:text-white">
                Learn<span className="text-learnplat-yellow">Plat</span>
              </h3>
            </Link>
          </div>
          <ul className="hidden sm:flex items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer text-learnplat-gray font-semibold hover:border-b-2 hover:border-learnplat-yellow transition duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer text-learnplat-gray font-semibold hover:border-b-2 hover:border-learnplat-yellow transition duration-500">
              <Link to="/roadmaps">Roadmaps</Link>
            </li>
            <li className="cursor-pointer text-learnplat-gray font-semibold hover:border-b-2 hover:border-learnplat-yellow transition duration-500">
              <Link to="/articles">Articles</Link>
            </li>

            <li className="cursor-pointer text-learnplat-gray font-semibold hover:border-b-2 hover:border-learnplat-yellow transition duration-500">
              <Link to="/leaderboard">Scoreboard</Link>
            </li>
            <div onClick={() => setTheme(colorTheme)}>
              {colorTheme === 'dark' ? (
                <li className="cursor-pointer">
                  <i className="text-2xl fas fa-moon"></i>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <i className="text-2xl text-white far fa-sun"></i>
                </li>
              )}
            </div>
          </ul>
          <div className="hidden md:flex md:items-center">
            <Link to="/register" className="text-learnplat-gray py-2 px-6">
              <button type="button">Login</button>
            </Link>
            <Link
              to="/login"
              className="bg-learnplat-yellow text-white px-6 py-2 rounded-3xl"
            >
              <button type="button">Register</button>
            </Link>
          </div>
          <div className="flex sm:hidden">
            <ul
              className="cursor-pointer mr-4"
              onClick={() => setTheme(colorTheme)}
            >
              {colorTheme === 'dark' ? (
                <li className="cursor-pointer">
                  <i className="text-2xl fas fa-moon"></i>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <i className="text-2xl text-white far fa-sun"></i>
                </li>
              )}
            </ul>
            <div
              className="cursor-pointer dark:text-white"
              onClick={() => setIsToggle(!toggle)}
            >
              <i className="text-2xl fas fa-bars"></i>
            </div>
          </div>
        </div>
        <div
          className={
            'sm:hidden flex flex-col items-center gap-4 bg-learnplat-yellow dark:bg-learnplat-second-yellow py-4 rounded transition duration-500 ' +
            (toggle ? '' : 'hidden')
          }
        >
          <Link
            to="/"
            className="text-white hover:border-b-2 hover:border-white transition duration-500"
          >
            Home
          </Link>
          <Link
            to="/roadmaps"
            className="text-white hover:border-b-2 hover:border-white transition duration-500"
          >
            Roadmaps
          </Link>
          <Link
            to="/articles"
            className="text-white hover:border-b-2 hover:border-white transition duration-500"
          >
            Articles
          </Link>
          <Link
            to="/leaderboard"
            className="text-white hover:border-b-2 hover:border-white transition duration-500"
          >
            Scoreboard
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="bg-white rounded font-bold text-learnplat-yellow py-2 px-6"
            >
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
