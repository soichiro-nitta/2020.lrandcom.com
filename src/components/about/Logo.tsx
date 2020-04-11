import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { styles } from '~/utils/styles'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <ReactSVG className={props.className} src="/logo_full.svg" />
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  background: #000;
  svg {
    width: 35rem;
    height: auto;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
