import React from 'react'
import Link from 'next/link'

const TopBar = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/professional">Professional</Link>
      <Link href="/education">Education</Link>
      <Link href="/endorsments">Endrosments</Link>
      <Link href="/me">About me</Link>
    </>
  )
}
export default TopBar
