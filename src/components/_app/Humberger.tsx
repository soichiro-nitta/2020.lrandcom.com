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
  transform: skew(-5deg);
  > .bo1 {
    width: 100%;
    height: 0.15rem;
    background: white;
    opacity: 0.5;
  }
  > .bo2 {
    margin-top: 0.6rem;
    width: 100%;
    height: 0.15rem;
    background: white;
  }
  > .bo3 {
    margin-top: 0.6rem;
    width: 100%;
    height: 0.15rem;
    background: white;
    opacity: 0.5;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
