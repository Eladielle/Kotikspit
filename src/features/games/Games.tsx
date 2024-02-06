import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

import GameCard from "./GameCard"
import { Grid } from "@mui/material"
import { getGames } from "./gamesSlice"
import { selectGames } from "./Selectors"
import Navigation from "../../components/navigation/navMainPage"

export default function Games() {
  const games = useAppSelector(selectGames)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGames({ pageNum: 0, pageSize: 40 }))
  }, [dispatch])
  // const filteredGames = games?.filter((game) => {
  // });

  return (
		<Grid container spacing={2}>
		<Navigation />
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
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
    </Grid>
		</Grid>
  )
}
