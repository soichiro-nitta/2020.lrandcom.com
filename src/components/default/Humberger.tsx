import React, { useRef } from 'react'
import styled from 'styled-components'
import { styles } from '~/utils/styles'
import { useDispatch, useSelector } from 'react-redux'
import { setHumberger } from '~/store/header'
import { StateTypes } from '~/store'
import animations from '~/utils/animations'
import { functions } from '~/utils/functions'
import useEffectAsync from '~/hooks/useEffectAsync'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  refs: {
    line1: React.MutableRefObject<HTMLDivElement | null>
    line2: React.MutableRefObject<HTMLDivElement | null>
    line3: React.MutableRefObject<HTMLDivElement | null>
  }
  toggleMenu: () => void
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className} onClick={props.toggleMenu}>
    <div className="wrapper">
      <div className="lines">
        <div className="line1" ref={props.refs.line1} />
        <div className="line2" ref={props.refs.line2} />
        <div className="line3" ref={props.refs.line3} />
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
  }
`
const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const humberger = useSelector((state: StateTypes) => state.header.humberger)
  const isPlaying = useSelector(
    (state: StateTypes) => state.navigation.isPlaying
  )
  const refs = {
    line1: useRef<HTMLDivElement>(null),
    line2: useRef<HTMLDivElement>(null),
    line3: useRef<HTMLDivElement>(null)
  }
  const toggleMenu = async (): Promise<void> => {
    if (isPlaying) return
    dispatch(setHumberger(!humberger))
  }
  useEffectAsync({
    effect: async () => {
      if (refs.line1.current && refs.line2.current && refs.line3.current) {
        if (humberger) {
          animations.rotation(refs.line1.current, '45deg', 1, 'InOut')
          animations.y(refs.line1.current, '0.75rem', 1, 'InOut')
          animations.rotation(refs.line3.current, '-45deg', 1, 'InOut')
          animations.y(refs.line3.current, '-0.75rem', 1, 'InOut')
          animations.scaleX(refs.line2.current, 2, 0.5, 'In')
          await functions.delay(0.5)
          animations.scaleX(refs.line2.current, 0, 0.5, 'Out')
        } else {
          animations.rotation(refs.line1.current, '0deg', 1, 'InOut')
          animations.y(refs.line1.current, '0', 1, 'InOut')
          animations.rotation(refs.line3.current, '0deg', 1, 'InOut')
          animations.y(refs.line3.current, '0', 1, 'InOut')
          animations.scaleX(refs.line2.current, 2, 0.5, 'In')
          await functions.delay(0.5)
          animations.scaleX(refs.line2.current, 1, 0.5, 'Out')
        }
      }
    },
    deps: [humberger]
  })
  return <StyledComponent refs={refs} toggleMenu={toggleMenu} {...props} />
}

export default Container
