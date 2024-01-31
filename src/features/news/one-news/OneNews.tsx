import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadOneNews } from "./NewsSlice";
import type { RootState } from "../../../app/store";
import { useParams } from "react-router-dom";
import { loadComments } from "../comment/CommentsSlice";
import "../page-news/news-styles.css";


export default function OneNews() {

  const news = useAppSelector((state: RootState) => state.oneNews);
  const comments = useAppSelector((state: RootState) => state.comments);
  const { newsId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadOneNews(Number(newsId)));
    dispatch(loadComments(Number(newsId)));
  }, []);



  return (
    <div className="gamerOneNewsContainer">
      <div className="oneNewsContent">
        <div className="gamerOneNewsItem">
                  <div className="gamer-news-content">
                  <div className="gamer-news-title">{news.news.title}</div>
            <div className="gamer-news-title">{news.news.date}</div>
            <div className="gamer-news-image">
              <img src={news.news.imageUrl} alt="image news" />
            </div>
            <div className="news-text-html" dangerouslySetInnerHTML={{ __html: news.news.text }} />
            </div>
            </div>
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