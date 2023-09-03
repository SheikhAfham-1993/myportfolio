import React from 'react'
import Link from 'next/link'

const TopBar = () => {
  const Links = [
    { href: '/', label: 'Home' },
    { href: '/professional', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ]
  return (
    <div className="flex w-full justify-center px-5 sm:px-14">
      <div className="flex flex-row justify-end w-full gap-x-2 sm:gap-x-4 text-gray-500 lg:font-medium max-w-4xl">
        {Links.map((link, index) => (
          <div
            key={index}
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-400 hover:text-gray-50 text-gray-700"
          >
            <Link href={link.href}>{link.label}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TopBar
