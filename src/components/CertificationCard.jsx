import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-purple/20 transition duration-300">

      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 text-xl">
            <FaAward />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* External Link */}
        <a href={cert.link} target="_blank" rel="noreferrer">
          <FiExternalLink className="text-gray-400 hover:text-white" />
        </a>
      </div>

      {/* Date + Code */}
      <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
        <span>{cert.date}</span>
        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs">
          {cert.code}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">
        {cert.description}
      </p>

    </div>
  )
}

export default CertificationCard