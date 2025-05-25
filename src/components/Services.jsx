// Importing necessary modules and icons
import React from "react";
import { BiPencil } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbCode } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeInUp, transitions } from "../utils/Animation";

// List of service items to be displayed
const services = [
  {
    icon: <BiPencil className="2xl" />,
    title: "UX & UI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta!",
  },
  {
    icon: <BsPhone className="text-2xl" />,
    title: "Web & Mobile App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta!",
  },
  {
    icon: <MdOutlineDesignServices className="text-2xl" />,
    title: "Design & Creative",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta!",
  },
  {
    icon: <TbCode className="text-2xl" />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, soluta!",
  },
];

// Main component
const Services = () => {
  return (
    // Section container with padding and background color
    <section className="py-20 px-4 md:px-6 bg-[#0d0d0d]">
      {/* Header section with motion animation */}
      <motion.div
        variants={fadeInUp} // Animation variants from external file
        initial="initial" // Starting state
        animate="animate" // End state
        transition={{ ...transitions.default }} // Transition timing
        className="max-w-6xl mx-auto text-center mb-16"
      >
        {/* Section title with gradient text */}
        <h1 className="text-2x md:text-3xl mb-1 ">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
            Collaboration with brands
          </span>
          <span className="text-gray-500 md:text-[28px]"> and agencies</span>
        </h1>

        {/* Subtitle with gradient text */}
        <span className="md:text-[27px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 text-transparent bg-clip-text">
          to create impactful results.
        </span>
      </motion.div>

      {/* Grid layout for service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Looping through each service item */}
        {services.map((service, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeInUp} // Animate each card
              initial="initial"
              animate="animate"
              transition={{ ...transitions.default, delay: index * 0.2 }} // Add staggered delay
              className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              {/* Icon with background */}
              <div className="mb-4 inline-block p-3 bg-gray-800/50 rounded-md">
                {service.icon}
              </div>

              {/* Service title */}
              <h3 className="text-lg font-medium mb-2 text-white">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
