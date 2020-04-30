import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <ul>
      <li>
        <Link href="/">
          <a>ホーム</a>
        </Link>
      </li>
      <li>
        <Link href="/articles">
          <a>記事を読む</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>お問い合わせ・会社概要</a>
        </Link>
      </li>
    </ul>
  </div>
)

const StyledComponent = styled(Component)`
  padding: 6rem;
  > ul {
    display: flex;
    align-items: center;
    height: 3.5rem;
    li {
      margin-left: 6rem;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      text-decoration: underline;
    }
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
