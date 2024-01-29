import type { ThunkAction, Action } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import  pageNewsReducer  from "../features/news/page-news/pageNewsSlice"
import  oneNewsReduser  from "../features/news/one-news/NewsSlice"
import  commentsSlice  from "../features/news/one-news/CommentsSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    news: pageNewsReducer,
    oneNews: oneNewsReduser,
    comments: commentsSlice
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>