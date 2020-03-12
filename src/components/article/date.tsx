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
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.5rem;
  opacity: 0.5;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
