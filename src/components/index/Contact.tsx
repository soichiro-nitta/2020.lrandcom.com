import React from 'react'
import styled from 'styled-components'
import styles from '~/utils/styles'
import Title from '~/components/index/title'
import config from '~/utils/config'
import Description from '~/components/index/description'
import Card from '~/components/index/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>
    <div className="head">
      <Title className="title">{config.index.contact.title}</Title>
      <Description className="description">
        {config.index.contact.description}
      </Description>
      <a href="mailto:hello@lrandcom.com">
        <FontAwesomeIcon icon={config.icons.mail} />{' '}
        <span>HELLO@LRANDCOM.COM</span>
      </a>
    </div>
    <Card className="card">
      {config.index.contact.outline.map((row, index) => (
        <React.Fragment key={index}>
          <dl>
            <dt>{row.head}：</dt>
            <dd>{row.data}</dd>
          </dl>
        </React.Fragment>
      ))}
    </Card>
  </div>
)

const StyledComponent = styled(Component)`
  ${styles.mixins.flexCenter};
  > .head {
    width: 30vw;
  }
  > * > .description {
    margin-top: 4.5rem;
  }
  > * > a {
    display: flex;
    align-items: center;
    margin-top: 4.5rem;
    font-size: 1.75rem;
  }
  > * > a > span {
    ${styles.mixins.logoStyle}
    margin-left: 2rem;
    display: inline-block;
  }
  > .card {
    ${styles.mixins.lhCrop(2)};
    margin-left: 7.5vw;
    width: 37.5vw;
  }
  > * > dl {
    display: flex;
    justify-content: space-between;
    opacity: 0.65;
  }
  > * > dl:not(:first-child) {
    margin-top: 3rem;
  }
  > * > * > dt {
    width: 12rem;
    opacity: 0.3;
    letter-spacing: 0.5rem;
  }
  > * > * > dd {
    width: 27.5rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default Container
