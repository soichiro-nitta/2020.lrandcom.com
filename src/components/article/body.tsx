import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.children}</div>
)

const StyledComponent = styled(Component)`
  > .text {
    ${styles.mixins.lhCrop(1.6)}
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    opacity: 0.65;
  }
  > .text a {
    text-decoration: underline;
  }
  > .break {
    width: 100%;
    height: 3rem;
  }
  > .quote {
    ${styles.mixins.lhCrop(1.6)}
    padding: 0.3rem 2rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    border-left: 0.2rem solid white;
    opacity: 0.65;
  }
  > .mask {
    width: 100%;
    height: 23vw;
    overflow: hidden;
  }
  > * > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
