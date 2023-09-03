'use client'
import Techstack from './Techstack/Techstack'
import Projects from './Projects/Projects'
import Endrosments from './endorsments/page'
import CountUp from 'react-countup'

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row px-6">
        <div className="text-4xl text-gray-700 font-semibold ">
          <code>{'<Sheikh Afham Uddin/>'}</code>
        </div>
        <div className="flex-1 flex flex-row justify-end space-x-3 items-center">
          <code>Experience</code>
          <CountUp start={0} end={4.5} decimals={1} decimal="." duration={4}>
            {({ countUpRef }) => (
              <div className="text-xl">
                <code ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <code>years</code>
        </div>
      </div>

      <section className="border-b border-dashed border-gray-800 py-5 px-6">
        <div className="grid grid-cols-1 md:flex md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
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
      </section>
      <Projects />
      <Endrosments />
    </div>
  )
}
export default AboutMe
