import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <h2 className="text-6xl font-bold mb-10">
        Profile | プロフィール
      </h2>

      <div className="w-full h-px bg-gray-300 mb-12" />

      <section className="mb-15">

        <div className="text-4xl font-semibold text-amber-600 mb-4">
          Kenji Okuda | 奥田 研志
        </div>


        <div className="text-2xl font-semibold mb-2 underline">
          <a href="https://www.nsw.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">NSW株式会社
          </a>
        </div>

        <section className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-sm text-gray-600">サービスソリューション事業本部</p>
            <p className="text-sm text-gray-600">クラウドプラットフォーム事業部</p>
            <p className="text-sm text-gray-600">アドバンスドディベロップメント部</p>

          </div>
          <div>
            <p className="text-sm text-gray-600">大阪事業所</p>
            <p className="text-sm text-gray-600">〒550-0015 大阪府大阪市西区南堀江一丁目18番4号 Osaka Metro南堀江ビル2階</p>
          </div>

        </section>
        <div className="bg-amber-100 	p-6">
          <p className="leading-8 text-gray-700 ">
            こんにちは。東京都世田谷区に生まれ、現在は大阪でシステムエンジニアとして活動しています。
          </p>
          <p className="leading-8 text-gray-700">
            システムエンジニアとして活動する前は、大学で学習心理・行動分析などの分野に従事していました。
          </p>
          <p className="leading-8 text-gray-700">
            父がフリーカメラマンで動物を扱っていたことや私が大学で動物を扱っていたことから動物好きにみられることが多いですが、動物が特別に好きというわけではありません。

          </p>
          <p className="leading-8 text-gray-700">
            生き物の行動・心理に関心があり、それらが描かれているであろう小説や映画が好きです。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-3">
          Publication | 出版物
        </h2>
        <p className="mb-6">学生時代の成果をまとめたものです。システムエンジニアとしての仕事は<Link href="/works" className="text-blue-600 hover:text-amber-500">こちら</Link>から。</p>
        <h2 className="text-2xl font-semibold mb-4">
          Refereed Publications | 査読つき論文
        </h2>
        <ol className="list-decimal list-outside pl-6 space-y-4 mb-5">
          <li>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0023969024001036" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-amber-500">Degraded contingency effect on running-based flavor aversion in rats: Testing the associative cue-competition account with flavors of minimal similarity. </a>
            <p className="text-sm text-gray-400">Nakajima, S., & Okuda, K. (2024). </p>
            <p className="text-sm text-gray-400">Learning and Motivation, 88, 102061.</p>
          </li>
          <li>
            <a href="https://doi.org/10.2502/janip.76.1.2" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-amber-500">塩化リチウム注射によるラット (Rattus norvegicus) のカオリン粘土摂取行動の時間的推移.</a>
            <p className="text-sm text-gray-400">奥田研志, 吉永雄大, & 中島定彦. (2026). </p>
            <p className="text-sm text-gray-400"> 動物心理学研究, 76-1.</p></li>

        </ol>
        <h2 className="text-2xl font-semibold mb-4">
          Conferences | 学会発表ほか
        </h2>
        <ol className="list-decimal list-outside pl-6 space-y-4 mb-5">
          <li>
            <p>水溶性唐辛子を用いたラットの辛味嫌悪学習課題</p>
            <p className="text-sm text-gray-400">2022年/日本基礎心理学会第41回大会</p>
          </li>
          <li>
            <p>ラットはいつカオリンを食べるのか？ー催吐剤（LiCl）投与後の異食行動の時間的推移ー</p>
            <p className="text-sm text-gray-400">2023年/日本心理学会第87回大会</p>
          </li>
          <li>
            <p>Effects of optogenetic suppression of the anterior insular cortex on reward related decision-making with high risk vs low risk </p>
            <p className="text-sm text-gray-400">2023年/日本動物心理学会第83回大会</p>
          </li>
        </ol>
        <h2 className="text-2xl font-semibold mb-4">
          Other | その他
        </h2>
        <ul className=" list-outside pl-6 space-y-4 mb-5">
          <li>
            <p>
              普通自動車免許 取得
            </p>
            <p className="text-sm text-gray-400 mb-2">
              2020年 3月
            </p>
            <p>
              英検5級 取得
            </p>
            <p className="text-sm text-gray-400  mb-2">
              2015年
            </p>
            <p>
              スポーツ鬼ごっこ 第１回全国優勝 顔面S
            </p>
            <p className="text-sm text-gray-400  mb-2">
              2012年
            </p>

          </li>
        </ul>
      </section>
    </main >
  );
}

