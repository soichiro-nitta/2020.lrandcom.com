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
  const slug = useSelector((state: StateTypes) => state.slug.slug)
  return <StyledComponent slug={slug} {...props} />
}

export default Container
