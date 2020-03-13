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
        <span>{config.article.back.text}</span>
      </a>
    </Link>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  height: 2rem;
  letter-spacing: 0.4rem;
  font-size: 1.3rem;
  transform: skew(-6deg);
  > a {
    display: inline-block;
    height: 100%;
  }
  > * > .left {
    font-size: 2rem;
    line-height: 2rem;
  }
  > * > span {
    margin-left: 6.5rem;
    line-height: 2rem;
    vertical-align: bottom;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
