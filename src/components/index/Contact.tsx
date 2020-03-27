import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import Title from '~/components/index/title'
import config from '~/utils/config'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  client: string[]
  last: number
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="head">
      <Title className="title">{config.index.contact.title}</Title>
      <div className="notes">{config.index.contact.notes}</div>
    </div>
    <div className="body">
      社名：リーディング＆カンパニー株式会社（Leading & Company Inc.）
      <br />
      設立：2014年2月
      <br />
      本社所在地： 東京都渋谷区東1-1-37 大希青山ビル 3階
      <br />
      代表取締役：夏目 力
      <br />
      事業内容：Webコンテンツの制作、Webサイト制作、動画制作
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter};
  > * > .notes {
    ${styles.mixins.lhCrop(1.6)}
    margin-top: 4.5rem;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    opacity: 0.65;
  }
  > .head {
    width: 30vw;
  }
  > .body {
    ${styles.mixins.lhCrop(3)};
    margin-left: 7.5vw;
    padding: 5rem;
    width: 37.5vw;
    height: 18.75;
    background: #1f1f1f;
    border: 1px solid #181818;
  }
  > .body > span {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
  > .body > .companyName {
    letter-spacing: 0.1rem;
    font-weight: bold;
    opacity: 0.65;
  }
  > .body > .slash {
    letter-spacing: 0.5rem;
    opacity: 0.3;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const client = config.index.ourClient.client
  const last = client.length - 1
  return <StyledComponent client={client} last={last} {...props} />
}

export default Container
