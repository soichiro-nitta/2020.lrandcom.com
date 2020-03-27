import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import Title from '~/components/index/title'
import config from '~/utils/config'
import Description from '~/components/index/description'

type ContainerProps = {
  className: string
}
type ComponentProps = {
  client: string[]
  last: number
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="head">
      <Title className="title">{config.index.ourClient.title}</Title>
      <Description className="description">
        {config.index.ourClient.notes}
      </Description>
    </div>
    <div className="body">
      {props.client.map((companyName, index) => (
        <React.Fragment key={index}>
          <span className="companyName">{companyName}</span>
          {index !== props.last && <span className="slash"> / </span>}
        </React.Fragment>
      ))}
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter};
  > * > .description {
    margin-top: 4.5rem;
    width: 100%;
  }
  > .body {
    ${styles.mixins.lhCrop(3)};
    margin-left: 7.5vw;
    padding: 5rem;
    width: 37.5vw;
    height: 18.75;
    background: #1f1f1f;
    border: 1px solid #181818;
  }
  > .body > span {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
  > .body > .companyName {
    letter-spacing: 0.1rem;
    font-weight: bold;
    opacity: 0.65;
  }
  > .body > .slash {
    letter-spacing: 0.5rem;
    opacity: 0.3;
  }
`

const Container: React.FC<ContainerProps> = props => {
  const client = config.index.ourClient.client
  const last = client.length - 1
  return <StyledComponent client={client} last={last} {...props} />
}

export default Container
