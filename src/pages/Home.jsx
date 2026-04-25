import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Certifications from '../components/Certifications'
import Achievements from '../components/Achievements'
import CodingProfiles from '../components/CodingProfiles'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Work />
        <Certifications />
        <Achievements />
        <Contact />
    </div>
  )
}

export default Home