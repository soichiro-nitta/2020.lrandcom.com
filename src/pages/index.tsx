import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import Line from '~/components/index/Line'
import Copy from '~/components/index/Copy'
import Section from '~/components/index/Section'
import OurClient from '~/components/index/OurClient'
import config from '~/utils/config'

type ContainerProps = {}
type ComponentProps = {
  className: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Line className="line" />
    <div className="contents">
      <Copy className="section" />
      <Section
        className="section"
        title={config.index.writing.title}
        body={config.index.writing.body}
        src={config.index.writing.src}
      />
      <Section
        className="section"
        title={config.index.website.title}
        body={config.index.website.body}
        src={config.index.website.src}
      />
      <Section
        className="section"
        title={config.index.film.title}
        body={config.index.film.body}
        src={config.index.film.src}
      />
      <OurClient className="section" />
      {/* <Section className="section" />
    <Section className="section" /> */}
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  height: 100%;
  > .line {
    position: fixed;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 1px;
  }
  > .contents {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  > * > .section {
    flex: 0 0 100vw;
    width: 100vw;
    height: 100%;
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
