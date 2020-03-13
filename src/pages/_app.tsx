import * as React from 'react'
import { Provider } from 'react-redux'
import store from '~/store'
import { AppProps } from 'next/app'
import styles, { GlobalStyle } from '~/utils/styles'
import Humberger from '~/components/_app/Humberger'
import Slug from '~/components/_app/Slug'
import Background from '~/components/_app/Background'
import UpperLeft from '~/components/_app/UpperLeft'
import styled from 'styled-components'

type ContainerProps = AppProps
type ComponentProps = {
  className: string
} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <div className={props.className}>
        <Background className="background" />
        <div className="page">
          <props.Component {...props.pageProps} />
        </div>
        <header>
          <UpperLeft className="upperLeft" />
          <Slug className="slug" />
          <Humberger className="humberger" />
        </header>
      </div>
    </Provider>
  </>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 100%;
  > .background {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  > .page {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 6rem;
    right: 0;
    left: 0;
    margin: auto;
    width: calc(100% - 12rem);
    z-index: ${styles.zIndex.header};
  }
  > * > .humberger {
    width: 5rem;
    height: 2rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="app" {...props} />
}

export default Container
