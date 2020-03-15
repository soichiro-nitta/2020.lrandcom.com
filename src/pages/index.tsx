import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import styles from '~/utils/styles'
import Noise from '~/components/base/Noise'

type ContainerProps = {}
type ComponentProps = {
  className: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="line" />
    <section>
      <div className="video">
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
      <div className="copy">
        <span>
          もっとクリエイティブなマーケティングの
          <br />
          やり方があるはずだ。
        </span>
      </div>
    </section>
    <section>section2</section>
    <section>section3</section>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  height: 100%;
  > .line {
    position: fixed;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
  > section {
    flex: 0 0 100vw;
    ${styles.mixins.flexCenter};
    position: relative;
    width: 100vw;
    height: 100%;
  }
  > * > .video {
    position: relative;
    width: 75rem;
    height: 37.5rem;
  }
  > * > * > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
  > * > * > .noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  > * > .copy {
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
  const dispatch = useDispatch()
  dispatch(setSlug('LEADING & COMPANY'))
  dispatch(setUpperLeft({ type: 'logo', to: '/', text: '' }))

  useEffect(() => {
    const page = document.getElementById('page')
    const onwheel = (e): void => {
      page.scrollLeft += e.deltaY
    }
    window.addEventListener('wheel', onwheel)
    return (): void => {
      window.removeEventListener('wheel', onwheel)
    }
  }, [])

  return <StyledComponent className="index" {...props} />
}

export default Container
