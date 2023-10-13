import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Section from '@/components/SectionComp/Section'
const Projects = () => {
  let projects = [
    {
      id: Math.random(),
      src: 'https://uploads-ssl.webflow.com/62b1b17308b0d7fa12186301/62b1fdbf138e8a086799edb8_MARA_in%20line_white.svg',
      title: 'Review reply assistant',
      rights: 'Mara solutions',
      description:
        'React 3x faster to every customer review with individual responses written by your personal AI assistant. Your review assistant speaks every language and works for all types of reviews. Simple copy and paste tool to respond directly in review platforms (e.g. Google, Booking, Tripadvisor, etc.) or in your favorite online reputation management platform.',
      link: 'https://www.mara-solutions.com/',
      bgColor: 'bg-[#000066]',
      stack:
        'React.js, Next.js, TailwindCSS, Reactable, Apexcharts, Pusher, Next-Authentication',
    },
    {
      id: Math.random(),
      src: 'https://softronicsys.com/wp-content/uploads/2023/03/softonic.png',
      title: 'People.Partners',
      rights: 'Softronic systems',
      description:
        'People.Partners is a comprehensive HR and payroll software solution designed to automate and simplify all aspects of HR management. With customizable features and integrations, People.Partners offers a seamless and efficient HR management experience, allowing you to focus on growing your business.',
      link: 'https://people.partners/',
      bgColor: 'bg-gray-200',
      stack:
        "ASP.NET, Xamarin & Android, SQL SERVER, Team Foundation Server, Web-services & Web API's",
    },
  ]

  return (
    <Section>
      <div className="flex flex-col gap-y-6 max-w-4xl">
        <code className="text-2xl md:text-4xl text-gray-700 font-semibold">
          {'<Projects />'}
        </code>
        <div className="grid grid-cols-1 md:flex md:flex-row md:flex-wrap gap-y-10 md:gap-y-4 md:gap-x-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              className="w-full flex-1 flex flex-col rounded-lg gap-y-3"
            >
              {/* <div
                className={`flex justify-center flex-none ${project.bgColor} py-8 rounded-t-lg h-28`}
              >
                <img
                  alt=""
                  src={project.src}
                  className={`object-contain rounded-t-lg w-[260px]`}
                />
              </div> */}
              <div className="flex flex-col items-start justify-start gap-y-3">
                <div className="flex flex-col justify-start gap-y-2">
                  <code className="text-3xl text-gray-700 font-semibold">
                    {project.title}
                  </code>

                  <code className="text-lg text-gray-600">
                    {project.description}
                  </code>
                </div>

                <div className="flex flex-col justify-start gap-y-2">
                  <code className="text-2xl text-gray-700 font-semibold">
                    Technologies
                  </code>
                  <code className="text-lg text-gray-600">{project.stack}</code>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
export default Projects
