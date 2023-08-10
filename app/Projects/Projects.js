import Image from 'next/image'
import React from 'react'

const Projects = () => {
  let projects = [
    {
      id: Math.random(),
      src: 'https://medien.tophotel.de/uploads/2023/07/KI_Assistenz_Hotelbewertungen.jpg.webp',
      title: 'Review reply assistant',
      rights: 'Mara solutions',
      description:
        'React 3x faster to every customer review with individual responses written by your personal AI assistant. Your review assistant speaks every language and works for all types of reviews. Simple copy and paste tool to respond directly in review platforms (e.g. Google, Booking, Tripadvisor, etc.) or in your favorite online reputation management platform.',
      link: 'https://www.mara-solutions.com/',
    },
  ]

  return (
    <div className="flex flex-col gap-y-4">
      <span className="text-3xl dark:text-gray-200 font-semibold">
        Projects
      </span>
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          className="w-full flex flex-col rounded-lg gap-y-3 hover:scale-105 transition duration-500"
        >
          <div className="flex-1">
            <img
              alt=""
              src={project.src}
              className="object-cover rounded-t-lg w-full h-60 "
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="text-2xl dark:text-gray-300 text-gray-600 font-semibold">
              {project.title}
            </div>
            <div className="text-md dark:text-gray-300 text-gray-600">
              {project.description}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
export default Projects
