/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
const Feature = ({
  semiTitle1,
  cep,
  semiTitle2,
  content,
  link,
  image,
  order_first,
}) => {
  return (
    <section className="relative" id={semiTitle1}>
      <div className="container flex flex-col items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-4 font-bold dark:text-white">
              {semiTitle1} <span className="text-learnplat-yellow">{cep}</span>{' '}
              {semiTitle2}
            </h2>
            <p className="text-xl font-normal text-center lg:text-left mb-6 dark:text-white">
              {content}
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link
                to={
                  semiTitle1 == 'Roadmaps'
                    ? '/roadmaps'
                    : semiTitle1 == 'Articles'
                    ? '/articles'
                    : '/leaderboard'
                }
                className="text-2xl text-learnplat-yellow font-semibold"
              >
                {link}
              </Link>
            </div>
          </div>
          <div
            className={
              'flex justify-center flex-1 mb-4 md:mb-8 lg:mb-0 z-10 ' +
              order_first
            }
          >
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 lg:w-11/12 lg:h-11/12"
              src={image}
              alt={semiTitle1 + semiTitle2}
            />
          </div>
        </div>
        <hr className=" w-1/2 border-black border-dashed mt-10 dark:border-white" />
      </div>
    </section>
  );
};

export default Feature;
