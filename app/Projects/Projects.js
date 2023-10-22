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
    <div className="flex flex-col space-y-5 md:space-y-8 h-screen">
      <span className="text-3xl md:text-6xl text">{'Projects'}</span>
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          target="_blank"
          className="w-full flex flex-col rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-fit gap-x-8 border-2 border-blue-200 p-3 bg-gray-950 rounded-xl">
            <Image
              className="rounded-lg object-fill w-full h-[200px] md:h-[240px]"
              src={project.img}
              alt={project.title}
              width={400}
              height={150}
            ></Image>
            <div className="flex flex-col justify-start mt-5 md:mt-0">
              <span className="text-2xl text">{project.title}</span>
              <span className="text-base text"> {project.description}</span>

              <div className="flex flex-col justify-start gap-y-1 mt-2">
                <span className="text-2xl  font-semibold text">
                  Technologies
                </span>
                <span className="text-base text">{project.stack}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <span className="text-white text-lg">More coming soon...</span>
    </div>
  )
}
export default Projects
