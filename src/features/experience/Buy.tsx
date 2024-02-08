import { RootState } from '../../app/store'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Navigation from '../../components/navigation/navMainPage'
import { loadPageBuy } from './PageBuySlice'
import './styles.buy.css'
import PageBuy from './type/PageBuy'

export default function Buy(): JSX.Element {
	const pageBuy = useAppSelector((state: RootState) => state.experience.pageBuy)

	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(loadPageBuy())
	}, [dispatch])

	const [selectedGame, setSelectedGame] = useState<
		PageBuy['content'][0] | null
	>(null)
	const [selectedDate, setSelectedDate] = useState<Date | null>(null)
	const [selectedTime, setSelectedTime] = useState('')
	const [numPlayers, setNumPlayers] = useState<number>(1)

	const handleGameChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		const gameId = parseInt(event.target.value)
		const gameSelected = pageBuy.content.find(game => game.id === gameId)
		setSelectedGame(gameSelected || null)
	}

	const handleDateChange = (date: Date | null): void => {
		setSelectedDate(date)
	}

	const handleTimeChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSelectedTime(event.target.value)
	}

	const handleNumPlayersChange = (
		event: ChangeEvent<HTMLInputElement>
	): void => {
		setNumPlayers(parseInt(event.target.value))
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		// Add your form submission logic here
	}

	return (
		<>
			<main className="bg-buy w-full h-full mb-[50px]">
				<Navigation />
				<div>
					<div className="text-primary text-center text-[52px] font-extrabold mt-20">
						CHOOSE YOUR ADVENTURE
					</div>
					<div className="text-secondary text-center text-[52px] font-extrabold">
						8 adventures
					</div>
					<form className="form-container" onSubmit={handleSubmit}>
						<label>
							Select a game:
							<select
								value={selectedGame ? selectedGame.id : ''}
								onChange={handleGameChange}
							>
								<option value="">Select</option>
								{pageBuy.content.map(game => (
									<option key={game.id} value={game.id}>
										{game.title} - Price: {game.price} - Players:{' '}
										{game.numberOfPlayers}
									</option>
								))}
							</select>
						</label>
						<label>
							Select a date: {selectedDate && selectedDate.toDateString()}
							<input
								type="date"
								onChange={e => handleDateChange(new Date(e.target.value))}
							/>
						</label>
						<label>
							Select playing time (minutes): {selectedTime}
							<input
								type="number"
								value={selectedTime}
								onChange={handleTimeChange}
							/>
						</label>
						<label>
							Number of players: {numPlayers}
							<input
								type="number"
								value={numPlayers}
								onChange={handleNumPlayersChange}
							/>
						</label>

						<button className="btn-primary hover:bg-rose-500" type="submit">
							BOOK AN EXPERIENCE
						</button>
					</form>
				</div>
			</main>
		</>
	)
}
