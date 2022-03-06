import Link from 'next/link'

export const Menu = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { isOpen, setIsOpen } = props
  return (
    isOpen && (
      <div className="fixed left-0 top-0 right-0 bottom-0 z-50  bg-slate-400">
        <div className="mt-40 flex h-full w-full flex-col items-center justify-start">
          <h2 className=" text-3xl md:block ">
            <Link href="/">Keitablog</Link>
          </h2>
          <ul className="mt-10 flex flex-col items-start gap-4">
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
        </div>

        <button
          className="btn absolute top-[5px] left-[40px]"
          // eslint-disable-next-line react/jsx-handler-names
          onClick={() => {
            return setIsOpen(!isOpen)
          }}
        >
          <span className="block h-1 w-8  bg-black"></span>
          <span className="block h-1 w-8 bg-black"></span>
          <span className="block h-1 w-8 bg-black"></span>
        </button>
      </div>
    )
  )
}
