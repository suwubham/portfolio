"use client";
import React from "react";
import { styles } from "@/app/style";
import edu from "@/styles/edu.module.css";
import { motion } from "framer-motion";
import { education } from "@/constants/constant";

const Education = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-between p-10 xl:pl-32 xl:flex-row flex-col items-center xl:ml-11 xl:pr-0">
        <div className="flex-1">
          <p className={`${styles.heroHeadText} text-heading`}>Education</p>
          <p className="text-gray-300 hidden xl:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            dicta et nulla odit obcaecati assumenda quasi distinctio, possimus
            maiores, adipisci numquam temporibus! Veniam optio laboriosam
            quaerat omnis ratione minima exercitationem!
          </p>
        </div>
        <div className="flex-1 mt-7 xl:mt-0 xl:ml-10 overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            className="flex-col gap-11 hidden xl:flex xl:flex-row"
          >
            <Edudetails />
          </motion.div>
          <div className="flex flex-col gap-11 xl:hidden">
            <Edudetails />
          </div>
        </div>
      </div>
    </div>
  );
};

const Edudetails = () => {
  return (
    <>
      {education.map((edudetails) => {
        return (
          <div
            className={`${styles.blur} p-4 flex gap-2 relative min-w-[462px] justify-between`}
            key={edudetails.name}
          >
            <div>
              <p className={`font-semibold text-3xl`}>{edudetails.name}</p>
              <p className="font-medium text-lg">{edudetails.address}</p>
              <p className="text-gray-300">
                {`${edudetails.program} | ${edudetails.duration}`}
              </p>
            </div>

            <button
              className={`${styles.edulogo} ${edu[edudetails.logo]} w-14 h-14`}
            ></button>
          </div>
        );
      })}
    </>
  );
};
export default Education;
