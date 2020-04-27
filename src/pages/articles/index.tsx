import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import { styles } from '~/utils/styles'
import { ArticleTypes } from '~/types'
import { api } from '~/api'
import { functions } from '~/utils/functions'

type ContainerProps = {
  articles: ArticleTypes[]
}
type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    {props.articles.map(article => {
      return (
        <div className="article" key={article.slug}>
          <div className="thumbnail">
            <img src={article.thumbnail.url} alt="" />
          </div>
          <div className="title">{article.title}</div>
          <div className="publishedAt">
            {functions.date(article.publishedAt)}
          </div>
        </div>
      )
    })}
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16rem auto;
  width: 75%;
  /* font-size: 1.4rem;
  line-height: 2;
  letter-spacing: 0.1rem;
  white-space: pre-wrap;
  font-weight: 400;
  font-style: normal;
  opacity: 0.65; */
  > .article:not(:nth-child(1)):not(:nth-child(2)) {
    margin-top: 10rem;
  }
  > .article {
    width: 45%;
    .thumbnail {
      width: 100%;
      height: 23rem;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .title {
      ${styles.mixins.lhCrop(1.8)}
      margin-top: 3rem;
      padding: 0 7rem;
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.2rem;
    }
    .publishedAt {
      margin-top: 2rem;
      text-align: center;
      font-size: 1.1rem;
      line-height: 1;
      letter-spacing: 0.2rem;
      opacity: 0.4;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug('ARTICLES'))
  dispatch(setUpperLeft({ type: 'back', to: '/', text: 'ホームに戻る' }))

  return <StyledComponent className="articles" {...props} />
}

export default Container

// eslint-disable-next-line @typescript-eslint/camelcase
export const getStaticProps = async (): Promise<{
  props: ContainerProps
  unstable_revalidate: number
}> => {
  const articles = await api.getArticles()

  return {
    props: {
      articles
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    unstable_revalidate: 10
  }
}
