import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

type blogProps = {
  title: string
  category: string | []
  publishedAt: string
  eyecatch: string
  body: string
  id: string
}

export const Post = (props: blogProps) => {
  const router = useRouter()

  return (
    <Link
      href={{
        pathname: `/blog/${props.id}`,
        query: {
          title: props.title,
          category: props.category,
          publishedAt: props.publishedAt,
          eyecatch: props?.eyecatch?.url,
          body: props.body,
          id: props.id,
        },
      }}
    >
      <div className="cursor-pointer rounded-md pb-4 shadow-md hover:opacity-80">
        <img
          src={props?.eyecatch?.url}
          className="h-40 w-full rounded-t-md object-cover"
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
            {props.category.map((category: string | [], index: number) => (
              <p
                key={index}
                className="rounded-full bg-red-200 py-1 px-2 text-xs text-white"
              >
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
