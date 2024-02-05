import {
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
  DialogActions,
} from "@mui/material"
import React, { useState, useEffect } from "react"
import { useAppDispatch } from "../../app/hooks"
import Game from "./types/GameID"
import { getGame } from "./api"
import { deleteGame } from "./gamesSlice"
import { getUser } from "../auth/authSlice"
import GameFile from "./GameCard"

export default function AdminGames(): JSX.Element {
  const dispatch = useAppDispatch()
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] =
    React.useState(false)
  const [selectedGameId, setselectedGameId] = React.useState<number>(0)
  const [isFinding, setIsFinding] = useState(false)
  const [choosedId, setChoosedId] = useState(0)
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  const fetchGame = async (gameId: number): Promise<void> => {
    try {
      const game = await getGame(gameId)
      setSelectedGame(game)
    } catch (error) {
      setSelectedGame(null)
    }
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    fetchGame(selectedGameId)
    setChoosedId(selectedGameId)
    setIsFinding(true)
  }

  const handleOpenDeleteConfirmation = (gameId: number): void => {
    setselectedGameId(gameId)
    setDeleteConfirmationOpen(true)
  }

  const handleCloseDeleteConfirmation = (): void => {
    setselectedGameId(0)
    setChoosedId(0)
    setDeleteConfirmationOpen(false)
  }

  const handleDeleteGame = (): void => {
    dispatch(deleteGame(selectedGameId))
    handleCloseDeleteConfirmation()
    setselectedGameId(0)
  }

  useEffect(() => {
    fetchGame(choosedId)
    dispatch(getUser())
  }, [
    dispatch,
    setselectedGameId,
    deleteConfirmationOpen,
    selectedGameId,
    choosedId,
  ])

  return (
    <Container>
      <Typography borderTop={2} paddingTop={2} variant="h6" gutterBottom>
        Find/Delete Game By Id
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <TextField
              type="text"
              placeholder="Id..."
              aria-label="Id..."
              title="id"
              value={selectedGameId}
              onChange={e => setselectedGameId(Number(e.target.value))}
            />
            <Button
              sx={{ mx: 1 }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Find
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleOpenDeleteConfirmation(selectedGameId)}
              disabled={!selectedGame}
            >
              Delete
            </Button>
          </Box>
        </form>
      </Grid>

      <Container sx={{ mb: 5, pb: 2, borderBottom: 2 }}>
        {selectedGame ? (
          <GameFile
            id={selectedGame.id}
            image={selectedGame.image}
            title={selectedGame.title}
            price={selectedGame.price}
            session={selectedGame.session}
            numberOfPlayers={selectedGame.numberOfPlayers}
            minAge={selectedGame.minAge}
            description={selectedGame.description}
            releaseDate={selectedGame.releaseDate}
          />
        ) : null}
        {isFinding && !selectedGame && (
          <Typography textAlign="left" paddingTop={2} variant="h6" gutterBottom>
            No Games with ID: {choosedId}
          </Typography>
        )}
      </Container>

      <Dialog
        open={deleteConfirmationOpen}
        onClose={handleCloseDeleteConfirmation}
      >
        <DialogTitle>Delete Game</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this game?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteConfirmation}>Cancel</Button>
          <Button onClick={handleDeleteGame} color="error" variant="contained">
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
