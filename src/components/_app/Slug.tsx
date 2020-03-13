import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import { useSelector } from 'react-redux'
import { StateTypes } from '~/store'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  slug: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{props.slug}</div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  font-size: 2rem;
  font-family: din-condensed;
  letter-spacing: 0.5rem;
  transform: scaleY(0.7) skew(-5deg);
`

const Container: React.FC<ContainerProps> = props => {
  const slug = useSelector((state: StateTypes) => state.slug.slug)
  return <StyledComponent slug={slug} {...props} />
}

export default Container
