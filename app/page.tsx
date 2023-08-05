import React from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="bg-main-bg bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
