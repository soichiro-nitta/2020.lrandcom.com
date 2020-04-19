import * as React from 'react'
import { Provider } from 'react-redux'
import store from '~/store'
import { AppProps } from 'next/app'
import Layout from '~/layouts/default'

const _App: React.FC<AppProps> = props => (
  <Provider store={store}>
    <Layout {...props} />
  </Provider>
)

export default _App
