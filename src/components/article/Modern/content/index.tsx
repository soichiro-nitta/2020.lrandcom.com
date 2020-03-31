import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import Title from '~/components/article/title'
import Blocks from '~/components/article/blocks'
import Author from '~/components/article/author'
import Date from '~/components/article/date'
import { BlockTypes } from '~/types'

type ContainerProps = {
  className: string
  title: string
  blocks: BlockTypes[]
  date: string
  index: number
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="inner">
      <div className="left">
        <Title className="title" title={props.title} />
      </div>
      <div className="right">
        {props.index === 0 && (
          <>
            <Date className="date" date={props.date} />
            <Author className="author" />
          </>
        )}
        <Blocks className="blocks" blocks={props.blocks} />
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter}
  ${styles.mixins.absoluteCenter}
  width: 100%;
  height: 100%;
  > .inner {
    display: flex;
    justify-content: space-between;
    width: 75%;
  }
  > * > .left {
    width: 30%;
  }
  > * > .right {
    width: 62%;
  }
  > * > * > .author {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
