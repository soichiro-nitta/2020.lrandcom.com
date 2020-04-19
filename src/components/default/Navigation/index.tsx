import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import { useDispatch, useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/useEffectAsync'
import { functions } from '~/utils/functions'
import {
  startNavAnimation,
  completeNavAnimation,
  openNavigation,
  closeNavigation
} from '~/store/navigation'
import Line from '~/components/default/Navigation/line'
import List from '~/components/default/Navigation/list'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  refs: {
    root: React.MutableRefObject<HTMLDivElement | null>
    inner: React.MutableRefObject<HTMLDivElement | null>
  }
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className} ref={props.refs.root}>
    <div className="inner" ref={props.refs.inner}>
      <Line className="line" />
      <List className="list" />
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  display: none;
  overflow: hidden;
  .inner {
    ${styles.mixins.flexCenter}
    position: relative;
    width: 100%;
    height: 100%;
    background: black;
  }
  .line {
    ${styles.mixins.absoluteCenter}
    width: 100%;
    height: 1px;
  }
  .list {
    ${styles.mixins.absoluteCenter}
    width: 70%;
    height: 30rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const humberger = useSelector((state: StateTypes) => state.header.humberger)
  const navigation = useSelector((state: StateTypes) => state.navigation)
  const refs = {
    root: useRef<HTMLDivElement>(null),
    inner: useRef<HTMLDivElement>(null)
  }
  const windowHeight = useSelector((state: StateTypes) => state.window.height)

  useEffect(() => {
    if (refs.inner.current)
      refs.inner.current.style.height = `${windowHeight}px`
  }, [refs.inner, windowHeight])

  useEffectAsync({
    effect: async () => {
      if (refs.root.current) {
        if (humberger && !navigation.opened) {
          dispatch(startNavAnimation())
          refs.root.current.style.display = 'block'
          animations.height(refs.root.current, '100%', 1.5, 'InOut')
          await functions.delay(1.5)
          dispatch(completeNavAnimation())
          dispatch(openNavigation())
        } else if (!humberger && navigation.opened) {
          dispatch(startNavAnimation())
          animations.height(refs.root.current, '0%', 1.5, 'InOut')
          await functions.delay(1.5)
          dispatch(completeNavAnimation())
          dispatch(closeNavigation())
          refs.root.current.style.display = 'none'
        }
      }
    },
    deps: [dispatch, humberger, navigation.opened, refs.root]
  })
  return <StyledComponent refs={refs} {...props} />
}

export default Container
