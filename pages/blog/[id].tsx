import { useRouter } from 'next/router'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export default function BlogId() {
  const router = useRouter()

  return (
    <div>
      <Header />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-8 py-14 lg:pt-20">
        <p className="mt-2 text-sm text-gray-400">{router.query.publishedAt}</p>
        <p className="mt-2 text-xl font-bold">{router.query.title}</p>
        <img
          src={router.query.eyecatch}
          className="mt-4 h-60 w-full object-cover md:h-2/3"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `${router.query.body}`,
          }}
          className="mt-8 leading-7 text-gray-700"
        />
      </div>
      <Footer />
    </div>
  )
}
