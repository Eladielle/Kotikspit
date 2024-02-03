import Navigation from '../../components/navigation/navMainPage'

export default function AboutHeader(): JSX.Element {
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="bg-about-header">
				<div className="absolute flex-container w-[50%] bottom-40 left-[400px]">
					<ul className="absolute flex justify-around gap-6 bottom-50">
						<li>
							<button className="btn-xs rounded py-4 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
								<a href="https://www.youtube.com/embed/hr8O9LfxGlE">
									WATCH TRAILER
								</a>
							</button>
						</li>
						<li>
							<button className="btn-xs rounded py-4 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
								<a href="/games">ABOUT THE ADVENTURE</a>
							</button>
						</li>
						<li>
							<button className="btn-xs rounded py-4 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
								<a href="/experience">BOOK YOUR EXPERIENCE</a>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
