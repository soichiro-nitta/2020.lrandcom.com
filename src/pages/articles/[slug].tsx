import React from 'react'
import getPageData from '~/lib/notion/getPageData'
import getBlogIndex from '~/lib/notion/getBlogIndex'
import { getBlogLink, getImagePath } from '~/lib/blog-helpers'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Modern from '~/components/article/Modern'
import Chic from '~/components/article/Chic'
import Classic from '~/components/article/Classic'
import { useDispatch } from 'react-redux'
import { setSlug, setUpperLeft } from '~/store/header'
import { BlockTypes } from '~/types'

type ContainerProps = {
  slug: string
  redirect?: string
  display?: 'Modern' | 'Chic' | 'Classic'
  date?: string
  blocks?: BlockTypes[]
  title?: string
  thumbnail?: string
}
type ComponentProps = {
  className: string
} & ContainerProps

const _renderArticle = (props): React.ReactElement => {
  switch (props.display) {
    case 'Modern': {
      return (
        <Modern
          className="modern"
          title={props.title}
          date={props.date}
          blocks={props.blocks}
        />
      )
      break
    }
    case 'Chic': {
      return (
        <Chic
          className="chic"
          title={props.title}
          date={props.date}
          blocks={props.blocks}
        />
      )
      break
    }
    case 'Classic': {
      return (
        <Classic
          className="classic"
          title={props.title}
          date={props.date}
          blocks={props.blocks}
        />
      )
      break
    }
    default: {
      console.error('Displayが正しくありません')
      break
    }
  }
}

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>{_renderArticle(props)}</div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  useRouter() // ないとSSR時の挙動がおかしくなる

  const dispatch = useDispatch()
  dispatch(setSlug(`/${props.slug.toUpperCase()}`))
  dispatch(
    setUpperLeft({ type: 'back', to: '/articles', text: '記事一覧に戻る' })
  )

  if (props.redirect) {
    React.useEffect(() => {
      location.href = props.redirect
    }, [])
    return <>Not Found</>
  }

  return <StyledComponent className="article" {...props} />
}

export default Container

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticProps = async ({
  params: { slug }
}): Promise<{ props: ContainerProps; revalidate: number }> => {
  const postsTable = await getBlogIndex()
  const post = postsTable[slug]

  if (!post) {
    console.error(`Failed to find post for slug: ${slug}`)
    return {
      props: {
        slug,
        redirect: '/articles'
      },
      revalidate: 5
    }
  }

  const display = post.Display
  const date = new Date(post.Date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
  const title = post.Page
  const data = await getPageData(post.id)
  const blocks: BlockTypes[] = data.blocks
  const thumbnail =
    blocks[0].value.type === 'image'
      ? getImagePath(blocks[0].value.format.display_source, blocks[0].value.id)
      : ''

  return {
    props: {
      slug,
      date,
      display,
      blocks,
      title,
      thumbnail
    },
    revalidate: 10 // 再ビルドに必要
  }
}

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticPaths = async (): Promise<string[]> => {
  const postsTable = await getBlogIndex()
  return Object.keys(postsTable).map(slug => getBlogLink(slug))
}
