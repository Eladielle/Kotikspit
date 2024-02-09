import OneGame, { OneGameId } from "./types/OneGame";

export async function getGame(id: OneGameId): Promise<OneGame> {
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