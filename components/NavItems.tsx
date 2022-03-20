import Link from 'next/link'

export const NavItems = () => {
  const NAV_ITEMS = [
    { href: '/profile', title: 'Profile' },
    { href: '/about_blog', title: 'About Blog' },
    { href: '/contact', title: 'Contact' },
  ]
  return (
    <ul className="hidden items-center  space-x-6  px-4 py-4 text-base md:flex md:space-x-10  lg:space-x-20">
      {NAV_ITEMS.map((nav, index) => {
        return (
          <li key={index} className="hover:opacity-80">
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
