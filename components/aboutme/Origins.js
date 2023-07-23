import React from 'react'
import Link from 'next/link'

const Origins = () => {
  return (
    <>
      <span className="text-3xl font-semibold">Origins</span>
      <p>
        Borned and raised in{' '}
        <span className="font-medium">Karachi, Pakistan</span> which is also
        known as the city of lights. I have started my journey from Montessori
        to Kindergarten. Progressed my way to the school where I have studied
        and achieved top results from 1st standard to Matriculation exams
      </p>
      <p>
        I have done my intermediate education from Delhi Govt. Science College.
        Which was, and is one of the best college in Karachi for pre-engineering
        studies.
      </p>
      <p>
        I did my bachelors in Computer Engineering from{' '}
        <a className="text-blue-500 underline" href="https://www.ssuet.edu.pk/">
          Sir Syed university of Engineering and Technology
        </a>
        . There my majors were Object Oriented programming, Data structures and
        Algorithms.
      </p>
      <p>
        After that, I worked for the company called{' '}
        <a
          className="text-blue-500 underline"
          href="https://softronicsys.com/"
          target="_blank"
        >
          Softronic Systems pvt. ltd
        </a>
        . Initially I was hired as an Internee, then I made my way up and
        achieved <span className="font-semibold italic">Software Engineer</span>{' '}
        title. More about my professional career navigate to my{' '}
        <Link className="font-semibold" href="/professional">
          Professional
        </Link>{' '}
        section
      </p>
    </>
  )
}

export default Origins
