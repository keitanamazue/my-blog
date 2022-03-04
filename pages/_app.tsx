import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return <Component {...pageProps} isOpen={isOpen} setIsOpen={setIsOpen} />
}

export default MyApp
