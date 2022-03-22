import { useCallback, useEffect, useRef, useState } from 'react'
import GlobalMenu from './GlobalMenu'
import { Logo } from './Logo'
import { NavItems } from './NavItems'
import { SNSIcon } from './SNSIcon'

export const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [isDisplay, setIsDisplay] = useState(false)
  const isRunning = useRef(false) // スクロール多発防止用フラグ

  // リスナに登録する関数
  const isScrollToggle = useCallback(() => {
    if (isRunning.current) return
    isRunning.current = true
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    requestAnimationFrame(() => {
      if (scrollTop < 50) {
        setIsDisplay(true)
      } else {
        setIsDisplay(false)
      }
      isRunning.current = false
    })
  }, [])

  // 登録と後始末
  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle)
    return () => {
      document.removeEventListener('scroll', isScrollToggle)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <header
        className={
          'fixed top-0 left-0 right-0 z-50 mx-auto flex  w-full items-center  justify-between px-10 py-2 opacity-90 lg:px-20'
        }
      >
        <Logo />
        <div className="special-shadow hidden items-center rounded-full md:flex">
          <div
            className={`${
              isDisplay ? 'p-1 px-2 md:flex md:items-center' : 'hidden'
            }`}
          >
            <NavItems />
            <SNSIcon />
          </div>
          <button
            className={`${
              isDisplay
                ? 'md:hidden md:transition'
                : 'mobile-menu__btn rounded-full py-4 px-3 md:block'
            }`}
            // eslint-disable-next-line react/jsx-handler-names
            onClick={() => {
              return setIsOpened((o) => {
                return !o
              })
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <button
        className="special-shadow  mobile-menu__btn fixed top-4 right-4 rounded-full py-4 px-3 md:hidden"
        // eslint-disable-next-line react/jsx-handler-names
        onClick={() => {
          return setIsOpened((o) => {
            return !o
          })
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <GlobalMenu isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

{
  /* <Burger
            opened={isOpened}
            // eslint-disable-next-line react/jsx-handler-names
            onClick={() => {
              return setIsOpened((o) => {
                return !o
              })
            }}
            size={30}
            className={`${
              isDisplay ? 'hidden ' : 'special-shadow rounded-full p-2'
            }`}
          /> */
}
