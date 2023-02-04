"use client";
// import Image from 'next/image'
import { motion } from "framer-motion";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-screen h-screen flex flex-col font-bold font-sans"
      >
        <motion.div
          className="flex justify-end ml-10 mt-10 fixed items-end right-10"
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: -10, opacity: 1, y: 0 }}
          whileHover={{
            translateX: "-30px",
            originX: 0,
            color: "red",
          }}
          transition={{ type: "linear", stiffness: 500 }}
        >
          <Link classname="pointer text-white text-lg" href="/">
            Baraa/Home
          </Link>
        </motion.div>
        <motion.div
          className="md:text-7xl flex pl-10 pt-60 capitalize text-5xl"
          initial={{ x: -500, opacity: 0, y: -500 }}
          animate={{ x: 0, opacity: 1, y: 0 }}
          transition={{ type: "linear", stiffness: 500 }}
        >
          Get in touch & Chat with me
        </motion.div>
        <div className="relative mt-auto">
          <div class="scroll-down p-2"></div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center w-screen">
        <div className="md:w-1/2 w-screen flex flex-col items-left">
          <div className="font-bold text-4xl capitalize p-5">Contact</div>
          <div className="text-lg p-5">
            My expertise encompasses a range of front-end technologies and I am
            skilled in creating responsive and user-friendly websites and
            applications that meet the highest standards of quality and
            performance. In addition to my technical abilities, I am a strong
            communicator and problem-solver, with a focus on delivering
            exceptional customer service.
          </div>
          <div className="text-lg p-5">
            If you would like to learn more about my experience and
            qualifications, please feel free to review my LinkedIn profile. I am
            confident that I have the skills and experience to deliver
            outstanding results and make a positive impact to any project I am a
            part of.
          </div>
          <div className="text-lg p-5">
            If you would like to get in touch, please don't hesitate to reach
            out via the form below or email me. I would be happy to hear from
            you and discuss any potential opportunities.
          </div>
          <motion.div
            className="text-red-500 text-lg p-5 cursor-pointer font-bold"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: 0 }}
            whileHover={{
              translateX: "30px",
              originX: 0,
            }}
            transition={{ type: "linear", stiffness: 500 }}
          >
            <Link
              href="https://www.linkedin.com/in/baraa-nazar-a29226138/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </motion.div>
          <motion.div
            className="text-red-500 text-lg p-5 cursor-pointer font-bold"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: 0 }}
            whileHover={{
              translateX: "30px",
              originX: 0,
            }}
            transition={{ type: "linear", stiffness: 500 }}
          >
            <Link href="https://github.com/BaraaNazar" target="_blank">
              GitHub
            </Link>
          </motion.div>
          <motion.div
            className="text-red-500 text-lg p-5 cursor-pointer font-bold"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: 0 }}
            whileHover={{
              translateX: "30px",
              originX: 0,
            }}
            transition={{ type: "linear", stiffness: 500 }}
          >
            <Link href="https://wa.me/9647739009009" target="_blank">
              WhatsApp
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
