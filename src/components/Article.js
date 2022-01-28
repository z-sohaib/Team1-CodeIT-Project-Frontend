/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import MostSharedIcon from '../images/shared.png';
import MostLikedIcon from '../images/liked.png';
import CommentImg from '../images/comment.png';
const Article = ({ img, title, description, likes, comments, shares }) => {
  return (
    <>
      <div className="shadow-lg bg-white rounded-3xl max-w-full bg-learnplat-third-orange overflow-hidden dark:bg-gray-700">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img src={img} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-4xl font-semibold mb-2 dark:text-gray-100">
            {title}
          </h5>
          <p className="text-gray-700 text-base mb-4 dark:text-gray-200">
            {description}
          </p>
          <div className="flex dark:text-white items-center justify-between">
            <p className="flex items-center gap-2">
              <img src={MostLikedIcon} alt="icon like" />
              {likes}
            </p>
            <p className="flex items-center gap-2">
              <img src={CommentImg} alt="icon like" />
              {comments}
            </p>
            <p className="flex items-center gap-2">
              <img src={MostSharedIcon} alt="icon like" />
              {shares}
            </p>
            <a href="#" className="text-learnplat-yellow font-semibold text-l">
              Read More -{'>'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
