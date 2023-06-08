import React from 'react'
import Link from 'next/link'
const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-blue-800 h-[50px] sticky top-0 shadow-lg shadow-gray-400 px-5 text-white flex items-center">
        <div className="flex-none">My Portfolio</div>
        <div className="flex flex-1 justify-end space-x-4">
          <Link href="/">About me</Link>
          <Link href="/professional">Professional</Link>
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between px-32 py-14">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout
