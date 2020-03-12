import * as React from 'react'
import { Provider } from 'react-redux'
import store from '~/store'
import { AppProps } from 'next/app'
import { GlobalStyle } from '~/utils/styles'
import Humberger from '~/components/_app/Humberger'

const Component = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <div id="page">
        <Component {...pageProps} />
      </div>
      <Humberger />
    </Provider>
  </>
)

export default Component
