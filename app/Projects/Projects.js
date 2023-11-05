import GithubLogo from '@/components/svgs/GithubLogo'
import MaraLogo from '@/components/svgs/MaraLogo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Projects = () => {
  let projects = [
    {
      id: Math.random(),
      img: <MaraLogo className="h-36 w-36" />,
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
      img: <GithubLogo className="h-32 w-32" />,
      title: 'Github Explorer',
      rights: 'Softronic systems',
      description:
        'Small application to search for public repositories on Github. The application uses the Github GraphQL API to fetch data from Github. The application also allows users to explore and filter repositories by language, stars, and more.',
      link: 'https://people.partners/',
      bgColor: 'bg-gray-200',
      stack:
        'React.js, Next.js, TailwindCSS, Github GraphQL, Storybook, Cypress',
    },
    {
      id: Math.random(),
      img: (
        <span className="h-32 italic font-semibold text-white text-2xl py-10">
          Softronic Systems
        </span>
      ),
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
      <span className="text-3xl md:text-4xl text">{'Projects'}</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            className="w-full flex flex-col rounded-lg"
          >
            <div className="grid grid-cols-1 h-[250px] p-3 gap-y-2 bg-gray-950 rounded-xl">
              <div className="flex justify-center items-center">
                {project.img}
              </div>

              {/* <Image
                className="rounded-lg object-cover md:object-fill w-full h-[180px]"
                src={project.img}
                alt={project.title}
                width={400}
                height={150}
              ></Image> */}
              <div className="flex flex-col justify-start space-y-2">
                <span className="text-xl text">{project.title}</span>
                <span className="text-sm text">{project.stack}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <span className="text-white text-lg">More coming soon...</span>
    </div>
  )
}
export default Projects
