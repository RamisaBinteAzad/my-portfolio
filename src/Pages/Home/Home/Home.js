import React from "react";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Contact from "./Contact/Contact";

import "./Home.css";

const Home = () => {
  return (
    <div className="background-change ">
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
