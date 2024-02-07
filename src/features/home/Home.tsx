import Header from '../../components/Header'

export default function Home(): JSX.Element {
	return (
		<>
			<Header />
			<main className="flex relative w-full h-full mb-[300px]">
				<div className="flex flex-col gap-5 items-center justify-center w-full">
					<div className="grid grid-cols-3 grid-rows-3 gap-x-0 gap-y-0 justify-items-center mt-[-100px] w-3/4 h-full">
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
					<div className="w-[900px] mt-[-300px]">
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
						<div className="p-2 mx-auto relative flex justify-center space-x-2 text-secondary mb-80">
							<div className=" w-[1600px] absolute">
								<img src="/img/arena.png" alt="Arena" />
							</div>
							<div className="absolute text-lg border-2 border-primary p-6 w-2/4 right-0">
								<p>
									Virtual arena is a new, exciting and affordable virtual
									reality attraction for location-based entertainment (LBE). The
									package includes more than 10 competitive games, different map
									sizes, game server and operator app. Thanks to the virtual
									arena update guarantee, you get a brand new free game every
									quarter.
								</p>
								<br />
								<p>
									VA is the ultimate family-friendly and comfortable free-roam
									VR experience for returning guests. It can be operated with
									just one employee. Players are introduced to the experience in
									less than 3 minutes. With the integrated tournament mode, we
									can offer team events and e-sports activities even for large
									groups.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
