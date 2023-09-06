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
    <div className="flex flex-col gap-y-2">
      <code className="text-2xl text-gray-700 font-semibold">Tech-stack</code>
      <ul className="list-disc px-5">
        {techStack.map((stack) => (
          <li key={stack.id} className="cursor-pointer text-lg font-normal">
            <code>{stack.tippyContent}</code>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Techstack
