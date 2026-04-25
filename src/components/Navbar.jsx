import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef()

  const toggleMenu = () => setShowMenu(!showMenu)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      
      {/* Top Bar */}
      <div className='container mx-auto flex justify-between items-center'>
        
        <a href="#home" className='text-3xl font-bold text-white'>
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
            <FaBars className='text-2xl cursor-pointer' />
          </button>
        </div>
      </div>
      
      {/* 🔥 Background Blur Overlay */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"></div>
       )}

      {/* Full Screen Mobile Menu */}
      {showMenu && (
        <div className='fixed inset-0 z-50 bg-gradient-to-b from-[#0f172a] to-black text-white'>

          {/* Header */}
          <div className='flex justify-between items-center p-6 border-b border-white/10'>
            <h2 className='text-xl font-semibold'>
              Omesh <span className='text-purple'>Mandavi</span>
            </h2>

            <FaXmark
              className='text-3xl cursor-pointer'
              onClick={() => setShowMenu(false)}
            />
          </div>

          {/* Menu Items */}
          <div
            ref={menuRef}
            className='flex flex-col px-6 py-8 space-y-6'
          >
            {['home','about','experience','certifications','achievements','projects','skills','contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setShowMenu(false)}
                className='flex justify-between items-center text-lg border-b border-white/10 pb-3 hover:text-purple transition'
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className='text-gray-400'>{'>'}</span>
              </a>
            ))}
          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar