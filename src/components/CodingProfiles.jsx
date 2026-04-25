import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy } from 'react-icons/fa'
import { SiCodechef } from 'react-icons/si'

const CodingProfiles = () => {
  return (
    <motion.div
      id="coding"
      className="py-20 bg-dark-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Competitive <span className="text-purple">Coding</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          My coding journey across platforms
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* ================= LEETCODE ================= */}
          <a 
            href="https://leetcode.com/Omesh_0112/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-300 rounded-2xl p-8 hover:scale-105 hover:shadow-purple-500/20 transition duration-300 shadow-xl block"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaTrophy className="text-yellow-400 text-3xl" />
              <h3 className="text-xl font-semibold">LeetCode</h3>
            </div>

            <p className="text-3xl text-purple font-bold">1914</p>
            <p className="text-green-400 mb-6">Knight 🛡️</p>

            <p className="text-gray-400 mb-4">1057+ Problems Solved</p>

            {/* Bars */}
            <div className="space-y-3 text-sm">
              <div>
                Easy
                <div className="bg-dark-400 h-2 rounded mt-1">
                  <div className="bg-green-400 h-2 w-[35%] rounded"></div>
                </div>
              </div>

              <div>
                Medium
                <div className="bg-dark-400 h-2 rounded mt-1">
                  <div className="bg-yellow-400 h-2 w-[55%] rounded"></div>
                </div>
              </div>

              <div>
                Hard
                <div className="bg-dark-400 h-2 rounded mt-1">
                  <div className="bg-red-400 h-2 w-[15%] rounded"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-gray-400 text-sm flex justify-between items-center">
              <span>Top 4%</span>
              <span>Badges: 17</span>
            </div>

            {/* CTA */}
            <p className="mt-4 text-purple text-sm">View Profile ↗</p>
          </a>

          {/* ================= CODECHEF ================= */}
          <a 
            href="https://www.codechef.com/users/goforit07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-300 rounded-2xl p-8 hover:scale-105 hover:shadow-purple-500/20 transition duration-300 shadow-xl block"
          >
            <div className="flex items-center gap-4 mb-6">
              <SiCodechef className="text-orange-400 text-3xl" />
              <h3 className="text-xl font-semibold">CodeChef</h3>
            </div>

            <p className="text-3xl text-purple font-bold">1650+</p>
            <p className="text-yellow-400 mb-6">3★ Rated</p>

            <p className="text-gray-400 mb-4">
              Global Rank: 239 / 3500+
            </p>

            {/* Rating Bar */}
            <div className="bg-dark-400 h-2 rounded mt-2 mb-4">
              <div className="bg-blue-400 h-2 w-[65%] rounded"></div>
            </div>

            <div className="text-gray-400 text-sm space-y-2">
              <p>Highest Rating: 1681</p>
              <p>Division: Div 2</p>
              <p>Contests: 15+</p>
            </div>

            <div className="mt-6 text-gray-400 text-sm flex justify-between items-center">
              <span>Consistent Performer</span>
              <span>⭐ ⭐ ⭐</span>
            </div>

            {/* CTA */}
            <p className="mt-4 text-purple text-sm">View Profile ↗</p>
          </a>

        </div>

      </div>
    </motion.div>
  )
}

export default CodingProfiles