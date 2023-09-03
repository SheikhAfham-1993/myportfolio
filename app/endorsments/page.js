import React from 'react'
import myEndorsments from '@/json/myEndorsments.json'
import Section from '@/components/SectionComp/Section'

const Endrosments = () => {
  return (
    <Section>
      <div className="flex flex-col gap-y-6 max-w-4xl">
        <code className="text-2xl md:text-4xl text-gray-700 font-semibold">
          {'<Colleagues I worked with />'}
        </code>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              +{myEndorsments.length - 1} more
            </a>
          </code>
        </div>
      </div>
    </Section>
  )
}

export default Endrosments
