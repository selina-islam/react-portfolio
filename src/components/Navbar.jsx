import React, { useState } from 'react'
import { IoMailSharp } from 'react-icons/io5'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <header className='flex justify-between items-center p-6 relative border-b border-gray-100'>

      {/* Left section: email icon and address (email hides when mobile menu opens) */}
      <div className='flex items-center gap-2'>
        <span className='p-1 bg-gray-700/90 rounded-full text-white'>
          <IoMailSharp />
        </span>
        <span className={`${isMenuOpen ? 'hidden' : 'block'}`}>
          hello@dev.com
        </span>
      </div>

      {/* Hamburger button for mobile menu */}
      <div className='md:hidden block z-50' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {/* Top line */}
        <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        {/* Middle line (hidden when open) */}
        <div className={`w-6 h-0.5 bg-gray-300 transition-all my-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        {/* Bottom line */}
        <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </div>

      {/* Desktop navigation menu (only shows on md and above) */}
      <nav className='hidden md:block'>
        <ul className='flex'>
          <li className='px-6'>
            <a href="#" className='text-gray-300 hover:text-white'>LinkedIn</a>
            <span className='ml-1'>/</span>
          </li>
          <li className='px-6'>
            <a href="#" className='text-gray-300 hover:text-white'>Dribble</a>
            <span className='ml-1'>/</span>
          </li>
          <li className='px-6'>
            <a href="#" className='text-gray-300 hover:text-white'>Instagram</a>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation menu (slides in from right on smaller screens) */}
      <nav className={`fixed w-72 md:hidden top-0 right-0 h-screen bg-black/95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex items-center z-40`}>
        <ul>
          <li>
            <a onClick={() => setIsMenuOpen(false)} href="#" className='text-gray-300 hover:text-white'>LinkedIn</a>
          </li>
          <li className='py-6'>
            <a onClick={() => setIsMenuOpen(false)} href="#" className='text-gray-300 hover:text-white'>Dribble</a>
          </li>
          <li>
            <a onClick={() => setIsMenuOpen(false)} href="#" className='text-gray-300 hover:text-white'>Instagram</a>
          </li>
        </ul>
      </nav>

      {/* Overlay behind mobile menu (click to close) */}
      {
        isMenuOpen && (
          <div className='fixed md:hidden inset-0 bg-black/80 z-30' onClick={() => setIsMenuOpen(false)}></div>
        )
      }

    </header>
  )
}

export default Navbar
