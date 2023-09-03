import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
      bgColor: 'bg-[#000066]/20',
      stack:
        'React.js, Next.js, TailwindCSS, Reactable, Apexcharts, Pusher, Next-Authentication',
    },
    {
      id: Math.random(),
      src: 'https://softronicsys.com/wp-content/uploads/2023/03/softonic.png',
      title: 'ESS Portal Mobile',
      rights: 'Softronic systems',
      description:
        'People.Partners mobile app acts as an extension to the unique HR and Payroll System, People.Partners (Human Capital Management System).',
      link: 'https://people.partners/',
      bgColor: 'bg-white',
      stack: '',
    },
  ]

  return (
    <div className="flex flex-col gap-y-4">
      <span className="text-3xl text-gray-200 font-semibold">Projects</span>
      <div className="flex flex-col gap-y-10">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            className="w-full flex flex-col rounded-lg gap-y-3 hover:scale-105 duration-500"
          >
            <div
              className={`flex justify-center flex-1 ${project.bgColor} py-10 rounded-t-lg`}
            >
              <img
                alt=""
                src={project.src}
                className="object-cover rounded-t-lg w-[260px] h-14"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-y-3">
              <div className="flex flex-col justify-start gap-y-2">
                <span className="text-2xl text-gray-300 font-semibold">
                  {project.title}
                </span>

                <div className="text-md text-gray-300">
                  {project.description}
                </div>
              </div>

              <div className="flex flex-col justify-start gap-y-2">
                <span className="text-2xl text-gray-300 font-semibold">
                  Technologies
                </span>
                <span className="text-sm text-gray-300">{project.stack}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Projects
