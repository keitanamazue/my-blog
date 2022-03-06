import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

// eslint-disable-next-line react/destructuring-assignment
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return <Component {...pageProps} isOpen={isOpen} setIsOpen={setIsOpen} />
}

export default MyApp
