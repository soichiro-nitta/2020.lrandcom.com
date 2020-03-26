import {
  faAngleLeft,
  faAngleRight,
  faCircle
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
    circle: faCircle
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
      body: `クオリティーの高いWEBコンテンツは、新しい顧客を引き付ける磁石の役割を果たします。経済がどんどん拡大して行く時代は、とにかく大量の広告が新しい顧客との接点になっていた。しかし、経済が徐々に縮小していく時代は、創造性の高いクリエティブなコンテンツが新しい顧客との接点になっていくことは間違いありません。
WEBマーケティングとは、狩りのよユーザーを狙い撃ちするものではない。農業のように畑を耕し、種を蒔き、そして、水をやって、できた果実を収穫するものだ。
マーケティングの本質は、ユーザーの思考を変えること。すぐに効果が出るということは、すぐに効果が出なくなるという裏返しでもあります。
遠回りこそが、最大の近道。確実な方法で行こう!!`,
      src: 'https://lrandcom.kagoyacloud.com/static/contents/pc.mp4'
    },
    website: {
      title: 'サイト制作',
      body: `まず、その企業を知ろうと思ったらHPにアクセスする現代、HPはその企業のオフィス以上に大きな印象を与えることになります。その企業が面白そうかどうかは、HPにアクセスしてみればすぐに分かる。
良いHPの条件は、サクサク動くこと、シェイクスピアのような美しいコードで書かれていりこと、そして、納期というものを設けず、常にアップデートしていくこと。`,
      src: 'https://lrandcom.kagoyacloud.com/static/website/pc.mp4'
    },
    film: {
      title: '映像制作',
      body: `どれだけ素晴らしい動画を作っても、ユーザーに見てもらえなければ何の意味もありません。
Youtubeに載せるのであれば、最初の5秒でどうインパクトをつけるか、FacebookやTwitterであれば、音がでない状況で視聴者を引き込むにはどうするかなど、マーケット的な観点からエンターテイメント性の高い作品に仕上げていきます。`,
      src: 'https://lrandcom.kagoyacloud.com/static/film/pc.mp4'
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
