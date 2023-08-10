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

const Techstack = () => {
  const techStack = [
    {
      id: Math.random(),
      component: <JavascriptLogo />,
      tippyContent: 'Javascript',
    },
    {
      id: Math.random(),
      component: <TypescriptLogo />,
      tippyContent: 'Typescript',
    },
    {
      id: Math.random(),
      component: <ReactLogo />,
      tippyContent: 'React.js',
    },
    {
      id: Math.random(),
      component: <NextLogo />,
      tippyContent: 'Next.js',
    },
    {
      id: Math.random(),
      component: <XamarinLogo />,
      tippyContent: 'Xamarin',
    },
    {
      id: Math.random(),
      component: <PythonLogo />,
      tippyContent: 'Python',
    },
    {
      id: Math.random(),
      component: <span className="text-3xl font-bold">C#</span>,
      tippyContent: 'C-Sharp',
    },
    {
      id: Math.random(),
      component: <SQLLogo />,
      tippyContent: 'SQL',
    },
    {
      id: Math.random(),
      component: <CypressLogo />,
      tippyContent: 'Cypress',
    },
    {
      id: Math.random(),
      component: <GithubLogo />,
      tippyContent: 'Github',
    },
  ]
  return (
    <div className="flex flex-col gap-y-4">
      <span className="text-3xl dark:text-gray-200 font-semibold">
        Tech-stack
      </span>
      <div className="flex flex-row flex-wrap w-full gap-6">
        {techStack.map((stack) => (
          <Tippy key={stack.id} content={stack.tippyContent} placement="bottom">
            <div className="cursor-pointer">{stack.component}</div>
          </Tippy>
        ))}
      </div>
    </div>
  )
}
export default Techstack
