import React from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../assets/assets'
import CertificationCard from './CertificationCard'

const Certifications = () => {
  return (
    <motion.div
      id="certifications"
      className="py-20 bg-dark-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          My <span className="text-purple">Certifications</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Certifications that validate my technical expertise
        </p>

        {/* ✅ GRID LIKE ACHIEVEMENTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default Certifications