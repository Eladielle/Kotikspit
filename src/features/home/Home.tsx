import Header from '../../components/Header'

export default function Home(): JSX.Element {
	return (
		<>
			<Header />
			<main className="w-full h-full mb-[100px]">
				<div className="flex flex-col gap-5 items-center justify-center w-full">
					<div className="grid grid-cols-3 grid-rows-3 gap-x-0 gap-y-0 justify-items-center w-3/4 h-full">
						<div>
							<img src="/img/i1.png" alt="Support" />
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
						<video
							className="border-2 border-primary rounded-lg mt-[-150px]"
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
					<div className="flex-col content-center text-secondary">
						<div className="flex justify-center">
							<img src="/img/arena.png" alt="Arena" />
						</div>
						<div className="text-base border-2 border-primary w-3/5 mx-auto p-4 rounded-lg mt-10">
							<p>
								Virtual arena is a new, exciting and affordable virtual reality
								attraction for location-based entertainment (LBE). The package
								includes more than 10 competitive games, different map sizes,
								game server and operator app. Thanks to the virtual arena update
								guarantee, you get a brand new free game every quarter.
							</p>
							<br />
							<p>
								VA is the ultimate family-friendly and comfortable free-roam VR
								experience for returning guests. It can be operated with just
								one employee. Players are introduced to the experience in less
								than 3 minutes. With the integrated tournament mode, we can
								offer team events and e-sports activities even for large groups.
							</p>
						</div>
					</div>
					<div className="text-[32px] font-black py-20 text-center">
						<p className="text-secondary">
							EXPERIENCE THE FASCINATING WORLD OF
						</p>
						<p className="text-primary">BEYOUND REALMS 29 VR REALITY TODAY!</p>
					</div>
					<div className="grid grid-cols-2 gap-8 justify-items-center text-lg">
						<div className="relative left-[70px]">
							<img src="/img/serv1.png" alt="Birthday Parties" />
							<div className="absolute mt-[-80px] ml-[60px] text-secondary">
								<a href="/birthday" className="hover:text-primary">
									BIRTHDAY PARTIES
								</a>
							</div>
						</div>
						<div className="relative shrink w-auto h-[310px]">
							<img src="/img/serv2.png" alt="Gift Card" />
							<div className="absolute mx-auto ml-[30px] mt-[-90px] text-secondary">
								<span>
									<a href="/birthday" className="hover:text-primary">
										GIFT CARD
									</a>
								</span>
							</div>
						</div>
						<div className="absoluteshrink mx-auto mt-[80px]">
							<img
								src="/img/logo-2.png"
								alt="Beyond Realms 29"
								className="w-[600px]"
							/>
						</div>
						<div>
							<img
								src="/img/serv3.png"
								alt="Corporate events"
								className="w-[500px]"
							/>
							<div className="absolute mx-auto ml-8 mt-[-60px] text-secondary">
								<span>
									<a href="/birthday" className="hover:text-primary">
										CORPORATE EVENTS
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
