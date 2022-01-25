/* eslint-disable prettier/prettier */
// import Home from './components/Home.js'
import Roadmaps from './components/Roadmaps.js'
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  useDarkMode();
  return (
    <div className="font-Rubik bg-learnplat-light dark:bg-learnplat-dark transition duration-500">
      {/* <Home /> */}
      <Roadmaps />
    </div>
  );
};

export default App;
