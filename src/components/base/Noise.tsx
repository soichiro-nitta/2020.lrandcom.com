import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="inner" />
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;

  .inner {
    content: '';
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/base/noise.png');
    animation: 0.3s infinite noise;
  }

  @keyframes noise {
    0%,
    100% {
      background-position: 0 0;
    }
    10% {
      background-position: -5% -10%;
    }
    20% {
      background-position: -15% 5%;
    }
    30% {
      background-position: 7% -25%;
    }
    40% {
      background-position: 20% 25%;
    }
    50% {
      background-position: -25% 10%;
    }
    60% {
      background-position: 15% 5%;
    }
    70% {
      background-position: 0% 15%;
    }
    80% {
      background-position: 25% 35%;
    }
    90% {
      background-position: -10% 10%;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
