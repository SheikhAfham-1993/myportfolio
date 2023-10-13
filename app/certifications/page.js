import Mara from '@/components/Professional/Mara'
import Section from '@/components/SectionComp/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const certificateList = [
  {
    id: Math.random(),
    src: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg',
    credentials:
      'https://www.udemy.com/certificate/UC-0d666f91-bbf3-4743-b394-4a421822eb91/',
    title: 'Understanding TypeScript',
    rights: 'Udemy',
    description: 'Udemy',
  },
  {
    id: Math.random(),
    src: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg',
    title: 'JavaScript - The Complete Guide 2023 (Beginner + Advanced)',
    credentials:
      'https://www.udemy.com/certificate/UC-568e40b8-0c11-4baa-9c3b-a4d3a80540a1/',
    rights: 'Udemy',
    description: 'Udemy',
  },
]
const Certifications = () => {
  return (
    <div className="w-full flex flex-col space-y-6 border-b border-dashed border-gray-800 py-8 px-5 sm:px-14 justify-center">
      <div className="flex w-full justify-center">
        <div className="max-w-4xl flex flex-1 justify-start px-5 sm:px-14">
          <code className="text-2xl md:text-4xl text-gray-700 font-semibold">
            {'<Projects />'}
          </code>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="max-w-4xl flex flex-1 justify-start px-5 sm:px-14 flex-row  gap-x-5">
          {certificateList.map((certificate) => (
            <Link
              key={certificate.id}
              className="cursor-pointer"
              href={certificate.credentials}
            >
              <div className="flex flex-col justify-start gap-y-3 w-[200px]">
                <div className="h-[150px] w-[200px] flex flex-col items-center justify-center align-middle border border-gray-300 rounded-xl bg-gray-500">
                  <Image
                    src={certificate.src}
                    width={150}
                    height={150}
                    className="object-fill"
                    alt=""
                  />
                </div>
                <span className="text-gray-500 font-semibold">
                  {certificate.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications
