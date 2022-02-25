import React from 'react'
import Link from 'next/link'

export const Post = () => {
  return (
    <div className="mx-auto my-10 max-w-4xl px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
        <Link href="/">
          <div className="cursor-pointer pb-4 shadow-md hover:opacity-80">
            <img src="/bitcoin.jpg" className="w-full" />
            <div className="ml-4 flex flex-col items-start pt-4">
              <p className="mt-2 text-sm text-gray-400">
                2022/02/01 (更新日: 2022/02/07)
              </p>
              <p className="text-xl font-bold">ビットコインとは？</p>
              <div className="mt-4 flex flex-wrap gap-1">
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/">
          <div className="pb-4 shadow-md">
            <img src="/bitcoin.jpg" className="w-full" />
            <div className="ml-4 flex flex-col items-start pt-4">
              <p className="mt-2 text-sm text-gray-400">
                2022/02/01 (更新日: 2022/02/07)
              </p>
              <p className="text-xl font-bold">ビットコインとは？</p>
              <div className="mt-4 flex flex-wrap gap-1">
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/">
          <div className="pb-4 shadow-md">
            <img src="/bitcoin.jpg" className="w-full" />
            <div className="ml-4 flex flex-col items-start pt-4">
              <p className="mt-2 text-sm text-gray-400">
                2022/02/01 (更新日: 2022/02/07)
              </p>
              <p className="text-xl font-bold">ビットコインとは？</p>
              <div className="mt-4 flex flex-wrap gap-1">
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
                <p className="rounded-full bg-red-200 py-1 px-2 text-xs text-white">
                  programming
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
