import type OneNews from "./type/OneNews";
import type Comments from "./type/Comments";

export async function getNews(newsId:number): Promise<OneNews> {

    const res = await fetch(`http://localhost:8080/api/v1/news/${newsId}`);
    return res.json();
}
export async function getComment(newsId:number): Promise<Comments> {

    const res = await fetch(`localhost:8080/api/v1/comments/all/${newsId}`);
    console.log(res.json());
    return res.json();
}
export function getAll(arg0: number): any {
    throw new Error("Function not implemented.");
}

