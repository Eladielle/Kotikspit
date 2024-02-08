import { RootState } from '../../app/store'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Navigation from '../../components/navigation/navMainPage'
import { loadPageBuy } from './PageBuySlice'
import './styles.buy.css'
import PageBuy from './type/PageBuy'

export default function Buy(): JSX.Element {
	const pageBuy = useAppSelector((state: RootState) => state.experience)
	// const games = useAppSelector((state: RootState) => state.experience.)

	const gameTitles = [
		'Kernel: Confrontation',
		'Colony: Code Red',
		'Shmooter',
		'Island Assault',
		'Safe night',
		'Ghost Mansion',
		'Space Battle',
		'Space Battle 2',
	]

	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(loadPageBuy())
	}, [])

	function handleDateChange(date: Date | null): void {
		throw new Error('Function not implemented.')
	}

	function handleTimeChange(time: Time | null): void {
		throw new Error('Function not implemented.')
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		throw new Error('Function not implemented.')
	}

	function handleNumPlayersChange(event: ChangeEvent<HTMLInputElement>): void {
		throw new Error('Function not implemented.')
	}
	function showMessage(messsage: string) {
		messsage = 'Game'
		alert('You successfully bought ' + messsage)
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
							<select>
								{gameTitles.map((title, id) => (
									<option key={id} value={title}>
										{title}
									</option>
								))}
							</select>
						</label>
						<label>
							Select a date:
							<input
								type="date"
								onChange={e => handleDateChange(new Date(e.target.value))}
							/>
						</label>
						<label>
							Select playing time (minutes):
							<input
								type="time"
								onChange={e => handleTimeChange(new Time(e.target.value))}
							/>
						</label>
						<label>
							Number of players:
							<input type="number" onChange={handleNumPlayersChange} />
						</label>
						<button
							className="btn-primary hover:bg-rose-500"
							type="submit"
							onClick={() => showMessage('the Game')}
						>
							BOOK AN EXPERIENCE
						</button>
					</form>
				</div>
			</main>
		</>
	)
}
