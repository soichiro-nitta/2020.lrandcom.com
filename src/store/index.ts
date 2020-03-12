import { combineReducers, configureStore } from '@reduxjs/toolkit'

import user from './user'
// import cartReducer from './cart'
import article from './article'

const reducer = combineReducers({
  user,
  article
  // cart: cartReducer,
})

export type StateTypes = ReturnType<typeof reducer>

export default configureStore({ reducer })
