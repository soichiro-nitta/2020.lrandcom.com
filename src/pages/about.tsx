import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import Logo from '~/components/about/Logo'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Logo className="logo" />
  </div>
)

const StyledComponent = styled(Component)`
  > .logo {
    margin-top: 15.5rem;
    width: 100%;
    height: 30rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug('/ABOUT'))
  dispatch(setUpperLeft({ type: 'back', to: '/', text: 'ホームに戻る' }))
  return <StyledComponent {...props} />
}

export default Container
