// Importing necessary modules and icons
import React from "react";
import { LuHandshake } from "react-icons/lu"; // Handshake icon from react-icons
import { motion } from "framer-motion"; // Animation library
import { fadeInUp, transitions } from "../utils/Animation"; // Custom animation settings

// Contact section component
const Contact = () => {
  return (
    // Section with vertical padding and background color
    <section className="py-32 px-4 md:px-4 bg-[#0f0f0f]/80">
      {/* Main container with animation */}
      <motion.div
        variants={fadeInUp} // Animation variant
        initial="initial" // Start state
        animate="animate" // End state
        transition={{ ...transitions.default, delay: 0.2 }} // Animation delay
        className="max-w-6xl mx-auto text-center"
      >
        {/* Icon inside a circular background */}
        <div className="w-16 h-16 mb-8 bg-gray-900 rounded-full flex items-center mx-auto justify-center">
          <LuHandshake className="text-5xl text-gray-400" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12">
          {/* Gradient-colored text */}
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
            Tell me about your last{" "}
          </span>
          <br className="md:block hidden" />{" "}
          {/* Line break only on medium+ devices */}
          <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 text-transparent bg-clip-text">
            project
          </span>
        </h2>

        {/* Buttons section with animation */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...transitions.default, delay: 0.3 }} // Delayed appearance
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {/* Email button */}
          <a
            href="mailto: digitalselina@gmail.com" 
            target="_blank"
            className="inline-flex items-center px-12 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Email
          </a>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/01780271425" // Link to WhatsApp chat
            target="_blank"
            className="inline-flex items-center px-8 py-3 border border-gray-700 text-white rounded-full font-medium hover:border-gray-600 transition-colors"
          >
            WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
