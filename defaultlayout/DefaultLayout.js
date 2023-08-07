import React from 'react'
import TopBar from '@/components/topBar/TopBar'
import 'tippy.js/dist/tippy.css'
import MobileSideBar from '@/components/topBar/MobileBar'
const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="w-full bg-blue-800 h-[50px] sticky top-0 shadow-lg shadow-gray-400 px-5 text-white flex items-center z-50">
        <div className="w-full flex-1 justify-start space-x-4 hidden lg:flex">
          <TopBar />
        </div>
        {/* <div className="flex-none flex justify-end">jahah</div> */}
        <div className="w-full flex-1 justify-start space-x-4 flex lg:hidden">
          <MobileSideBar />
        </div>
      </div>
      <main className="flex h-fit md:h-full flex-col items-center justify-between px-5 py-4 md:px-40 md:py-8">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout
