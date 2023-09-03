import React from 'react'
const Section = ({ children }) => {
  return (
    <section className="border-b border-dashed border-gray-800 py-8 px-5 sm:px-14 flex justify-center">
      {children}
    </section>
  )
}

export default Section
