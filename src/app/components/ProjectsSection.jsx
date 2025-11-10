"use client";
import React from "react";
import { motion } from "framer-motion";
import SingleProjectCard from "../projects/SingleProjectCard";
import refubook from "public/images/RefuBook.png";
import movieProject from "public/images/movie-project.png";
import crossRoadRestaurant from "public/images/Cross-Road-Restaurant.png";
import madLibs from "public/images/Mad-libs.png";
import talebAlelm from "public/images/talebalelm.png";
import TodoImg from "../../../public/images/todoListImg.png";
import InvestmentApp from "../../../public/images/InvestmentApp.png";
import ExpenseCalculator from "public/images/screencapture-expeses-calculator-vercel-app-2023-07-10-15_03_19.png";

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            See my Projects with Demos & code
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <SingleProjectCard
            name="TalebAlelm"
            demo="https://taleb-alelm.vercel.app/"
            image={talebAlelm}
            code="https://github.com/BaraaNazar/talebAlelm"
            content="This web app is made for people who seek knowledge and build a road map to arrange their learning process."
          />
          <SingleProjectCard
            name="Expenses Calculator"
            demo="https://expeses-calculator.vercel.app/"
            image={ExpenseCalculator}
            code="https://github.com/BaraaNazar/Expeses-Calculator"
            content="Welcome to our React-based expenses calculator website. Manage your finances effortlessly with our user-friendly interface and powerful features. Take control of your expenses and achieve financial well-being today!"
          />
          <SingleProjectCard
            name="RefuBook"
            demo="https://officialrefubook.netlify.app/"
            image={refubook}
            code="https://github.com/BaraaNazar/RefuBook"
            content="This website will be able to help refugees wherever they are.Information will be separated by country and users will be able to create their own account and share their own personal experiences and knowledge on how to find a job, rent a house, buy or sell things you might need, or how to join events happening in the community."
          />
          <SingleProjectCard
            name="Todo App"
            demo="https://todo-list-eta-henna.vercel.app/"
            image={TodoImg}
            code="https://github.com/BaraaNazar/ToDoListApp"
            content="Introducing our simple Todo List app. Input and delete tasks effortlessly. Stay organized and focused. Get things done with ease. Try it now!"
          />
          <SingleProjectCard
            name="Investment app"
            demo="https://investment-app-nine.vercel.app/"
            image={InvestmentApp}
            code="https://github.com/BaraaNazar/InvestmentApp"
            content="Introducing the all-in-one Investment App! Stay on top of your finances effortlessly with our user-friendly interface. Track your CURRENT SAVINGS ($), plan ahead with YEARLY SAVINGS ($), and make informed decisions with EXPECTED INTEREST (% per year). Try it now!"
          />
          <SingleProjectCard
            name="Muggles"
            demo="https://muggles.netlify.app/"
            image={movieProject}
            code="https://github.com/BaraaNazar/Movie-Project"
            content="The Muggle website is an excellent destination for film lovers looking for their next great watch. This website offers a vast library of movies, ranging from recent blockbusters to classic films and hidden gems. With features such as user ratings, and reviews, this site makes it easy for users to discover movies that match their interests and preferences."
          />
          <SingleProjectCard
            name="Cross Road Restaurant"
            demo="https://graceful-capybara-20c8ac.netlify.app/"
            image={crossRoadRestaurant}
            code="https://github.com/BaraaNazar/CrossRoads-Re-coded-project"
            content="Cross Roads Restaurant's website is the perfect platform to showcase its unique dining experience. The website features a beautifully designed interface with mouth-watering images of its menu items, inviting users to come and enjoy a taste of the restaurant's delicious cuisine."
          />
          <SingleProjectCard
            name="Mad Libs"
            demo="https://officialrefubook.netlify.app/"
            image={madLibs}
            code="https://github.com/BaraaNazar/RefuBook"
            content="The Mad Libs website, built using JavaScript, offers a fun and interactive way to create and play custom Mad Libs stories. With a user-friendly interface and a wide range of Mad Libs templates to choose from, users can easily input their own words to create a personalized story."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

