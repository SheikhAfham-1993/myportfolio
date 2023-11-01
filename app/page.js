'use client'

import Projects from './Projects/Projects'
import Certifications from './certifications/page'
import Me from './me/page'

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10">
      <Me />
      <Certifications />
      <Projects />
    </div>
  )
}
export default AboutMe
