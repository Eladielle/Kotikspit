import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Home(): JSX.Element {
	return (
		<>
			<Header />
			<main className="flex relative w-full h-full mb-[50px]">
				<div className="flex flex-col gap-5 items-center justify-center w-full">
					<div className="grid grid-cols-3 grid-rows-3 gap-x-0 gap-y-0 justify-items-center mt-[-150px] w-3/4 h-full">
						<div>
							<img src="/img/i1.png" alt="Suooort" />
						</div>
						<div>
							<img src="/img/i2.png" alt="Tracking System" />
						</div>
						<div>
							<img src="/img/i3.png" alt="Multilevel platform" />
						</div>
						<div className="w-60 text-center">
							<p>
								<span className="text-[14px] text-primary">
									Support and assistance
								</span>
								<br />
								<span className="text-[14px] text-secondary">
									from our qualified VR attendants
								</span>
							</p>
						</div>
						<div className="w-60 text-center">
							<p>
								<span className="text-[14px] text-primary">
									Advanced tracking system
								</span>
								<br />
								<span className="text-[14px] text-secondary">
									will transfer your movements to
									<br />
									game as realistic as possible
								</span>
							</p>
						</div>
						<div className="w-60 text-center">
							<p>
								<span className="text-[14px] text-primary">
									Multilevel, virtual platform
								</span>
								<br />
								<span className="text-[14px] text-secondary">
									3 times larger than a real playing field
								</span>
							</p>
						</div>
					</div>
					<div className="w-[900px] mt-[-400px]">
						<div>
							<video
								className="border-2 border-primary rounded-lg mt-[-100px]"
								width="900"
								height="600"
								autoPlay
								muted
								src="/video/29en.webm"
								controls
							></video>
						</div>
						<div className="text-[32px] font-black py-20 text-center">
							<p className="text-secondary">GET YOUR TEAM TOGETHER</p>
							<p className="text-primary">OTHER WORLDS ARE WAITING FOR YOU!</p>
						</div>
						<div>
							<div className="mt-[-100px]">
								<img src="/img/arena.png" alt="Arena" />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
