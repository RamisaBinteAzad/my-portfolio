import React from "react";
import project1 from "../../../assets/images/Psychare-TherapiaService.png";
import bootstrap from "../../../assets/images/technology/icons8-bootstrap-24.png";
import css from "../../../assets/images/technology/css-3.png";
import react from "../../../assets/images/technology/structure.png";
import nodejs from "../../../assets/images/technology/icons8-node-js-24.png";
import expressjs from "../../../assets/images/technology/icons8-express-js-24.png";
import mongoDB from "../../../assets/images/technology/mongodb_plain_wordmark_logo_icon_146423.png";
import project2 from "../../../assets/images/courcity.png";
import { Link } from "react-router-dom";
import quizplanet from "../../../assets/images/Quiz-Planet.png";

const Projects = () => {
  return (
    <section className="projects-section container mx-auto px-4 " id="projects">
      <div className="">
        <div>
          <div className="px-4 lg:w-1/2">
            <p className="text-primary text-4xl font-semibold mt-12">
              MY <span className="text-gray-400 ml-3">PROJECTS</span>
              <hr className="w-20 border-4 border-primary" />
            </p>
            <p className="text-white font-semibold text-5xl mt-2 tracking-wide">
              Some Things I Built
            </p>
            <p className="text-lg mt-4 tracking-wide">
              I like to stay busy and always have a project in the works. Take a
              look at some of the applications I've have built.
            </p>
          </div>
          <div className="grid  grid-cols-1 mt-5">
            <div className="hero  ">
              <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 w-full h-full">
                  <img
                    className="lg:w-11/12 w-full h-3/5 "
                    src={project1}
                    alt="img"
                  />
                </div>

                <div className="lg:w-1/2 w-full h-full lg:px-4">
                  <h2
                    tabIndex="0"
                    className="focus:outline-none text-4xl text-gray-400 tracking-widest "
                  >
                    01
                  </h2>

                  <p
                    tabIndex="0"
                    className="focus:outline-none text-white text-5xl mt-4"
                  >
                    Psychare Therapia
                  </p>
                  <small className="tracking-widest text-blue-300 text-lg font-medium ">
                    Psychological Services Review Website
                  </small>
                  <p className="mt-8 tracking-wide text-lg">
                    This is a responsive psychological service reviewed website
                    with firebase authentication.Each logged-in user has the
                    ability to add services,reviews and delete and update the
                    reviews.All Users can see the latest Reviews.
                  </p>
                  <div className="flex items-center mt-5 ">
                    <img
                      src={bootstrap}
                      title="BOOTSTRAP"
                      className="h-7 mr-3"
                      alt=""
                    />
                    <img src={css} title="CSS" className="h-7 mr-3" alt="" />
                    <img
                      src={react}
                      title="REACT"
                      className="h-6 mr-3"
                      alt=""
                    />
                    <img
                      src={nodejs}
                      title="NODEJS"
                      className="w-7 h-7 mr-3"
                      alt=""
                    />
                    <img
                      src={expressjs}
                      title="EXPRESSJS"
                      className="w-7 h-7 mr-3"
                      alt=""
                    />
                    <img
                      src={mongoDB}
                      title="MONGODB"
                      className="w-7 h-8"
                      alt=""
                    />
                  </div>
                  <Link className="mt-5 btn bg-sky-600 hover:bg-slate-600 border-0 text-white font-thin">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero  w-full mt-4">
              <div className="hero-content flex-col-reverse lg:flex-row">
                <div className="lg:w-1/2 w-full h-full lg:px-4">
                  <h2
                    tabIndex="0"
                    className="focus:outline-none text-4xl text-gray-400 tracking-widest "
                  >
                    02
                  </h2>

                  <p
                    tabIndex="0"
                    className="focus:outline-none text-white text-5xl mt-4"
                  >
                    Courcity
                  </p>
                  <small className="tracking-widest text-blue-300 text-lg font-medium ">
                    Provide Quality learning platform Website
                  </small>
                  <p className="mt-8 tracking-wide text-lg">
                    This website is for Computer Science related courses where
                    users can see all the course content details, download PDF
                    files of courses,toggle-button for theme change,a private
                    route to get premium access for a protected checkout page
                    and Firebase Authentication in three different ways.
                  </p>
                  <div className="flex items-center mt-5 ">
                    <img
                      src={bootstrap}
                      title="BOOTSTRAP"
                      className="h-7 mr-3"
                      alt=""
                    />
                    <img src={css} title="CSS" className="h-7 mr-3" alt="" />
                    <img
                      src={react}
                      title="REACT"
                      className="h-6 mr-3"
                      alt=""
                    />
                    <img
                      src={nodejs}
                      title="NODEJS"
                      className="w-7 h-7 mr-3"
                      alt=""
                    />
                    <img
                      src={expressjs}
                      title="EXPRESSJS"
                      className="w-7 h-7 mr-3"
                      alt=""
                    />
                  </div>
                  <Link className="mt-5 btn bg-sky-600 hover:bg-slate-600 border-0 text-white font-thin">
                    Explore More
                  </Link>
                </div>
                <div className="lg:w-1/2 w-full h-3/5">
                  <img
                    className=" w-full lg:h-[500px]"
                    src={project2}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="hero mt-4  ">
              <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 w-full h-full">
                  <img
                    className=" w-full  md:h-[500px] "
                    src={quizplanet}
                    alt="img"
                  />
                </div>

                <div className="lg:w-1/2 w-full h-full lg:px-4 ">
                  <h2
                    tabIndex="0"
                    className="focus:outline-none text-4xl text-gray-400 tracking-widest "
                  >
                    03
                  </h2>

                  <p
                    tabIndex="0"
                    className="focus:outline-none text-white text-5xl mt-4"
                  >
                    Quiz Planet
                  </p>
                  <small className="tracking-widest text-blue-300 text-lg font-medium ">
                    Online Quiz Organizing Website
                  </small>
                  <p className="mt-8 tracking-normal text-lg">
                    This is a responsive website where learners can practice
                    quiz of different categories about Web Development.Learners
                    can easily judge his ability and can understand whether his
                    answer is right or wrong and get the correct answer.For Quiz
                    Analytics there is a graph in the statistics section
                  </p>
                  <div className="flex items-center mt-5 ">
                    <img
                      src={bootstrap}
                      title="BOOTSTRAP"
                      className="h-7 mr-3"
                      alt=""
                    />
                    <img src={css} title="CSS" className="h-7 mr-3" alt="" />
                    <img
                      src={react}
                      title="REACT"
                      className="h-6 mr-3"
                      alt=""
                    />
                  </div>
                  <Link className="mt-5 btn bg-sky-600 hover:bg-slate-600 border-0 text-white font-thin">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
