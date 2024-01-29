
interface Reactions{
    id: number,
    photoAuthor: string,
    reaction: string
}

export default interface Comments{
        id: number,
        author: string,
        text: string,
        created_at: string,
        reactions: Array<Reactions>;
}