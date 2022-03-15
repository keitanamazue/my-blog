import type { VFC } from 'react'

type Props = {
  title: string
}

export const Title: VFC<Props> = (props) => {
  return (
    <h1 className="mt-6 border-l-4 border-l-black bg-yellow-100 py-2 px-5 text-2xl font-bold">
      {props.title}
    </h1>
  )
}
