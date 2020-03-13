import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <ReactSVG className={props.className} src="/logo.svg" />
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
