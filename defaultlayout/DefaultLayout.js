import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-blue-800 h-[50px] sticky top-0 shadow-lg shadow-gray-400 px-5 text-white flex items-center">
        <div className="flex-none">
          <Image src="/logo.png" alt="My Logo" width="150" height="150"></Image>
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          <Link href="/">Home</Link>
          <Link href="/professional">Professional</Link>
          <Link href="/me">About me</Link>
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between px-32 py-14">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout
