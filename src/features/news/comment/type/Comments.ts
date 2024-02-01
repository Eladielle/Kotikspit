
interface Reactions {
    id: bigint;
    photoAuthor: string;
    reaction: string;
  }
  
  export default interface Comments {
    id: bigint;
    author: string;
    text: string;
    created_at: string;
    reactions: Reactions[];
  }
export type CommentsApiResponse = Comments[];