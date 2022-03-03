import React from 'react'
import Link from 'next/link'

export const Header = (props: any) => {
  const { isOpen, setIsOpen } = props
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-yellow-100 px-10 py-2 opacity-90">
      <h2 className="hidden text-3xl md:block ">
        <Link href="/">Keitablog</Link>
      </h2>
      <ul className="hidden items-center  space-x-6  px-4 py-4 text-base md:flex md:space-x-10  lg:space-x-20">
        <li className="hover:opacity-80">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="/bitcoin">about blog</Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="/contact">contact</Link>
        </li>
      </ul>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <span className="absolute top-[10px] h-1 w-8 bg-black"></span>
        <span className="absolute top-[18px] h-1 w-8 bg-black"></span>
        <span className="absolute top-[26px] h-1 w-8 bg-black"></span>
      </button>

      <div className="flex gap-3">
        <Link href="https://www.linkedin.com/in/keita-namazue-b57383230/">
          <a target="_blank" rel="noreferrer">
            <img
              className="h-6 w-6 cursor-pointer "
              src="/linkedin.png"
              alt=""
            />
          </a>
        </Link>
        <Link href="https://twitter.com/nianjiang1752">
          <a target="_blank" rel="noreferrer">
            <img className="h-6 w-6 cursor-pointer" src="/twitter.png" alt="" />
          </a>
        </Link>
      </div>
    </header>
  )
}
