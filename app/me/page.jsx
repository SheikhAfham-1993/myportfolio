'use client'
import Image from 'next/image'
import React from 'react'
import Techstack from '../Techstack/Techstack'
import Link from 'next/link'

const Me = () => {
  return (
    <div className="h-full md:h-screen m-auto w-full flex justify-center align-middle items-center">
      <div className="flex flex-col gap-y-4 w-full">
        <Image
          width={80}
          height={80}
          className="rounded-full object-fill border-2 border-blue-200 ring-2 ring-blue-400"
          src="/pic.jpg"
          alt="Afham"
        />
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-start space-x-0 md:space-x-2">
            <span className="text-3xl md:text-4xl text">
              Sheikh Afham Uddin
            </span>
            <span className="text-xl text">
              (5 years of overall experience)
            </span>
          </div>
          <div className="flex items-center justify-start">
            <span className="text-xl text">
              Full-stack allrounder. Having hands-on experience in Javascript
              languages i.e. React.js and Next.js. In addition to this years of
              experience in XAMARIN Cross-platform application development and
              ASP.NET web application development
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-start space-x-4 items-center">
          <Link
            href={'https://www.linkedin.com/in/afham-sheikh'}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              className="fill-white"
              width="32"
              height="32"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Link>
          <Link href={'https://github.com/SheikhAfham-1993'} target="_blank">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle color-fg-default fill-white"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </Link>
          <button
            onClick={() => window.open(process.env.NEXT_PUBLIC_URL)}
            className="bg-white hover:bg-blue-600 px-5 py-2 rounded-full cursor-pointer hover:text-white font-semibold"
          >
            Download CV
          </button>
          {/* <span
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1WSNmFrUiglU03JeQzE2h-B3nn_dyV8oy/view?usp=share_link'
              )
            }
            className="underline text-white cursor-pointer"
          >
            Download German CV
          </span> */}
        </div>

        <Techstack />
      </div>
    </div>
  )
}

export default Me
