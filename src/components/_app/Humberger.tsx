import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="bo1" />
    <div className="bo2" />
    <div className="bo3" />
  </div>
)

const StyledComponent = styled(Component)`
  width: 6rem;
  height: 2.75rem;
  transform: skew(-10deg);
  > .bo1 {
    width: 100%;
    height: 0.25rem;
    background: white;
    opacity: 0.5;
  }
  > .bo2 {
    margin-top: 1rem;
    width: 100%;
    height: 0.25rem;
    background: white;
  }
  > .bo3 {
    margin-top: 1rem;
    width: 100%;
    height: 0.25rem;
    background: white;
    opacity: 0.5;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
