import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UpperLeft = {
  type: string
  to: string
  text: string
}
type State = {
  upperLeft: UpperLeft
  slug: string
  humberger: boolean
}

const initialState = {
  upperLeft: {
    type: 'logo',
    to: '',
    text: ''
  },
  slug: '',
  humberger: false
}

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setUpperLeft: (state: State, action: PayloadAction<UpperLeft>): State => {
      return { ...state, upperLeft: action.payload }
    },
    setSlug: (state: State, action: PayloadAction<string>): State => {
      return { ...state, slug: action.payload }
    },
    setHumberger: (state: State, action: PayloadAction<boolean>): State => {
      return { ...state, humberger: action.payload }
    }
  }
})

export const { setSlug, setUpperLeft, setHumberger } = slice.actions

export default slice.reducer
