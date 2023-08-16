import React from 'react'
import Link from 'next/link'

const TopBar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-full gap-x-4 text-black lg:text-gray-300 gap-y-2 lg:gap-y-0 lg:font-medium">
      <Link href="/">Home</Link>
      <Link href="/professional">Professional</Link>
      <Link href="/education">Education</Link>
      <Link href="/endorsments">Endrosments</Link>
      <Link href="/me">Contact</Link>
    </div>
  )
}
export default TopBar
