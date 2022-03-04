import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'

const profile = (props: any) => {
  const { isOpen, setIsOpen } = props
  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mx-auto mt-24 mb-10 max-w-6xl px-8 md:mt-28">
        <h1 className=" border-b-2 text-3xl font-bold">Profile</h1>
        <img
          src="/keita.JPG"
          className="mt-6 h-60 w-full object-cover md:h-[400px] md:w-full"
          alt=""
        />
        <h1 className="mt-6 border-l-4 border-l-black bg-yellow-100 py-2 px-5 text-2xl font-bold">
          今、何やってる?
        </h1>
        <ul className="list-disc space-y-4 px-10 py-4">
          <li>フリーランスエンジニアとして活動中。</li>
          <li>
            web制作会社からWordPressやコーポレートサイトの保守・管理のお仕事をしています。
          </li>
          <li>
            趣味で、webアプリケーションやモバイルアプリケーションの開発をしています。
          </li>
          <li>
            ファッションにも興味があるので、ファッション系の発信もしています。
          </li>
        </ul>
        <h1 className="mt-6 border-l-4 border-l-black bg-yellow-100 py-2 px-5 text-2xl font-bold">
          スキルは?
        </h1>
        <ul className=" space-y-4 px-10 py-4">
          <li className="">
            <ul>
              <li className="mt-4 border-y-4 border-yellow-100 py-2 px-5 text-2xl font-bold">
                英語
              </li>
              <li className="ml-4 mt-4 text-xl">TOEIC L＆R 825点</li>
            </ul>
          </li>

          <li>
            <ul>
              <li className="mt-4 border-y-4 border-yellow-100 py-2 px-5 text-2xl font-bold">
                エンジニアリング
              </li>
              <li className="ml-4 mt-4 break-all text-xl">
                <span className="mr-4 text-2xl font-bold">frontend:</span>
                HTML,CSS,JavaScript,TypeScript,React.js,Next.js,ReactNative
              </li>
              <li className="ml-4 mt-4 break-all text-xl">
                <span className="mr-4 text-2xl font-bold">backend:</span>
                Node.js,PHP
              </li>
              <li className="ml-4 mt-4 break-all text-xl">
                <span className="mr-4 text-2xl font-bold">mBaas:</span>
                Firebase 9version対応可能
              </li>
            </ul>
          </li>
        </ul>
        <h1 className="mt-6 border-l-4 border-l-black bg-yellow-100 py-2 px-5 text-2xl font-bold">
          これからどうして行きたい?
        </h1>
        <ul className=" space-y-4 px-10 py-4">
          <li>エンジニアとして海外で働きたいと思っています。</li>
          <li>
            国は、シンガポール・オーストラリア・カナダあたりを攻めていこうと思っています。
          </li>
          <li>
            海外に就職したい理由は、自分の人生を振り返った時に海外の人・環境が自分の人生を大きく変えているなと思ったからです。
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default profile
