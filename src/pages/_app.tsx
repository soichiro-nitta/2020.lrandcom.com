import * as React from 'react'
import { Provider } from 'react-redux'
import store from '~/store'
import { AppProps } from 'next/app'
import styles, { GlobalStyle } from '~/utils/styles'
import Humberger from '~/components/_app/Humberger'
import Slug from '~/components/_app/Slug'
import Noise from '~/components/base/Noise'
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
        <Noise className="noise" />
        <div id="page">
          <props.Component {...props.pageProps} />
        </div>
        <div className="slugWrapper">
          <Slug className="slug" />
        </div>
        <div className="upperLeftWrapper">
          <UpperLeft className="upperLeft" />
        </div>
        <div className="humbergerWrapper">
          <Humberger className="humberger" />
        </div>
      </div>
    </Provider>
  </>
)

const StyledComponent = styled(Component)`
  width: 100%;
  height: 100%;
  > .noise {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  > #page {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    /* overflow: hidden; */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  > .upperLeftWrapper {
    display: flex;
    align-items: center;
    position: fixed;
    top: 6rem;
    left: 6rem;
    height: 3.5rem;
  }
  > .slugWrapper {
    display: flex;
    align-items: center;
    position: fixed;
    top: 6rem;
    width: 100%;
    height: 3.5rem;
  }
  > * > .slug {
    margin: 0 auto;
  }
  > .humbergerWrapper {
    display: flex;
    align-items: center;
    position: fixed;
    top: 6rem;
    right: 6rem;
    height: 3.5rem;
  }
  > * > .humberger {
    width: 4rem;
    height: 1.65rem;
  }
`

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent className="app" {...props} />
}

export default Container
