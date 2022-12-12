import React from 'react';
import gmail from "../../../assets/images/gmail.png";
import linkedIn from "../../../assets/images/linkedin.png";
import github from "../../../assets/images/github-sign.png";
import { FaGithub } from "react-icons/fa";
import logo from "../../../assets/images/dev.png";

const Footer = () => {
    return (
      <footer className="footer items-center p-4 text-neutral-content glass">
        <div className="items-center grid-flow-col">
          <img
            src={logo}
            className="w-14 h-12 mr-2 lg:block md:block hidden "
            alt=""
          />
          <div className='text-white text-lg font-light'>
            <p>Page Created By RamisaBinteAzad</p>
            <p>Copyright © 2022 - All right reserved</p>
          </div>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
      </footer>
    );
};

export default Footer;