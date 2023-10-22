'use client'
import Techstack from './Techstack/Techstack'
import Projects from './Projects/Projects'
import Endrosments from './endorsments/page'
import CountUp from 'react-countup'
import Section from '@/components/SectionComp/Section'
import Footer from '@/components/Footer/Footer'
import Me from './me/page'

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10">
      <Me />
      <Projects />
    </div>
  )
}
export default AboutMe
