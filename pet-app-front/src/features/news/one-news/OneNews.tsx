import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadOneNews } from "./NewsSlice";
import type { RootState } from "../../../app/store";
import { useParams } from "react-router-dom";


export default function OneNews() {

    const oneNews = useAppSelector((state: RootState)=> state.oneNews);
    const { newsId } = useParams();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(loadOneNews(Number(newsId)));
    }, []);
    return (
        <div style={styles.newsContainer}>
          <div style={styles.date}>{oneNews.news.date}</div>
          <div style={styles.imageContainer}>
            <img style={styles.image} src={oneNews.news.imageUrl} alt="News" />
          </div>
          <div style={styles.title}>{oneNews.news.title}</div>
          <div style={styles.text}>{oneNews.news.text}</div>
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