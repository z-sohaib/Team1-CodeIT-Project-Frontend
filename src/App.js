/* eslint-disable prettier/prettier */
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Feature from './components/Feature.js';
import Feature1Image from './images/feature1.svg';
import Feature2Image from './images/feature2.svg';
import Feature3Image from './images/feature3.svg';
import useDarkMode from './hooks/useDarkMode';
const App = () => {
  useDarkMode();
  return (
    <div className="font-Rubik bg-learnplat-light dark:bg-learnplat-dark transition duration-500">
      <Header />
      <Hero />
      <Feature
        semiTitle1={'Roadmaps'}
        cep={'&'}
        semiTitle2={'Projects'}
        content={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ornare cursus dignissim pellentesque hendrerit proin. Consectetur diam ultrices sollicitudinhabitant porta faucibus et dictums'
        }
        link={'Motivated? Check out the courses ->'}
        image={Feature1Image}
        order_first={'order-first'}
      />
      <Feature
        semiTitle1={'Articles'}
        cep={'&'}
        semiTitle2={'News'}
        content={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ornare cursus dignissim pellentesque hendrerit proin. Consectetur diam ultrices sollicitudinhabitant porta faucibus et dictumst.'
        }
        link={'What’s new in the industry? ->'}
        image={Feature2Image}
      />

      <Feature
        semiTitle1={'League'}
        cep={'&'}
        semiTitle2={'Fun'}
        content={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ornare cursus dignissim pellentesque hendrerit proin. Consectetur diam ultrices sollicitudinhabitant porta faucibus et dictumst.'
        }
        link={'The best? Check the scoreboard ->'}
        image={Feature3Image}
        order_first={'order-first'}
      />
    </div>
  );
};

export default App;
