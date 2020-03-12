import React from 'react'
import getPageData from '~/lib/notion/getPageData'
import getBlogIndex from '~/lib/notion/getBlogIndex'
import { getBlogLink } from '~/lib/blog-helpers'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Modern from '~/components/article/Modern'
import Classic from '~/components/article/Classic'
import Slug from '~/components/article/Slug'
import Back from '~/components/article/Back'

type PageTypes = {
  title: string
  image: string
  body: { type: string; value: string }[]
}
type BlockTypes = {
  role: string
  value: {
    id: string
    version: number
    type: string
    properties: {
      title: string[][]
      source: string[][]
      language: string[][]
    }
    format?: {
      block_width: number
      display_source: string
      block_full_width: boolean
      block_page_width: boolean
      block_aspect_ratio: number
      block_preserve_scale: boolean
    }
    created_time: number
    last_edited_time: number
    parent_id: string
    parent_table: string
    alive: boolean
    file_ids: string[]
    created_by_table: string
    created_by_id: string
    last_edited_by_table: string
    last_edited_by_id: string
  }
}
type ContainerProps = {
  pages?: PageTypes[]
  redirect?: string
  slug: string
  display: 'Modern' | 'Classic'
  date: string
}
type ComponentProps = {
  className: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {(props.display === 'Modern' && (
      <Modern className="modern" pages={props.pages} date={props.date} />
    )) || <Classic className="classic" pages={props.pages} date={props.date} />}
    <Slug className="slug" slug={props.slug} />
    <Back className="back" />
  </div>
)

const StyledComponent = styled(Component)`
  > .slug {
    position: absolute;
    top: 7.5rem;
    left: 0;
  }
  > .back {
    position: absolute;
    top: 7.5rem;
    left: 7.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  useRouter() // ないとSSR時の挙動がおかしくなる

  if (props.redirect) {
    React.useEffect(() => {
      location.href = props.redirect
    }, [])
    return <>Not Found</>
  }

  return <StyledComponent className="blog" {...props} />
}

export default Container

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticProps = async ({
  params: { slug }
}): Promise<{ props: ContainerProps; revalidate: number }> => {
  const postsTable = await getBlogIndex()
  const post = postsTable[slug]
  const display = post.Display
  const date = new Date(post.Date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })

  if (!post) {
    console.log(`Failed to find post for slug: ${slug}`)
    return {
      props: {
        redirect: '/articles',
        slug,
        display,
        date
      },
      revalidate: 5
    }
  }

  const postData: { blocks: BlockTypes[] } = await getPageData(post.id)
  const blocks = postData.blocks

  const pages = []
  let page: PageTypes = {
    title: '',
    image: '',
    body: []
  }
  blocks.forEach((block, index) => {
    if (index === 0) {
      page.title = post.Page
    }
    switch (block.value.type) {
      case 'sub_header': {
        pages.push(page)
        page = { title: '', image: '', body: [] }
        page.title = block.value.properties.title[0][0]
        break
      }
      case 'image': {
        const value = `/api/asset?assetUrl=${encodeURIComponent(
          block.value.format.display_source
        )}&blockId=${block.value.id}`

        if (display === 'Modern') {
          page.image = value
        } else {
          page.body.push({
            type: 'image',
            value
          })
        }
        break
      }
      case 'text': {
        if (block.value.properties) {
          page.body.push({
            type: 'text',
            value: `${block.value.properties.title[0][0]}\n`
          })
        } else {
          page.body.push({
            type: 'break',
            value: ''
          })
        }
        break
      }
    }
    if (index === blocks.length - 1) pages.push(page)
  })

  return {
    props: {
      pages,
      slug,
      date,
      display
    },
    revalidate: 10 // 再ビルドに必要
  }
}

// eslint-disable-next-line @typescript-eslint/camelcase
export const unstable_getStaticPaths = async (): Promise<string[]> => {
  const postsTable = await getBlogIndex()
  return Object.keys(postsTable).map(slug => getBlogLink(slug))
}
