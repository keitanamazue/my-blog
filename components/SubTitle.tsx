import type { VFC } from 'react'

type Text = {
  text: string
}

export const SubTitle: VFC<Text> = (props) => {
  return (
    <li className="mt-4 border-y-4 border-yellow-100 py-2 px-5 text-2xl font-bold">
      {props.text}
    </li>
  )
}
