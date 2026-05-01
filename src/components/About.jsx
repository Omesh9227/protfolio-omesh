import React from 'react'
import { motion } from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>

        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple'>Me</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know about my background and passion
        </p>

        {/* image + content */}
        <div className='flex flex-col md:flex-row items-center gap-12'>

          {/* IMAGE */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full h-full object-cover'
              src={assets.profileImg}
              alt="Profile"
            />
          </div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'
          >
            <div className='rounded-2xl p-8'>

              <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>

              {/* 🎓 EDUCATION HIGHLIGHT */}
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple/20 to-blue/20 border border-purple/30 shadow-lg hover:shadow-purple/30 transition duration-300">
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  🎓 B.Tech – Computer Science Engineering
                </h3>

                <p className="text-purple text-lg font-medium">
                  National Institute of Technology, Raipur
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  2021 – 2025
                </p>

              </div>

              {/* TEXT */}
                <p className='text-gray-300 mb-6'>
                I’m a Software Developer with a strong foundation in Data Structures & Algorithms and experience building scalable web applications. I’ve worked with React, Spring Boot, REST APIs, PostgreSQL, and Docker, and completed training at Publicis Sapient. I enjoy solving complex problems and currently focus on backend development, system design, and Generative AI.
                </p>

                <p className='text-gray-300 mb-12'>
                I’m focused on building production-ready full-stack applications and continuously improving my problem-solving skills to prepare for software engineering roles.
                </p>

              {/* CARDS */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-purple/20'
                  >
                    <div className='text-purple text-4xl mb-4'>
                      <data.icon />
                    </div>
                    <h3 className='text-xl font-semibold mb-3 text-white'>
                      {data.title}
                    </h3>
                    <p className='text-gray-400'>
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default About