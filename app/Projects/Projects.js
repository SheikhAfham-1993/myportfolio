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
      subtext: '',
      rights: 'Mara solutions',
      description:
        'React 3x faster to every customer review with individual responses written by your personal AI assistant. Your review assistant speaks every language and works for all types of reviews.',
      link: 'https://www.mara-solutions.com/',
      bgColor: 'bg-[#000066]',
      stack:
        'React.js, Next.js, TailwindCSS, Reactable, Apexcharts, Pusher, Next-Authentication',
    },
    {
      id: Math.random(),
      src: 'https://softronicsys.com/wp-content/uploads/2023/03/softonic.png',
      title: 'ESS Portal ',
      subtext: '(Intra-company product)',
      rights: 'Softronic systems',
      description:
        'People.Partners mobile app acts as an extension to the unique HR and Payroll System, People.Partners (Human Capital Management System).',
      link: 'https://people.partners/',
      bgColor: 'bg-gray-200',
      stack:
        "ASP.NET, Xamarin.Forms, Xamarin.Android, SQL SERVER, Team Foundation Server, Web-services & Web API's",
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
              className="w-full flex-1 flex flex-col rounded-lg gap-y-3 hover:scale-105 duration-500"
            >
              <div
                className={`flex justify-center flex-none ${project.bgColor} py-8 rounded-t-lg h-28`}
              >
                <img
                  alt=""
                  src={project.src}
                  className={`object-contain rounded-t-lg w-[260px]`}
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-y-3">
                <div className="flex flex-col justify-start gap-y-2">
                  <code className="text-2xl text-gray-700 font-semibold">
                    {project.title}
                    <code className="text-sm md:text-base">
                      {project.subtext}
                    </code>
                  </code>

                  <code className="text-md text-gray-600">
                    {project.description}
                  </code>
                </div>

                <div className="flex flex-col justify-start gap-y-2">
                  <code className="text-2xl text-gray-700 font-semibold">
                    Technologies
                  </code>
                  <code className="text-md text-gray-600">{project.stack}</code>
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
