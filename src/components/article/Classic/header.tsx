import React from 'react'
import styled from 'styled-components'
import Heading2 from '~/components/base/Heading2'
import { styles } from '~/utils/styles'
import { config } from '~/utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
  className: string
  title: string
  thumbnail: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="thumbnail">
      <img src={props.thumbnail} />
      <Heading2 className="title">{props.title}</Heading2>
    </div>
    <div className="scroll">
      <FontAwesomeIcon icon={config.icons.arrowDown} />
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  > .thumbnail {
    position: relative;
    margin: 15.5rem;
    width: calc(100% - 31rem);
    height: calc(100% - 31rem);
  }
  > .thumbnail > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
  > .thumbnail > .title {
    ${styles.mixins.flexCenter}
    ${styles.mixins.flexCenter}
    position: absolute;
    top: 0;
    padding: 10%;
    width: 100%;
    height: 100%;
  }
  > .scroll {
    ${styles.mixins.flexCenter}
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 15.5rem;
    font-size: 2.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
