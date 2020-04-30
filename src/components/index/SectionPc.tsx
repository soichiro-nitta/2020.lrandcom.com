import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import Button from '~/components/base/Button'
import IncludeBr from '~/components/base/IncludeBr'

type ContainerProps = {
  className: string
  title: string
  description: string
  link?: string
  button?: string
  src: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="inner">
      <div className="contents">
        <div className="title">{props.title}</div>
        <IncludeBr className="description" text={props.description} />
        {props.button && <Button className="button">{props.button}</Button>}
      </div>
      <div className="video">
        <video src={props.src} preload="none" autoPlay muted playsInline loop />
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  > .inner {
    ${styles.mixins.flexCenter};
    justify-content: space-between;
    margin: 0 auto;
    width: 75vw;
    height: 100%;
  }
  > * > .contents {
    width: 30vw;
    .title {
      font-size: 4.2rem;
      font-weight: bold;
      line-height: 1;
      letter-spacing: 0.5rem;
      transform: skew(-5deg);
    }
    .description {
      ${styles.mixins.lhCrop(1.6)}
      margin-top: 4.5rem;
    }
  }
  > * > * > .button {
    margin-top: 4.5rem;
  }
  > * > .video {
    position: relative;
    width: 37.5vw;
    height: 18.75;
  }
  > * > * > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
