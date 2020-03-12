import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  slug: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>/{props.slug}</div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  margin: auto;
  width: 100%;
  height: 20px;
  font-size: 1.4rem;
  letter-spacing: 0.4rem;
  transform: skew(-15deg);
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
