import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.children}</div>
)

const StyledComponent = styled(Component)`
  padding: 5rem;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background: #1f1f1f;
  border: 1px solid #181818;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
