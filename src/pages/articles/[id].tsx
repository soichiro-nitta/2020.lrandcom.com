/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import styled from 'styled-components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { api } from '~/api'
import { useDispatch } from 'react-redux'
import { setSlug } from '~/store/header'
import { ArticleTypes } from '~/types'
// import { functions } from '~/utils/functions'
import { styles } from '~/utils/styles'
import { usePageScroll } from '~/hooks/usePageScroll'
import Header from '~/components/article/Header'

type ContainerProps = ArticleTypes
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Header
      className="header"
      title={props.title}
      thumbnail={props.thumbnail.url}
      publishedAt={props.publishedAt}
    />
    {/* <div className="title">{props.title}</div>
    <div className="thumbnail">
      <img src={props.thumbnail.url} alt="" />
    </div> */}
    <div className="body" dangerouslySetInnerHTML={{ __html: props.body }} />
  </div>
)

const StyledComponent = styled(Component)`
  margin: 0 auto;
  padding-bottom: 15.5rem;
  > .header {
    width: 100%;
  }
  > .body {
    display: flex;
    justify-content: center;
    width: 100%;
    p {
      ${styles.mixins.lhCrop(2)}
      margin: 0 auto;
      width: 65rem;
      font-size: 1.6rem;
      letter-spacing: 0.1rem;
    }
    span {
      opacity: 0.65;
    }
    img {
      margin: 0.75rem;
      width: 100%;
      opacity: 0.9;
    }
    a {
      text-decoration: underline;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug(`/${props.id.toUpperCase()}`))
  usePageScroll()
  return <StyledComponent className="article" {...props} />
}

export default Container

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id
  const { title, thumbnail, publishedAt, body } = await api.getArticle({
    id: (id as string) || ''
  })
  return {
    props: {
      id: id || '',
      title,
      thumbnail,
      publishedAt,
      body
    },
    unstable_revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await api.getArticles()
  const paths = articles.map(article => {
    return `/articles/${article.id}`
  })
  return { paths, fallback: false }
}
