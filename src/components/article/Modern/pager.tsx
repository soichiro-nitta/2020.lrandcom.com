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
      <span>{config.article.prev.text}</span>
    </div>
    <div className="num">
      {props.currentNum} / {props.total}
    </div>
    <div className="next" onClick={props.next}>
      <span>{config.article.next.text}</span>
      <FontAwesomeIcon className="right" icon={config.article.next.icon} />
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  letter-spacing: 0.4rem;
  > .prev,
  > .next {
    display: flex;
    align-items: center;
  }
  > * > .left {
    font-size: 2rem;
    transform: skew(-15deg);
  }
  > * > span {
    display: inline-block;
    margin-left: 40px;
  }
  > .num {
    margin-left: 40px;
  }
  > * > .right {
    margin-left: 40px;
    font-size: 2rem;
    transform: skew(-15deg);
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
