/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import styled from 'styled-components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { api } from '~/api'
import { useDispatch } from 'react-redux'
import { setSlug } from '~/store/header'
import { ArticleTypes } from '~/types'
import { functions } from '~/utils/functions'
import { styles } from '~/utils/styles'
import Author from '~/components/article/author'

type ContainerProps = ArticleTypes
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="publishedAt">
      <div className="text">{functions.date(props.publishedAt)}</div>
      <div className="divider" />
    </div>
    <div className="title">{props.title}</div>
    <Author className="author" />
    <div className="thumbnail">
      <img src={props.thumbnail.url} alt="" />
    </div>
    <div className="divider" />
    <div className="body" dangerouslySetInnerHTML={{ __html: props.body }} />
    <div className="divider" />
  </div>
)

const StyledComponent = styled(Component)`
  margin: 0 auto;
  padding-bottom: 20rem;
  width: 90rem;
  > .publishedAt {
    display: flex;
    align-items: center;
    margin-top: 20rem;
    .text {
      ${styles.mixins.logoStyle}
      ${styles.mixins.lhCrop(2)}
      margin: -0.9rem 0;
      opacity: 0.65;
    }
    .divider {
      margin-left: 3rem;
      width: 100%;
      height: 1px;
      background: white;
      opacity: 0.1;
    }
  }
  > .title {
    ${styles.mixins.lhCrop(1.8)}
    margin-top: 9.6rem;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    transform: skew(-5deg);
  }
  > .author {
    margin-top: 9.6rem;
  }
  > .thumbnail {
    margin-top: 9.6rem;
    height: 50rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > .divider {
    margin-top: 9.6rem;
    width: 100%;
    height: 1px;
    background: white;
    opacity: 0.1;
  }
  > .body {
    display: flex;
    justify-content: center;
    margin-top: 9.6rem;
    width: 100%;
    p {
      ${styles.mixins.lhCrop(2)}
      margin: 0 auto;
      width: 70rem;
      font-size: 1.6rem;
      letter-spacing: 0.1rem;
    }
    span {
      opacity: 0.65;
    }
    img {
      margin: 0.75rem;
      width: 100%;
    }
    a {
      text-decoration: underline;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  const dispatch = useDispatch()
  dispatch(setSlug(props.id.toUpperCase()))
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
