/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import styled from 'styled-components'
import { GetStaticProps, GetStaticPaths } from 'next'
import { api } from '~/api'

type ContainerProps = { id: string }
type ComponentProps = { className: string } & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>Article</div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  console.log({ id: props.id })
  return <StyledComponent className="article" {...props} />
}

export default Container

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id
  // const articles = await api.getArticles()
  // const article = articles.filter(article => {
  //   article.id === slug
  // })
  return {
    props: {
      id: id || ''
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
