import { combineReducers, configureStore } from '@reduxjs/toolkit'

import header from './header'
import article from './article'

const reducer = combineReducers({
  article,
  header
})

export type StateTypes = ReturnType<typeof reducer>

export default configureStore({ reducer })
