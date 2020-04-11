import { faAngleLeft, faAngleRight } from '@fortawesome/pro-duotone-svg-icons'
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import icons from './icons'
import url from './url'
import index from './home'

export const config = {
  icons,
  url,
  index,
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
