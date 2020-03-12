import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  currentNum: number
  current: string
}

const initialState = {
  currentNum: 1,
  current: 'first'
}

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    increment: (state: State): State => {
      return { ...state, currentNum: state.currentNum + 1 }
    },
    decrement: (state: State): State => {
      state.currentNum
      return { ...state, currentNum: state.currentNum - 1 }
    },
    setCurrent: (
      state: State,
      action: PayloadAction<'first' | 'middle' | 'last'>
    ): State => {
      return { ...state, current: action.payload }
    }
  }
})

export const { increment, decrement, setCurrent } = slice.actions

export default slice.reducer
