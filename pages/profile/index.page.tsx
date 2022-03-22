import type { CustomNextPage } from 'next'
import { SubTitle } from '../../components/SubTitle'
import { Title } from '../../components/Title'
import { FluidLayout } from '../Layout/FluidLayout'

const profile: CustomNextPage = () => {
  return (
    <>
      <h1 className=" border-b-2 text-3xl font-bold">Profile</h1>
      <img
        src="/keita.JPG"
        className="mt-6 h-60 w-full object-cover md:h-[400px] md:w-full"
        alt=""
      />
      <Title title="今何やってる？" />
      <ul className="list-disc space-y-4 py-4 md:px-10">
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
      <Title title="スキルは?" />

      <ul className=" space-y-4 py-4 md:px-10">
        <li className="">
          <ul>
            <SubTitle text="英語" />
            <li className="ml-4 mt-4 text-xl">TOEIC L＆R 825点</li>
          </ul>
        </li>

        <li>
          <ul>
            <SubTitle text="エンジニアリング" />
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
      <Title title="これからどうして行きたい?" />
      <ul className=" space-y-4 py-4 md:px-10">
        <li>エンジニアとして海外で働きたいと思っています。</li>
        <li>
          国は、シンガポール・オーストラリア・カナダあたりを攻めていこうと思っています。
        </li>
        <li>
          海外に就職したい理由は、自分の人生を振り返った時に海外の人・環境が自分の人生を大きく変えているなと思ったからです。
        </li>
      </ul>
    </>
  )
}

export default profile

profile.getLayout = FluidLayout
