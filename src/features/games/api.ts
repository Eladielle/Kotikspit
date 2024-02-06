import GameDto from './types/GameDTO';
import Game, { GameId } from './types/GameID';

export async function createGame(gameDTO: GameDto): Promise<Game> {
  const res = await fetch('/api/v1/games', {
    method: 'POST',
    body: JSON.stringify(gameDTO),
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
  });

  if (res.status >= 400) {
    const { message } = await res.json();
    throw Error(message);
  }

  return res.json();
}
export async function updateGame(
  game: Game
): Promise<Game> {
  const res = await fetch(`/api/v1/games/${game.id}`, {
    method: 'PUT',
    body: JSON.stringify(game),
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
    },
  });
  return res.json();
}

export async function getGames(pageNum: number = 0, pageSize: number = 10): Promise<{ content: Game[] }> {
  const result = await fetch(`api/v1/games?pageNum=${pageNum}&pageSize=${pageSize}`);
  return result.json();
}

export async function deleteGame(id: GameId): Promise<Game> {
  const token = localStorage.getItem('accessToken')
  const result = await fetch(`/api/v1/games/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      accept: '*/*',
    },
  });
  return result.json();
}

export async function getGame(id: GameId): Promise<Game> {
  const res = await fetch(`/api/v1/games/game${id}`, {
    headers: {
      accept: '*/*',
    },
  });
  if (res.status >= 400) {
    const answer = await res.json();
    throw new Error(answer.message);
  }
  return res.json();
}
