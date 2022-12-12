import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/dev.png'
import { FaDownload} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar py-4 glass text-lg">
      <div className="navbar-start lg:mr-20 ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <Link>Education</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
            <li className="">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <Link className="lg:flex md:flex   items-center normal-case lg:text-4xl pl-3 text-white text-2xl font-change  ">
          <img
            src={logo}
            className="w-14 h-12 mr-2 lg:block md:block hidden "
            alt=""
          />
          <span className="text-sky-300 lg:text-5xl text-3xl ">R</span>
          amisaBinteAzad
        </Link>
      </div>
      <div className="navbar-center   hidden lg:flex   text-white">
        <ul className="menu menu-horizontal px-2 ">
          <li className="">
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li tabIndex={0}>
            <a href="#about">About Me</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Link>Education</Link>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="./resume.pdf"
          download="resume.pdf"
          className="btn btn-primary text-lg text-white"
        >
          Resume
          <FaDownload className="ml-2"></FaDownload>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
