'use client'
import Techstack from './Techstack/Techstack'
import Projects from './Projects/Projects'
import Endrosments from './endorsments/page'
import CountUp from 'react-countup'
import Section from '@/components/SectionComp/Section'
import Footer from '@/components/Footer/Footer'

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center w-full px-5 sm:px-14">
        <div className="w-full grid grid-cols-1 md:flex md:flex-row max-w-4xl">
          <div className="text-2xl md:text-4xl text-gray-700 font-semibold ">
            <code>{'<Sheikh Afham Uddin/>'}</code>
          </div>
          <div className="flex-1 flex flex-row justify-start md:justify-end space-x-3 items-end">
            <code>Experience</code>
            <CountUp
              delay={0}
              start={0}
              end={5.5}
              decimals={1}
              decimal="."
              duration={4}
            >
              {({ countUpRef }) => (
                <div>
                  <code className="text-2xl" ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <code>years</code>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:flex md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3 max-w-4xl">
          <div className="flex-1 border border-gray-300 rounded-xl bg-gray-400/25 p-5">
            <div className="col-span-6">
              <div className="grid grid-cols-1 gap-y-2">
                <div className="text-lg text-gray-600">
                  <code>
                    Full-stack allrounder. Having hands-on experience in
                    Javascript languages i.e. React.js. In addition to this
                    years of experience in XAMARIN Cross-platform application
                    development and ASP.NET web application development
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 border border-gray-300 rounded-xl bg-gray-400/25 p-5">
            <Techstack />
          </div>
        </div>
      </Section>
      <Projects />
      <Endrosments />

      <Footer />
    </div>
  )
}
export default AboutMe
