import { createSlice } from '@reduxjs/toolkit'

type State = {
  opened: boolean
  isPlaying: boolean
}

const initialState = {
  opened: false,
  isPlaying: false
}

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    startNavAnimation: (state: State): State => {
      return { ...state, isPlaying: true }
    },
    completeNavAnimation: (state: State): State => {
      return { ...state, isPlaying: false }
    },
    openNavigation: (state: State): State => {
      return { ...state, opened: true }
    },
    closeNavigation: (state: State): State => {
      return { ...state, opened: false }
    }
  }
})

export const {
  startNavAnimation,
  completeNavAnimation,
  openNavigation,
  closeNavigation
} = slice.actions

export default slice.reducer
