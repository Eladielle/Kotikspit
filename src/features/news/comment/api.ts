import type { CommentsApiResponse } from "../comment/type/Comments";

export async function getComment(newsId: number): Promise<CommentsApiResponse> {
    const res = await fetch(`http://localhost:8080/api/v1/comments/all/${newsId}`);
    // console.log(res);
    return res.json();
}
