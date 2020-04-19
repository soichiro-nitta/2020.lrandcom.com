import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { styles } from '~/utils/styles'
import Noise from '~/components/base/Noise'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Noise className="noise" />
    <ReactSVG src="/images/base/logo_full.svg" />
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;
  > .noise {
    ${styles.mixins.absoluteCenter}
    width: 100%;
    height: 100%;
  }
  svg {
    ${styles.mixins.absoluteCenter}
    width: 55rem;
    height: auto;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
