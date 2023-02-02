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
    <motion.div
    initial={{scale:1.5}}
    animate={{scale:1}}
    transition={{delay:0.5, duration:0.1}}
     className='flex flex-col justify-start h-screen w-screen text-[#c1ad8c] font-bold font-sans bg-black md:bg-[url("https://a-static.besthdwallpaper.com/animated-spider-man-showen-over-black-background-wallpaper-2560x1600-95899_7.jpg")]'>
        <div className='md:hidden flex space-x-10 m-2 capitalize font-sans'>
          <div>home</div>
          <div>about</div>
          <div>projects</div>
          <div>contact</div>
        </div>
        <div className='md:text-9xl md:p-20 md:mt-16 md:ml-40 text-left text-5xl mt-10 ml-10 w-fit'>
          <motion.div 
          
          initial={{x:-500, opacity:0, y:-500}}
          animate={{x:0,opacity:1, y:0}}

          whileHover={{
            translateX: "50px",
            originX: 0,
            color: "red",
            }}
          transition={{type: "linear", stiffness: 500}}

            onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>{aboutHover?<div>About</div>:<div>Hello.</div> }</motion.div>
          <motion.div
            initial={{x:-500, opacity:0, y:0}}
            animate={{x:0,opacity:1}}

          whileHover={{
            translateX: "50px",
            originX: 0,
            color: "red",
            }}

            transition={{type: "linear", stiffness: 500}}
            onMouseEnter={handleMouseEnterProjects} onMouseLeave={handleMouseLeaveProjects}>{projectsHover?<div>Projects</div>:<div className='text-[#c1ad8c]'>I am</div> }</motion.div>
          <motion.div 
            initial={{y:-500, opacity:0, x:0}}
            animate={{y:0,opacity:1}}
            
            whileHover={{
            translateX: "50px",
            originX: 0,
            color: "red",
            }}
            transition={{type: "linear", stiffness: 500}}
            onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>{contactHover?<div>Contact</div>:<div className='text-red-600'>Baraa</div> }</motion.div>
        </div>
        <div className='md:hidden flex'>
          <img src='https://i.pinimg.com/originals/06/60/ef/0660efe82fa3da42ed56eef013171835.gif' alt='Loading...'/>
        </div>
    </motion.div>
  )
}

export default Home