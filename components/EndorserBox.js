import React from 'react'

const EndorserBox = ({ row }) => {
  return (
    <div className="bg-slate-50 rounded-xl inline-block w-[400px] p-5 border border-gray-300 shadow-lg shadow-gray-400 cursor-pointer">
      <a href={row.link} target="_blank">
        <div className="inline-block text-2xl font-semibold">
          {row.endorser}
        </div>

        <div className="whitespace-normal flex text-justify mt-4">
          {row.endorsment}
        </div>
      </a>
    </div>
  )
}

export default EndorserBox
