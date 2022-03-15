import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import type { CustomNextPage } from 'next'
import { FluidLayout } from '../Layout/FluidLayout'

dayjs.extend(utc)
dayjs.extend(timezone)

const BlogId: CustomNextPage = () => {
  const router = useRouter()

  return (
    <div>
      <p className="mt-2 text-center text-sm text-gray-400">
        {dayjs
          .utc(router.query.publishedAt?.toString())
          .tz('Asia/Tokyo')
          .format('YYYY年MM月DD日')}
      </p>
      <p className="mt-2 text-center text-xl font-bold">{router.query.title}</p>
      <img
        src={router.query.eyecatch?.toString()}
        className=" mt-4 h-60 w-full object-cover md:h-[400px] md:w-full"
        alt="eyecatch"
      />
      <div
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          __html: `${router.query.body}`,
        }}
        className="mt-8 leading-7 text-gray-700"
      />
    </div>
  )
}

export default BlogId

BlogId.getLayout = FluidLayout
