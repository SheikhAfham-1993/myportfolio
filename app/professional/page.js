'use client' // This is a client component

import Mara from '@/components/Professional/Mara'
import Softronic from '@/components/Professional/Softronic'
import Section from '@/components/SectionComp/Section'
import React from 'react'

const Professional = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-y-5">
        <Section>
          <Mara />
        </Section>
        <Section>
          <Softronic />
        </Section>
      </div>
    </div>
  )
}

export default Professional
