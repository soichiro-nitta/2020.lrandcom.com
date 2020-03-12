import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { getBlogLink, getDateStr, postIsReady } from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

type PostsTypes = {
  id: string
  Slug: string
  Date: number
  Published: string
  Page: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preview: any[]
}[]
type ContainerProps = {
  posts: PostsTypes
}
type Props = {
  className: string
} & ContainerProps

const Component: React.FC<Props> = props => (
  <div className={props.className}>
    {props.posts.length === 0 && <p>There are no posts yet</p>}
    {props.posts.map(post => {
      return (
        <div key={post.Slug}>
          <h3>
            <Link href="/articles/[slug]" as={getBlogLink(post.Slug)}>
              <a>{post.Page}</a>
            </Link>
          </h3>
          {post.Date && (
            <div className="posted">Posted: {getDateStr(post.Date)}</div>
          )}
        </div>
      )
    })}
  </div>
)

const StyledComponent = styled(Component)`
  margin: 0 auto;
  padding: 60px;
  width: 75%;
  color: gray;
  font-size: 1.4rem;
  line-height: 2;
  > div {
    margin-bottom: 60px;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="articles" {...props} />
}

export default Container

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticProps = async (): Promise<{
  props: {
    posts: PostsTypes
  }
  revalidate: number
}> => {
  const postsTable = await getBlogIndex()
  const authorsToGet: Set<string> = new Set()
  const posts = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!postIsReady(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)
  // const diary = posts.filter((value, index, array) => {
  //   return value.Category === 'diary'
  // })
  return {
    props: {
      posts
    },
    revalidate: 10
  }
}
