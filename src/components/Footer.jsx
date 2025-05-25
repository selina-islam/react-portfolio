import React from 'react'
import { motion } from "framer-motion"
import { fadeInUp, transitions } from '../utils/Animation'

const Footer = () => {
  return (
    // Animated footer using Framer Motion
    <motion.footer
      variants={fadeInUp} // Apply fade-in animation variant
      initial="initial" // Initial animation state
      animate="animate" // Final animation state
      transition={{ ...transitions.default, delay: 0.4 }} // Transition settings with delay
      className='py-8 px-4 md:px-6 border-t border-gray-800/50 bg-black' // Footer styling
    >

      {/* Footer content wrapper */}
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm'>

        {/* Left side: copyright text */}
        <p>©2025 All rights reserved.</p>

        {/* Right side: social links */}
        <div className='flex gap-4 mt-4 md:top-0'>
          <a href="#" className='hover:text-white transition-colors'>LinkedIn</a>
          <span></span> {/* Can be used for spacing or separator if needed */}
          <a href="#" className='hover:text-white transition-colors'>Dribble</a>
          <span></span>
          <a href="#" className='hover:text-white transition-colors'>Instagram</a>
          <span></span>
        </div>

      </div>
    </motion.footer>
  )
}

export default Footer
