/* eslint-disable prettier/prettier */
import '../styles/customStyle.css';
const Roadmap = () => {
  return (
    <>
      <div className="container flex flex-col gap-12 mt-14 lg:mt-28">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <h1 className="text-5xl font-semibold dark:text-white">
              Courses <span className="text-learnplat-yellow">Name</span>
            </h1>
            <div>
              <button className="text-xl py-1 rounded px-4 border-2 border-learnplat-yellow bg-white text-learnplat-yellow font-normal">
                xx Exp
              </button>
            </div>
          </div>
          <p className="text-xl md:text-2xl dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies hac pellentesque lectus commodo a, blandit. Consequat quis
            montes, tempor donec quam.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-start pb-4">
          <ol className="relative customBorder largeGaps dark:border-gray-700">
            <li className="mb-10 ml-8">
              <div className="absolute top-2 w-6 h-6 bg-learnplat-yellow rounded -left-3.5 border-4 border-learnplat-second-yellow dark:border-gray-700 dark:bg-gray-900"></div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white flex flex-col gap-2 md:flex-row md:items-center">
                <h3 className="font-semibold text-3xl sm:text-4xl">
                  <span className="text-learnplat-gray dark:text-gray-500">Step 1:</span>NameStep
                </h3>
                <div className="md:ml-2">
                  <button className="py-1 px-2 rounded bg-learnplat-second-yellow text-white text-sm">
                    xx Exp
                  </button>
                </div>
              </div>

              <p className="my-4 font-normal text-l sm:text-xl text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies hac pellentesque
              </p>
              <div className="flex items-center justify-between sm:w-3/4">
                <div className="flex items-center">
                  <a href="#" className="underline mr-8 font-semibold text-xl dark:text-white">
                    Resources
                  </a>
                  <a
                    href="#"
                    className="underline font-semibold text-xl text-learnplat-yellow"
                  >
                    Quiz
                  </a>
                </div>
                <div>
                  <p>
                    <span className="text-xl dark:text-gray-300">Score:</span>
                    <span className="ml-4 bg-learnplat-yellow text-white font-semibold p-2 rounded">
                      xx/5
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-8">
              <div className="absolute w-6 h-6 bg-learnplat-second-yellow -left-3.5 border-4 rounded border-learnplat-yellow dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white flex flex-col gap-2 md:flex-row md:items-center">
                <h3 className="font-semibold text-3xl sm:text-4xl">
                  <span className="text-learnplat-gray dark:text-gray-500">Step 2:</span>NameStep
                </h3>
                <div className="md:ml-2">
                  <button className="py-1 px-2 rounded bg-learnplat-second-yellow text-white text-sm">
                    xx Exp
                  </button>
                </div>
              </div>
              <p className="my-4 text-l sm:text-xl font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies hac pellentesque
              </p>
              <div className="flex items-center justify-between sm:w-3/4">
                <div className="flex items-center">
                  <a href="#" className="underline mr-8 font-semibold text-xl dark:text-white">
                    Resources
                  </a>
                  <a
                    href="#"
                    className="underline font-semibold text-xl text-learnplat-yellow"
                  >
                    Quiz
                  </a>
                </div>
                <div>
                  <p>
                    <span className="text-xl dark:text-gray-300">Score:</span>
                    <span className="ml-4 bg-learnplat-yellow text-white font-semibold p-2 rounded">
                      xx/5
                    </span>
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-8">
              <div className="absolute w-6 h-6 bg-white -left-3.5 border-4 rounded border-black dark:border-gray-400 dark:bg-gray-700"></div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white flex flex-col gap-2 md:flex-row md:items-center">
                <h3 className="font-semibold text-3xl sm:text-4xl">
                  <span className="text-learnplat-gray dark:text-gray-500">Step 3:</span>NameStep
                </h3>
                <div className="md:ml-2">
                  <button className="py-1 px-2 rounded bg-learnplat-second-yellow text-white text-sm">
                    xx Exp
                  </button>
                </div>
              </div>
              <p className="my-4 text-l sm:text-xl font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies hac pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Facilisis ultricies hac
                pellentesque
              </p>
              <div className="flex items-center justify-between sm:w-3/4">
                <div className="flex items-center">
                  <a href="#" className="underline mr-8 font-semibold text-xl dark:text-white">
                    Resources
                  </a>
                  <a
                    href="#"
                    className="underline font-semibold text-xl text-learnplat-yellow"
                  >
                    Quiz
                  </a>
                </div>
                <div>
                  <p>
                    <span className="text-xl dark:text-gray-300">Score:</span>
                    <span className="ml-4 bg-learnplat-yellow text-white font-semibold p-2 rounded">
                      xx/5
                    </span>
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-8">
              <div className="absolute w-6 h-6 bg-white -left-3.5 border-4 rounded border-black dark:border-gray-400 dark:bg-gray-700"></div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white flex flex-col gap-2 md:flex-row md:items-center">
                <h3 className="font-semibold text-3xl sm:text-4xl">
                  <span className="text-learnplat-gray dark:text-gray-500">Step 4:</span>NameStep
                </h3>
                <div className="md:ml-2">
                  <button className="py-1 px-2 rounded bg-learnplat-second-yellow text-white text-sm">
                    xx Exp
                  </button>
                </div>
              </div>
              <p className="my-4 text-l sm:text-xl font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies hac pellentesque. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Facilisis ultricies hac
                pellentesque
              </p>
              <div className="flex items-center justify-between sm:w-3/4">
                <div className="flex items-center">
                  <a href="#" className="underline mr-8 font-semibold text-xl dark:text-white">
                    Resources
                  </a>
                  <a
                    href="#"
                    className="underline font-semibold text-xl text-learnplat-yellow"
                  >
                    Quiz
                  </a>
                </div>
                <div>
                  <p>
                    <span className="text-xl dark:text-gray-300">Score:</span>
                    <span className="ml-4 bg-learnplat-yellow text-white font-semibold p-2 rounded">
                      xx/5
                    </span>
                  </p>
                </div>
              </div>
            </li>

            <li className="mb-10 ml-8">
              <div className="absolute w-6 h-6 bg-white -left-3.5 border-4 rounded border-black dark:border-gray-400 dark:bg-gray-700"></div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white flex flex-col gap-2 md:flex-row md:items-center">
                <h3 className="font-semibold text-4xl">Congrats!</h3>
              </div>
            </li>
          </ol>

          <div className="bg-learnplat-second-yellow rounded p-6 flex flex-col gap-2 pb-28 dark:bg-gray-700 ">
              
            <h3 className="text-4xl text-learnplat-yellow font-semibold">
              Statistics
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Current step: </p>
            <p className="text-gray-500 dark:text-gray-400">Average Quiz Score: </p>
            <p className="font-semibold dark:text-gray-300">Completed: </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;