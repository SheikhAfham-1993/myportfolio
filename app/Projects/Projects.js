import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Projects = () => {
  let projects = [
    {
      id: Math.random(),
      img: '/Mara.png',
      title: 'Review reply assistant',
      rights: 'Mara solutions',
      description:
        'React 3x faster to every customer review with individual responses written by your personal AI assistant. Simple copy and paste tool to respond directly in review platforms (e.g. Google, Booking, Tripadvisor, etc.) or in your favorite online reputation management platform.',
      link: 'https://www.mara-solutions.com/',
      bgColor: 'bg-[#000066]',
      stack:
        'React.js, Next.js, TailwindCSS, Reactable, Apexcharts, Pusher, Next-Authentication',
    },
    {
      id: Math.random(),
      img: '/softronic.png',
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
    <div className="flex flex-col space-y-8 h-screen">
      <span className="text-6xl text">{'Projects'}</span>
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          target="_blank"
          className="w-full flex flex-col rounded-lg mt-5"
        >
          <div className="flex flex-row h-fit gap-x-8">
            <Image
              className="rounded-lg object-fill h-[250px]"
              src={project.img}
              alt={project.title}
              width={400}
              height={150}
            ></Image>
            <div className="flex flex-col justify-start">
              <span className="text-3xl text">{project.title}</span>
              <span className="text-lg text"> {project.description}</span>

              <div className="flex flex-col justify-start gap-y-2">
                <span className="text-2xl  font-semibold text">
                  Technologies
                </span>
                <span className="text-lg  text">{project.stack}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <div className="grid grid-cols-1 md:flex md:flex-row md:flex-wrap gap-y-10 md:gap-y-4 md:gap-x-10 opacity-0">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            className="w-full flex-1 flex flex-col rounded-lg gap-y-3"
          >
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
  )
}
export default Projects
