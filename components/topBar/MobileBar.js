'use client' // This is a client component

import React, { useState } from 'react'
import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import TopBar from './TopBar'
const MobileSideBar = () => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <div className="flex flex-row items-center">
          <div>Menu</div>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="w-fit rounded-lg bg-gray-200 px-4 py-2">
          <TopBar />
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default MobileSideBar
