"use client";
import React from "react";
import { styles } from "@/app/style";
import { Typewriter } from "react-simple-typewriter";
import connect from "@/styles/connect.module.css";
import { motion } from "framer-motion";
import { socials } from "@/constants/constant";
import {
  ArrowDownTrayIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto flex items-center justify-center">
      <motion.div
        className={`flex flex-row items-start gap-5 mx-7`}
        initial={{ opacity: 0, scale: 0.5, x: -200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
      >
        <div className={`flex flex-col justify-center items-center mt-5 `}>
          <div className="h-5 w-5 rounded-full bg-heading" />
          <div className="w-1 sm:h-80 h-96 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eef]">Shubham Shakya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              words={[
                "Computer Science Student",
                "Full Stack Web Developer",
                "Data Science Enthusiast",
                "Machine Learning Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
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
            <motion.div
              className="hidden sm:flex items-center justify-center gap-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className={`${styles.button} bg-[#915eef]`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                Resume
                <ArrowDownTrayIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                className={`${styles.button} bg-[#915eef]`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                Contact me
                <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
              </motion.button>
            </motion.div>
            <motion.div
              className="flex items-center gap-5"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {socials.map((social) => {
                return (
                  <motion.button
                    className={`${connect[social]} ${styles.icon}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    variants={item}
                    key={social}
                  ></motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
