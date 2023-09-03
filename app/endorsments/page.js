import React from 'react'
import myEndorsments from '@/json/myEndorsments.json'
import EndorserBox from '@/components/EndorserBox'

const Endrosments = () => {
  return (
    <section className="border-b border-dashed border-gray-800 py-5 px-6">
      <div className="flex flex-col space-y-2">
        <code className="text-3xl text-gray-700 font-semibold">
          Colleagues I worked with...
        </code>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myEndorsments.slice(0, 4).map((references, index) => (
            <div key={index}>
              <code className="font-semibold">{references.endorser}</code>
              <br />
              <code className="line-clamp-3"> {references.endorsment}</code>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-end">
          <code className="text-blue-600 underline">
            <a target="_blank" href="https://www.linkedin.com/in/afham-sheikh">
              See all
            </a>
          </code>
        </div>
      </div>
    </section>
  )
}

export default Endrosments
