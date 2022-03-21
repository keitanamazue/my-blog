/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-handler-names */

import { Drawer, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import type { VFC } from 'react'

type Props = {
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
}

const GlobalMenu: VFC<Props> = (props) => {
  const router = useRouter()
  const handleClose = (href: string) => {
    props.setIsOpened(false)
    router.push(href)
  }
  return (
    <Drawer
      opened={props.isOpened}
      // eslint-disable-next-line react/jsx-handler-names
      onClose={() => {
        return props.setIsOpened(false)
      }}
      title={
        <Title order={2}>
          <a
            onClick={() => {
              return handleClose('/')
            }}
            className="cursor-pointer"
          >
            <img src="/logo.png" alt="" />
          </a>
        </Title>
      }
      padding="xl"
      size="sm"
      position="left"
      transition="rotate-left"
      transitionDuration={500}
      transitionTimingFunction="ease"
      closeButtonLabel="Close drawer"
    >
      <ul className="mt-10 flex flex-col items-start gap-4">
        <li className="hover:opacity-80">
          <a
            onClick={() => {
              return handleClose('/profile')
            }}
            className="cursor-pointer"
          >
            Profile
          </a>
        </li>
        <li className="hover:opacity-80">
          <a
            onClick={() => {
              return handleClose('about_blog')
            }}
            className="cursor-pointer"
          >
            About Blog
          </a>
        </li>
        <li className="hover:opacity-80">
          <a
            onClick={() => {
              return handleClose('contact')
            }}
            className="cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
    </Drawer>
  )
}

export default GlobalMenu
