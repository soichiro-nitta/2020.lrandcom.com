import React, { useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/useEffectAsync'
import { functions } from '~/utils/functions'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  refs: {
    root: React.MutableRefObject<HTMLDivElement | null>
  }
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className} ref={props.refs.root} />
)

const StyledComponent = styled(Component)`
  background: white;
  opacity: 1;
  transform: scaleX(0);
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const humberger = useSelector((state: StateTypes) => state.header.humberger)
  const navigation = useSelector((state: StateTypes) => state.navigation)
  const refs = {
    root: useRef<HTMLDivElement>(null)
  }

  useEffectAsync({
    effect: async () => {
      if (refs.root.current) {
        if (humberger && !navigation.opened) {
          await functions.delay(1)
          animations.scaleX(refs.root.current, 1, 1, 'InOut')
          animations.opacity(refs.root.current, 0.1, 1, 'InOut')
        } else if (!humberger && navigation.opened) {
          await functions.delay(2)
          animations.set(refs.root.current, {
            scaleX: 0,
            opacity: 1
          })
        }
      }
    },
    deps: [dispatch, humberger, navigation.opened, refs.root]
  })

  return <StyledComponent refs={refs} {...props} />
}

export default Container
