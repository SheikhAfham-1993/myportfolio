import DefaultLayout from '@/defaultlayout/DefaultLayout'
import React from 'react'
import myEndorsments from '@/json/myEndorsments.json'
import EndorserBox from '@/components/EndorserBox'
const Me = () => {
  return (
    <div className="w-full flex-1 px-5">
      <div className="flex flex-row flex-wrap justify-center gap-x-2 gap-y-4">
        {myEndorsments.map((row, index) => (
          <EndorserBox key={index} row={row} />
        ))}
      </div>
    </div>
  )
}

export default Me
