import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  slug: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>/{props.slug.toUpperCase()}</div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  margin: auto;
  width: 100%;
  height: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1rem;
  transform: skew(-10deg);
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
