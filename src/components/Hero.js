/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
import HeroImage from '../images/hero-image.png';
const Hero = () => {
  return (
    <section className="relative" id="home">
      <div className="container flex flex-col items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <p className="hidden md:block md:font-semibold md:text-2xl md:mx-auto md:text-learnplat-second-gray">
              GDG Algiers & WTM
            </p>
            <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-4 font-bold dark:text-white">
              Build your <span className="text-learnplat-yellow">Future</span> &
              achieve your <span className="text-learnplat-yellow">Dreams</span>
            </h2>
            <p className="text-xl font-normal text-center lg:text-left mb-6 dark:text-white">
              LearnPlat is knowledge sharing platform <br /> where you find
              roadmaps, courses and much more fun
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link
                to="/roadmaps"
                className="btn hover:bg-orange-400 text-white font-semibold text-xl mb-4"
              >
                <button type="button">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-4 md:mb-8 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-fit lg:h-fit"
              src={HeroImage}
              alt=""
            />
          </div>
        </div>
      <hr className=" w-1/2 border-black border-dashed mt-10 dark:border-white" />
      </div>
    </section>
  );
};

export default Hero;
