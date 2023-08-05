"use client";
import React from "react";
import { styles } from "@/app/style";
import { Typewriter } from "react-simple-typewriter";
import connect from "@/styles/connect.module.css";
import { motion } from "framer-motion";
import { socials } from "@/constants/constant";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eef]">Shubham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Data Science Enthusiast",
                "Machine Learning Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="mt-2 text-gray-300 max-w-3xl text-justify">
            I am a Third-year Computer Science student at Kathmandu University,
            Nepal. I am passionate about exploring and extracting meaningful
            insights from the incredible amount of data that surrounds us. I
            also love crafting beautiful and captivating websites.
          </p>
          <hr className="h-1 border-0 rounded mt-2 mb-2 dark:bg-gray-700"></hr>
          <p>
            Feel free to explore my work and connect with me for collaborations.
          </p>
          <div className="mt-3 flex justify-between">
            <div>Hello world</div>
            <div className="flex items-center gap-5">
              <motion.button
                className={`${connect.email} ${styles.icon}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
              <motion.button
                className={`${connect.github} ${styles.icon}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
              <motion.button
                className={`${connect.linkedin} ${styles.icon}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
              <motion.button
                className={`${connect.facebook} ${styles.icon}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
              <motion.button
                className={`${connect.instagram} ${styles.icon}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
