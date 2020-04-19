import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import { useDispatch, useSelector } from 'react-redux'
import { StateTypes } from '~/store'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  refs: {
    inner: React.MutableRefObject<HTMLDivElement | null>
  }
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="inner" ref={props.refs.inner}>
      Nav
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  /* display: none;
  height: 0; */
  overflow: hidden;
  .inner {
    ${styles.mixins.flexCenter}
    width: 100%;
    height: 100%;
    background: black;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const humberger = useSelector((state: StateTypes) => state.header.humberger)
  const navigation = useSelector((state: StateTypes) => state.navigation)
  const refs = {
    inner: useRef<HTMLDivElement>(null)
  }
  const windowHeight = useSelector((state: StateTypes) => state.window.height)

  useEffect(() => {
    refs.inner.current.style.height = `${windowHeight}px`
  })

  useEffect(() => {
    if (humberger && !navigation.opened) {
      console.log('op')
    } else if (!humberger && navigation.opened) {
      console.log('ed')
    }
  }, [dispatch, humberger, navigation.opened])
  return <StyledComponent refs={refs} {...props} />
}

export default Container
