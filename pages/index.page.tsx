import type { CustomNextPage } from 'next'
import { FluidLayout } from './Layout/FluidLayout'
import { Post } from './Post'
import { client } from '../lib/client'

type BlogProps = {
  title: string
  category: []
  publishedAt: string
  eyecatch: string
  body: string
  id: string
}

const Home: CustomNextPage = (props: any) => {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
      {props.blog?.map((blog: BlogProps) => {
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

Home.getLayout = FluidLayout
