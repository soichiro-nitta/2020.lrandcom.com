import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import Title from '~/components/index/title'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Title className="title">主要取引先</Title>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter};
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
