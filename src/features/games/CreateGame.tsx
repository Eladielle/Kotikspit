import { useState, FormEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import GameDto from "./types/GameDTO";
import { createGame } from "./gamesSlice";
import { Box, FormGroup, TextField, Button } from "@mui/material";
import Navigation from "../../components/navigation/navMainPage";

export default function CreateGame(): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [genre, setGenre] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [session, setSession] = useState<string>('');
  const [numberOfPlayers, setNumberOfPlayers] = useState<string>('');
  const [minAge, setMinAge] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [releaseDate, setReleaseDate] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const dispatch = useAppDispatch();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const gameDTO: GameDto = {
            title,
            price,
            genre,
            state,
            session,
            numberOfPlayers,
            minAge,
            description,
            releaseDate
        }
        dispatch(createGame(gameDTO)); 
    }

    function handleTitleChange(inputTitle: string): void {
      setTitle(inputTitle);
    }
    function handleGenreChange(inputGenre: string): void {
      setGenre(inputGenre);
    }
    function handlePriceChange(inputPrice: number): void {
      setPrice(inputPrice);
    }
  
    function handleDescriptionChange(inputDescription: string): void {
      setDescription(inputDescription);
    }
  
    function handleStateChange(inputState: string): void {
      setState(inputState);
    }
  
    function handleSessionChange(inputSession: string): void {
      setSession(inputSession);
    }
  
    function handleNumberOfPlayersChange(inputNumberOfPlayers: string): void {
      setNumberOfPlayers(inputNumberOfPlayers);
    }
  
    function handleMinAgeChange(inputMinAge: string): void {
      setMinAge(inputMinAge);
    }
  
    function handleReleaseDateChange(inputReleaseDate: string): void {
      setReleaseDate(inputReleaseDate);
    }
  
return (
  <>
  <Navigation />
  <div className="bg-header flex items-center justify-center mt-20">
    <Box sx={{ fontFamily: 'Arial', my: 2 }}>
      <form className="auth-form" onSubmit={handleSubmit}>
        <Box
          sx={{
            bgcolor: 'grey.900',
            fontSize: 30,
            fontWeight: 600,
            color: '#de1945',
            textAlign: 'center',
          }}
        >
          NEW GAME
        </Box>
    <FormGroup>
      <br />
      <TextField variant="outlined" margin="dense" label="Title" name="title" type="text" value={title} onChange={(event) => handleTitleChange(event.target.value)} />

      <TextField variant="outlined" margin="dense" label="Price" name="price" type="number" value={price} onChange={(event) => handlePriceChange(Number(event.target.value))} />

      <TextField variant="outlined" margin="dense" label="Genre" name="genre" type="text" value={genre} onChange={(event) => handleGenreChange(event.target.value)} />

      <TextField variant="outlined" margin="dense" label="State" name="state" type="text" value={state} onChange={(event) => handleStateChange(event.target.value)} />

      <TextField variant="outlined" margin="dense" label="Session" name="session" type="text" value={session} onChange={(event) => handleSessionChange(event.target.value)} />

      <TextField variant="outlined" margin="dense" label="NumberOfPlayers" name="numberOfPlayers" type="text" value={numberOfPlayers} onChange={(event) => handleNumberOfPlayersChange(event.target.value)} />

      <TextField variant="outlined" margin="dense" label="MinAge" name="minAge" type="text" value={minAge} onChange={(event) => handleMinAgeChange(event.target.value)} />

      <TextField variant="outlined" margin="dense" label="Description" name="description" type="text" value={description} onChange={(event) => handleDescriptionChange(event.target.value)} />

      <TextField variant="outlined" margin="dense" label="Release Date" name="releaseDate" type="text" value={releaseDate} onChange={(event) => handleReleaseDateChange(event.target.value)} />

      <br />
      <Box sx={{ textAlign: 'center', my: 2 }}></Box>
        <Button type="submit" size="large" color="error" variant="outlined">
          CREATE
          </Button>
    </FormGroup>
  </form>
</Box>
</div>
</>
)
}
