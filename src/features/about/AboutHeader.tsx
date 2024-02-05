import Navigation from '../../components/navigation/navMainPage'

export default function AboutHeader(): JSX.Element {
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="bg-about-header"></div>
			<div className="relative w-full">
				<div className="align-middle absolute flex top-[100px] left-1/2 gap-5 -translate-x-1/2 -translate-y-64 text-secondary">
					<button className="btn-xs rounded py-4 px-6 btn-rounded bg-primary opacity-70 sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-sm">
						<a href="https://www.youtube.com/embed/hr8O9LfxGlE">
							WATCH TRAILER
						</a>
					</button>
					<button className="btn-xs rounded py-4 px-6 btn-rounded bg-primary opacity-70 sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-sm">
						<a href="/games">ABOUT THE ADVENTURE</a>
					</button>
					<button className="btn-xs rounded py-4 px-6 btn-rounded bg-primary opacity-70 sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-sm">
						<a href="/experience">BOOK YOUR EXPERIENCE</a>
					</button>
				</div>
			</div>
		</>
	)
}
