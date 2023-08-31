import React, { useEffect, useState } from "react";
import { NavLink, NavNavLink } from "react-router-dom";
import { SolidButton } from "../utils/Button";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState();
  return (
    <>
      <header className="bg-custom-dark-500 sticky top-0 w-full z-50 transition-all delay-100 ease-in py-2 md:py-4 border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-center w-full relative">
            <div className="my-auto font-bold text-xl text-gray-300">
              LambanoMetals
            </div>

            <div className="md:hidden">
              <button
                className="py-3 m-auto z-20"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                {/* <HiMenu size={30} className="text-gray-900" /> */}
              </button>
            </div>

            <nav className={`hidden md:flex font-bold`}>
              {/* <nav
              className={
                menuToggle
                  ? "rounded lg:rounded-none absolute lg:static top-[66px] left-0 p-4 marker:w-full lg:w-auto border lg:border-none shadow-md lg:shadow-none"
                  : "hidden lg:flex my-auto"
              }
            > */}
              <ul className="flex gap-6 text-gray-300 my-auto">
                <li className="">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "active text-white"
                        : " " +
                          " text-[#6d727e] block transition ease-in-out delay-150 hover:text-white"
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
                        ? "active text-white"
                        : " " +
                          " text-[#6d727e] block transition ease-in-out delay-150 hover:text-white"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/#sectionservice"
                    className="text-[#6d727e] block transition ease-in-out delay-150 hover:text-white"
                  >
                    Service
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/sustainablity"
                    className={({ isActive }) =>
                      isActive
                        ? "active text-white mr-6"
                        : " " +
                          " text-[#6d727e] block transition ease-in-out delay-150 hover:text-white mr-6"
                    }
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
