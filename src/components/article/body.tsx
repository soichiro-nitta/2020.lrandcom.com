import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  body: { type: string; value: string }[]
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.body.map((block, index) => {
      switch (block.type) {
        case 'text':
          return (
            <div className="text" key={index}>
              {block.value}
            </div>
          )
          break
        case 'break':
          return <div className="break" key={index} />
          break
        case 'image':
          return (
            <div className="mask" key={index}>
              <img src={block.value} />
            </div>
          )
          break
      }
    })}
  </div>
)

const StyledComponent = styled(Component)`
  > .text {
    ${styles.mixins.lhCrop(1.6)}
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    font-weight: 400;
    font-style: normal;
    opacity: 0.65;
  }
  > .break {
    width: 100%;
    height: 3rem;
  }
  > .mask {
    width: 100%;
    height: 23vw;
    overflow: hidden;
  }
  > * > img {
    width: 100%;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
