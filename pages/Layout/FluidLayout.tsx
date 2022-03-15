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
      <main className="mx-auto mt-28 mb-10 max-w-6xl px-8">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </>
  )
}
