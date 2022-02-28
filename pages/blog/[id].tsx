import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { PostDetail } from '../../components/PostDetail'
import { client } from '../../lib/client'

export default function BlogId({ blog }: any) {
  return (
    <div>
      <Header />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-8 py-14 lg:pt-20">
        <p className="mt-2 text-sm text-gray-400">{blog.publishedAt}</p>
        <p className="mt-2 text-xl font-bold">{blog.title}</p>
        <img
          src={blog?.eyecatch?.url}
          className="mt-4 h-60 w-full object-cover md:h-2/3"
        />
        {/* <p className="mt-8">{blog.body}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className="mt-8 leading-7 text-gray-700"
        />
      </div>
      <Footer />
    </div>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content: any) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
