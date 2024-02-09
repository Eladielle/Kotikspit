import { useNavigate } from 'react-router-dom'
import { EuroRounded } from '@mui/icons-material'
import { useAppDispatch } from '../../app/hooks'
import { deleteGame } from './gamesSlice'
import './GameCard.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../auth/Selectors'
import { getUser } from '../auth/authSlice'

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
	const navigate = useNavigate()
	const handleClick = (): void => {
		navigate(`/game-details/${id}`)
	}
	const handleClickPrice = (): void => {
		navigate(`/experience`)
	}

	const dispatch = useAppDispatch()
	const handleClickDelete = (id: number): void => {
		dispatch(deleteGame(id))
	}
	const user = useSelector(selectUser)

	React.useEffect(() => {
		dispatch(getUser())
	}, [dispatch])

	return (
		<div className="containerGames">
			<div className="wrapperGames">
				<div
					className="banner-image-games"
					style={{
						backgroundImage: `url(http://localhost:8080/api/v1/games/${id}/image)`,
					}}
				>
					{' '}
				</div>
				<h1 className="h1-g"> {title}</h1>
				<p className="age-games">
					 Age:{minAge} <br />
					Players: {numberOfPlayers}
				</p>
			<div className="button-wrapper-games">
				<button className="btng outlineGames"onClick={handleClick}>
					DETAILS
				</button>
				<button className="btng fillgames"
				onClick={handleClickPrice}
				>{price}<EuroRounded />
				</button>
				{ user && user.role === 'ADMIN' && (<button
					className="btng filllgames"
					onClick={() => handleClickDelete(id)}
				>
					DELETE
				</button>)}
			</div>
		</div>
		</div>
	)
}
