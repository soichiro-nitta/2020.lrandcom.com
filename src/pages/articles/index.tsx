import * as React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import { ArticleTypes } from '~/types'
import { api } from '~/api'
import Article from '~/components/articles/Article'

type ContainerProps = {
  articles: ArticleTypes[]
}
type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    {props.articles.map(article => (
      <Article className="article" article={article} key={article.slug} />
    ))}
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16rem auto;
  width: 75%;
  > .article:not(:nth-child(1)):not(:nth-child(2)) {
    margin-top: 10rem;
  }
  > .article {
    width: 45%;
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
