import { useEffect } from 'react'
import { loadPageNews } from './pageNewsSlice'
import './news-styles.css'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import type { RootState } from '../../../app/store'
import { colors } from '@mui/material'

export default function PageNews(): JSX.Element {
  const pageNews = useAppSelector((state: RootState) => state.news)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadPageNews())
  }, [])

  return (
    <div className="gamerNewsContainer">
      {pageNews.pageNews.content.map(news => (
        <div key={news.id} className="gamerNewsItem">
          <Link className="linkNews" to={String(news.id)}>
            <div className="gamer-news-content">
              <div className="gamer-news-image">
                <img src={news.imageUrl} alt="image news" />
              </div>
              <div className="gamer-news-title hoverNews">{news.title}</div>
            </div>
          </Link>
          <div>
            <hr />
            <div className="date-and-comment">
              <div className="date-pageNews">
                <img width="30" src="/img/news-img/date.png" alt="date"></img>
                <div>{news.date}</div>
              </div>
              <Link to="comment/1">
              <div className="date-pageNews">
                <img width="30" src="/img/news-img/comment.png" alt="comments"></img>
                <div>{news.sizeComments}</div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
