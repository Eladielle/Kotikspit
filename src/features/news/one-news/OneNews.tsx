import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadOneNews } from "./NewsSlice";
import type { RootState } from "../../../app/store";
import { useParams } from "react-router-dom";
import { loadComments } from "./CommentsSlice";


export default function OneNews() {

  const oneNews = useAppSelector((state: RootState) => state.oneNews);
  const comments = useAppSelector((state: RootState) => state.comments);
  const { newsId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadOneNews(Number(newsId)));
    dispatch(loadComments(Number(newsId)));
  }, []);

  return (
    <div>
      <div style={styles.newsContainer}>
       
        <div style={styles.imageContainer}>
          <img style={styles.image} src={oneNews.news.imageUrl} alt="News" />
        </div>
        
      </div>
      <div>
              {comments.comments.map((comment) => (
            <div key={comment.id} >
                      <div>
                <div >{comment.text}</div>
                <div >{comment.author}</div>
                {/* {comment.reactions.map((reaction) => (
                  <div key={reaction.id}>
                    <div/>
                ))} */}
               
                <div className="gamer-news-title">{comment.created_at}</div>
              </div>
            
            </div>
          ))}
      </div>

    </div>
  );

}
const styles = {
  newsContainer: {
    padding: "20px",
    border: "1px solid #ddd",
    marginBottom: "20px",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  date: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  imageContainer: {
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
  },
};