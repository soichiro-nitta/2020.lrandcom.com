import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setSlug } from '~/store/header'
import Logo from '~/components/about/Logo'
import Lead from '~/components/about/lead'
import Thumbnail from '~/components/about/Thumbnail'
import Outline from '~/components/about/Outline'
import OurClient from '~/components/about/OurClient'
import Email from '~/components/about/Email'
import Button from '~/components/base/Button'
import { usePageScroll } from '~/hooks/usePageScroll'
import { styles } from '~/utils/styles'
import { StateTypes } from '~/store'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  sp: boolean
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Logo className="logo" />
    {props.sp && <div className="margin line" />}
    <Lead className="wrapper">
      リーディング＆カンパニーは東京を拠点とするマーケティング会社です。マーケティング記事の作成を中心にサイト制作、動画制作などを大企業から中小企業の法人様にご提供しております。
    </Lead>
    {props.sp && <div className="margin line" />}
    <Thumbnail className="margin thumbnail" />
    {props.sp && <div className="margin line" />}
    <Outline className="wrapper" />
    <div className="margin line" />
    {props.sp && <div className="margin line" />}
    <OurClient className="wrapper" />
    {props.sp && <div className="margin line" />}
    <Email className="margin thumbnail" />
    {props.sp && <div className="margin line" />}
    <Lead className="wrapper">
      多極的な視点で物事を考えられるライターを常に募集しています。キャリアや経験はハシゴではなくジャングルジム。常識とは異なった視点で、ライティングを通じ、未来の解像度を上げていって下さい。読書好き、旅行好き、運動好きであればパーフェクト!
    </Lead>
    <div className="wrapper">
      <Button className="button">詳しくはこちらから</Button>
    </div>
    {props.sp && <div className="margin line" />}
    {props.sp && <div className="margin line" />}
  </div>
)

const StyledComponent = styled(Component)`
  padding: 15.5rem 0;
  ${styles.media.sp} {
    padding: 0;
  }
  > .margin {
    margin-top: 7rem;
    ${styles.media.sp} {
      margin-top: 3rem;
    }
  }
  > .wrapper {
    margin: 7rem auto 0;
    width: 70rem;
    ${styles.media.sp} {
      margin: 3rem auto 0;
      width: calc(100% - 6rem);
    }
  }
  > .logo {
    width: 100%;
    height: 47.5rem;
    ${styles.media.sp} {
      margin-top: 9.5rem;
    }
  }
  > .thumbnail {
    width: 100%;
    height: 47.5rem;
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
  const sp = useSelector((state: StateTypes) => state.media.sp)
  return <StyledComponent sp={sp} {...props} />
}

export default Container
