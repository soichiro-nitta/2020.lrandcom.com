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
}
type ComponentProps = {
  thumbnail: string
} & ContainerProps

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
          <div className="contents">
            {index !== 0 && <Title className="title" title={page.title} />}
            <Body className="body" body={page.body} />
          </div>
        </div>
      )
    })}
  </div>
)

const StyledComponent = styled(Component)`
  margin: 20rem auto;
  width: 65rem;
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
  > * > .date {
    margin-top: 3rem;
  }
  > * > .author {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  let thumbnail = ''
  const body = props.pages[0].body
  const block = body[0]
  if (block.type === 'image') {
    thumbnail = block.value as string
    body.shift()
  }

  return <StyledComponent thumbnail={thumbnail} {...props} />
}

export default Container
