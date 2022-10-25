import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md px-16">
      <nav className=" w-full">
        <div
          onClick={() => setOpen(!open)}
          className="h-10 w-10 text-black-500 md:hidden "
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`md:flex p-5 justify-between z-50  md:static absolute ${
            open ? "top-70" : "top-[-420px]"
          } duration-500 ease-in }`}
        >
          <div className=" hidden  md:block ">
            <Link
              to="/"
              className="w-full font-bold text-xl sm:text-3xl block flex"
            >
              <AcademicCapIcon className="h-15 w-10 text-white bg-blue-400 rounded-xl hover:bg-white hover:text-blue-400 transition delay-150 duration-300 ease-in-out"></AcademicCapIcon>
              <h1 className="text-blue-300 mx-2"> MARN.</h1>State
            </Link>
          </div>

          <div className=" flex  flex-col md:flex-row gap-6 mt-2  bg-blue-300 rounded-lg md:bg-transparent p-10 md:p-0">
            <Link
              className="font-bold hover:text-blue-500 text-black border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center transition delay-150 duration-150 ease-in-out"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-bold hover:text-blue-500 text-black border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center "
              to="/course"
            >
              Courses
            </Link>

            <Link
              className="font-bold hover:text-blue-500 text-black border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center "
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="font-bold hover:text-blue-500 text-black border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center "
              to="/faq"
            >
              FAQ
            </Link>
            
          </div>
          <Link to='/login'>
            <button type="button" className=" hidden md:block text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-8 py-2 text-center mr-2 mb-2">Log In</button>
            </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
