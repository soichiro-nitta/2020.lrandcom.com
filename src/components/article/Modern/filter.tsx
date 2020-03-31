import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className} />
)

const StyledComponent = styled(Component)`
  ${styles.mixins.absoluteCenter}
  background: linear-gradient(48.1519deg, rgb(0, 0, 0) 3.83696%, rgb(34, 34, 34) 73.2572%);
  opacity: 0.8;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
