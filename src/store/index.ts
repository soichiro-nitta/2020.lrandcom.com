import { combineReducers, configureStore } from '@reduxjs/toolkit'

import header from './header'
import article from './article'
import navigation from './navigation'

const reducer = combineReducers({
  article,
  header,
  navigation
})

export type StateTypes = ReturnType<typeof reducer>

export default configureStore({ reducer })
