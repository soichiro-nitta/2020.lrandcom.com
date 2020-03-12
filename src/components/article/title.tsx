import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  title: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.title}</div>
)

const StyledComponent = styled(Component)`
  font-size: 1.8rem;
  font-weight: bold;
  ${styles.mixins.lhCrop(1.8)}
  letter-spacing: 0.2rem;
  transform: skew(-15deg);
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
