import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Footer } from '../components/Footer'
import { client } from '../lib/client'

type BlogProps = {
  title: string
  category: []
  publishedAt: string
  eyecatch: string
  body: string
  id: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { isOpen, setIsOpen, blog } = props

  return (
    <div>
      <Head>
        <title>keita blog</title>
      </Head>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="mx-auto mt-28 mb-10 max-w-6xl px-8">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
          {blog?.map((blog: BlogProps) => {
            return (
              <Post
                title={blog.title}
                category={blog.category}
                publishedAt={blog.publishedAt}
                eyecatch={blog.eyecatch}
                body={blog.body}
                id={blog.id}
                key={blog.id}
              />
            )
          })}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Home

// データをテンプレートに受け渡す部分の処理を記述します
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
