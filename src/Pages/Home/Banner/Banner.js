import React from "react";
import profile from "../../../assets/images/profile.png";
import img1 from "../../../assets/images/emoji.gif";
import webDevelopment from "../../../assets/images/webDevelopment.png";
import gmail from "../../../assets/images/gmail.png";
import linkedIn from "../../../assets/images/linkedin.png";
import github from "../../../assets/images/github-sign.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero my-5 container mx-auto  px-4 ">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <p className="lg:text-5xl text-4xl font-bold  inline text-white">
            HI THERE
            <img src={img1} className="w-13 h-14 -mt-4 inline" alt="" />
            ,I'm
            <br />
            <span className="text-primary lg:text-7xl text-5xl">
              Ramisa <span className="text-gray-400 ">Binte</span> Azad
            </span>
          </p>
          <div className="flex items-center mt-5">
            <p className="lg:text-4xl text-3xl text-white mr-3">Front-End Web Developer</p>
            <img className="w-10" src={webDevelopment} alt="" />
          </div>

          <p className="mt-10 text-lg tracking-wide">
            I’m focused on building responsive front-end web applications while
            learning back-end technologies. I love making things that work well,
            look good and are easy-to-use for everyone. Feel free to take a look
            at my latest projects a little bit below this page.
          </p>
          <div className="flex  items-center mt-6">
            <a
              href="https://www.linkedin.com/in/ramisa-binte-azad/"
              target="blank"
            >
              <img src={linkedIn} alt="" className="w-10 h-10 mr-4" />
            </a>
            <a href="https://github.com/RamisaBinteAzad" target="blank">
              <FaGithub className=" w-10 h-9 mr-4"></FaGithub>
            </a>

            <a href="https://mail.google.com/mail/" target="blank">
              <img src={gmail} alt="" />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <img src={profile} className="w-full rounded-lg shadow-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
