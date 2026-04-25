import React from 'react'
import { FaTrophy, FaCode, FaBrain } from 'react-icons/fa'

const iconMap = {
  trophy: FaTrophy,
  code: FaCode,
  brain: FaBrain
}

const AchievementCard = ({ item }) => {
  const Icon = iconMap[item.icon]

  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-purple/20 transition duration-300">

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple/10 text-purple text-xl">
          <Icon />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {item.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {item.issuer}
          </p>
        </div>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-400 mb-3">
        {item.date}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">
        {item.description}
      </p>

    </div>
  )
}

export default AchievementCard