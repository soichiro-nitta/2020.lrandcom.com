import React, { useRef } from 'react'
import styled from 'styled-components'
import Pager from './pager'
import { useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import animations from '~/utils/animations'
import usePrevious from '~/hooks/usePrevious'
import Background from './background'
import Filter from './filter'
import Content from './content'
import functions from '~/utils/functions'
import useEffectAsync from '~/hooks/useEffectAsync'

type PageTypes = {
  title: string
  image: string
  body: { type: string; value: string }[]
}
type ContainerProps = {
  className: string
  pages: PageTypes[]
  date: string
}
type ComponentProps = {
  pagesRef: React.MutableRefObject<HTMLDivElement>[]
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.pages.map((page, index) => {
      return (
        <div className="page" ref={props.pagesRef[index]} key={index}>
          <Background className="background" src={page.image} />
          <Filter className="filter" />
          <Content
            className="content"
            title={page.title}
            body={page.body}
            date={props.date}
            index={index}
          />
        </div>
      )
    })}
    <Pager className="pager" total={props.pages.length} />
  </div>
)

const StyledComponent = styled(Component)`
  > .page {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  > .pager {
    position: absolute;
    bottom: 60px;
    left: 60px;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const currentNum = useSelector(
    (state: StateTypes) => state.article.currentNum
  )
  const beforeNum = usePrevious(currentNum)

  const pagesRef = []
  props.pages.forEach(() => {
    pagesRef.push(useRef<HTMLDivElement>(null))
  })

  useEffectAsync({
    effect: async () => {
      animations.set(pagesRef[currentNum - 1].current, { display: 'block' })
      animations.opacity(pagesRef[currentNum - 1].current, 1, 1, 'InOut')
      if (beforeNum) {
        animations.opacity(pagesRef[beforeNum - 1].current, 0, 1, 'InOut')
        await functions.delay(1)
        animations.set(pagesRef[beforeNum - 1].current, { display: 'none' })
      }
    },
    deps: [currentNum]
  })

  return <StyledComponent pagesRef={pagesRef} {...props} />
}

export default Container
