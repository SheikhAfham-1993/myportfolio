'use client'

import React from 'react'
import dynamic from 'next/dynamic'
const Clock = dynamic(() => import('react-live-clock'), { ssr: false })

const Footer = () => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const date = new Date()
  return (
    <div className="flex w-full justify-center px-5 sm:px-14">
      <div className="flex flex-col w-full max-w-4xl py-5">
        <code className="text-lg">
          {weekday[date.getDay()]}, {date.getDate()} {month[date.getMonth()]}
        </code>
        <code className="text-base space-x-2">
          <span>Time:</span>
          <Clock
            format={'HH:mm:ss'}
            ticking={true}
            timezone={'Europe/Berlin'}
          />
        </code>
      </div>
    </div>
  )
}

export default Footer
