import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="">
          <code>Email Address</code>
        </label>
        <input
          id="email"
          type="text"
          className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-100 text-gray-700"
        ></input>
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject" className="">
          <code>Message</code>
        </label>
        <textarea
          id="subject"
          type="text"
          rows={5}
          className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-100 text-gray-700"
        ></textarea>
      </div>
    </div>
  )
}

export default Contact
