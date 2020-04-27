import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleTypes } from '~/types'

type State = {
  list: ArticleTypes[]
}

const initialState = {
  list: [
    {
      id: '',
      createdAt: '',
      updatedAt: '',
      title: '',
      thumbnail: {
        url: ''
      },
      publishedAt: '',
      slug: '',
      body: ''
    }
  ]
}

const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setArticles: (
      state: State,
      action: PayloadAction<ArticleTypes[]>
    ): State => {
      return { ...state, list: action.payload }
    }
  }
})

export const { setArticles } = slice.actions

export default slice.reducer
