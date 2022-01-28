/* eslint-disable prettier/prettier */
import '../styles/customStyle.css';
const Leaderboard = () => {
  return (
    <>
      <div className="container flex flex-col gap-12 mt-14 lg:mt-28">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-5xl font-semibold dark:text-white">
            Leader<span className="text-learnplat-yellow">board</span>
          </h1>
          <p className="text-xl md:text-2xl dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies hac pellentesque lectus commodo a, blandit. Consequat quis
            montes, tempor donec quam.
          </p>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full customSpacing">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-xl font-normal text-gray-500 px-6 md:px-12 py-4 text-left dark:text-gray-200"
                        >
                          Rank
                        </th>
                        <th
                          scope="col"
                          className="text-xl font-normal text-gray-500 px-6 py-4 text-left dark:text-gray-200"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="text-xl font-normal text-gray-500 px-6 py-4 text-left dark:text-gray-200"
                        >
                          Courses
                        </th>
                        <th
                          scope="col"
                          className="text-xl font-normal text-gray-500 px-6 py-4 text-left dark:text-gray-200"
                        >
                          Score
                        </th>
                        <th
                          scope="col"
                          className="text-xl font-normal text-gray-500 px-6 py-4 text-left dark:text-gray-200"
                        >
                          Exp
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b ">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-yellow rounded-l-full text-l font-bold text-white">
                          1St
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-yellow px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-yellow px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-yellow px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-yellow rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-second-orange rounded-l-full text-xl font-bold text-white">
                          2nd
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-second-orange px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-second-orange px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-second-orange px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-second-orange rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-orange rounded-l-full text-xl font-bold text-white">
                          3rd
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-orange px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-orange px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-orange px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-orange rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          3rd
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          4th
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          5th
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          6th
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          7th
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          8th
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          9th
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>

                      <tr className="border-b mt-4">
                        <td className="px-6 md:px-12 py-4 whitespace-nowrap bg-learnplat-third-gray rounded-l-full text-xl font-bold text-white">
                          10th
                        </td>
                        <td className="text-xl text-black font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap dark:text-gray-800">
                          Username
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                        <td className="text-xl text-white font-semibold bg-learnplat-third-gray rounded-r-full px-6 py-4 whitespace-nowrap">
                          xx
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
