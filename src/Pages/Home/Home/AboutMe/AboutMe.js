import React from "react";
import age from "../../../../assets/images/age2.png";
import location from "../../../../assets/images/map.png";
import gmail from "../../../../assets/images/gmail.png";
import html from "../../../../assets/images/skills/html.png";
import css3 from "../../../../assets/images/skills/css3.png";
import bootstrap from "../../../../assets/images/skills/bootstrap.png";
import tailwind from "../../../../assets/images/skills/tailwind.png";
import javascript from "../../../../assets/images/skills/javascript.png";
import react from "../../../../assets/images/skills/react.png";
import firebase from "../../../../assets/images/skills/firebase.png";
import nodejs from "../../../../assets/images/skills/nodejs.png";
import expressJs from "../../../../assets/images/skills/expressJs.png";
import mongoDB from "../../../../assets/images/skills/mongodb2.png";
import figma from "../../../../assets/images/skills/figma.png";
import github from "../../../../assets/images/skills/github1.png";
import netlify from "../../../../assets/images/skills/netlify.png";
import vscode from "../../../../assets/images/skills/file_type_vscode_icon_130084.png";
import vercel from "../../../../assets/images/skills/vercel.png";



const AboutMe = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-4  ">
        <div className="flex flex-column justify-center items-center mb-12">
          <p className="text-primary text-6xl mb-0  font-semibold ">
                      ABOUT<span className="text-gray-400 ml-3 ">ME</span>
                      <hr className="w-3/5 border-4 border-primary"/>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5   ">
          <div className="card background-change shadow-2xl my-7 border-2 border-primary">
            <div className="card-body text-gray-200">
              <h2 className="card-title text-3xl text-gray-400">WHO I AM!</h2>
              <p className="text-4xl text-white mt-3">
                My name is <span className="text-sky-300 mr-2">Ramisa</span>{" "}
                <span className="text-gray-300 mr-2">Binte</span>
                <span className="text-sky-300">Azad</span> and I am a{" "}
                <span className="text-sky-300 mr-2">Front -End </span>Web
                Developer.
              </p>
              <p className="text-base tracking-normal mt-4 font-light">
                {" "}
                I am a graduate of Ahsanullah University of Science and
                Technology, from the Department of Computer Science and
                Engineering. I am a hardworking, honest individual, always
                willing to learn new skills. Quite friendly, helpful and polite,
                have a good sense of humor.
              </p>

              <p className="text-base tracking-normal mt-2 font-light">
                Because of more interest in Web Development, improving more
                skills, and building a career as a Web developer, currently, I
                have done a online web development course and have done a number
                of projects with technology like HTML, Bootstrap, Tailwind,
                CSS3,React, ReactJs, NodeJS, ExpressJS, and MongoDB.
                <br />
                <br />
                Constantly updating the technologies, I am looking forward to
                new technologies to enrich my skills and improve my good
                practices as a developer.
              </p>

              <div className="flex flex-col flex-wrap md:flex-row lg:flex-row   justify-between mt-3">
                <div className="flex items-center">
                  <img className="w-12 h-12" src={age} alt="" />
                  <p className="ml-2 text-white text-lg">25</p>
                </div>
                <div className="flex items-center">
                  <img className="" src={gmail} alt="" />
                  <p className="ml-2 text-white text-lg">
                    tasnimlamia52@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <img className="w-10 h-10" src={location} alt="" />
                  <p className="ml-2 text-white text-lg">Dhaka,Bangladesh</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card  background-change shadow-2xl my-7 border-2 border-primary">
            <div className="card-body">
              <h2 className="card-title text-4xl text-gray-400">SKILLS</h2>
              <h3 className="text-4xl text-white mt-3">Front-End</h3>
              <div className="grid grid-cols-6 xl:grid-cols-6 md:grid-cols-5 gap-2 ">
                <img src={html} alt="" />
                <img src={css3} alt="" />
                <img src={bootstrap} alt="" />
                <img src={tailwind} alt="" />
                <img src={javascript} alt="" />
                <img src={react} alt="" />
              </div>
              <h3 className="text-4xl text-white mt-3">Back-End</h3>
              <div className="grid grid-cols-6  md:grid-cols-5 gap-3 ">
                <img src={firebase} alt="" />
                <img src={nodejs} alt="" />
                <img src={expressJs} alt="" />
                <img src={mongoDB} alt="" />
              </div>
              <h3 className="text-4xl text-white mt-3">Tools</h3>
              <div className="grid grid-cols-6 xl:grid-cols-6 md:grid-cols-5   gap-3 ">
                <img src={figma} alt="" />
                <img src={github} alt="" />
                <img src={netlify} alt="" />
                <img src={vscode} alt="" />
                <img
                  src={vercel}
                  className=" ml-2 rounded  bg-sky-300"
                  alt=""
                />
                <img src={firebase} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
