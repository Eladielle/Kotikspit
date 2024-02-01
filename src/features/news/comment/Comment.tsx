import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import type { RootState } from "../../../app/store";
import { useEffect } from "react";
import { loadComments } from "./CommentsSlice";

export default function Comment() {
    const comments = useAppSelector((state: RootState) => state.comments);
    const { commentId } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(loadComments(Number(commentId)));
    }, []);

  return (

    <div className="gamerNewsContainer">
        < h1>Comment</h1>
    
    {comments.comments.map((comment) => (
      <div key={comment.id} >
        <div>
        {/* <div  className="gamer-news-title">{comment.avatar}</div> */}
          <div className="gamer-news-title" >{comment.author}</div>
          <div className="gamer-news-title">{comment.created_at}</div>
        </div>
        <div  className="gamer-news-title">{comment.text}</div>
        <div>
            {comment.reactions.map((reaction)=>(
                <><div>
                    <img src={reaction.photoAuthor} alt="pthoto" />
                </div>
                <div className="gamer-news-title">
                        {reaction.reaction}
                </div>
            
                </>
            ))}
        </div>

      </div>
    ))}
  </div>
  )
}
