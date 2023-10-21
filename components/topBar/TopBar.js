'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Modal from '../Modal/Modal'

const TopBar = () => {
  const Links = [
    { href: '/', label: 'Home' },
    { href: '/professional', label: 'Experience' },
    { href: '/certifications', label: 'Certificates' },
  ]

  return (
    <div className="w-full py-3 flex justify-end">
      <div className="flex flex-row gap-x-2 sm:gap-x-4 text-gray-500 lg:font-medium py-2 px-5">
        {Links.map((link, index) => (
          <div
            key={index}
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-blue-400 hover:text-white text-gray-700"
          >
            <Link href={link.href}>{link.label}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TopBar
