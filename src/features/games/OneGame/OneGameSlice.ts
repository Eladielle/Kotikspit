import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OneGameState from "./types/OneGameState";
import * as api from './api';
import { OneGameId } from "./types/OneGame";

const initialState: OneGameState = {
  game: {
    id: 0,
    image: '',
    title: '',
    price: 0,
    genre: '',
    state: '',
    session: '',
    numberOfPlayers: '',
    minAge: '',
    description: '',
    releaseDate: '',
  } ,
  error: undefined,
}

export const getOneGame = createAsyncThunk('games/getOneGame', (id: OneGameId) =>
  api.getGame(id)
)

export const gameSlice = createSlice({
	name: 'oneGame',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getOneGame.fulfilled, (state, action) => {
			state.game = action.payload;
		})
	},
})

export default gameSlice.reducer;