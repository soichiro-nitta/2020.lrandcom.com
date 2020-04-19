import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.children}</div>
)

const StyledComponent = styled(Component)`
  padding: 5rem;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  background: #1c1c1c;
  border: 1px solid #191919;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
