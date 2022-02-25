import Head from 'next/head'
import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Slider } from '../components/Slider'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>keita blog</title>
      </Head>
      <Header />
      <Slider />
      <Post />
      <Footer />
    </div>
  )
}

export default Home
