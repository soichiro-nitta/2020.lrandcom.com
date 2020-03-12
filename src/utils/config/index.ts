import {
  faLongArrowAltLeft,
  faLongArrowAltRight
} from '@fortawesome/pro-duotone-svg-icons'
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

export default {
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
  article: {
    back: {
      text: '記事一覧に戻る',
      icon: faLongArrowAltLeft
    },
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
      icon: faLongArrowAltLeft
    },
    next: {
      text: '次へ',
      icon: faLongArrowAltRight
    }
  }
}
