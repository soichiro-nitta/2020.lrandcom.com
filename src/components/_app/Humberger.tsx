import React from 'react'
import styled from 'styled-components'

type ContainerProps = {}
type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <div className="bo1" />
    <div className="bo2" />
    <div className="bo3" />
  </div>
)

const StyledComponent = styled(Component)`
  position: fixed;
  top: 58px;
  right: 60px;
  width: 50px;
  height: 20px;
  transform: skew(-15deg);
  > .bo1 {
    width: 100%;
    height: 2px;
    background: white;
    opacity: 0.5;
  }
  > .bo2 {
    margin-top: 8px;
    width: 100%;
    height: 2px;
    background: white;
  }
  > .bo3 {
    margin-top: 8px;
    width: 100%;
    height: 2px;
    background: white;
    opacity: 0.5;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="humberger" {...props} />
}

export default Container
