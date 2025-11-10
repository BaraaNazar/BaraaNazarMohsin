"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import myPhotoZoomed from "../../../public/images/software-developer-programming-firewall-security-multiple-monitors-learning-new-user-interface-developing-application-cloud-server-with-binary-code-html-script-terminal-window.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-start">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src={myPhotoZoomed}
        alt="Developer workspace"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 flex flex-col xl:text-9xl xl:ml-40 md:text-8xl text-6xl ml-6 font-bold text-white"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Hello.
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          I am
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-red-600"
        >
          Baraa
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

