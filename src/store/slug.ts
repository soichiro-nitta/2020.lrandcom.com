import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  slug: string
}

const initialState = {
  slug: ''
}

const slice = createSlice({
  name: 'slug',
  initialState,
  reducers: {
    setSlug: (state: State, action: PayloadAction<string>): State => {
      return { ...state, slug: action.payload }
    }
  }
})

export const { setSlug } = slice.actions

export default slice.reducer
