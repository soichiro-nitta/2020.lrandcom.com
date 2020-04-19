import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>Nav</div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  display: none;
  height: 0;
  background: black;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
