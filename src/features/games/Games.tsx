import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

import GameCard from "./GameCard"
import { getGames } from "./gamesSlice"
import { selectGames } from "./Selectors"
import Navigation from "../../components/navigation/navMainPage"
import './GameCard.css';

export default function Games() {
  const games = useAppSelector(selectGames)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGames({ pageNum: 0, pageSize: 100 }))
  }, [dispatch])
  // const filteredGames = games?.filter((game) => {
  // });

  return (
    <>
    <Navigation/>
    <div className="bg-games ">
      {games?.map(game => (
        <GameCard
          id={game.id}
          image={game.image}
          title={game.title}
          price={game.price}
          numberOfPlayers={game.numberOfPlayers}
          minAge={game.minAge}
        />
      ))}
    </div>
    </>
  )
}
