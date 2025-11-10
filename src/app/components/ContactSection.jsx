"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Get in touch & Chat with me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              My expertise encompasses a range of front-end technologies and I am
              skilled in creating responsive and user-friendly websites and
              applications that meet the highest standards of quality and
              performance. In addition to my technical abilities, I am a strong
              communicator and problem-solver, with a focus on delivering
              exceptional customer service.
            </p>
            <p className="text-lg text-gray-300">
              If you would like to learn more about my experience and
              qualifications, please feel free to review my LinkedIn profile. I am
              confident that I have the skills and experience to deliver
              outstanding results and make a positive impact to any project I am a
              part of.
            </p>
            <p className="text-lg text-gray-300">
              If you would like to get in touch, please don't hesitate to reach
              out via the form below or email me. I would be happy to hear from
              you and discuss any potential opportunities.
            </p>

            <div className="space-y-4 pt-6">
              <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="https://www.linkedin.com/in/baraa-nazar-a29226138/"
                  target="_blank"
                  className="text-red-600 text-lg font-bold hover:text-red-500 transition-colors block"
                  aria-label="Visit my LinkedIn profile"
                  tabIndex={0}
                >
                  LinkedIn →
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="https://github.com/BaraaNazar"
                  target="_blank"
                  className="text-red-600 text-lg font-bold hover:text-red-500 transition-colors block"
                  aria-label="Visit my GitHub profile"
                  tabIndex={0}
                >
                  GitHub →
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="https://wa.me/9647739009009"
                  target="_blank"
                  className="text-red-600 text-lg font-bold hover:text-red-500 transition-colors block"
                  aria-label="Contact me on WhatsApp"
                  tabIndex={0}
                >
                  WhatsApp →
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-600 transition-colors">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                    aria-label="Your email address"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Message"
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
                    aria-label="Your message"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="copy"
                    className="w-4 h-4 accent-red-600 cursor-pointer"
                    aria-label="Send me a copy of this message"
                  />
                  <label htmlFor="copy" className="text-gray-300 text-sm cursor-pointer">
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded transition-colors"
                  aria-label="Send message"
                  tabIndex={0}
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

