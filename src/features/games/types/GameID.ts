export default interface Game {
  id: number
	image: string
	title: string
	price: number
	genre: string
	state: string
	session: string
	numberOfPlayers: string
	minAge: string
	description: string
	releaseDate: string
}

export type GameId = Game['id'];