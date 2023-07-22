"use client";
// import Image from 'next/image'
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import imagefromnet from "../../../public/images/people-working-office.jpg";

function About() {
  const dummy = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  }, []);
  const handleClickScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col h-screen w-screen lg:overflow-x-scroll">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-screen h-screen flex flex-col font-bold font-sans"
      >
        <motion.div
          className="flex justify-end ml-10 mt-10 fixed items-end right-10 "
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
          className="md:text-7xl flex pl-10 pt-60 capitalize text-5xl w-screen h-screen"
          initial={{ x: -500, opacity: 0, y: -500 }}
          animate={{ x: 0, opacity: 1, y: 0 }}
          transition={{ type: "linear", stiffness: 500 }}
        >
          I build & test websites remotely
        </motion.div>
        <div className="relative h-1/2 w-screen justify-center items-center hidden lg:flex">
          <button
            type="button"
            onClick={handleClickScroll}
            className="scroll-down cursor-pointer"
          ></button>
        </div>
      </motion.div>

      <div className="flex lg:flex-row flex-col items-center">
        <div className="md:w-1/2 flex flex-col items-left">
          <div className="font-bold text-4xl capitalize p-5">about</div>
          <div className="text-lg p-5 w-screen">
            As a seasoned Front-End Developer, I bring a wealth of experience
            and a passion for creating dynamic and engaging web applications to
            the table. My expertise in Next.js, React, JavaScript, CSS,
            Tailwind, and HTML allows me to deliver high-quality and visually
            appealing projects that meet the needs and expectations of my
            clients. I have a strong understanding of the latest web
            technologies and design trends, and I use this knowledge to create
            web pages that are not only beautiful but also performant and
            accessible. My proficiency in React allows me to build highly
            responsive and scalable web applications, while my use of CSS
            frameworks such as Tailwind helps me ensure that my designs are
            consistent and user-friendly.
          </div>
          <div className="text-lg p-5 w-screen">
            In addition to my hands-on experience, I have also completed a
            300-hour Front-End Bootcamp, where I honed my skills and learned
            from industry experts. This program allowed me to gain a deeper
            understanding of the front-end development process, from design to
            deployment. It was also an opportunity for me to practice my skills
            and work on real-world projects, helping me to gain the confidence
            and expertise I need to succeed as a front-end developer. In my
            work, I always strive to strike a balance between form and function.
            I understand that the look of a web page is just as important as its
            functionality, and I work hard to ensure that my projects are both
            aesthetically pleasing and practical. Whether I am working on a
            simple website or a complex web application, I bring my full
            attention and expertise to each project to ensure that it is
            delivered on time, on budget, and to the highest standards.
          </div>
          <div className="text-lg p-5 w-screen">
            In conclusion, as a Front-End Developer, I am dedicated to using my
            skills and expertise to bring beautiful, functional, and accessible
            web applications to life. Whether I am working on a new project or
            updating an existing one, I am committed to delivering results that
            exceed my clients' expectations.
          </div>
          <motion.div
            className="text-red-500 text-lg p-5 cursor-pointer font-bold w-screen"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: 0 }}
            whileHover={{
              translateX: "30px",
              originX: 0,
            }}
            transition={{ type: "linear", stiffness: 500 }}
          >
            <Link
              href="https://www.canva.com/design/DAFhCO45V9c/bQChSDnHe3LZny3Mc1zVdw/view?utm_content=DAFhCO45V9c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
            >
              My resume (On Canva)
            </Link>
          </motion.div>
        </div>
      </div>
      <div id="about" ref={dummy} />
    </div>
  );
}

export default About;
