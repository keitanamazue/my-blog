import Head from 'next/head'
import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { SliderPost } from '../components/SliderPost'
import { Footer } from '../components/Footer'
import { client } from '../lib/client'

type blogProps = {
  title: string
  category: string | []
  publishedAt: string
  eyecatch: string
  body: string
  id: string
}

const Home = ({ blog }: any) => {
  return (
    <div>
      <Head>
        <title>keita blog</title>
      </Head>
      <Header />

      {blog.map((post: blogProps, index: number) => (
        <SliderPost
          title={blog.title}
          category={blog.category}
          publishedAt={blog.publishedAt}
          eyecatch={blog.eyecatch}
          body={blog.body}
          id={blog.id}
          key={blog.id}
        />
      ))}

      <div className="mx-auto my-10 max-w-6xl px-8">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
          {blog.map((blog: blogProps) => (
            <Post
              title={blog.title}
              category={blog.category}
              publishedAt={blog.publishedAt}
              eyecatch={blog.eyecatch}
              body={blog.body}
              id={blog.id}
              key={blog.id}
            />
          ))}
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
