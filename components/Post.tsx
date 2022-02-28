import React from 'react'
import Link from 'next/link'

export const Post = ({ blog }: any) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="cursor-pointer pb-4 shadow-md hover:opacity-80">
        <img src={blog?.eyecatch?.url} className="h-40 w-full object-cover" />
        <div className="ml-4 flex flex-col items-start pt-4">
          <p className="mt-2 text-sm text-gray-400">{blog.publishedAt}</p>
          <p className="text-xl font-bold">{blog.title}</p>
          <div className="mt-4 flex flex-wrap gap-1">
            {blog.category.map((category: any) => (
              <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
