import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utility/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-12 p-2 m-2 shadow-lg items-center">
      {/* Left Section: Menu and YouTube Icon */}
      <div className="flex col-span-1 items-center space-x-2">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/">
          {" "}
          <img
            className="h-10 sm:h-12 md:h-14 cursor-pointer"
            alt="youtube-icon"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>

      {/* Center Section: Search Bar */}
      <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-10 flex justify-center items-center">
        <input
          placeholder="Search"
          className="pl-4 shadow-md border border-gray-400 rounded-l-full p-2 w-full md:w-2/3 lg:w-1/2"
          type="text"
        />
        <button className="border shadow-md border-gray-400 rounded-r-full py-2 px-4">
          🔍
        </button>
      </div>

      {/* Right Section: User Icon */}
      <div className="flex justify-end col-span-1 items-center">
        <img
          className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 cursor-pointer"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
