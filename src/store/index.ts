import { combineReducers, configureStore } from '@reduxjs/toolkit'

import user from './user'
import slug from './slug'
import article from './article'

const reducer = combineReducers({
  user,
  article,
  slug
})

export type StateTypes = ReturnType<typeof reducer>

export default configureStore({ reducer })
