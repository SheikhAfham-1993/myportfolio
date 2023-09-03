'use client' // This is a client component

import React, { useState } from 'react'
import Mara from '@/components/Professional/Mara'
import Softronic from '@/components/Professional/Softronic'
import { classNames } from '@/lib/functions'

const Professional = () => {
  const [activeTab, setActiveTab] = useState('#Mara')
  const [tabs, setTabs] = useState([
    {
      name: 'Mara',
      href: '#Mara',
      current: true,
    },
    {
      name: 'Softronic',
      href: '#Softronic',
      current: false,
    },
  ])

  const switchTab = (e) => {
    try {
      setTabs(
        tabs.map((tab) => {
          if (tab.href == e) {
            tab.current = true
          } else {
            tab.current = false
          }
          return tab
        })
      )

      setActiveTab(e)
    } catch (e) {
      // console.log(e)
    }
  }

  const returnAnchorTag = (tab) => {
    return (
      <a
        key={tab.name}
        href={tab.href}
        onClick={() => switchTab(tab.href)}
        className={classNames(
          tab.current
            ? 'border-blue-600 text-blue-600'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
          'group inline-flex items-center border-b-[3px] pt-4 pb-[11px] px-4 text-sm font-medium'
        )}
      >
        <span className="whitespace-nowrap">{tab.name}</span>
      </a>
    )
  }

  return (
    <div className="flex flex-row w-full relative">
      <div className="w-[70%] flex-1">
        <nav>
          <div className="flex flex-row flex-grow">
            {tabs.map((tab, index) => (
              <React.Fragment key={index}>
                {returnAnchorTag(tab)}
              </React.Fragment>
            ))}
          </div>
        </nav>
        <div className="py-5 w-[70%]">
          {activeTab === '#Mara' && <Mara />}
          {activeTab === '#Softronic' && <Softronic />}
        </div>
      </div>
      <div className="w-[30%] flex-none fixed right-0 top-32">
        <div className="flex flex-col gap-y-4">
          <span className="text-2xl">Overall Skills</span>
          <ul className="list-disc ml-10">
            <li>C#</li>
            <li>Javascript</li>
            <li>React.Js</li>
            <li>Next.Js</li>
            <li>Tailwind CSS</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>R</li>
            <li>Xamarin Forms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Professional
