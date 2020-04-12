import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import Logo from '~/components/about/Logo'
import Lead from '~/components/about/lead'
import Thumbnail from '~/components/about/Thumbnail'
import Outline from '~/components/about/Outline'
import { config } from '~/utils/config'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Logo className="logo" />
    <Lead className="lead">{config.about.lead.company}</Lead>
    <Thumbnail className="thumbnail" />
    <Outline className="outline" />
  </div>
)

const StyledComponent = styled(Component)`
  > .logo {
    margin-top: 15.5rem;
    width: 100%;
    height: 30rem;
  }
  > .lead {
    margin: 6rem auto 0;
    width: 70rem;
  }
  > .thumbnail {
    margin: 6rem auto 0;
    width: 100%;
    height: 50rem;
  }
  > .outline {
    margin: 6rem auto 0;
    width: 70rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug('/ABOUT'))
  dispatch(setUpperLeft({ type: 'back', to: '/', text: 'ホームに戻る' }))
  return <StyledComponent {...props} />
}

export default Container
