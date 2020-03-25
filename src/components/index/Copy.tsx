import React from 'react'
import styled from 'styled-components'
import Noise from '~/components/base/Noise'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="video">
      {/* <img
        src="https://i.gyazo.com/6eed0ba0543e17fe0d23de6c21b39ca2.png"
        alt=""
        srcSet=""
      /> */}
      <video
        src="https://lrandcom.kagoyacloud.com/static/index/pc.mp4"
        preload="none"
        autoPlay
        muted
        playsInline
        loop
      />
      <Noise className="noise" />
    </div>
    <div className="text">
      <span>
        もっとクリエイティブなマーケティングの
        <br />
        やり方があるはずだ。
      </span>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter};
  position: relative;
  > .video {
    position: relative;
    width: 75rem;
    height: 37.5rem;
  }
  > * > video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
  > * > .noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  > .text {
    ${styles.mixins.lhCrop(1.7)};
    ${styles.mixins.flexCenter};
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 4.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    transform: skew(-5deg);
    text-decoration: underline;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container