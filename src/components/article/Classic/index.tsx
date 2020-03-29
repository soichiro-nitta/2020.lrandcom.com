import React from 'react'
import styled from 'styled-components'
import Title from '~/components/article/title'
import Body from '~/components/article/body'
import Author from '~/components/article/author'
import Date from '~/components/article/date'
import { PageTypes } from '~/types'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  pages: PageTypes[]
  date: string
  thumbnail: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.pages.map((page, index) => {
      return (
        <div className="page" key={index}>
          {index === 0 && (
            <>
              <div className="thumbnail">
                <img src={props.thumbnail} />
                <Title className="title" title={page.title} />
              </div>
              <Date className="date" date={props.date} />
              <Author className="author" />
            </>
          )}
          <Body className="body" body={page.body} />
        </div>
      )
    })}
  </div>
)

const StyledComponent = styled(Component)`
  > * > .thumbnail {
    ${styles.mixins.absoluteCenter};
    width: calc(100% - 22rem);
    height: calc(100% - 22rem);
  }
  > * > * > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
  > * > * > .title {
    ${styles.mixins.absoluteCenter};
  }
  > * > * > * > .author {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const body = props.pages[0].body
  if (body[0].type === 'image') {
    // 1まいめの画像を除去
    body.shift()
  }

  return <StyledComponent {...props} />
}

export default Container
