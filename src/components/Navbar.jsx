import React, { useState } from 'react'
import { IoMailSharp } from 'react-icons/io5'

const Navbar = () => {
  // State for toggling the mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Navbar container with bottom border
    <header className='border-b border-gray-100'>

      {/* Main content wrapper */}
      <div className='max-w-7xl mx-auto flex justify-between items-center p-6 relative'>

        {/* === Left section: Email icon and text === */}
        <div className='flex items-center gap-2'>
          {/* Email icon inside a circle */}
          <span className='p-1 bg-gray-700/90 rounded-full text-white'>
            <IoMailSharp />
          </span>
          {/* Email text (hidden when mobile menu is open) */}
          <span className={`${isMenuOpen ? 'hidden' : 'block'}`}>
            hello@dev.com
          </span>
        </div>

        {/* === Hamburger icon for mobile menu === */}
        <div
          className='md:hidden block z-50'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Top bar (rotates when open) */}
          <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          {/* Middle bar (hides when open) */}
          <div className={`w-6 h-0.5 bg-gray-300 transition-all my-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          {/* Bottom bar (rotates when open) */}
          <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>

        {/* === Desktop navigation menu (only shows on md and above) === */}
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

        {/* === Mobile navigation menu (slides in from the right) === */}
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

        {/* === Dark overlay behind the mobile menu (click to close) === */}
        {
          isMenuOpen && (
            <div
              className='fixed md:hidden inset-0 bg-black/80 z-30'
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )
        }
      </div>
    </header>
  )
}

export default Navbar
