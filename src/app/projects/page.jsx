"use client";
// import Image from 'next/image'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import refubook from "../../../public/images/RefuBook.png";
import movieProject from "../../../public/images/movie-project.png";
import crossRoadRestaurant from "../../../public/images/Cross-Road-Restaurant.png";
import madLibs from "../../../public/images/Mad-libs.png";

function Projects() {
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
          See my Projects with Demos & code
        </motion.div>
        <div className="relative mt-auto">
          <div class="scroll-down p-2"></div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center w-screen">
        <div className="md:w-1/2 w-screen flex flex-col items-left">
          <div className="flex h-screen">
            <div className="flex flex-col">
              <div className="font-semibold text-white decoration-indigo-500 text-xl p-2">
                RefuBook
              </div>
              <div className="font-semibold text-white decoration-indigo-500 p-2">
                This website will be able to help refugees wherever they are.
                Information will be separated by country and users will be able
                to create their own account and share their own personal
                experiences and knowledge on how to find a job, rent a house,
                buy or sell things you might need, or how to join events
                happening in the community.
              </div>
            </div>
            <Image
              className="w-fit h-96 p-2 hover:scale-150"
              src={refubook}
            ></Image>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link
                href="https://officialrefubook.netlify.app/"
                target="_blank"
              >
                Demo
              </Link>
            </motion.div>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link
                href="https://github.com/BaraaNazar/RefuBook"
                target="_blank"
              >
                Code
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-screen">
        <div className="md:w-1/2 w-screen flex flex-col items-left">
          <div className="flex h-screen">
            <div className="flex flex-col">
              <div className="font-semibold text-white decoration-indigo-500 text-xl p-2">
                Muggles
              </div>
              <div className="font-semibold text-white decoration-indigo-500 p-2">
                The Muggle website is an excellent destination for film lovers
                looking for their next great watch. This website offers a vast
                library of movies, ranging from recent blockbusters to classic
                films and hidden gems. With features such as user ratings,
                reviews, and personalized recommendations, this site makes it
                easy for users to discover movies that match their interests and
                preferences. Users can search for movies by genre, director,
                year, and more, and filter their results by factors such as IMDb
                ratings, Rotten Tomatoes scores, and box office performance.
                Users can find the perfect movie to fit their mood with just a
                few clicks, whether they're looking for a heartwarming romantic
                comedy, an edge-of-your-seat action thriller, or a
                thought-provoking indie drama.
              </div>
            </div>
            <Image
              className="w-fit h-96 p-2 hover:scale-150"
              src={movieProject}
            ></Image>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link href="https://muggles.netlify.app/" target="_blank">
                Demo
              </Link>
            </motion.div>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link
                href="https://github.com/BaraaNazar/Movie-Project"
                target="_blank"
              >
                Code
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-screen">
        <div className="md:w-1/2 w-screen flex flex-col items-left">
          <div className="flex h-fit">
            <div className="flex flex-col">
              <div className="font-semibold text-white decoration-indigo-500 text-xl p-2">
                Cross Road Restaurant
              </div>
              <div className="font-semibold text-white decoration-indigo-500 p-2">
                Cross Roads Restaurant's website is the perfect platform to
                showcase its unique dining experience. The website features a
                beautifully designed interface with mouth-watering images of its
                menu items, inviting users to come and enjoy a taste of the
                restaurant's delicious cuisine. The site includes detailed
                information about the restaurant's hours of operation, location,
                and contact information, making it easy for customers to plan a
                visit. The website also highlights the restaurant's commitment
                to using fresh, locally sourced ingredients, as well as its
                commitment to creating a warm and welcoming atmosphere for
                diners. Whether you're looking to make a reservation, learn
                about the menu, or simply get a glimpse into the restaurant's
                culture, this website has everything you need to know.
              </div>
              <Image
                className="w-fit h-96 p-2 hover:scale-150"
                src={crossRoadRestaurant}
              ></Image>
            </div>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link
                href="https://graceful-capybara-20c8ac.netlify.app/"
                target="_blank"
              >
                Demo
              </Link>
            </motion.div>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link
                href="https://github.com/BaraaNazar/CrossRoads-Re-coded-project"
                target="_blank"
              >
                Code
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-screen">
        <div className="md:w-1/2 w-screen flex flex-col items-left">
          <div className="flex md:flex-row flex-col h-screen">
            <div className="flex flex-col">
              <div className="font-semibold text-white decoration-indigo-500 text-xl p-2">
                Mad Libs
              </div>
              <div className="font-semibold text-white decoration-indigo-500 p-2">
                The Mad Libs website, built using JavaScript, offers a fun and
                interactive way to create and play custom Mad Libs stories. With
                a user-friendly interface and a wide range of Mad Libs templates
                to choose from, users can easily input their own words to create
                a personalized story. The JavaScript code powers the site's
                dynamic features, including real-time updates to the story as
                users input their words and a fun and whimsical design that
                enhances the overall user experience. Whether you're looking for
                a fun activity to do with friends, or just looking to bring some
                humor and creativity into your day, this Mad Libs website has
                got you covered. With its engaging gameplay and endless
                possibilities, this website is sure to provide hours of laughter
                and entertainment.
              </div>
              <Image
                className="w-fit h-96 p-2 hover:scale-150"
                src={madLibs}
              ></Image>
            </div>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link
                href="https://polite-churros-06d0e9.netlify.app/"
                target="_blank"
              >
                Demo
              </Link>
            </motion.div>
            <motion.div
              className="text-red-500 text-lg p-5 cursor-pointer font-bold"
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              whileHover={{
                translateY: "-10px",
                originY: 0,
              }}
              transition={{ type: "linear", stiffness: 500 }}
            >
              <Link
                href="https://github.com/BaraaNazar/recoded-mad-libz"
                target="_blank"
              >
                Code
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
