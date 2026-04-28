import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className='relative group bg-dark-300 rounded-2xl overflow-hidden shadow-lg'
    >

      {/* Image */}
      <div className='relative overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-60 object-cover transform group-hover:scale-110 transition duration-500'
        />

        {/* 🔥 Desktop Overlay ONLY */}
        <div className='hidden md:flex absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500 items-center justify-center gap-4'>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 px-4 py-2 bg-purple text-white rounded-lg hover:bg-purple-700 transition'
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}

          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition'
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300 hover:bg-purple hover:text-white transition'
            >
              {item}
            </span>
          ))}
        </div>

        {/* 🔥 Mobile Buttons ONLY */}
        <div className='flex gap-3 md:hidden'>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className='flex-1 text-center px-4 py-2 bg-purple text-white rounded-lg'
            >
              Live
            </a>
          )}

          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className='flex-1 text-center px-4 py-2 border border-white text-white rounded-lg'
            >
              Code
            </a>
          )}
        </div>
      </div>

    </motion.div>
  )
}

export default ProjectCard