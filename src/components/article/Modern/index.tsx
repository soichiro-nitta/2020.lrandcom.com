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
import { functions } from '~/utils/functions'
import useEffectAsync from '~/hooks/useEffectAsync'
import { BlockTypes } from '~/types'
import { textBlock } from '~/lib/notion/renderers'

type PageTypes = {
  title: string
  image: string
  body: React.ReactElement[]
}
type ContainerProps = {
  className: string
  date: string
  blocks: BlockTypes[]
  title: string
}
type ComponentProps = {
  pagesRef: React.MutableRefObject<HTMLDivElement>[]
  pages: PageTypes[]
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
    bottom: 7.5rem;
    left: 7.5rem;
  }
`

const _createPages = (title: string, blocks: BlockTypes[]): PageTypes[] => {
  const pages: PageTypes[] = []
  let page: PageTypes = {
    title,
    image: '',
    body: []
  }
  const last = blocks.length - 1
  blocks.forEach((block, index) => {
    switch (block.value.type) {
      case 'sub_header': {
        pages.push(page)
        page = { title: '', image: '', body: [] }
        page.title = block.value.properties.title[0][0]
        break
      }
      case 'image': {
        page.image = `/api/asset?assetUrl=${encodeURIComponent(
          block.value.format.display_source
        )}&blockId=${block.value.id}`
        break
      }
      case 'text': {
        if (block.value.properties) {
          page.body.push(
            <div className="text">
              {textBlock(block.value.properties.title, true, block.value.id)}
            </div>
          )
        } else {
          page.body.push(<div className="break" />)
        }
        break
      }
      case 'quote': {
        page.body.push(
          <div className="quote">
            {textBlock(block.value.properties.title, true, block.value.id)}
          </div>
        )
      }
    }
    if (index === last) pages.push(page)
  })
  return pages
}

const Container: React.FC<ContainerProps> = props => {
  const pages = _createPages(props.title, props.blocks)
  const currentNum = useSelector(
    (state: StateTypes) => state.article.currentNum
  )
  const beforeNum = usePrevious(currentNum)
  const pagesRef = []
  pages.forEach(() => {
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
  return <StyledComponent pages={pages} pagesRef={pagesRef} {...props} />
}

export default Container
