import { combineReducers, configureStore } from '@reduxjs/toolkit'

import header from './header'
import navigation from './navigation'
import media from './media'
import window from './window'

const reducer = combineReducers({
  header,
  navigation,
  media,
  window
})

export type StateTypes = ReturnType<typeof reducer>

export default configureStore({ reducer })
