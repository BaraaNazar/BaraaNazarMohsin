"use client";
// import Image from 'next/image'
import React, {useRef, useEffect} from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Contact() {
  const dummy = useRef(null);
  useEffect(() => {
    setTimeout(()=>{    dummy.current.scrollIntoView({ behavior: "smooth" });
  },2000)
  }, []);
  const handleClickScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex  flex-col">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-screen h-screen flex  flex-col font-bold font-sans"
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
          className="md:text-7xl flex pl-10 pt-60 capitalize text-5xl w-screen"
          initial={{ x: -500, opacity: 0, y: -500 }}
          animate={{ x: 0, opacity: 1, y: 0 }}
          transition={{ type: "linear", stiffness: 500 }}
        >
          Get in touch & Chat with me
        </motion.div>
        <div className="relative h-1/2 w-screen justify-center items-center hidden lg:flex">
          <button type="button" onClick={handleClickScroll } className="scroll-down cursor-pointer"></button>
          </div>
      </motion.div>
      <div id="contact" ref={dummy} />
      <div className="flex lg:flex-row flex-col items-center w-screen">
        <div className="md:w-1/2 w-screen flex h-screen flex-col items-left">
          <div className="font-bold text-4xl capitalize p-5">Contact</div>
          <div className="text-lg p-5 w-screen">
            My expertise encompasses a range of front-end technologies and I am
            skilled in creating responsive and user-friendly websites and
            applications that meet the highest standards of quality and
            performance. In addition to my technical abilities, I am a strong
            communicator and problem-solver, with a focus on delivering
            exceptional customer service.
            If you would like to learn more about my experience and
            qualifications, please feel free to review my LinkedIn profile. I am
            confident that I have the skills and experience to deliver
            outstanding results and make a positive impact to any project I am a
            part of.
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
      <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1, y: 0 }}
       className="flex justify-center items-center w-screen h-screen text-center m-auto">
      <div
  className="block max-w-md rounded-lg bg-black p-6 shadow-lg dark:bg-neutral-700 border-red-600 hover:border-2">
  <form>
    <div className="relative mb-6 w-screen" data-te-input-wrapper-init>
      <input
        type="text"
        className="border-red-600 hover:border-2 peer block min-h-[auto] w-fit rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput7"
        placeholder="Name" />
      <label
        for="exampleInput7"
        className=" pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] w-fit leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
        >Name
      </label>
    </div>
    <div className="relative mb-6" data-te-input-wrapper-init>
      <input
        type="email"
        className="border-red-600 hover:border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput8"
        placeholder="Email address" />
      <label
        for="exampleInput8"
        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
        >Email address
      </label>
    </div>
    <div className="relative mb-6" data-te-input-wrapper-init>
      <textarea
        className="border-red-600 hover:border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Message"></textarea>
      <label
        for="exampleFormControlTextarea13"
        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
        >Message
      </label>
    </div>
    <div
      className=" w-fit mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
      <input
        className="mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
        type="checkbox"
        value=""
        id="exampleCheck10" />
      <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer"
        for="exampleCheck10">
        Send me a copy of this message
      </label>
    </div>
    <button
      type="submit"
      className="border-white hover:border-2 bg-red-500 w-full rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      data-te-ripple-init
      data-te-ripple-color="light">
      Send
    </button>
  </form>
</div>
      </motion.div>
    </div>
  );
}

export default Contact;
