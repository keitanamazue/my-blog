import Link from 'next/link'

export const NavItems = () => {
  const NAV_ITEMS = [
    { href: '/profile', title: 'Profile' },
    { href: '/about_blog', title: 'About Blog' },
    { href: '/contact', title: 'Contact' },
  ]
  return (
    <ul className="hidden items-center px-4 py-4 text-base md:flex   lg:space-x-10">
      {NAV_ITEMS.map((nav, index) => {
        return (
          <li key={index}>
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}
