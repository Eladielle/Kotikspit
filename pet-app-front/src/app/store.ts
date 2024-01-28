import type { ThunkAction, Action } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import  pageNewsReducer  from "../features/page-news/pageNewsSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    news: pageNewsReducer,
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
