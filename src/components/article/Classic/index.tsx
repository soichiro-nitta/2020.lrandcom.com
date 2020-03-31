import React from 'react'
import styled from 'styled-components'
// import Heading1 from '~/components/base/Heading1'
import Blocks from '~/components/article/blocks'
import Author from '~/components/article/author'
import Date from '~/components/article/date'
import { BlockTypes } from '~/types'
import { getImagePath } from '~/lib/blog-helpers'
import Header from '~/components/article/Classic/header'

type ClassicTypes = {
  thumbnail: string
  blocks: BlockTypes[]
}
type ContainerProps = {
  className: string
  title: string
  date: string
  blocks: BlockTypes[]
}
type ComponentProps = {
  classic: ClassicTypes
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Header
      className="header"
      title={props.title}
      thumbnail={props.classic.thumbnail}
    />
    <div className="body">
      <Date className="date" date={props.date} />
      <Author className="author" />
      <Blocks className="blocks" blocks={props.classic.blocks} />
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  padding-bottom: 15.5rem;
  > .body {
    margin: 0 auto;
    width: 57rem;
  }
  > * > .author {
    margin-top: 3rem;
  }
`

const _createClassic = (blocks: BlockTypes[]): ClassicTypes => {
  const classic: ClassicTypes = {
    thumbnail: '',
    blocks: []
  }
  blocks.forEach((block, index) => {
    switch (block.value.type) {
      case 'image': {
        if (index === 0) {
          classic.thumbnail = getImagePath(
            block.value.format.display_source,
            block.value.id
          )
        } else {
          classic.blocks.push(block)
        }
        break
      }
      default: {
        classic.blocks.push(block)
        break
      }
    }
  })
  return classic
}

const Container: React.FC<ContainerProps> = props => {
  const classic = _createClassic(props.blocks)
  return <StyledComponent classic={classic} {...props} />
}

export default Container
