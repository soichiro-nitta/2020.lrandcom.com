import React from 'react'
import styled from 'styled-components'
import Title from '~/components/article/title'
import Body from '~/components/article/body'
import Author from '~/components/article/author'
import Date from '~/components/article/date'
import styles from '~/utils/styles'

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
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.pages.map((page, index) => {
      return (
        <div className="page" key={index}>
          <div className="inner">
            <div className="left">
              <Title className="title" title={page.title} />
            </div>
            <div className="right">
              {index === 0 && (
                <>
                  <Date className="date" date={props.date} />
                  <Author className="author" />
                </>
              )}
              <Body className="body" body={page.body} />
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

const StyledComponent = styled(Component)`
  margin: 22rem auto;
  width: 75%;
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

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
