import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <div className="bg-main-bg bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />

        <Education />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </>
  );
};

export default Home;
