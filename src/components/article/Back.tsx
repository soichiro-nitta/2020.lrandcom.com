import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '~/utils/config'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Link href="/articles">
      <a>
        <FontAwesomeIcon className="left" icon={config.article.back.icon} />
        {config.article.back.text}
      </a>
    </Link>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  letter-spacing: 0.4rem;
  > * > .left {
    margin-right: 40px;
    font-size: 2rem;
    transform: skew(-15deg);
  }
  > a {
    display: inline-block;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
