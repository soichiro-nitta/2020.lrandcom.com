import React from 'react'
import styled from 'styled-components'
import Heading from '~/components/about/heading'
import { config } from '~/utils/config'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <Heading className="heading">会社概要</Heading>
    <div className="body">
      {config.outline.map((row, index) => (
        <React.Fragment key={index}>
          <dl>
            <dt>{row.head}：</dt>
            <dd>{row.data}</dd>
          </dl>
        </React.Fragment>
      ))}
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  .heading {
    font-weight: bold;
  }
  .body {
    width: 70%;
  }
  > * > dl {
    width: 100%;
    display: flex;
    justify-content: space-between;
    opacity: 0.65;
  }
  > * > dl:not(:first-child) {
    margin-top: 3rem;
  }
  > * > * > dt {
    opacity: 0.3;
  }
  > * > * > dd {
    width: 30rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
