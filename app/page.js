import Hobbies from '@/components/aboutme/Hobbies'
import Origins from '@/components/aboutme/Origins'
import DefaultLayout from '@/defaultlayout/DefaultLayout'
import Image from 'next/image'
import Techstack from './Techstack/Techstack'
import Projects from './Projects/Projects'

const AboutMe = () => {
  return (
    <DefaultLayout>
      <div className="w-fit max-w-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 place-items-center border border-gray-300 rounded-xl p-5 bg-gray-300/25 dark:bg-gray-400/25 gap-y-4 lg:gap-y-0">
          <div className="col-span-6">
            <div className="grid grid-cols-1 gap-y-2">
              <div className="text-2xl lg:text-4xl text-black dark:text-gray-200 font-semibold">
                <code>{'<Sheikh Afham Uddin/>'}</code>
              </div>
              <div className="text-lg text-black dark:text-gray-300">
                <code>
                  Full-stack allrounder. Having hands-on experience in
                  Javascript languages i.e. React.js. In addition to this years
                  of experience in XAMARIN Cross-platform application
                  development and ASP.NET web application development
                </code>
              </div>
            </div>
          </div>
        </div>
        <Techstack />
        <Projects />
      </div>
    </DefaultLayout>
  )
}
export default AboutMe
