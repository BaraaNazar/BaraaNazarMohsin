"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import myPhoto from "../../../public/images/man-photo.png";
import myPhotoZoomed from "../../../public/images/man-photo-zoomed.jpeg";
// import {NavLink} from "react-router-dom"

function Home() {
  const [aboutHover, setAboutHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  const handleMouseEnterAbout = () => {
    setAboutHover(true);
  };
  const handleMouseLeaveAbout = () => {
    setAboutHover(false);
  };

  const handleMouseEnterProjects = () => {
    setProjectsHover(true);
  };
  const handleMouseLeaveProjects = () => {
    setProjectsHover(false);
  };

  const handleMouseEnterContact = () => {
    setContactHover(true);
  };
  const handleMouseLeaveContact = () => {
    setContactHover(false);
  };

  return (
    <motion.div
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex justify-start h-screen w-screen text-white font-bold font-san"
    >
      <div className="flex flex-col xl:text-9xl xl:p-20 xl:mt-16 xl:ml-40 text-left md:text-9xl text-6xl mt-32 ml-6 z-20">
        <motion.div
          initial={{ x: -500, opacity: 0, y: -500 }}
          animate={{ x: 0, opacity: 1, y: 0 }}
          whileHover={{
            translateX: "30px",
            originX: 0,
          }}
          transition={{ type: "linear", stiffness: 500 }}
          onMouseEnter={handleMouseEnterAbout}
          onMouseLeave={handleMouseLeaveAbout}
        >
          {aboutHover ? (
            <Link classname="pointer" href="/about">
              About
            </Link>
          ) : (
            <div>Hello.</div>
          )}
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0, y: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{
            translateX: "30px",
            originX: 0,
          }}
          transition={{ type: "linear", stiffness: 500 }}
          onMouseEnter={handleMouseEnterProjects}
          onMouseLeave={handleMouseLeaveProjects}
        >
          {projectsHover ? (
            <Link classname="pointer" href="/projects">
              Projects
            </Link>
          ) : (
            <div className="text-white">I am</div>
          )}
        </motion.div>
        <motion.div
          initial={{ y: -500, opacity: 0, x: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            translateX: "30px",
            originX: 0,
          }}
          transition={{ type: "linear", stiffness: 500 }}
          onMouseEnter={handleMouseEnterContact}
          onMouseLeave={handleMouseLeaveContact}
        >
          {contactHover ? (
            <Link classname="pointer" href="/contact">
              Contact
            </Link>
          ) : (
            <div className="text-red-600">Baraa</div>
          )}
        </motion.div>
      </div>
      <Image
        className="absolute z-10 w-fit lg:ml-96 xl:scale-100 xl:flex hidden"
        src={myPhoto}
        alt="myPhoto"
        width={700}
      />
      <Image
        className="absolute h-screen w-screen z-10 pl-16 xl:hidden flex"
        src={myPhotoZoomed}
        alt="myPhoto"
        width={"500px"}
      />
    </motion.div>
  );
}

export default Home;
