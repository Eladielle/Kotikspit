import '../about/about.css'
import AboutHeader from '../about/AboutHeader'

export default function About(): JSX.Element {
	return (
		<>
			<AboutHeader />
			<div className="bg-main">
				<div className="container bg-gray-900 flex-col max-w-5xl px-28 py-2 mx-auto sm:px-6 lg:px-8">
					<h1 className="text-xl font-bold text-white py-10">Virtual reality without edges</h1>
					<p className="text-base/7 font-bold text-gray-500">
						Hey! We are
						<span className="text-primary">
							<a href="/"> BEYOND REALMS</a>
						</span>{' '}
						and we are making VR of the next generation! Our main goal is making VR accessible for
						everyone. Since 2010, we have been developing free movement team games that are suitable
						for kids and adults. We focus on easy and straightforward game mechanics. No more cords
						or restraining wires just free movement around area. BEYOND REALMS games are for the
						most advanced hardware Meta Quest 3 a tracking system that transfers every movement of
						the body into the virtual world. The ability to play with a team of 1 to 12 players.
						Various genres that give emotions that you have not experienced before.
					</p>
				</div>
			</div>
		</>
	)
}
