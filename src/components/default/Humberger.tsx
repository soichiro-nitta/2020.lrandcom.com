import React from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import { useDispatch, useSelector } from 'react-redux'
import { setHumberger } from '~/store/header'
import { StateTypes } from '~/store'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  toggleMenu: () => void
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className} onClick={props.toggleMenu}>
    <div className="wrapper">
      <div className="lines">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  padding: 6rem;
  cursor: pointer;
  > .wrapper {
    ${styles.mixins.flexCenter}
    width: 4rem;
    height: 3.5rem;
  }
  > * > .lines {
    width: 100%;
    height: 1.65rem;
  }
  > * > * > .line1 {
    width: 100%;
    height: 0.15rem;
    background: white;
    opacity: 0.5;
  }
  > * > * > .line2 {
    margin-top: 0.6rem;
    width: 100%;
    height: 0.15rem;
    background: white;
  }
  > * > * > .line3 {
    margin-top: 0.6rem;
    width: 100%;
    height: 0.15rem;
    background: white;
    opacity: 0.5;
  }
`
const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const humberger = useSelector((state: StateTypes) => state.header.humberger)
  const isPlaying = useSelector(
    (state: StateTypes) => state.navigation.isPlaying
  )
  const toggleMenu = (): void => {
    if (isPlaying) return
    dispatch(setHumberger(!humberger))
  }
  return <StyledComponent toggleMenu={toggleMenu} {...props} />
}

export default Container
