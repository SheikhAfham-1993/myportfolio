import React from 'react'

import Image from 'next/image'
import TopBar from '@/components/topBar/TopBar'
const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-blue-800 h-[50px] sticky top-0 shadow-lg shadow-gray-400 px-5 text-white flex items-center">
        <div className="flex-none">
          <Image src="/logo.png" alt="My Logo" width="150" height="150"></Image>
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          <TopBar />
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between px-32 py-14">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout
