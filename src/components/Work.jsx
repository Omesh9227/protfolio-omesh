import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
      id='experience'
      className='py-20 bg-dark-100 relative'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='container mx-auto px-6'>

        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4 text-white'>
          Work <span className='text-purple'>Experience</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          My professional journey so far
        </p>

        {/* Timeline */}
        <div className='max-w-4xl mx-auto relative'>

          {/* Vertical Line */}
          <div className='absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-purple via-pink to-blue'></div>

          <div className='space-y-12'>
            {workData.map((data, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className='relative pl-12'
              >

                {/* Glow Dot */}
                <div className='absolute left-0 top-2 w-8 h-8 rounded-full bg-purple flex items-center justify-center shadow-lg shadow-purple/50'>
                  <div className='w-3 h-3 bg-white rounded-full'></div>
                </div>

                {/* Card */}
                <div className='bg-dark-300/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple/20 transition-all duration-300'>

                  {/* Header */}
                  <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-3'>
                    <h3 className='text-xl font-semibold text-white'>
                      {data.role}
                    </h3>

                    <span className='mt-2 md:mt-0 px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm w-fit'>
                      {data.duration}
                    </span>
                  </div>

                  {/* Company */}
                  <p className='text-gray-400 mb-3'>{data.company}</p>

                  {/* Description */}
                  <p className='text-gray-300 mb-5 leading-relaxed'>
                    {data.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <p className='text-sm text-purple mb-3'>Tech Stack</p>

                    <div className='flex flex-wrap gap-3'>
                      {data.tech.map((item, idx) => (
                        <span
                          key={idx}
                          className='px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-purple/20 to-pink/20 text-white border border-white/10 hover:scale-105 hover:shadow-md hover:shadow-purple/30 transition duration-300'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </motion.div>
  )
}

export default Work