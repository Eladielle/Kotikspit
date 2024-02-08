import PageBuy from './type/PageBuy'

export async function getAll(): Promise<PageBuy> {
	const res = await fetch(
		'http://localhost:8080/api/v1/games/title/game?pageNum=1&pageSize=1'
	)
	return res.json()
}
