import CypressLogo from '@/components/svgs/CypressLogo'
import JavascriptLogo from '@/components/svgs/JavascriptLogo'
import NextLogo from '@/components/svgs/NextLogo'
import ReactLogo from '@/components/svgs/ReactLogo'
import SQLLogo from '@/components/svgs/SQLLogo'
import TypescriptLogo from '@/components/svgs/TypescriptLogo'
import XamarinLogo from '@/components/svgs/XamarinLogo'
import Image from 'next/image'
import React from 'react'

const Me = () => {
  return (
    <div className="h-screen w-full flex justify-center align-middle items-center">
      <div className="flex flex-row items-center align-middle gap-x-10">
        <Image
          width={170}
          height={150}
          className="rounded-full object-fill h-[180px] border-2 border-blue-200 ring-2 ring-blue-400"
          src="/pic.jpg"
          alt="Afham"
        />
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-start">
            <span className="text-6xl text">Sheikh Afham Uddin</span>
          </div>
          <div className="flex items-center justify-start">
            <span className="text-3xl text">Front End Developer</span>
          </div>
          <div className="flex flex-col items-start justify-start gap-y-2">
            <span className="text-xl text">Techstack</span>
            <div className="flex flex-row gap-x-3">
              <JavascriptLogo />
              <TypescriptLogo />
              <CypressLogo />
              <ReactLogo />
              <NextLogo />
              <XamarinLogo />
              <SQLLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me
