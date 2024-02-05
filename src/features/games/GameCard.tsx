import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Box,
  CardActions,
  Button,
  CardHeader,
} from '@mui/material';
import { EuroRounded } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { useAppDispatch } from '../../app/hooks';
import { deleteGame } from './gamesSlice';

export default function GameCard({
  id,
	title,
	price,
	numberOfPlayers,
	minAge,
}: {	
  id: number
  image: string
	title: string
	price: number
	numberOfPlayers: string
	minAge: string
}): JSX.Element {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`/game-details/${id}`);
  };
  const dispatch = useAppDispatch()
  const handleClickDelete = (id: number):void => {
    dispatch(deleteGame(id));
  };
  // useEffect(() => {
  //   const gameData = (data: any): { type: string; payload: number } => ({
  //     type: 'GameData',
  //     payload: data,
  //   });
  //   dispatch(gameData(id));
  // }, [dispatch, id]);

  return (
    <Container maxWidth="sm" >
        <Card sx={{ 
            maxWidth: 400,
            minWidth: 400,
            maxHeight: 460,
            my: '2rem', 
            }}>
      <CardMedia
        sx={{ height: 140 }}
        onClick={handleClick}
        image={`http://localhost:8080/api/v1/games/${id}/image`}
        title="game image"
      />
      <CardContent sx={{ textAlign: 'center' }}>
      <Typography gutterBottom variant="h4" component="div">
        {title}
      </Typography>
        <Typography sx={{ mb: 2 }} variant="h4" component="div">
          {minAge}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h5" color="text.secondary">
         Players: {numberOfPlayers}
        </Typography>
      </CardContent>
      <CardActions sx={{ mr: '0.5rem', justifyContent: 'right' }}>
            <EuroRounded />
            <Box fontSize={24}>{price}</Box>
          </CardActions>
      <CardActions sx={{ textAlign: 'center', bgcolor: red.A400, }}>
        <Button variant="contained" color="secondary" size="medium">Buy ticket</Button>
        <Button variant="contained" color="secondary" size="medium" onClick={() => handleClickDelete(id)}>Delete</Button>
        
      </CardActions>
    </Card>
    </Container>
  );
}
