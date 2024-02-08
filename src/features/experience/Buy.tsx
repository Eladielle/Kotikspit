import type { RootState } from '../../app/store'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Navigation from '../../components/navigation/navMainPage'
import { loadPageBuy } from './PageBuySlice'
import './styles.buy.css'

export default function Buy(): JSX.Element {
	const games = useAppSelector((state: RootState) => state.news)

	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(loadPageBuy())
	}, [])

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
					<form className="form-container">
						<label>
							Select a game:
							<select>
								<option value="">Select</option>
								{games.pageNews.content.map(game => (
									<option key={game.title} value={game.title}>
										{game.title}
									</option>
								))}
							</select>
						</label>
						<label>
							Select a date:
							<input type="date" />
						</label>
						<label>
							Select playing time (minutes):
							<input type="number" />
						</label>
						<label>
							Number of players:
							<input type="number" />
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
