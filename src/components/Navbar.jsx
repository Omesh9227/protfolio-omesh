import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>

        {/* Logo */}
        <a href="#home" className='text-3xl font-bold text-white flex items-center gap-1'>
          Omesh <span className='text-purple'>Mandavi</span>
          {/* <div className='w-4 h-4 bg-purple rounded-full'></div> */}
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-10'>
          {['home','about','skills','projects','experience','certifications','achievements','contact'].map((item) => (
            <a key={item} href={`#${item}`} className='text-white/80 hover:text-purple'>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Icon */}
        <div className='md:hidden text-white'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer' />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} className='text-2xl cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='md:hidden bg-dark-300 p-6 flex flex-col space-y-6 text-center'>
          {['home','about','skills','projects','experience','certifications','achievements','contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setShowMenu(false)}
              className='text-white text-lg hover:text-purple'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar