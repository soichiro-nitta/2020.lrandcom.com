import React, { useRef } from 'react'
import styled from 'styled-components'
import Heading2 from '~/components/base/Heading2'
import { styles } from '~/utils/styles'
import useEffectAsync from '~/hooks/useEffectAsync'
import { useSelector, useDispatch } from 'react-redux'
import { StateTypes } from '~/store'
import { functions } from '~/utils/functions'
import animations from '~/utils/animations'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  refs: {
    text1: React.MutableRefObject<HTMLDivElement | null>
    text2: React.MutableRefObject<HTMLDivElement | null>
    text3: React.MutableRefObject<HTMLDivElement | null>
  }
  // hover: ({ target }: React.MouseEvent) => void
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <ul>
      <li>
        <div className="text">
          <Heading2 className="heading2">トップページ</Heading2>
        </div>
        <div className="text face" ref={props.refs.text1}>
          <Heading2 className="heading2">トップページ</Heading2>
        </div>
      </li>
      <li>
        <div className="text">
          <Heading2 className="heading2">お問い合わせ・会社概要</Heading2>
        </div>
        <div className="text face" ref={props.refs.text2}>
          <Heading2 className="heading2">お問い合わせ・会社概要</Heading2>
        </div>
      </li>
      <li>
        <div className="text">
          <Heading2 className="heading2">記事を読む</Heading2>
        </div>
        <div className="text face" ref={props.refs.text3}>
          <Heading2 className="heading2">記事を読む</Heading2>
        </div>
      </li>
    </ul>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  > ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  > * > li {
    position: relative;
    height: 100%;
  }
  > * > * > .text {
    ${styles.mixins.flexCenter}
    height: 100%;
    opacity: 0.5;
  }
  > * > * > .text.face {
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }
  > * > * > * > .heading2 {
    font-size: 3rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const humberger = useSelector((state: StateTypes) => state.header.humberger)
  const navigation = useSelector((state: StateTypes) => state.navigation)
  const refs = {
    text1: useRef<HTMLDivElement>(null),
    text2: useRef<HTMLDivElement>(null),
    text3: useRef<HTMLDivElement>(null)
  }
  // const hover = ({ target }: React.MouseEvent): void => {
  //   if (refs.text1.current && refs.text2.current && refs.text3.current) {
  //     animations.opacity(
  //       [refs.text1.current, refs.text2.current, refs.text3.current],
  //       0,
  //       1,
  //       'InOut'
  //     )
  //     animations.opacity(target as HTMLElement, 1, 1, 'InOut')
  //   }
  // }

  useEffectAsync({
    effect: async () => {
      if (refs.text1.current && refs.text2.current && refs.text3.current) {
        if (humberger && !navigation.opened) {
          await functions.delay(1)
          animations.opacity(refs.text2.current, 1, 1, 'InOut')
          await functions.delay(0.05)
          animations.opacity(refs.text1.current, 1, 1, 'InOut')
          animations.opacity(refs.text3.current, 1, 1, 'InOut')
        } else if (!humberger && navigation.opened) {
          await functions.delay(2)
          animations.set(
            [refs.text1.current, refs.text2.current, refs.text3.current],
            {
              opacity: 0
            }
          )
        }
      }
    },
    deps: [
      dispatch,
      humberger,
      navigation.opened,
      refs.text1,
      refs.text2,
      refs.text3
    ]
  })

  return <StyledComponent refs={refs} {...props} />
}

export default Container
