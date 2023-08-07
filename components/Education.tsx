"use client";
import React from "react";
import { styles } from "@/app/style";
import edu from "@/styles/edu.module.css";

const Education = () => {
  return (
    <div className="w-full h-screen flex items-start justify-center ">
      <div className="flex justify-between p-4 lg:p-32 mx-11 sm:flex-row flex-col">
        <div className="flex-1">
          <p className={`${styles.heroHeadText} text-heading`}>Education</p>
          <p className="text-gray-300 hidden sm:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            dicta et nulla odit obcaecati assumenda quasi distinctio, possimus
            maiores, adipisci numquam temporibus! Veniam optio laboriosam
            quaerat omnis ratione minima exercitationem!
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Edudetails />
        </div>
      </div>
    </div>
  );
};

const Edudetails = () => {
  return (
    <div
      className={`${styles.blur} p-4 flex items-start justify-between gap-5 relative`}
    >
      <div>
        <p className={`font-semibold text-3xl`}>Kathmandu University</p>
        <p className="font-medium text-lg">Dhulikhel, Nepal</p>
        <p className="text-gray-300">
          Bachelor in Computer Science | 2020 - Current
        </p>
      </div>
      <button className={`${styles.icon} ${edu.ku} w-20 h-20`}></button>
    </div>
  );
};
export default Education;
