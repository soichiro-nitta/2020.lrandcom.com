import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import Logo from '~/components/about/Logo'
import Lead from '~/components/about/lead'
import Thumbnail from '~/components/about/Thumbnail'
import Outline from '~/components/about/Outline'
import OurClient from '~/components/about/OurClient'
import Email from '~/components/about/Email'
import { config } from '~/utils/config'
import Button from '~/components/base/Button'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Logo className="thumbnail" />
    <Lead className="wrapper">{config.about.lead.company}</Lead>
    <Thumbnail className="margin thumbnail" />
    <Outline className="wrapper" />
    <div className="margin line" />
    <OurClient className="wrapper" />
    <Email className="margin thumbnail" />
    <Lead className="wrapper">{config.about.lead.recruit}</Lead>
    <div className="wrapper">
      <Button className="button">{config.about.button}</Button>
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
    opacity: 0.1;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug('/ABOUT'))
  dispatch(setUpperLeft({ type: 'back', to: '/', text: 'ホームに戻る' }))
  return <StyledComponent {...props} />
}

export default Container
