import type OneNews from "./type/OneNews";

export async function getNews(newsId: number): Promise<OneNews> {

    const res = await fetch(`http://localhost:8080/api/v1/news/${newsId}`);
    return res.json();
}
export function getAll(arg0: number): any {
	throw new Error('Function not implemented.')
}
