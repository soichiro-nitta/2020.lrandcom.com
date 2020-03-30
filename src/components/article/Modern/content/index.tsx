import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import Title from '~/components/article/title'
import Body from '~/components/article/body'
import Author from '~/components/article/author'
import Date from '~/components/article/date'

type ContainerProps = {
  className: string
  title: string
  body: React.ReactElement[]
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
        <Body className="body">
          {props.body.map((blockElement, index) => {
            return <React.Fragment key={index}>{blockElement}</React.Fragment>
          })}
        </Body>
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
