import Head from 'next/head'
import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Slider } from '../components/Slider'
import { Footer } from '../components/Footer'
import { client } from '../lib/client'

const Home = ({ blog }: any) => {
  return (
    <div>
      <Head>
        <title>keita blog</title>
      </Head>
      <Header />
      <Slider />
      <div className="mx-auto my-10 max-w-6xl px-8">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
          {blog.map((blog: any) => (
            <Post blog={blog} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Home

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
