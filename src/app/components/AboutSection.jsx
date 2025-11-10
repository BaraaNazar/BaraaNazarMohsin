"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            I build & test websites remotely
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-lg text-gray-300">
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
          
          <div className="text-lg text-gray-300">
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
            aesthetically pleasing and practical.
          </div>
          
          <div className="text-lg text-gray-300">
            In conclusion, as a Front-End Developer, I am dedicated to using my
            skills and expertise to bring beautiful, functional, and accessible
            web applications to life. Whether I am working on a new project or
            updating an existing one, I am committed to delivering results that
            exceed my clients' expectations.
          </div>

          <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="pt-6"
          >
            <Link
              href="https://www.canva.com/design/DAFhCO45V9c/bQChSDnHe3LZny3Mc1zVdw/view?utm_content=DAFhCO45V9c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              className="text-red-600 text-lg font-bold hover:text-red-500 transition-colors"
              aria-label="View my resume on Canva"
              tabIndex={0}
            >
              My resume (On Canva) →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

