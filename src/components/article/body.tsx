import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'

type ContainerProps = {
  className: string
  body: { type: string; value: string[][] | string }[]
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.body.map((block, index) => {
      switch (block.type) {
        case 'text': {
          const value = block.value as string[][]
          return (
            <div className="text" key={index}>
              {value.map((sentence, index) => {
                if (sentence.length === 1) {
                  return sentence[0]
                } else {
                  const tagName = sentence[1][0][0]
                  if (tagName === 'a') {
                    return React.createElement(
                      tagName,
                      { href: sentence[1][0][1], target: '_blank', key: index },
                      sentence[0]
                    )
                  }
                }
              })}
            </div>
          )
          break
        }
        case 'break':
          return <div className="break" key={index} />
          break
        case 'quote':
          return (
            <div className="quote" key={index}>
              {block.value}
            </div>
          )
          break
        case 'image':
          return (
            <div className="mask" key={index}>
              <img src={block.value as string} />
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
    opacity: 0.65;
  }
  > .text a {
    text-decoration: underline;
  }
  > .break {
    width: 100%;
    height: 3rem;
  }
  > .quote {
    ${styles.mixins.lhCrop(1.6)}
    padding: 0.3rem 2rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    white-space: pre-wrap;
    border-left: 0.2rem solid white;
    opacity: 0.65;
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
