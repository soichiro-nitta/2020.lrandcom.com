import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className: string
  text: string
}
type ComponentProps = {
  splitted: string[]
  last: number
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    {props.splitted.map((sentence, index) => (
      <React.Fragment key={index}>
        <div>{sentence}</div>
        {index !== props.last && <br />}
      </React.Fragment>
    ))}
  </div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  const splitted = props.text.split('\n')
  const last = splitted.length - 1
  return <StyledComponent splitted={splitted} last={last} {...props} />
}

export default Container
