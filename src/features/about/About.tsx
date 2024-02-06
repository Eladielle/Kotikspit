import '../about/about.css'
import AboutHeader from '../about/AboutHeader'

export default function About(): JSX.Element {
	return (
		<>
			<AboutHeader />
			<div className="bg-main mb-[150px]">
				<div className="w-3/4 absolute flex-col top-20 left-1/2 -translate-x-1/2">
					<div className="bg-gray-900 opacity-80 max-w-6xl py-3 sm:px-6 lg:px-8 border-2 border-primary">
						<h1 className="text-xl font-bold text-white py-4">
							Virtual reality without edges
						</h1>
						<p className="my-4 text-base/10 text-[22px] font-bold text-gray-500 whitespace-normal">
							Hey! We are
							<span className="text-primary">
								<a href="/"> BEYOND REALMS </a>
							</span>
							and we are making VR of the next generation! Our main goal is
							making VR accessible for everyone. Since 2010, we have been
							developing free movement team games that are suitable for kids and
							adults. We focus on easy and straightforward game mechanics. No
							more cords or restraining wires just free movement around area.
							BEYOND REALMS games are for the most advanced hardware Meta Quest
							3 a tracking system that transfers every movement of the body into
							the virtual world. The ability to play with a team of 1 to 12
							players. Various genres that give emotions that you have not
							experienced before.
							<br />
							The tracking system will transfer all your movements into the
							game, and the huge playground will allow you to feel the freedom
							of movement. A well-developed gameplay will allow each participant
							to feel like a member of the team. You will be able to play the
							same game over and over and discover new emotions and impressions
							every time.Virtual reality is an illusion, but you will forget
							about it when immersed in BEYOND REALMS.
						</p>
					</div>
					<div className="flex absolute left-1/2 -translate-x-1/2 -translate-y-0 py-6">
						<button className=" btn-xs rounded py-4 px-6 btn-rounded bg-primary opacity-70 sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
							<a href="/experience">BOOK YOUR EXPERIENCE</a>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
