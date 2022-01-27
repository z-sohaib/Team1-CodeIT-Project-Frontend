/* eslint-disable prettier/prettier */
// import HeroImage from '../images/hero-image.png';
import PropTypes from "prop-types";
import { Swiper, SwiperSlide} from 'swiper/react'; 
import 'swiper/css'; 
import CourseThumbnail from '../images/CourseThumbnail.svg'
function CoursesSwiper() { 
  return (
  <Swiper
  spaceBetween={50}
  slidesPerView={3.25}
  // onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide>
    <CourseCard 
    Thumbnail={CourseThumbnail}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    />
  </SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  ...
</Swiper>
  ); 
}

function CourseCard(props) { 
  return (
    <div className=' container bg-learnplat-yellow-light md:py-1 md:px-1 lg:py-8 lg:px-8 lg:rounded-large'>
      {/* <div > */}
      <div className="flex flex-row justify-center">
      <img src={props.Thumbnail} alt=''/> 
      </div>
        
        <h3 className="  text-center font-bold Rubik mt-3 lg:text-3xl">{props.CourseName}</h3>
        <p className="text-center Rubik font-medium lg:text-base md:text-sm lg:leading-5  mb-5 ">{props.details}</p>
        <div className=" flex flex-row justify-center">
              <button className="lg:text-xl md:text-sm py-1 rounded px-4 border-2 border-learnplat-yellow text-learnplat-yellow font-normal ">
                xx {props.Exp}
              </button>
            </div>
       {/* </div> */}
    </div>
  );
}
CourseCard.propTypes = {
  Thumbnail: PropTypes.string.isRequired,
  CourseName: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  Exp: PropTypes.string.isRequired,

};
const RoadMaps = () => {
  return (
  <section className ="relative " id="roadmaps">
    <div className="container">
        <div className=" flex flex-row justify-center mt-20 mb-40">
        <h1 className=" text-5xl lg:text-8xl md:text-4  Rubik font-bold "> Web <span className="text-learnplat-yellow">Dev</span>elopement</h1>
        </div>
           <div className="flex flex-1 flex-col items-center lg:items-start mt-40">
              <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-4 font-bold dark:text-white">
                Courses <span className="text-learnplat-yellow">&</span> Roadmaps
              </h2>
              <p className="text-2xl font-normal text-center lg:text-left mb-6 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies hac pellentesque lectus commodo a, blandit. Consequat quis montes, tempor donec quam
              </p>
            </div>
            <div className="my-11">
              
            <CoursesSwiper/>
            <div className="flex flex-row justify-center">
            <hr className="  md:w-48 lg:w-80 border-black border-dotted"/>

            </div>
            
      </div>

           <div className="flex flex-1 flex-col items-center lg:items-start mt-40">
              <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-4 font-bold dark:text-white">
                <span className="text-learnplat-yellow">Tech</span>nologies
              </h2>
              <p className="text-2xl font-normal text-center lg:text-left mb-6 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies hac pellentesque lectus commodo a, blandit. Consequat quis montes, tempor donec quam
              </p>
            </div>
            <div className="my-11">
            <CoursesSwiper/>
            <div className="flex flex-row justify-center">
            <hr className="  md:w-48 lg:w-80 bg-black border-dashed "/>
            </div>
            
      </div>
      
    </div>
    
  </section>
  );
};

export default RoadMaps;
