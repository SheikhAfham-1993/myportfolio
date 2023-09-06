'use client' // This is a client component

import Mara from '@/components/Professional/Mara'
import Softronic from '@/components/Professional/Softronic'
import React from 'react'

const Professional = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center w-full px-5 sm:px-14">
        <div className="w-full flex flex-col max-w-4xl gap-y-10">
          <Mara />
          <Softronic />
        </div>
      </div>
    </div>
  )
}

export default Professional
