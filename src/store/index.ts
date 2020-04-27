import { combineReducers, configureStore } from '@reduxjs/toolkit'

import header from './header'
import article from './article'
import navigation from './navigation'
import media from './media'
import window from './window'
import articles from './articles'

const reducer = combineReducers({
  article,
  header,
  navigation,
  media,
  window,
  articles
})

export type StateTypes = ReturnType<typeof reducer>

export default configureStore({ reducer })
