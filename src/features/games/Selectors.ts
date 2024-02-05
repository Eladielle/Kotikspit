import type { RootState } from '../../app/store'
import Game from './types/GameID';

export const selectGames = (state: RootState): Game[] =>
  state.games.games;
export const selectError = (state: RootState): string | undefined =>
  state.games.error;
