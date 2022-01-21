/* eslint-disable prettier/prettier */
const Header = () => {
  return (
    <header>
      <nav className="container flex justify-between items-center py-4 mt-4 sm:mt-9">
        <div className="py-1">
          <h3 className="font-bold text-xl lg:text-2xl ">
            Learn<span className="text-learnplat-yellow">Plat</span>
          </h3>
        </div>
        <ul className="hidden sm:flex items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li className="cursor-pointer text-black font-semibold">Home</li>
          <li className="cursor-pointer text-learnplat-gray font-semibold">Roadmaps</li>
          <li className="cursor-pointer text-learnplat-gray font-semibold">Articles</li>
          <li className="cursor-pointer text-learnplat-gray font-semibold">Scoreboard</li>
        </ul>
        <div className="hidden sm:flex sm:items-center">
            <button type="button" className="text-learnplat-gray py-2 px-6">
                Login
            </button>
          <button
            type="button"
            className="bg-learnplat-yellow text-white rounded-3xl px-6 py-2"
          >
            Login
          </button>
        </div>
        <div className="flex sm:hidden flex-1 justify-end">
          <i className="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
