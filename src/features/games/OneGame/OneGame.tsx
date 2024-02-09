import type { RootState } from '../../../app/store'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { getOneGame } from './OneGameSlice'
import { EuroRounded } from '@mui/icons-material'
import {
	CardContent,
	Container,
	Typography,
	CardActions,
	Box,
	Card,
} from '@mui/material'
import { red } from '@mui/material/colors'
import './OneGame.css'
import Navigation from '../../../components/navigation/navMainPage'

export default function GamePage(): JSX.Element {
	const game = useAppSelector((state: RootState) => state.oneGame)
	const { gameId } = useParams()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getOneGame(Number(gameId)))
	}, [dispatch, gameId])

	const navigate = useNavigate()
	const handleClick = (): void => {
		navigate(`/games`)
	}
	const handleClickPrice = (): void => {
		navigate(`/experience`)
	}

	return (
		<>
		<Navigation/>
		<div className="containerGame">
			<div className="wrapperGame">
			<div
					className="banner-image-game"
					style={{
						backgroundImage: `url(http://localhost:8080/api/v1/games/${game.game.id}/image)`,
					}}
				>
					{' '}
				</div>
				<h1 className="h1-gg"> {game.game.title}</h1>
				<div className="d1-gg">Release date: {game.game.releaseDate}</div>
				<div className="d2-gg v_lined right-10 px-5 ">
					&nbsp; GENRE
					<br />
					&nbsp;  {game.game.genre}
				</div>
				<div className="d2-gg v_lined right-20 px-20">
					&nbsp; SESSION
					<br />
					&nbsp; {game.game.session}
				</div>
				<div className="d2-gg v_lined right-20 px-0">
					&nbsp; STATE
					<br />
					&nbsp; {game.game.state}
				</div>
				<div className="d2-gg v_lined left-0 px-0 py-5">
					&nbsp; MIN AGE
					<br />
					&nbsp; {game.game.minAge}
				</div>
				<div className="d2-gg v_lined left-10 px-5">
					&nbsp; NUMBER OF PLAYERS
					<br />
					&nbsp; {game.game.numberOfPlayers}
				</div>
				<div className="desc-game">{game.game.description}</div>
					<div className="button-wrapper-game">
					<button className="btng fillgame" onClick={handleClickPrice} >
						{game.game.price} <EuroRounded />
						</button>
						<button className="btng fillgame" onClick={handleClick}>
							BACK
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
