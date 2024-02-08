import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from './api'
import PageBuyState from './type/PageBuyState'

const initialState: PageBuyState = {
	pageBuy: {
		id: 0,
		image: '',
		title: '',
		price: 0,
		numberOfPlayers: '',
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
