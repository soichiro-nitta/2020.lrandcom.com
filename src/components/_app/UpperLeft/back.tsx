import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '~/utils/config'

type ContainerProps = {
  className: string
  to: string
  text: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Link href={props.to}>
      <a>
        <FontAwesomeIcon className="left" icon={config.article.back.icon} />
        <div className="circle" />
        <div className="circle" />
        <span>{props.text}</span>
      </a>
    </Link>
  </div>
)

const StyledComponent = styled(Component)`
  > a {
    display: flex;
    align-items: center;
  }
  > * > .left {
    font-size: 1.8rem;
    line-height: 2rem;
  }
  > * > .circle {
    margin-left: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }
  > * > span {
    margin-left: 4rem;
    line-height: 1;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
