import { useRouter } from 'next/router'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { Menu } from '../../components/Menu'

dayjs.extend(utc)
dayjs.extend(timezone)

export default function BlogId() {
  const router = useRouter()

  return (
    <div>
      <Header />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-8 py-14 lg:pt-20">
        <p className="mt-2 text-sm text-gray-400">
          {dayjs
            .utc(router.query.publishedAt?.toString())
            .tz('Asia/Tokyo')
            .format('YYYY年MM月DD日')}
        </p>
        <p className="mt-2 text-xl font-bold">{router.query.title}</p>
        <img
          src={router.query.eyecatch?.toString()}
          className=" mt-4 h-60 w-full object-cover md:h-[400px] md:w-full"
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
