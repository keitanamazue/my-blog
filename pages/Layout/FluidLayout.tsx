import type { CustomLayout } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutErrorBoundary } from './LayoutErrorBoundary'

export const FluidLayout: CustomLayout = (page) => {
  return (
    <>
      <Head>
        <title>keita blog</title>
      </Head>
      {/* <Header isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Header />
      <main className="mx-auto mt-16 mb-10 px-2 md:mt-28 md:max-w-6xl md:px-8">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </>
  )
}
