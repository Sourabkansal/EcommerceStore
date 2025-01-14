import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40  ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#" className="font-bold  text-2xl sm:text-3xl flex gap-2 ">
              <img
                src="https://shopsy-tcj.netlify.app/assets/logo-Jm4BVSCI.png"
                alt="logo"
                className="w-10 "
              ></img>
              Shopz
            </a>
          </div>
          {/* search bar  */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
              ></input>
              <IoSearchSharp className="text-gray-500 group:hover:text-primary absolute top-1/2 -translate-y-1/2 right-3  " />
            </div>
            {/* order button  */}

            <NavLink to={"/addcart"}>
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-1  sm:gap-3 group  ">
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </NavLink>

            <NavLink to={"/wishlist"}>
              <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-1 sm:gap-3 group  ">
                <span className="group-hover:block hidden transition-all duration-200">
                  Wishlist
                </span>
                <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </NavLink>

            {/* dark switch */}
            <Darkmode />
            <div></div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}

      <div className="flex justify-center">
        <ul className=" sm:flex  items-center gap-4 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            <li className="inline-block px-4 hover:text-primary duration-200 cursor-pointer ">
              Home
            </li>
          </NavLink>
          <NavLink
            to="/mensWear"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            <li className="inline-block px-4 hover:text-primary duration-200 cursor-pointer ">
              Men's wear
            </li>
          </NavLink>
          <NavLink
            to="/WomensWear"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            <li className="inline-block px-4 hover:text-primary duration-200 cursor-pointer ">
              Women's wear
            </li>
          </NavLink>
          <NavLink
            to="/Electronics"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            <li className="inline-block px-4 hover:text-primary duration-200 cursor-pointer ">
              Electronics
            </li>
          </NavLink>
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2 ">
              Jewellery
              <span>
                <FaCaretDown className="transition-all duration-200  group-hover:rotate-180" />
              </span>
            </div>
            <div className="absolute z-[9999] hidden  group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md ">
              <ul>
                <NavLink to="/Rings">
                  {" "}
                  <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                    {" "}
                    Rings
                  </li>
                </NavLink>
                <NavLink to="/Necklace">
                  <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                    {" "}
                    Necklace
                  </li>
                </NavLink>
                <NavLink to="/Braclelet">
                  {" "}
                  <li className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                    {" "}
                    Braclelet
                  </li>
                </NavLink>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
