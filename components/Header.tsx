import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-300">
      <ul className="flex items-center justify-center space-x-6  px-4 py-4 text-base md:space-x-10 md:border-b-2  lg:space-x-20">
        <li className="">
          <Link href="/">Blockchain</Link>
        </li>
        <li>
          <Link href="/Bitcoin">Bitcoin</Link>
        </li>
        <li>
          <Link href="/Ethreum">Ethreum</Link>
        </li>
      </ul>
    </header>
  )
}
