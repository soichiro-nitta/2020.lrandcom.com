import {
  faAngleLeft,
  faAngleRight,
  faCircle,
  faPaperPlane
} from '@fortawesome/pro-duotone-svg-icons'
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

export default {
  icons: {
    arrowLeft: faAngleLeft,
    arrowRight: faAngleRight,
    circle: faCircle,
    mail: faPaperPlane
  },
  url: {
    facebook: {
      natsume: 'https://www.facebook.com/chikara4',
      lc: 'https://www.facebook.com/15ahead/'
    },
    twitter: 'https://twitter.com/4chikara',
    instagram: 'https://instagram.com/baard.bb/',
    youtube:
      'https://www.youtube.com/channel/UCJkz6NUHgsNHoe_qmw_A_OA?sub_confirmation=1'
  },
  index: {
    copy: `もっとクリエイティブなマーケティングの
やり方があるはずだ`,
    writing: {
      title: '記事制作',
      description: `独自生の高い記事コンテンツは、新しい顧客を引き付ける磁石の役割を果たします。
自分の会社の情報を記事コンテンツとして出しても、誰も興味を持たないと思うかもしれません。
しかし、メインの事業を入口として、世の中を俯瞰的に見れば、経済、文化、歴史、そして、テクノロジーから心理学まで世の中の様々なことに繋がっています。むしろ、これだけ色々な事が入り混じった世の中で、不動産は不動産、自動車は自動車などと言ったように、一つの視点から魅力を伝えようとしても、その魅力を伝えきることはできないでしょう。`,
      src: 'https://lrandcom.kagoyacloud.com/static/contents/pc.mp4'
    },
    website: {
      title: 'サイト制作',
      description: `まず、その企業を知ろうと思ったらHPにアクセスする現代、HPはその企業のオフィス以上に大きな印象を与えることになります。その企業が面白そうかどうかは、HPにアクセスしてみればすぐに分かる。
良いHPの条件は、サクサク動くこと、シェイクスピアのような美しいコードで書かれていりこと、そして、納期というものを設けず、常にアップデートしていくこと。`,
      src: 'https://lrandcom.kagoyacloud.com/static/website/pc.mp4'
    },
    film: {
      title: '映像制作',
      description: `どれだけ素晴らしい動画を作っても、ユーザーに見てもらえなければ何の意味もありません。
Youtubeに載せるのであれば、最初の5秒でどうインパクトをつけるか、FacebookやTwitterであれば、音がでない状況で視聴者を引き込むにはどうするかなど、マーケット的な観点からエンターテイメント性の高い作品に仕上げていきます。`,
      src: 'https://lrandcom.kagoyacloud.com/static/film/pc.mp4'
    },
    ourClient: {
      title: '主要取引先',
      description: '※ 敬称略、順不同',
      client: [
        'popIn株式会社',
        '日本マイクロソフト株式会社',
        'トヨタ自動車株式会社',
        '株式会社 日本HP',
        'ハウスコム株式会社',
        '株式会社オカムラ',
        'ヤンマーホールディングス株式会社',
        'ウイングアーク1st株式会社',
        'ソニーネットワークコミュニケーションズ株式会社',
        '株式会社J.Score'
      ]
    },
    contact: {
      title: 'お問い合わせ',
      description: `メディア構築、コンテンツ作成をご希望の企業様から、面白いコンテンツを作ってみたいライターやクリエイターさん、そして、ただオフィスに遊びに来たいという変わり者の方まで、お気軽に下記のメールアドレスからご連絡下さい。`,
      outline: [
        {
          head: '会社名',
          data: 'リーディング＆カンパニー株式会社（Leading & Company Inc.）'
        },
        {
          head: '本社所在地',
          data: '東京都渋谷区東1-1-37 大希青山ビル 3階'
        },
        {
          head: '代表取締役',
          data: '夏目 力'
        },
        {
          head: '事業内容',
          data: 'Webコンテンツの制作、Webサイト制作、動画制作'
        }
      ]
    }
  },
  article: {
    author: {
      name: '著者：夏目 力',
      src: '/natsume.jpg',
      icons: {
        facebook: faFacebookSquare,
        twitter: faTwitter,
        instagram: faInstagram,
        youtube: faYoutube
      }
    },
    prev: {
      text: '前へ',
      icon: faAngleLeft
    },
    next: {
      text: '次へ',
      icon: faAngleRight
    }
  }
}
