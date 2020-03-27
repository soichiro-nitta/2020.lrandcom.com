import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import IncludeBr from '~/components/base/IncludeBr'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <IncludeBr className="includeBr" text={props.children as string} />
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.lhCrop(1.6)}
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  white-space: pre-wrap;
  opacity: 0.65;
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
