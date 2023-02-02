'use client';
import React ,{useState} from 'react'
import {motion} from "framer-motion"
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
    <div className='flex justify-start h-screen w-screen text-white font-bold font-sans bg-[url("https://a-static.besthdwallpaper.com/animated-spider-man-showen-over-black-background-wallpaper-2560x1600-95899_7.jpg")]'>
        <div className='text-9xl space-y-10 mt-10 ml-40 text-left transition'>
          <motion.div 
          whileHover={{
            translateX: "50px",
            originX: 0,
            color: "red",
            }}
          transition={{type: "linear", stiffness: 500}}
            onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>{aboutHover?<div>About</div>:<div>Hello.</div> }</motion.div>
          <motion.div whileHover={{
            translateX: "50px",
            originX: 0,
            color: "red",
            }}
            transition={{type: "linear", stiffness: 500}}
            onMouseEnter={handleMouseEnterProjects} onMouseLeave={handleMouseLeaveProjects}>{projectsHover?<div>Projects</div>:<div>I'm</div> }</motion.div>
          <motion.div whileHover={{
            translateX: "50px",
            originX: 0,
            color: "red",
            }}
            transition={{type: "linear", stiffness: 500}}
            onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>{contactHover?<div>Contact</div>:<div>Baraa</div> }</motion.div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Home