import React from 'react'
import Link from 'next/link'

const Origins = () => {
  return (
    <>
      <h1>Origins</h1>
      <p>
        Borned and raised in Karachi, Pakistan which is also know as the city of
        lights. I have started my journey from Montessori to Kindergarten.
        Progressed my way to the school where I have studied and achieved top
        results from 1st standard to Matriculation exams
      </p>
      <p>
        In Karachi, Pakistan we have the merit system where students have to
        achieve marks good enough in order to get admission on colleges in which
        they want. So I studied hard and got admitted in Delhi Govt. Science
        College. Which was and is one of the best college in Karachi for
        pre-engineering studies.
      </p>
      <p>
        I did my bachelors in Computer Engineering from Sir Syed university of
        Engineering and Technology. There my major was Object Oriented
        programming, Data structures and Algorithms.
      </p>
      <p>
        After that, I worked for the company called{' '}
        <a
          className="font-semibold underline"
          href="https://softronicsys.com/"
          target="_blank"
        >
          Softronic Systems pvt. ltd
        </a>
        . Initially I was hired as an Internee, then I made my way up and
        achieved <span className="font-semibold italic">Software Engineer</span>{' '}
        title.More about my professional career navigate to my{' '}
        <Link className="underline font-semibold" href="/professional">
          Professional
        </Link>{' '}
        section
      </p>
    </>
  )
}

export default Origins
