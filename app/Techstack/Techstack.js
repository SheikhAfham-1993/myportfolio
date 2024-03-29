'use client'
import ReactLogo from '@/components/svgs/ReactLogo'
import NextLogo from '@/components/svgs/NextLogo'
import React from 'react'
import XamarinLogo from '@/components/svgs/XamarinLogo'
import PythonLogo from '@/components/svgs/PythonLogo'
import SQLLogo from '@/components/svgs/SQLLogo'
import CypressLogo from '@/components/svgs/CypressLogo'
import GithubLogo from '@/components/svgs/GithubLogo'
import JavascriptLogo from '@/components/svgs/JavascriptLogo'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import TypescriptLogo from '@/components/svgs/TypescriptLogo'
import TailwindLogo from '@/components/svgs/TailwindLogo'
import StoryBookLogo from '@/components/svgs/Storybook'
import DockerLogo from '@/components/svgs/DockerLogo'

const Techstack = () => {
  const techStack = [
    {
      icon: <JavascriptLogo />,
      title: 'Javascript',
    },
    {
      icon: <TypescriptLogo />,
      title: 'Typescript',
    },
    {
      icon: <ReactLogo />,
      title: 'React',
    },
    {
      icon: <NextLogo />,
      title: 'Next.js',
    },
    {
      icon: <CypressLogo />,
      title: 'Cypress',
    },
    {
      icon: <StoryBookLogo />,
      title: 'Storybook',
    },
    {
      icon: <GithubLogo />,
      title: 'Github',
    },
    {
      icon: <TailwindLogo />,
      title: 'Tailwind',
    },
    {
      icon: <XamarinLogo />,
      title: 'Xamarin',
    },
    {
      icon: <PythonLogo />,
      title: 'Python',
    },
    {
      icon: <SQLLogo />,
      title: 'SQL',
    },
    {
      icon: <DockerLogo />,
      title: 'Docker',
    },
    {
      icon: null,
      title: 'React-query',
    },
  ]
  return (
    <div className="grid grid-cols-1 border border-blue-200 rounded-lg bg-gray-950 p-5 max-w-5xl">
      <div className="flex flex-col justify-start gap-y-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="flex-none bg-gray-800 flex flex-row items-center px-3 py-2 rounded-lg"
            >
              {stack.icon || null}
              <span className="ml-2 text-sm text">{stack.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Techstack
