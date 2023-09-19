import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SolidButton } from "../utils/Button";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  console.log(menuToggle);
  return (
    <>
      <header className="bg-custom-dark-500 sticky top-0 w-full z-50 transition-all delay-100 ease-in py-2 md:py-4 border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 relative">
          <div className="flex justify-between items-center w-full relative">
            <Link to="/" className="my-auto font-bold text-xl text-gray-300">
              <img
                src={require("../../assets/logo.png")}
                className="w-5 md:w-6 mr-2 inline-block text my-auto"
                alt="logo"
              />
              LambanoMetals
            </Link>

            <div className="md:hidden">
              <button
                className="py-3 m-auto z-20"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <div size={30} className="text-gray-400">
                  {menuToggle ? (
                    <FiX className="w-5 h-7 transition-all delay-150" />
                  ) : (
                    <FiMenu className="w-5 h-7 transition-all delay-150" />
                  )}
                </div>
              </button>
            </div>

            <nav
              className={`md:p-0 md:w-fit md:flex font-bold bg-gray-100 md:bg-transparent md:static ${
                menuToggle
                  ? "w-full block absolute top-16 z-50 p-4 rounded-lg"
                  : "hidden rounded-none"
              }`}
            >
              <ul
                className={`gap-6 text-gray-300 my-auto ${
                  menuToggle ? "flex-none md:flex" : "md:flex"
                }`}
              >
                <li className="">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-white text-custom-purple-500 block border-b md:border-none transition ease-in-out delay-150 mb-2"
                        : " " +
                          " text-[#6d727e] block md:hover:text-white hover:text-custom-purple-500 border-b md:border-none transition ease-in-out delay-150 mb-2 md:mb-0"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "md:text-white text-custom-purple-500 block border-b md:border-none transition ease-in-out delay-150 mb-2"
                        : " " +
                          " text-[#6d727e] block transition ease-in-out delay-150 md:hover:text-white hover:text-custom-purple-500 mb-2 border-b md:border-none md:mb-0"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/#section1"
                    className="text-[#6d727e] block transition ease-in-out delay-150 md:hover:text-white hover:text-custom-purple-500 mb-2 border-b md:border-none md:mb-0"
                  >
                    Service
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/#section2"
                    className=" text-[#6d727e] block transition ease-in-out delay-150 md:hover:text-white hover:text-custom-purple-500 mb-4 border-b md:border-none md:mb-0 mr-6"
                  >
                    Sustainability
                  </NavLink>
                </li>
              </ul>
              <SolidButton text="get in touch" goto="/contact" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
