import type { ThunkAction, Action } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice"
import pageNewsReducer from "../features/news/page-news/pageNewsSlice"
import oneNewsReduser from "../features/news/one-news/NewsSlice"
import commentsReduser from "../features/news/comment/CommentsSlice"
import gamesSlice from "../features/games/gamesSlice"
import oneGameReducer from "../features/games/OneGame/OneGameSlice"
import pageBuyReducer from '../features/experience/PageBuySlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    news: pageNewsReducer,
    oneNews: oneNewsReduser,
    comments: commentsReduser,
    games: gamesSlice,
    oneGame: oneGameReducer,
		experience: pageBuyReducer,
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
