import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, namTagAnimation, transitions } from '../utils/Animation'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[70vh] text-center'>

      {/* Profile image section with gradient and animated name tag */}
      <div className='relative'>
        <div className='relative mb-4'>

          {/* Blurred gradient circle behind the profile image */}
          <div className='absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-xl'></div>

          {/* Static profile image */}
          <div>
            <img
              src="/profile.avif"
              alt="Profile image"
              className='w-32 h-32 rounded-full relative z-10'
            />
          </div>

          {/* Floating name tag with shadow and white background */}
          <motion.div
            initial={namTagAnimation.initial}
            animate={namTagAnimation.animate}
            transition={namTagAnimation.transitions}
            style={{transformOrigin:'center center'}}
            className='absolute -top-0 -right-28 bg-white text-black px-4 py-2 rounded-full shadow-lg -rotate-3 z-20'>
            <p className='text-sm font-medium'>Kawsar Ahmed 👋</p>
          </motion.div>

        </div>
      </div>

      {/* Heading / Title with gradient text effect and responsive sizes */}
      <motion.h1
        variants={fadeInUp}
        initial='initial'
        animate='animate'
        transition={{...transitions.default, delay:0.4}}
        className='md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl'>
        {/* Line 1 gradient text */}
        <span className='bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 text-transparent bg-clip-text'>
          Lorem ipsum
        </span>
        <br />
        {/* Line 2 gradient text */}
        <span className='bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text'>
          dolor sit amet hiek
        </span>
        <br />
        {/* Line 3 gradient text */}
        <span className='bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-transparent bg-clip-text'>
          consectetur.
        </span>
      </motion.h1>

      {/* CTA Button: styled with hover effect */}
      <motion.button
        variants={fadeInUp}
        initial='initial'
        animate='animate'
        transition={{ ...transitions.default, delay: 0.6 }}
        className='mt-8 py-4 px-12 border cursor-pointer border-gray-600 text-gray-600 bg-[#1A1A1A] hover:border-gray-400 rounded-full hover:text-white'>
        Latest Shots
      </motion.button>

    </div>
  )
}

export default Hero
