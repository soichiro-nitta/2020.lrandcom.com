import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import { BlockTypes } from '~/types'
import { textBlock } from '~/lib/notion/renderers'
import { getImagePath } from '~/lib/blog-helpers'

type ContainerProps = {
  className: string
  blocks: BlockTypes[]
}
type ComponentProps = {} & ContainerProps

const _renderBlock = (block: BlockTypes): React.ReactElement => {
  switch (block.value.type) {
    case 'text': {
      if (block.value.properties) {
        return (
          <div className="text">
            {textBlock(block.value.properties.title, true, block.value.id)}
          </div>
        )
      } else {
        return <div className="break" />
      }
      break
    }
    case 'quote': {
      return (
        <div className="quote">
          {textBlock(block.value.properties.title, true, block.value.id)}
        </div>
      )
      break
    }
    case 'image': {
      const path = getImagePath(
        block.value.format.display_source,
        block.value.id
      )
      return (
        <div className="image">
          <img src={path} />
        </div>
      )
      break
    }
  }
}

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.blocks.map((block, index) => {
      return <React.Fragment key={index}>{_renderBlock(block)}</React.Fragment>
    })}
  </div>
)

const StyledComponent = styled(Component)`
  > .text {
    ${styles.mixins.lhCrop(1.6)}
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    opacity: 0.65;
  }
  > .text a {
    text-decoration: underline;
  }
  > .break {
    width: 100%;
    height: 3rem;
  }
  > .quote {
    ${styles.mixins.lhCrop(1.6)}
    padding: 0.3rem 2rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    border-left: 0.2rem solid white;
    opacity: 0.65;
  }
  > .image {
    width: 100%;
    height: 23vw;
    overflow: hidden;
  }
  > .image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
