import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadOneNews } from "./NewsSlice";
import type { RootState } from "../../../app/store";
import { useParams } from "react-router-dom";
import "../page-news/news-styles.css";

export default function OneNews() {
  const news = useAppSelector((state: RootState) => state.oneNews);
  const comments = useAppSelector((state: RootState) => state.comments);
  const { newsId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadOneNews(Number(newsId)));
  }, []);



  return (
    <div className="gamerOneNewsContainer">
      <div className="oneNewsContent">
        <div className="gamerOneNewsItem">
                  <div className="gamer-news-content">
                  <div className="gamer-one-news-title"><h1>{news.news.title}</h1></div>
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