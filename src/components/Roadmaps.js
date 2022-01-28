/* eslint-disable prettier/prettier */
// import HeroImage from '../images/hero-image.png';
import PropTypes from "prop-types";
import { Swiper, SwiperSlide} from 'swiper/react'; 
import 'swiper/css'; 
import CourseThumbnail1 from '../images/CourseThumbnail1.svg'
import CourseThumbnail2 from '../images/CourseThumbnail2.svg'
import { useMediaQuery } from 'react-responsive';
function CoursesSwiper() { 
// const [isMobile, setIsMobile] = useState(false)
const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
// //choose the screen size 
// const handleResize = () => {
//   if (window.innerWidth < 720) {
//       setIsMobile(true)
//   } else {
//       setIsMobile(false)
//   } 
// }
// // create an event listener
// useEffect(() => {
//   window.addEventListener("resize", handleResize)
// })
    // console.log((window.screen.width > 1024 ) ); 
    // console.log(window.screen.width)
    // const [slidespreview, setSlidesPreview]= useState(3.25); 
    // function SlidesPreview () { 
    //   if (window.screen.width > 1500 ) {
    //     setSlidesPreview(3.25)
    //   } else if (window.screen.width < 500) { 
    //     setSlidesPreview(1.25)
    //   } else { 
    //     setSlidesPreview(2.25)
    //   }
    //   // console.log(slidespreview);
    //   // setSlidesPreview((window.screen.width > 1500 ) ? 3.25 : (window.screen.width < 500 ) ? 1.25 : 2.25)
    //   return slidespreview; 
    // }
    // console.log(slidespreview); 
  return (
  <Swiper
  spaceBetween={45}
  // slidesPerView={(window.screen.width > 1500 ) ? 3.25 : (window.screen.width < 500 ) ? 1.25 : 2.25}
  slidesPerView={ isMobile ? 1.3 : 3.3}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
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
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail2}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail1}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail2}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail1}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
  <SwiperSlide> <CourseCard 
    Thumbnail={CourseThumbnail2}
    CourseName="Name Course" 
    details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
    Exp="Exp"
    /></SwiperSlide>
</Swiper>
  ); 
}

function CourseCard(props) { 
  return (
    <div className=' Card bg-learnplat-yellow-light pb-8 rounded-large'>
      <div className="object-cover">
      <img src={props.Thumbnail} alt=''/> 
      </div> 
      <div className="flex flex-col justify-center">
      <h3 className="  text-center font-bold Rubik mt-7 mb-2 lg:text-3xl text-2xl">{props.CourseName}</h3>
      <p className="text-center Rubik font-medium text-learnplat-gray-card lg:text-lg md:text-sm lg:leading-5  mb-4 px-1 ">{props.details}</p>
      </div>
      <div className=" flex flex-row justify-center">
              <button className="lg:text-xl rounded-md px-3 border-4 border-learnplat-yellow text-learnplat-yellow font-normal mb-2 ">
                xx {props.Exp}
              </button>
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
            <hr className=" w-1/2 border-black border-dashed mt-10"/>

            </div>
            
      </div>

           <div className="flex flex-1 flex-col items-center lg:items-start mt-20">
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
            <hr className=" w-1/2 border-black border-dashed mt-10 mb-10"/>

            </div>
            
      </div>
      
    </div>
    
  </section>
  );
};

export default Roadmaps;