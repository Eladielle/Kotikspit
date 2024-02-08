import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from './api'
import PageBuyState from './type/PageBuyState'

const initialState: PageBuyState = {
	pageBuy: {
		totalElements: 0,
		totalPages: 0,
		size: 0,
		content: [],
	},
	error: undefined,
}

export const loadPageBuy = createAsyncThunk('news/loadPageBuy', () =>
	api.getAll()
)

export const pageBuySlice = createSlice({
	name: 'pageBuy',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loadPageBuy.fulfilled, (state, action) => {
			state.pageBuy = action.payload
		})
	},
})

export default pageBuySlice.reducer
