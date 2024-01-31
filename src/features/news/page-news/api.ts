import type PageNews from './type/PageNews'

export async function getAll(): Promise<PageNews> {
	const res = await fetch('http://localhost:8080/api/v1/news/0/120')
	return res.json()
}
