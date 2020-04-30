import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSlug } from '~/store/header'
import Logo from '~/components/about/Logo'
import Lead from '~/components/about/lead'
import Thumbnail from '~/components/about/Thumbnail'
import Outline from '~/components/about/Outline'
import OurClient from '~/components/about/OurClient'
import Email from '~/components/about/Email'
import Button from '~/components/base/Button'
import { usePageScroll } from '~/hooks/usePageScroll'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Logo className="thumbnail" />
    <Lead className="wrapper">
      リーディング＆カンパニーは東京を拠点とするマーケティング会社です。マーケティング記事の作成を中心にサイト制作、動画制作などを大企業から中小企業の法人様にご提供しております。
    </Lead>
    <Thumbnail className="margin thumbnail" />
    <Outline className="wrapper" />
    <div className="margin line" />
    <OurClient className="wrapper" />
    <Email className="margin thumbnail" />
    <Lead className="wrapper">
      多極的な視点で物事を考えられるライターを常に募集しています。キャリアや経験はハシゴではなくジャングルジム。常識とは異なった視点で、ライティングを通じ、未来の解像度を上げていって下さい。読書好き、旅行好き、運動好きであればパーフェクト!
    </Lead>
    <div className="wrapper">
      <Button className="button">詳しくはこちらから</Button>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  padding: 15.5rem 0;
  > .margin {
    margin-top: 7rem;
  }
  > .wrapper {
    margin: 7rem auto 0;
    width: 70rem;
  }
  > .thumbnail {
    width: 100%;
    height: 43rem;
  }
  > .line {
    width: 100%;
    height: 1px;
    background: white;
    opacity: 0.05;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug('/ABOUT'))
  // dispatch(setUpperLeft({ type: 'back', to: '/', text: 'ホームに戻る' }))
  usePageScroll()
  return <StyledComponent {...props} />
}

export default Container
