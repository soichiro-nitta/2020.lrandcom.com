import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StateTypes } from '~/store'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '~/utils/config'
// import Logo from './logo'
// import Back from './back'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  type: string
  to: string
  text: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {/* {(props.type === 'logo' && <Logo className="logo" />) || (
      <Back className="back" to={props.to} text={props.text} />
    )} */}
    <Link href="/articles">
      <a>
        <span>記事を読む</span>
        <div className="circle" />
        <div className="circle" />
        <FontAwesomeIcon className="right" icon={config.article.next.icon} />
      </a>
    </Link>
  </div>
)

const StyledComponent = styled(Component)`
  > a {
    display: flex;
    align-items: center;
  }
  > * > .right {
    font-size: 1.8rem;
    line-height: 2rem;
  }
  > * > .circle {
    margin-right: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }
  > * > span {
    margin-right: 4rem;
    line-height: 1;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const upperLeft = useSelector((state: StateTypes) => state.header.upperLeft)
  return (
    <StyledComponent
      type={upperLeft.type}
      to={upperLeft.to}
      text={upperLeft.text}
      {...props}
    />
  )
}

export default Container
