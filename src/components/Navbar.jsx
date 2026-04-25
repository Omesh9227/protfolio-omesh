import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  // 👇 NEW: ref for menu
  const menuRef = useRef()

  // 👇 NEW: toggle function
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  // 👇 NEW: close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>

        {/* Logo */}
        <a href="#home" className='text-3xl font-bold text-white flex items-center gap-1'>
          Omesh <span className='text-purple'>Mandavi</span>
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
          <button onClick={toggleMenu}>
            {showMenu ? (
              <FaXmark className='text-2xl cursor-pointer' />
            ) : (
              <FaBars className='text-2xl cursor-pointer' />
            )}
          </button>
        </div>
      </div>

      {/* 👇 NEW: overlay (click outside) */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef} // 👈 attach ref here
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-dark-300 p-6 flex flex-col space-y-6 text-center z-50 transform transition-transform duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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
    </nav>
  )
}

export default Navbar