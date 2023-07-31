"use client";
import React from "react";
import Image from "next/image";
import { logo, menu, close } from "@/assets";
import { styles } from "@/app/style";
import { navLinks } from "@/constants/constant";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center fixed top-0 py-5 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image src={logo} alt="Picture of the author" className="w-7 h-7" />

            <p className="text-white font-bold cursor-pointer sm:block hidden">
              Shubham <span>| Data Science Enthusianst</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-sm font-bold cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  window.scrollTo(0, 0);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="cursor-pointer w-7 h-7"
              onClick={() => {
                setToggle(!toggle);
              }}
            />

            {toggle && (
              <div className="absolute p-6 black-gradient top-20 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px]">
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } hover:text-white text-sm font-bold cursor-pointer`}
                      onClick={() => {
                        setActive(link.title);
                        setToggle(false);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
