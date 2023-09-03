'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Modal from '../Modal/Modal'

const TopBar = () => {
  const [showContact, setShowContact] = useState(false)
  const Links = [
    { href: '/', label: 'Home' },
    { href: '/professional', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ]

  const setShowContactHandler = () => {
    setShowContact(false)
  }
  return (
    <div className="flex w-full justify-center px-5 sm:px-14">
      <div className="flex flex-row justify-end w-full gap-x-2 sm:gap-x-4 text-gray-500 lg:font-medium max-w-4xl">
        {Links.map((link, index) => (
          <div
            key={index}
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-400 hover:text-gray-50 text-gray-700"
          >
            {link.label !== 'Contact' && (
              <Link href={link.href}>{link.label}</Link>
            )}
            {link.label === 'Contact' && (
              <div className="cursor-pointer" onClick={setShowContactHandler}>
                {link.label}
              </div>
            )}
          </div>
        ))}
      </div>
      <Modal onClose={setShowContactHandler} showModal={showContact} />
    </div>
  )
}
export default TopBar
