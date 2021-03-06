import Link from 'next/link'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { PrimaryButton } from '../components/PrimaryButton'

dayjs.extend(utc)
dayjs.extend(timezone)

type BlogProps = {
  title: string
  category: []
  publishedAt: string
  eyecatch: string | any
  body: string
  id: string
}

export const Post = (props: BlogProps) => {
  return (
    <Link
      href={{
        pathname: `/blog/${props.id}`,
        query: {
          title: props.title,
          category: props.category,
          publishedAt: props.publishedAt,
          eyecatch: props?.eyecatch.url,
          body: props.body,
          id: props.id,
        },
      }}
    >
      <div className="cursor-pointer rounded-md pb-4 shadow-md hover:opacity-80">
        <img
          src={props.eyecatch?.url?.toString()}
          className="h-40 w-full rounded-t-md object-cover"
          alt="eyecatch"
        />
        <div className="ml-4 flex flex-col items-start pt-4">
          <p className="mt-2 text-sm text-gray-400">
            {dayjs
              .utc(props.publishedAt)
              .tz('Asia/Tokyo')
              .format('YYYY年MM月DD日')}
          </p>
          <p className="text-xl font-bold">{props.title}</p>
          <div className="mt-4 flex flex-wrap gap-1">
            {props.category.map((category: string | [], index: number) => {
              return <PrimaryButton key={index} category={category} />
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}
