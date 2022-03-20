import { Drawer, Title } from '@mantine/core'
import Link from 'next/link'
import type { VFC } from 'react'

type Props = {
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
}

const GlobalMenu: VFC<Props> = (props) => {
  return (
    <Drawer
      opened={props.isOpened}
      // eslint-disable-next-line react/jsx-handler-names
      onClose={() => {
        return props.setIsOpened(false)
      }}
      title={
        <Title order={2}>
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </Title>
      }
      padding="xl"
      size="sm"
      position="left"
      transition="rotate-left"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <ul className="mt-10 flex flex-col items-start gap-4">
        <li className="hover:opacity-80">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="/about_blog">About Blog</Link>
        </li>
        <li className="hover:opacity-80">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Drawer>
  )
}

export default GlobalMenu
