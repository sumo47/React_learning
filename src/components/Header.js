import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utility/appSlice";
import { SEARCH_API } from "../utility/constant";
import { cacheResults } from "../utility/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const addCacheResultsHandler = (resultsArray) => {
    dispatch(
      cacheResults({
        [searchText]: resultsArray,
      })
    );
  };

  const searchCache = useSelector((store) => store.search);

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // API Call
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      }else{
        fetchSearchText()
      }
    }, 200);
    // Make an api call after every key press
    // but if the difference between 2 API calls is <200ms
    // decline the API call
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key - ip
   * - destroy the component (useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   *
   */

  const fetchSearchText = async () => {
    const data = await fetch(SEARCH_API + searchText);
    const json = await data.json();
    setShowSuggestions(json[1]?.length > 0);
    setSuggestions(json[1]);
    addCacheResultsHandler(json[1]); // Assuming first suggestion is the one we want to display
    console.log("API Call - " + searchText);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-12 p-2 items-center">
      {/* Left Section: Menu and YouTube Icon */}
      <div className="flex col-span-1 items-center space-x-2">
        <img
          onClick={toggleMenuHandler}
          className="h-8 sm:h- cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-8 sm:h-10 md:h-12 cursor-pointer"
            alt="youtube-icon"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>

      {/* Center Section: Search Bar */}
      <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-10 flex justify-center">
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-center">
            <input
              onChange={(e) => {
                setSearchText(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => setShowSuggestions(suggestions[1]?.length > 0)}
              onBlur={() => setShowSuggestions(false)}
              placeholder="Search"
              className="pl-4 shadow-md border border-gray-300 rounded-l-full p-2 w-full focus:outline-none hover:border-blue-500"
              type="text"
            />
            <button className="border shadow-md border-gray-300 rounded-r-full py-2 px-4 bg-gray-100 hover:bg-gray-200">
              🔍
            </button>
          </div>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-md rounded-md mt-1">
              <ul className="py-2">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchText(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    🔍 {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Section: User Icon */}
      <div className="flex justify-end col-span-1 items-center">
        <img
          className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer rounded-full"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
