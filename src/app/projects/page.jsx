"use client";
// import Image from 'next/image'
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import refubook from "public/images/RefuBook.png";
import movieProject from "public/images/movie-project.png";
import crossRoadRestaurant from "public/images/Cross-Road-Restaurant.png";
import madLibs from "public/images/Mad-libs.png";
import talebAlelm from "public/images/talebalelm.png";
import SingleProjectCard from "./SingleProjectCard";
import ExpenseCalculator from "public/images/Expenses-Calculator.png";

function Projects() {
  const dummy = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      dummy.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 2000);
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col w-screen">
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
          <Link className="pointer text-white text-lg" href="/">
            Baraa/Home
          </Link>
        </motion.div>
        <motion.div
          className="md:text-6xl flex pl-10 pt-52 capitalize text-5xl w-screen"
          initial={{ x: -500, opacity: 0, y: -500 }}
          animate={{ x: 0, opacity: 1, y: 0 }}
          transition={{ type: "linear", stiffness: 500 }}
        >
          See my Projects with Demos & code
        </motion.div>
        <div className="relative h-1/2 w-screen justify-center items-center hidden lg:flex">
          <button
            type="button"
            onClick={handleClickScroll}
            className="scroll-down cursor-pointer"
          ></button>
        </div>
      </motion.div>

      <div id="projects" ref={dummy} />
      <div className="py-10 px-12 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <SingleProjectCard
          name={"TalebAlelm"}
          demo={"https://taleb-alelm.vercel.app/"}
          image={talebAlelm}
          code={"https://github.com/BaraaNazar/talebAlelm"}
          content={
            "This web app is made for people who seek knowledge and build a road map to arrange their learning process."
          }
        />
        <SingleProjectCard
          name={"Expenses Calculator"}
          demo={"https://expeses-calculator.vercel.app/"}
          image={ExpenseCalculator}
          code={"https://github.com/BaraaNazar/Expeses-Calculator"}
          content={
            "Welcome to our React-based expenses calculator website. Manage your finances effortlessly with our user-friendly interface and powerful features. Take control of your expenses and achieve financial well-being today!"
          }
        />
        <SingleProjectCard
          name={"RefuBook"}
          demo={"https://officialrefubook.netlify.app/"}
          image={refubook}
          code={"https://github.com/BaraaNazar/RefuBook"}
          content={
            "This website will be able to help refugees wherever they are.Information will be separated by country and users will be able to create their own account and share their own personal experiences and knowledge on how to find a job, rent a house, buy or sell things you might need, or how to join events happening in the community."
          }
        />
        <SingleProjectCard
          name={"Muggles"}
          demo={"https://muggles.netlify.app/"}
          image={movieProject}
          code={"https://github.com/BaraaNazar/Movie-Project"}
          content={
            "The Muggle website is an excellent destination for film lovers looking for their next great watch. This website offers a vast library of movies, ranging from recent blockbusters to classic films and hidden gems. With features such as user ratings, and reviews, this site makes it easy for users to discover movies that match their interests and preferences."
          }
        />
        <SingleProjectCard
          name={"Cross Road Restaurant"}
          demo={"https://graceful-capybara-20c8ac.netlify.app/"}
          image={crossRoadRestaurant}
          code={"https://github.com/BaraaNazar/CrossRoads-Re-coded-project"}
          content={
            "Cross Roads Restaurant's website is the perfect platform to showcase its unique dining experience. The website features a beautifully designed interface with mouth-watering images of its menu items, inviting users to come and enjoy a taste of the restaurant's delicious cuisine."
          }
        />
        <SingleProjectCard
          name={"Mad Libs"}
          demo={"https://officialrefubook.netlify.app/"}
          image={madLibs}
          code={"https://github.com/BaraaNazar/RefuBook"}
          content={
            "The Mad Libs website, built using JavaScript, offers a fun and interactive way to create and play custom Mad Libs stories. With a user-friendly interface and a wide range of Mad Libs templates to choose from, users can easily input their own words to create a personalized story."
          }
        />
      </div>
    </div>
  );
}

export default Projects;
