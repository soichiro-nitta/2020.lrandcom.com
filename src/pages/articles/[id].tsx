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
import Head from '~/components/base/Head'

type ContainerProps = ArticleTypes
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Head
      title={`${props.title} / リーディング＆カンパニー株式会社`}
      image={props.thumbnail.url}
    />
    <Header
      className="header"
      title={props.title}
      thumbnail={props.thumbnail.url}
      publishedAt={props.publishedAt}
    />
    <div className="body" dangerouslySetInnerHTML={{ __html: props.body }} />
  </div>
)

const StyledComponent = styled(Component)`
  margin: 0 auto;
  padding-bottom: 15.5rem;
  ${styles.media.sp} {
    padding-bottom: 9.5rem;
  }
  > .header {
    width: 100%;
  }
  > .body {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    p {
      ${styles.mixins.lhCrop(2)}
      margin: 0 auto;
      width: 60rem;
      font-size: 1.6rem;
      letter-spacing: 0.1rem;
      ${styles.media.sp} {
        width: calc(100% - 6rem);
      }
    }
    span {
      opacity: 0.65;
    }
    img {
      margin: 0.75rem 0;
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
