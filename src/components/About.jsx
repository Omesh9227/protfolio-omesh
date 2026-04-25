import React from 'react'
import { motion } from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-0 px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About 
                <span className='text-purple'> Me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know about my background and passion</p>

            {/* image + my journey */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* image */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, ease: 'easeOut'}}
                        viewport={{once: false, amount: 0.2}}
                        className='w-full h-full object-cover'
                        src={assets.profileImg} alt="Profile" />
                </div>
                {/* Text content */}
                <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.9, ease: 'easeOut'}}
                viewport={{once: false, amount:0.2}}
                className='md:w-1/2'
                >
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                        
                        <p className='text-gray-300 mb-6'>
                        I’m a Software Developer with a strong foundation in Data Structures & Algorithms and hands-on experience in building scalable web applications. I completed a 12-week Full Stack Product Engineering Bootcamp at Publicis Sapient, where I worked with modern technologies like React, Spring Boot, REST APIs, PostgreSQL, and Docker.
                        I enjoy solving complex problems and have a growing interest in system design, backend development, and real-world application architecture. I’m also exploring Artificial Intelligence, including Generative AI and Large Language Models, to build smarter and more intelligent applications.

                        </p>

                        <p className='text-gray-300 mb-12'>
                        Currently, I’m focused on developing production-ready projects using full-stack technologies (React, Node.js, MongoDB) and continuously improving my problem-solving skills to prepare for software engineering roles.
                        </p>

                        {/* Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data, index)=>(
                                    <div key={index} className='bg-dark-300 
                                        rounded-2xl p-6 transition-transform 
                                        duration-300 hover:-translate-y-2 
                                        cursor-pointer'>
                                            <div className='text-purple text-4xl 
                                            mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>   

                    </div>
                </motion.div>
            </div>
        </div>

    </motion.div>
  )
}

export default About