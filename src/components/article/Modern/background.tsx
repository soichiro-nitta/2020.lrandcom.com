import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  src: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <img src={props.src} decoding="async" />
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.absoluteCenter}
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
