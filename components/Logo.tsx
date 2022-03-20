import Link from 'next/link'

export const Logo = () => {
  return (
    <h2 className="hidden text-3xl md:block ">
      <Link href="/">Keitablog</Link>
    </h2>
  )
}
