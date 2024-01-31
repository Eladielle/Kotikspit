
import { useEffect } from "react";
import { loadPageNews } from "./pageNewsSlice";
import "./news-styles.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import type { RootState } from "../../../app/store";


export default function PageNews() {
    
    const pageNews = useAppSelector((state: RootState)=> state.news);

    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(loadPageNews());
    }, []);

    return (
        <div className="gamerNewsContainer">
          {pageNews.pageNews.content.map((news) => (
            <div key={news.id} className="gamerNewsItem">
                <Link className="linkNews" to={String(news.id)}>
                      <div className="gamer-news-content">
                <div className="gamer-news-title">{news.date}</div>
                <div className="gamer-news-image">
                  <img src={news.imageUrl} alt="image news" />
                </div>
                <div className="gamer-news-title hoverNews">{news.title}</div>
              </div>
                </Link>
            </div>
          ))}
        </div>
      );
}
