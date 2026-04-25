import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {

  const items = [
    "Microservices",
    "Generative AI",
    "Full Stack Apps",
    "System Design",
    "AWS"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      viewport={{once: true}}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

        {/* LEFT CODE CARD */}
        <div className='md:w-1/2 flex justify-center mb-10 md:mb-0'>
          <div className='bg-[#0f172a] text-white rounded-2xl shadow-xl p-6 w-full max-w-md'>

            <div className='flex space-x-2 mb-4'>
              <span className='w-3 h-3 bg-red-500 rounded-full'></span>
              <span className='w-3 h-3 bg-yellow-400 rounded-full'></span>
              <span className='w-3 h-3 bg-green-500 rounded-full'></span>
            </div>

            <pre className='text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words'>
              <code>
                <span className='text-gray-400'>const</span>{' '}
                <span className='text-blue-400'>developer</span> = {'{'}
                <br />

                &nbsp;&nbsp;<span className='text-gray-400'>name:</span>{' '}
                <span className='text-green-400'>'Omesh Mandavi'</span>,
                <br />

                &nbsp;&nbsp;<span className='text-gray-400'>Profession:</span>{' '}
                <span className='text-green-400'>'Software Engineer'</span>,
                <br />

                {/* &nbsp;&nbsp;<span className='text-gray-400'>currentlyWorkingOn:</span> [
                <span className='text-yellow-400'>'Microservices'</span>,{' '}
                <span className='text-yellow-400'>'Generative AI'</span>,{' '}
                <span className='text-yellow-400'>'Full Stack Apps'</span>
                ],
                <br /> */}

                {/* &nbsp;&nbsp;<span className='text-gray-400'>currentlyWorkingOn:</span> [
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-yellow-400'>'Microservices'</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-yellow-400'>'Generative AI'</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-yellow-400'>'Full Stack Apps'</span>
                <br />
                &nbsp;&nbsp;],
                <br /> */}

                &nbsp;&nbsp;<span className='text-gray-400'>currentlyWorkingOn:</span> [
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className='text-yellow-400 transition-all duration-500'>
                  '{items[currentIndex]}'
                </span>
                <span className="text-yellow-400 animate-pulse">|</span>
                <br />
                &nbsp;&nbsp;],
                <br />

                {/* &nbsp;&nbsp;<span className='text-gray-400'>learning:</span> [
                <span className='text-yellow-400'>'System Design'</span>,{' '}
                <span className='text-yellow-400'>'AWS'</span>
                ],
                <br /> */}

                &nbsp;&nbsp;<span className='text-gray-400'>isAvailable:</span>{' '}
                <span className='text-blue-400'>true</span>
                <br />

                {'}'}
              </code>
            </pre>

          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className='md:w-1/2'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='text-purple'>Omesh Mandavi</span>
          </h1>

          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
            Full Stack Developer
          </h2>

          <p className='text-lg text-gray-300 mb-8'>
            I build scalable backend systems and modern web applications with clean, efficient code. 
            Currently working on cloud-native microservices and exploring opportunities to solve high-impact engineering problems.
          </p>

          <div className='flex space-x-4'>
            <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>
              View Work
            </a>

            <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero