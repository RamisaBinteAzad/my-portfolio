import React from "react";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";

import "./Home.css";

const Home = () => {
  return (
    <div className="background-change ">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>

    </div>
  );
};

export default Home;
