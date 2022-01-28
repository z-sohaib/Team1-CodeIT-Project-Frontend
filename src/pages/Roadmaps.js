/* eslint-disable prettier/prettier */
// import HeroImage from '../images/hero-image.png';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CourseThumbnail1 from '../images/article1.jpg';
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom'
function CoursesSwiper() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  
  return (
    <Swiper
      spaceBetween={45}
      slidesPerView={isMobile ? 1.3 : 3.3}
    >
      <SwiperSlide>
        <CourseCard
          Thumbnail={CourseThumbnail1}
          CourseName="Name Course"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          Exp="Exp"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <CourseCard
          Thumbnail={CourseThumbnail1}
          CourseName="Name Course"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          Exp="Exp"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <CourseCard
          Thumbnail={CourseThumbnail1}
          CourseName="Name Course"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          Exp="Exp"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <CourseCard
          Thumbnail={CourseThumbnail1}
          CourseName="Name Course"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          Exp="Exp"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <CourseCard
          Thumbnail={CourseThumbnail1}
          CourseName="Name Course"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          Exp="Exp"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <CourseCard
          Thumbnail={CourseThumbnail1}
          CourseName="Name Course"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          Exp="Exp"
        />
      </SwiperSlide>
    </Swiper>
  );
}

function CourseCard(props) {
  return (
    <div className=" Card bg-learnplat-yellow-light pb-8 rounded-large overflow-hidden rounded-3xl">
      <div className="object-cover">
        <img src={props.Thumbnail} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className=" flex items-center gap-2 text-center font-bold Rubik mt-7 mb-2 lg:text-xl text-2xl">
          {props.CourseName}{' '}
          <span>
            <button className="rounded-md border-2 px-4 text-sm border-learnplat-yellow text-learnplat-yellow font-normal ">
              xx {props.Exp}
            </button>
          </span>
        </h3>
        <p className="text-center text-learnplat-gray-card lg:text-lg md:text-sm lg:leading-5  mb-4 px-1 ">
          {props.details}
        </p>
        <Link className="text-learnplat-yellow text-xl font-bold" to="/roadmap">
          Go to course -{">"}
        </Link>
      </div>
    </div>
  );
}
CourseCard.propTypes = {
  Thumbnail: PropTypes.string.isRequired,
  CourseName: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  Exp: PropTypes.string.isRequired,
};
const Roadmaps = () => {
  return (
    <section className="relative " id="roadmaps">
      <div className="container">
        <div className=" flex flex-row justify-center mt-20 mb-40">
          <h1 className=" text-5xl lg:text-8xl md:text-4  Rubik font-bold dark:text-gray-100">
            {' '}
            Web <span className="text-learnplat-yellow">Dev</span>elopement
          </h1>
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start mt-40">
          <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-4 font-bold dark:text-gray-100">
            Courses <span className="text-learnplat-yellow">&</span> Roadmaps
          </h2>
          <p className="text-2xl font-normal text-center lg:text-left mb-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies hac pellentesque lectus commodo a, blandit. Consequat quis
            montes, tempor donec quam
          </p>
        </div>
        <div className="my-11">
          <CoursesSwiper />
          <div className="flex flex-row justify-center">
            <hr className=" w-1/2 border-black border-dashed mt-10" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
          <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-4 font-bold dark:text-white">
            <span className="text-learnplat-yellow">Tech</span>nologies
          </h2>
          <p className="text-2xl font-normal text-center lg:text-left mb-6 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies hac pellentesque lectus commodo a, blandit. Consequat quis
            montes, tempor donec quam
          </p>
        </div>
        <div className="my-11">
          <CoursesSwiper />
          <div className="flex flex-row justify-center">
            <hr className=" w-1/2 border-black border-dashed mt-10 mb-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmaps;
