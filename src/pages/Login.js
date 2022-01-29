/* eslint-disable prettier/prettier */
import LoginImg from '../images/login.png';
import UserSvg from '../images/userSvg.svg';
import PasswordSvg from '../images/password.svg';
const Register = () => {
  return (
    <>
      <div className="container rounded mx-auto">
        <div className="md:h-screen py-4 md:py-0 flex flex-col items-center gap-4 md:flex-row md:items-center">
          <div className="md:flex-1">
            <img
              src={LoginImg}
              className="sm:h-128 w-128"
              alt=" register page"
            />
          </div>
          <div className="flex flex-col gap-6 items-center md:flex-1 md:items-start">
            <h1 className="font-semibold text-5xl dark:text-gray-100">
              Welcome back!
            </h1>
            <form className="flex flex-col gap-6 px-4 md:px-0">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="text-xl dark:text-gray-300"
                >
                  User Name
                </label>
                <div className="flex border-2 rounded">
                  <input
                    type="text"
                    className="px-4 py-2 w-80 focus:outline-none"
                    placeholder="User Name"
                  />
                  <button className="bg-white flex items-center justify-center px-4 border-l">
                    <img src={UserSvg} className="w-6 h-6" alt="user svg" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-xl dark:text-gray-300"
                >
                  Password
                </label>
                <div className="flex border-2 rounded">
                  <input
                    type="text"
                    className="px-4 py-2 w-80 focus:outline-none"
                    placeholder="Password"
                  />
                  <button className="bg-white flex items-center justify-center px-4 border-l">
                    <img
                      src={PasswordSvg}
                      className="w-6 h-6"
                      alt="password svg"
                    />
                  </button>
                </div>
              </div>

              <button className="text-white bg-learnplat-yellow py-4 font-bold rounded ">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
