import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import { increment, decrement, setCurrent } from '~/store/article'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '~/utils/config'

type ContainerProps = {
  className: string
  total: number
}
type ComponentProps = {
  currentNum: number
  prev: () => void
  next: () => void
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="prev" onClick={props.prev}>
      <FontAwesomeIcon className="left" icon={config.article.prev.icon} />
      <div className="prevCircle" />
      <div className="prevCircle" />
      <span className="prevText">{config.article.prev.text}</span>
    </div>
    <div className="num">
      {props.currentNum} / {props.total}
    </div>
    <div className="next" onClick={props.next}>
      <span className="nextText">{config.article.next.text}</span>
      <div className="nextCircle1" />
      <div className="nextCircle2" />
      <FontAwesomeIcon className="right" icon={config.article.next.icon} />
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  > .prev,
  > .next {
    display: flex;
    align-items: center;
  }
  > * > .left {
    font-size: 1.8rem;
    line-height: 2rem;
  }
  > * > .prevCircle {
    margin-left: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }
  > * > .prevText {
    margin-left: 4rem;
    line-height: 1;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
  > .num {
    margin-left: 4rem;
    font-size: 2rem;
    font-family: din-condensed;
    line-height: 1;
    letter-spacing: 0.5rem;
    transform: scaleY(0.7);
  }
  > * > .right {
    margin-left: 0.3rem;
    font-size: 2rem;
  }
  > * > .nextCircle1 {
    margin-left: 4rem;
    width: 0.3rem;
    height: 0.3rem;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }
  > * > .nextCircle2 {
    margin-left: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }
  > * > .nextText {
    margin-left: 4rem;
    line-height: 1;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  const currentNum = useSelector(
    (state: StateTypes) => state.article.currentNum
  )
  const current = useSelector((state: StateTypes) => state.article.current)

  useEffect(() => {
    switch (currentNum) {
      case props.total:
        dispatch(setCurrent('last'))
        break
      case 1:
        dispatch(setCurrent('first'))
        break
      default:
        dispatch(setCurrent('middle'))
    }
  }, [currentNum])

  const next = (): void => {
    if (current !== 'last') dispatch(increment())
  }
  const prev = (): void => {
    if (current !== 'first') dispatch(decrement())
  }

  return (
    <StyledComponent
      currentNum={currentNum}
      prev={prev}
      next={next}
      {...props}
    />
  )
}

export default Container
