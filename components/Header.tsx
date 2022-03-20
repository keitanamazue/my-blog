import { useState } from 'react'
import { Burger } from '@mantine/core'
import GlobalMenu from './GlobalMenu'
import { Logo } from './Logo'
import { MediaQuery } from '@mantine/core'
import { NavItems } from './NavItems'
import { SNSIcon } from './SNSIcon'

type CSSObject = {
  [key: string]: string
}

export const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const hidden: CSSObject = {
    display: 'none',
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-yellow-100 px-10 py-2 opacity-90">
        <Logo />
        <NavItems />

        <MediaQuery largerThan="sm" styles={hidden}>
          <Burger
            opened={isOpened}
            // eslint-disable-next-line react/jsx-handler-names
            onClick={() => {
              return setIsOpened((o) => {
                return !o
              })
            }}
            size={30}
          />
        </MediaQuery>
        <SNSIcon />
      </header>

      <GlobalMenu isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}
