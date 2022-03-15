import type { VFC } from 'react'
import Link from 'next/link'

type Props = {
  category: string | []
  isLink?: boolean
}

export const PrimaryButton: VFC<Props> = (props) => {
  return props.isLink ? (
    <Link href="/">
      <a className="text-sm text-gray-400 hover:text-gray-500">
        {props.category}
      </a>
    </Link>
  ) : (
    <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
      {props.category}
    </p>
  )
}
