import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Confirm() {
  const { confirmCode } = useParams();
  const [isConfirmed, setIsConfirmed] = useState<boolean | null>(null);
  const [redirectToNews, setRedirectToNews] = useState<boolean>(false);

  async function getAll(): Promise<void> {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/auth/confirm/${confirmCode}`);
      const data = await res.json();
      setIsConfirmed(data); // предполагается, что сервер возвращает булево значение
    } catch (error) {
      console.error('Произошла ошибка при выполнении запроса:', error);
    }
  }

  useEffect(() => {
    getAll();
  }, [confirmCode]);

  useEffect(() => {
    if (isConfirmed) {
      setRedirectToNews(true);
    }
  }, [isConfirmed]);

  if (redirectToNews) {
    return (
      <div>
        <p>Подтверждено! Перенаправление...</p>
        {window.location.href = '/'}
      </div>
    );
  }

  return (
    <div>
      {isConfirmed ? (
       <img width="30" src="/img/news-img/check_mark.jpg" alt="comments"></img>
      ) : (
        <img width="30" src="/img/news-img/cross.jpg" alt="comments"></img>
      )}
    </div>
  );
}
