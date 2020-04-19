import * as React from 'react'
import { Provider } from 'react-redux'
import store from '~/store'
import { AppProps } from 'next/app'
import { GlobalStyle } from '~/utils/styles'
import Humberger from '~/components/default/Humberger'
import Slug from '~/components/default/Slug'
import Noise from '~/components/base/Noise'
import UpperLeft from '~/components/default/UpperLeft'
// import LowerLeft from '~/components/_app/LowerLeft'
import Navigation from '~/components/default/Navigation'
import styled from 'styled-components'
import { useWindowSize } from '~/hooks/useWindowSize'

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
        <Navigation className="navigation" />
        <Slug className="slug" />
        <UpperLeft className="upperLeft" />
        {/* <LowerLeft className="lowerLeft" /> */}
        <Humberger className="humberger" />
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
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -ms-overflow-style: none; /* IE, Edge 対応 */
    scrollbar-width: none; /* Firefox 対応 */
  }
  > #page:-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
  > .upperLeft {
    position: fixed;
    top: 0;
    left: 0;
  }
  > .slug {
    position: fixed;
    top: 6rem;
    width: 100%;
    height: 3.5rem;
  }
  /* > .lowerLeft {
    position: fixed;
    bottom: 0;
    left: 0;
  } */
  > .navigation {
    position: fixed;
    top: 0;
    width: 100%;
    height: 0%;
  }
  > .humberger {
    position: fixed;
    top: 0;
    right: 0;
  }
`

const Container: React.FC<ContainerProps> = props => {
  useWindowSize()
  return <StyledComponent className="default" {...props} />
}

export default Container
