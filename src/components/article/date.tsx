import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
  date: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.date}</div>
)

const StyledComponent = styled(Component)`
  margin: -0.3rem 0;
  font-size: 2rem;
  line-height: 1;
  letter-spacing: 0.5rem;
  transform: scaleY(0.7) skew(-5deg);
  opacity: 0.65;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
