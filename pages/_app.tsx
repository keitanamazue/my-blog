import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return <Component {...pageProps} />
}

export default MyApp
