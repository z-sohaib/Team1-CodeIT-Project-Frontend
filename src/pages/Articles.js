/* eslint-disable prettier/prettier */
import MostSharedIcon from '../images/shared.png';
import MostLikedIcon from '../images/liked.png';
import ArticleImg1 from '../images/article1.jpg';
import Article from '../components/Article';
const Articles = () => {
  return (
    <>
      <div className="container flex flex-col gap-12 mt-14 lg:mt-28 pb-4">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-5xl font-semibold dark:text-white">
            Articles <span className="text-learnplat-yellow">&</span> News
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies hac pellentesque lectus commodo a, blandit. Consequat quis
            montes, tempor donec quam.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex dark:text-gray-200 items-center gap-4 flex-wrap md:flex-grow">
              <a href="" className="flex items-center gap-2">
                <img src={MostSharedIcon} alt="most shared" />
                <span>Most shared</span>
              </a>
              <a href="#" className="flex items-center gap-2">
                <img src={MostLikedIcon} alt="most liked" />
                <span>Most liked</span>
              </a>
              <div className="form-check">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-learnplat-third-orange rounded-sm bg-white checked:bg-learnplat-yellow checked:border-learnplat-yellow focus:outline-none transition duration-600 mt-1 align-top mr-2 cursor-pointer"
                  type="checkbox"
                />
                <label className="form-check-label inline-block text-gray-800 dark:text-gray-200">
                  Field
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-learnplat-third-orange rounded-sm bg-white checked:bg-learnplat-yellow checked:border-learnplat-yellow focus:outline-none transition duration-600 mt-1 align-top mr-2 cursor-pointer"
                  type="checkbox"
                />
                <label className="form-check-label inline-block text-gray-800 dark:text-gray-200">
                  Field
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-learnplat-third-orange rounded-sm bg-white checked:bg-learnplat-yellow checked:border-learnplat-yellow focus:outline-none transition duration-600 mt-1 align-top mr-2 cursor-pointer"
                  type="checkbox"
                />
                <label className="form-check-label inline-block text-gray-800 dark:text-gray-200">
                  Field
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-learnplat-third-orange rounded-sm bg-white checked:bg-learnplat-yellow checked:border-learnplat-yellow focus:outline-none transition duration-600 mt-1 align-top mr-2 cursor-pointer"
                  type="checkbox"
                />
                <label className="form-check-label inline-block text-gray-800 dark:text-gray-200">
                  Field
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-learnplat-third-orange rounded-sm bg-white checked:bg-learnplat-yellow checked:border-learnplat-yellow focus:outline-none transition duration-600 mt-1 align-top mr-2 cursor-pointer"
                  type="checkbox"
                />
                <label className="form-check-label inline-block text-gray-800 dark:text-gray-200">
                  Field
                </label>
              </div>
            </div>

            <div className="flex border-2 rounded bg-learnplat-second-yellow border-learnplat-second-yellow dark:bg-gray-700 dark:border-gray-700">
              <input
                type="text"
                className="px-4 py-2 w-80 flex-grow focus:outline-none bg-learnplat-second-yellow dark:bg-gray-700 dark:text-gray-100"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center px-4">
                <svg
                  className="w-6 h-6 text-learnplat-yellow"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-4">
            <Article
              img={ArticleImg1}
              title={'Article title'}
              description={
                'Lorem Ipsum is simply dummy text of the printing andtypesetting industry'
              }
              likes={'xx'}
              comments={'xx'}
              shares={'xx'}
            />

<Article
              img={ArticleImg1}
              title={'Article title'}
              description={
                'Lorem Ipsum is simply dummy text of the printing andtypesetting industry'
              }
              likes={'xx'}
              comments={'xx'}
              shares={'xx'}
            />
            <Article
              img={ArticleImg1}
              title={'Article title'}
              description={
                'Lorem Ipsum is simply dummy text of the printing andtypesetting industry'
              }
              likes={'xx'}
              comments={'xx'}
              shares={'xx'}
            />
            <Article
              img={ArticleImg1}
              title={'Article title'}
              description={
                'Lorem Ipsum is simply dummy text of the printing andtypesetting industry'
              }
              likes={'xx'}
              comments={'xx'}
              shares={'xx'}
            />
            <Article
              img={ArticleImg1}
              title={'Article title'}
              description={
                'Lorem Ipsum is simply dummy text of the printing andtypesetting industry'
              }
              likes={'xx'}
              comments={'xx'}
              shares={'xx'}
            />
            <Article
              img={ArticleImg1}
              title={'Article title'}
              description={
                'Lorem Ipsum is simply dummy text of the printing andtypesetting industry'
              }
              likes={'xx'}
              comments={'xx'}
              shares={'xx'}
            />
            <Article
              img={ArticleImg1}
              title={'Article title'}
              description={
                'Lorem Ipsum is simply dummy text of the printing andtypesetting industry'
              }
              likes={'xx'}
              comments={'xx'}
              shares={'xx'}
            />
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
