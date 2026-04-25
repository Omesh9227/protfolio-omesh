import React from 'react'
import { motion } from 'framer-motion'
import { achievements } from '../assets/assets'
import AchievementCard from './AchievementCard'

const Achievements = () => {
  return (
    <motion.div
      id="achievements"
      className="py-20 bg-dark-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          My <span className="text-purple">Achievements</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Highlights of my journey and accomplishments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={index} item={item} />
          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default Achievements