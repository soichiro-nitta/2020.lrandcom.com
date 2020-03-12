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
    ${styles.mixins.lhCrop(1.8)}
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    font-weight: 400;
    font-style: normal;
  }
  > .break {
    width: 100%;
    height: 3rem;
  }
  > .mask {
    width: 100%;
    height: 25vw;
    overflow: hidden;
    border-radius: 1rem;
  }
  > * > img {
    width: 100%;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
