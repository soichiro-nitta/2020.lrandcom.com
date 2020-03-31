import React from 'react'
import styled from 'styled-components'
import Title from '~/components/article/title'
import Blocks from '~/components/article/blocks'
import Author from '~/components/article/author'
import Date from '~/components/article/date'
import { BlockTypes } from '~/types'

type SectionTypes = {
  title: string
  blocks: BlockTypes[]
}
type ContainerProps = {
  className: string
  date: string
  title: string
  blocks: BlockTypes[]
}
type ComponentProps = {
  sections: SectionTypes[]
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.sections.map((section, index) => {
      return (
        <div className="page" key={index}>
          <div className="inner">
            <div className="left">
              <Title className="title" title={section.title} />
            </div>
            <div className="right">
              {index === 0 && (
                <>
                  <Date className="date" date={props.date} />
                  <Author className="author" />
                </>
              )}
              <Blocks className="blocks" blocks={section.blocks} />
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

const StyledComponent = styled(Component)`
  margin: 22rem auto;
  width: 70%;
  > .page {
    margin-top: 6rem;
  }
  > * > .inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  > * > * > .left {
    width: 30%;
  }
  > * > * > .right {
    width: 62%;
  }
  > * > * > * > .author {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`

const _createSections = (
  title: string,
  blocks: BlockTypes[]
): SectionTypes[] => {
  const sections: SectionTypes[] = []
  let section: SectionTypes = {
    title,
    blocks: []
  }
  const last = blocks.length - 1
  blocks.forEach((block, index) => {
    switch (block.value.type) {
      case 'sub_header':
        sections.push(section)
        section = { title: '', blocks: [] }
        section.title = block.value.properties.title[0][0]
        break

      default:
        section.blocks.push(block)
        break
    }
    if (index === last) sections.push(section)
  })
  return sections
}

const Container: React.FC<ContainerProps> = props => {
  const sections = _createSections(props.title, props.blocks)
  return <StyledComponent sections={sections} {...props} />
}

export default Container
