import * as React from 'react'
import { Provider } from 'react-redux'
import store from '~/store'
import { AppProps } from 'next/app'
import styles, { GlobalStyle } from '~/utils/styles'
import Humberger from '~/components/_app/Humberger'
import Slug from '~/components/_app/Slug'
import Background from '~/components/_app/Background'
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
        <Slug className="slug" />
        <Humberger className="humberger" />
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
    z-index: ${styles.zIndex.background};
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
  > .slug {
    position: fixed;
    top: 7.5rem;
    left: 0;
    width: 100%;
    height: 2rem;
    z-index: ${styles.zIndex.slug};
  }
  > .humberger {
    position: fixed;
    top: 7.13rem;
    right: 7.5rem;
    width: 6rem;
    height: 2.75rem;
    z-index: ${styles.zIndex.humberger};
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="app" {...props} />
}

export default Container
