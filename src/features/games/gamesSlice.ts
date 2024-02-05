import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GamesState from './types/GamesState';
import * as api from './api';
import Game, { GameId } from './types/GameID';
import GameDto from './types/GameDTO';

const initialState: GamesState = {
  games: [],
  error: undefined,
};

export const createGame = createAsyncThunk(
  'games/createGame', async (gameDTO: GameDto) => {
    if (gameDTO.genre === '') {
      throw new Error('Genre not selected');
    }
    if (!gameDTO.description.trim()) {
      throw new Error('Description cannot be empty');
    }
    return api.createGame(gameDTO);
  }
);

export const updateGame = createAsyncThunk(
  'games/updateGame',
  async (game: Game) => {
    if (game.genre === '') {
      throw new Error('Genre not selected');
    }
    if (game.state === '') {
      throw new Error('State not selected');
    }
    if (!game.description.trim()) {
      throw new Error('Description cannot be empty');
    }
    return api.updateGame(game);
  }
);

export interface PageableDTO {
  pageNum: number
  pageSize: number
}  

export const getGames  = createAsyncThunk('games/getGames', (pageable: PageableDTO) =>
  api.getGames(pageable.pageNum, pageable.pageSize)
);

export const deleteGame = createAsyncThunk(
  'games/deleteGames',
  async (id: GameId) => {
    return api.deleteGame(id);
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGame.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createGame.fulfilled, (state, action) => {
        state.games.push(action.payload);
        state.error = undefined;
      })

      .addCase(updateGame.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateGame.fulfilled, (state, action) => {
        const updatedGame = action.payload;
        const updatedGames = state.games.map((game) =>
          game.id === updatedGame.id ? updatedGame : game);
        state.games = updatedGames;
      })

      .addCase(getGames.fulfilled, (state, action) => {
        state.games = action.payload.content;
        state.error = undefined;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(deleteGame.fulfilled, (state, action) => {
        state.games = state.games.filter(
          (game) => game.id !== action.payload.id
        );
      })

      .addCase(deleteGame.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { resetError } = gamesSlice.actions;

export default gamesSlice.reducer;
