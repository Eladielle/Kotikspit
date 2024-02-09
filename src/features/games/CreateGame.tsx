import { useState, FormEvent } from 'react'
import { useAppDispatch } from '../../app/hooks'
import GameDto from './types/GameDTO'
import { createGame } from './gamesSlice'
import {
	Box,
	FormGroup,
	TextField,
	Button,
	Alert,
	Snackbar,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material'
import Navigation from '../../components/navigation/navMainPage'
import Game from './types/GameID'
import { useNavigate } from 'react-router-dom'

export default function CreateGame(): JSX.Element {
	const [image, setImage] = useState<File | null>(null)
	const [title, setTitle] = useState<string>('')
	const [price, setPrice] = useState<number>(0)
	const [genre, setGenre] = useState<string>('')
	const [state, setState] = useState<string>('')
	const [session, setSession] = useState<string>('')
	const [numberOfPlayers, setNumberOfPlayers] = useState<string>('')
	const [minAge, setMinAge] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [releaseDate, setReleaseDate] = useState<string>('')
	const [statusMessage, setStatusMessage] = useState<string>('')
	const [showSnackbar, setShowSnackbar] = useState(false)
	const dispatch = useAppDispatch()
  const navigate = useNavigate()

	const handleClick = (): void => {
		navigate(`/games`)
	}

	const handleImageChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		if (event.target.files && event.target.files.length > 0) {
			setImage(event.target.files[0])
		}
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const gameDTO: GameDto = {
			image,
			title,
			price,
			genre,
			state,
			session,
			numberOfPlayers,
			minAge,
			description,
			releaseDate,
		}

		const dispatchResult = await dispatch(createGame(gameDTO))
		if (dispatchResult.meta.requestStatus === 'fulfilled') {
			setStatusMessage('Game added successfully.')
			setShowSnackbar(true)
			const game = dispatchResult.payload as Game
			if (image) {
				try {
					const formData = new FormData()
					formData.append('image', image)
					console.log(formData)
					const token = localStorage.getItem('accessToken')
					const options =  {
						method: 'POST',
						body: formData,
						headers: {
							Authorization: `Bearer ${token}`,
							// 'Content-Type': 'multipart/form-data',
							accept: '*/*',
						},
					}
					const response = await fetch(`api/v1/games/${game.id}/images`, options)

					if (response.ok) {
						console.log('Файл загружен на сервер.')
					} else {
						console.log('Произошла ошибка при загрузке файла на сервер.')
					}
				} catch (uploadError) {
					console.log(
						'Произошла ошибка при загрузке файла на сервер:',
						uploadError
					)
				}
			}
		}
	}

	function handleTitleChange(inputTitle: string): void {
		setTitle(inputTitle)
	}
	function handleGenreChange(inputGenre: string): void {
		setGenre(inputGenre)
	}
	function handlePriceChange(inputPrice: number): void {
		setPrice(inputPrice)
	}

	function handleDescriptionChange(inputDescription: string): void {
		setDescription(inputDescription)
	}

	function handleStateChange(inputState: string): void {
		setState(inputState)
	}

	function handleSessionChange(inputSession: string): void {
		setSession(inputSession)
	}

	function handleNumberOfPlayersChange(inputNumberOfPlayers: string): void {
		setNumberOfPlayers(inputNumberOfPlayers)
	}

	function handleMinAgeChange(inputMinAge: string): void {
		setMinAge(inputMinAge)
	}

	function handleReleaseDateChange(inputReleaseDate: string): void {
		setReleaseDate(inputReleaseDate)
	}

	const genres = ['RPG','ARCADE','PUZZLE','CHILDREN_S_GAME','INDIE','CASUAL','MUSICAL','ADVENTURES','SIMULATORS','SLOW_MO',
  'SPORTS','SHOOTING','HORROR','SHOOTER','EXTREME','ACTION','QUEST',]

  const states = ['PENDING','ACTIVE','COMPLETED']

  const numberOfPlayerss = ['ONE', 'ONE_TWO', 'ONE_FOUR', 'ONE_EIGHT', 'TWO_TEN']

  const minAges = ['ZERO_PLUS', 'EIGHT_PLUS', 'TEN_PLUS', 'TWELVE_PLUS', 'FOURTEEN_PLUS', 'SIXTEEN_PLUS', 'EIGHTEEN_PLUS']


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
							<TextField
								variant="outlined"
								margin="dense"
								label="Title"
								name="title"
								type="text"
								value={title}
								onChange={event => handleTitleChange(event.target.value)}
							/>

							<TextField
								variant="outlined"
								margin="dense"
								label="Price"
								name="price"
								type="number"
								value={price}
								onChange={event =>
									handlePriceChange(Number(event.target.value))
								}
							/>
							<InputLabel
								id="genre-label"
								sx={{ color: '#de1945' }}
								variant="outlined"
							>
								Genre
							</InputLabel>
							<Select
								labelId="genre-label"
								id="genre"
								value={genre}
								onChange={event => handleGenreChange(event.target.value)}
								label="Genre"
							>
								{genres.map((genre, index) => (
									<MenuItem key={index} value={genre}>
										{genre}
									</MenuItem>
								))}
							</Select>

							<InputLabel
								id="genre-label"
								sx={{ color: '#de1945' }}
								variant="outlined"
							>
								State
							</InputLabel>
							<Select
								labelId="state-label"
								id="state"
								value={state}
								onChange={event => handleStateChange(event.target.value)}
								label="State"
							>
								{states.map((state, index) => (
									<MenuItem key={index} value={state}>
										{state}
									</MenuItem>
								))}
							</Select>

							<TextField
								variant="outlined"
								margin="dense"
								label="Session"
								name="session"
								type="text"
								value={session}
								onChange={event => handleSessionChange(event.target.value)}
							/>

              <InputLabel
								id="genre-label"
								sx={{ color: '#de1945' }}
								variant="outlined"
							>
								Number of Players
							</InputLabel>
							<Select
								labelId="numberOfPlayers-label"
								id="numberOfPlayers"
								value={numberOfPlayers}
								onChange={event => handleNumberOfPlayersChange(event.target.value)}
								label="NumderOfPlayers"
							>
								{numberOfPlayerss.map((numberOfPlayers, index) => (
									<MenuItem key={index} value={numberOfPlayers}>
										{numberOfPlayers}
									</MenuItem>
								))}
							</Select>

							<InputLabel
								id="genre-label"
								sx={{ color: '#de1945' }}
								variant="outlined"
							>
								Min Age
							</InputLabel>
							<Select
								labelId="minAge-label"
								id="minAge"
								value={minAge}
								onChange={event => handleMinAgeChange(event.target.value)}
								label="MinAge"
							>
								{minAges.map((minAge, index) => (
									<MenuItem key={index} value={minAge}>
										{minAge}
									</MenuItem>
								))}
							</Select>

							<TextField
								variant="outlined"
								margin="dense"
								label="Description"
								name="description"
								type="text"
								value={description}
								onChange={event => handleDescriptionChange(event.target.value)}
							/>

							<TextField
								variant="outlined"
								margin="dense"
								label="Release Date"
								name="releaseDate"
								type="text"
								value={releaseDate}
								onChange={event => handleReleaseDateChange(event.target.value)}
							/>

							<input
								name="image"
								type="file"
								onChange={handleImageChange}
							/>
							<br />
							<Box sx={{ textAlign: 'center', my: 2 }}></Box>
							<Button
								type="submit"
								size="large"
								color="error"
								variant="outlined"
								onClick={handleClick}
							>
								CREATE
							</Button>
							<Snackbar
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
								open={showSnackbar}
								autoHideDuration={3000}
								onClose={() => setShowSnackbar(false)}
							>
								<Alert
									severity="success"
									onClose={() => setShowSnackbar(false)}
								>
									{statusMessage}
								</Alert>
							</Snackbar>
						</FormGroup>
					</form>
				</Box>
			</div>
		</>
	)
}
