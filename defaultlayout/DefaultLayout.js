'use client'

import React from 'react'
import TopBar from '@/components/topBar/TopBar'
import MobileSideBar from '@/components/topBar/MobileBar'
const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-gray-900 h-[50px] sticky top-0 shadow-lg shadow-transparent px-5 text-white flex items-center z-50">
        <div className="w-full flex-1 justify-start space-x-4 hidden lg:flex">
          <TopBar />
        </div>
        <div className="w-full flex-1 justify-start space-x-4 flex lg:hidden">
          <MobileSideBar />
        </div>
      </div>
      <main className="flex h-fit items-center justify-center m-auto py-5">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout
