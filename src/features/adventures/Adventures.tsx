import Navigation from '../../components/navigation/navMainPage'
import './advent.css'

export default function Adventures(): JSX.Element {
	return (
		<>
			<main className="bg-adv w-full h-full">
				<Navigation />
				<div className="relative w-full h-full">
					<div className="container mx-auto">
						<img src="/img/img_kernel.jpg" alt="Kernel: Confrontation" />
					</div>
					<div className="container absolute flex-col left-32 top-[140px] w-7/12 text-secondary">
						<span className="text-[42px] font-bold text-primary">
							BEYOND REALMS{' '}
						</span>
						<span className="text-[42px] font-bold">GAMES</span>
						<div className="text-[28px] font-bold py-5">
							Kernel: Confrontation
						</div>
						<div className="v_lined left-0 px-0">
							&nbsp; GENRE
							<br />
							&nbsp; PvP
						</div>
						<div className="v_lined left-0 px-20">
							&nbsp; SESSION
							<br />
							&nbsp; 60 min
						</div>
						<div className="v_lined left-0 px-0">
							&nbsp; PLAYERS
							<br />
							&nbsp; 2+
						</div>
						<div className="v_lined left-0 px-20">
							&nbsp; AGE
							<br />
							&nbsp; 8+
						</div>
						<div className=" text-base py-5">
							BEYOND REALMS is happy to present its new hyper-realistic shooter
							- KERNEL. Two teams will fight on the territory of an abandoned
							bunker where abnormal things take place: the mysterious black sun
							changes the laws of physics.
						</div>
					</div>
					<div>
						<div className="container absolute flex bottom-[150px] place-content-center gap-x-6 text-sm text-secondary">
							<button className="rounded w-50 py-2 px-2 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/games">MORE DETAILS</a>
							</button>
							<button className="rounded w-50 py-2 px-2 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/experience">BOOK YOUR EXPERIENCE</a>
							</button>
							<button className="rounded w-50 py-2 px-2 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/video/29en.webm">WATCH TRAILER</a>
							</button>
						</div>
						<div className="absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
							<div className="text-[42px] font-bold">GAMES</div>
							<div className="text-[28px] font-bold">Colony: Code Red</div>
							<div className="v_lined left-0 px-0 py-5">
								&nbsp; GENRE
								<br />
								&nbsp; Sci-Fi
							</div>
							<div className="v_lined left-0 px-20">
								&nbsp; SESSION
								<br />
								&nbsp; 30 min
							</div>
							<div className="v_lined left-0 px-0">
								&nbsp; PLAYERS
								<br />
								&nbsp; 1-4
							</div>
							<div className="v_lined left-0 px-20">
								&nbsp; AGE
								<br />
								&nbsp; 12+
							</div>
							<div className=" text-base1">
								The year is 2508. Your journey begins on a distant exploration
								and research station located near exoplanet Alekta in the
								chilling, harrowing emptiness of space. You’re far beyond the
								limits of communication and human knowledge. Who knows what
								awaits you. Will you make it out of the station alive?
							</div>
							<div className="relative">
								<div className="absolute flex top-[300px] left-[50%] gap-x-6 -translate-y-64 -translate-x-1/2 transform-gpu text-nowrap text-secondary">
									<button className="btn-lg rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
										<a href="/games">MORE DETAILS</a>
									</button>
									<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
										<a href="/experience">BOOK YOUR EXPERIENCE</a>
									</button>
									<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
										<a href="/video/29en.webm">WATCH TRAILER</a>
									</button>
								</div>
							</div>
						</div>
						<div className="relative w-full h-full">
							<div className="absolute py-10">
								<img src="/img/img_shmooter.jpeg" alt="Shmooter" />
							</div>
							<div className="absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
								<div className="text-[28px] font-bold">Shmooter</div>
								<div className="v_lined left-0 px-0 py-5">
									&nbsp; GENRE
									<br />
									&nbsp; Arcade
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; SESSION
									<br />
									&nbsp; 60 min
								</div>
								<div className="v_lined left-0 px-0">
									&nbsp; PLAYERS
									<br />
									&nbsp; 2+
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; AGE
									<br />
									&nbsp; 8+
								</div>
								<div className=" text-base">
									Dreaming of becoming a cartoony hero who runs with a gun
									blazing? Then the Shmooter game cartoony world of lawlessness
									is waiting for you!
								</div>
								<br />
								<div className=" text-base">
									Kick your opponents’ asses in a “player vs. player” or in a
									“team vs. team” mode.
								</div>
								<br />
								<div className=" text-base">
									Radiation incinerated every living thing, turning most of the
									survivors into mutant monsters. Only a few have retained their
									mind, including your team, a group of tired and hungry
									travelers on their way to a military base, protected and free
									from radiation. In search of a shelter from irradiated
									pursuers, you got to the agreed point of evacuation.
								</div>
								<div className="relative">
									<div className="absolute flex top-[280px] left-[50%] gap-x-6 -translate-y-64 -translate-x-1/2 transform-gpu text-nowrap text-secondary">
										<button className="btn-lg rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lghover:bg-rose-500 text-secondary text-sm">
											<a href="/games">ABOUT THE ADVENTURE</a>
										</button>
										<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
											<a href="/experience">BOOK YOUR EXPERIENCE</a>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="relative w-full h-full py-20">
							<div className="py-20">
								<img src="/img/img_island.jpeg" alt="Island Assault" />
							</div>
							<div className="absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
								<div className="text-[42px] font-bold">GAMES</div>
								<div className="text-[28px] font-bold">Colony: Code Red</div>
								<div className="v_lined left-0 px-0 py-5">
									&nbsp; GENRE
									<br />
									&nbsp; Sci-Fi
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; SESSION
									<br />
									&nbsp; 30 min
								</div>
								<div className="v_lined left-0 px-0">
									&nbsp; PLAYERS
									<br />
									&nbsp; 1-4
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; AGE
									<br />
									&nbsp; 12+
								</div>
								<div className=" text-base">
									The year is 2041. The world is in ruins after the nuclear war
									that ended several years ago.
								</div>
								<div>
									Radiation incinerated every living thing, turning most of the
									survivors into mutant monsters. Only a few have retained their
									mind, including your team, a group of tired and hungry
									travelers on their way to a military base, protected and free
									from radiation. In search of a shelter from irradiated
									pursuers, you got to the agreed point of evacuation.
								</div>
								<div className="relative">
									<div className="absolute flex top-[280px] left-[50%] gap-x-6 -translate-y-64 -translate-x-1/2 transform-gpu text-nowrap text-secondary">
										<button className="btn-lg rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lghover:bg-rose-500 text-secondary text-sm">
											<a href="/games">ABOUT THE ADVENTURE</a>
										</button>
										<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
											<a href="/experience">BOOK YOUR EXPERIENCE</a>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="relative w-full h-full py-20">
							<div className="py-20">
								<img src="/img/img_safe_night.jpeg" alt="Safe Night" />
							</div>
							<div className="absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
								<div className="text-[42px] font-bold">GAMES</div>
								<div className="text-[28px] font-bold">Colony: Code Red</div>
								<div className="v_lined left-0 px-0 py-5">
									&nbsp; GENRE
									<br />
									&nbsp; Sci-Fi
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; SESSION
									<br />
									&nbsp; 30 min
								</div>
								<div className="v_lined left-0 px-0">
									&nbsp; PLAYERS
									<br />
									&nbsp; 1-4
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; AGE
									<br />
									&nbsp; 12+
								</div>
								<div className=" text-base">
									The year is 2041. The world is in ruins after the nuclear war
									that ended several years ago.
								</div>
								<div>
									Radiation incinerated every living thing, turning most of the
									survivors into mutant monsters. Only a few have retained their
									mind, including your team, a group of tired and hungry
									travelers on their way to a military base, protected and free
									from radiation. In search of a shelter from irradiated
									pursuers, you got to the agreed point of evacuation.
								</div>
								<div className="relative">
									<div className="absolute flex top-[280px] left-[50%] gap-x-6 -translate-y-64 -translate-x-1/2 transform-gpu text-nowrap text-secondary">
										<button className="btn-lg rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lghover:bg-rose-500 text-secondary text-sm">
											<a href="/games">ABOUT THE ADVENTURE</a>
										</button>
										<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
											<a href="/experience">BOOK YOUR EXPERIENCE</a>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="relative w-full h-full py-20">
							<div className="py-20">
								<img src="/img/img_ghost_mansion.jpeg" alt="Ghost Mansion" />
							</div>
							<div className="absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
								<div className="text-[42px] font-bold">GAMES</div>
								<div className="text-[28px] font-bold">Colony: Code Red</div>
								<div className="v_lined left-0 px-0 py-5">
									&nbsp; GENRE
									<br />
									&nbsp; Sci-Fi
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; SESSION
									<br />
									&nbsp; 30 min
								</div>
								<div className="v_lined left-0 px-0">
									&nbsp; PLAYERS
									<br />
									&nbsp; 1-4
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; AGE
									<br />
									&nbsp; 12+
								</div>
								<div className=" text-base">
									The year is 2041. The world is in ruins after the nuclear war
									that ended several years ago.
								</div>
								<div>
									Radiation incinerated every living thing, turning most of the
									survivors into mutant monsters. Only a few have retained their
									mind, including your team, a group of tired and hungry
									travelers on their way to a military base, protected and free
									from radiation. In search of a shelter from irradiated
									pursuers, you got to the agreed point of evacuation.
								</div>
								<div className="relative">
									<div className="absolute flex top-[280px] left-[50%] gap-x-6 -translate-y-64 -translate-x-1/2 transform-gpu text-nowrap text-secondary">
										<button className="btn-lg rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lghover:bg-rose-500 text-secondary text-sm">
											<a href="/games">ABOUT THE ADVENTURE</a>
										</button>
										<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
											<a href="/experience">BOOK YOUR EXPERIENCE</a>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="relative w-full h-full py-20">
							<div className="py-20">
								<img src="/img/img_space_battle.jpeg" alt="Space Battle" />
							</div>
							<div className="absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
								<div className="text-[42px] font-bold">GAMES</div>
								<div className="text-[28px] font-bold">Colony: Code Red</div>
								<div className="v_lined left-0 px-0 py-5">
									&nbsp; GENRE
									<br />
									&nbsp; Sci-Fi
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; SESSION
									<br />
									&nbsp; 30 min
								</div>
								<div className="v_lined left-0 px-0">
									&nbsp; PLAYERS
									<br />
									&nbsp; 1-4
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; AGE
									<br />
									&nbsp; 12+
								</div>
								<div className=" text-base">
									The year is 2041. The world is in ruins after the nuclear war
									that ended several years ago.
								</div>
								<div>
									Radiation incinerated every living thing, turning most of the
									survivors into mutant monsters. Only a few have retained their
									mind, including your team, a group of tired and hungry
									travelers on their way to a military base, protected and free
									from radiation. In search of a shelter from irradiated
									pursuers, you got to the agreed point of evacuation.
								</div>
								<div className="relative">
									<div className="absolute flex top-[280px] left-[50%] gap-x-6 -translate-y-64 -translate-x-1/2 transform-gpu text-nowrap text-secondary">
										<button className="btn-lg rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lghover:bg-rose-500 text-secondary text-sm">
											<a href="/games">ABOUT THE ADVENTURE</a>
										</button>
										<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
											<a href="/experience">BOOK YOUR EXPERIENCE</a>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="relative w-full h-full py-20">
							<div>
								<img src="/img/img_space_battle2.png" alt="Space Battle 2" />
							</div>
							<div className="absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
								<div className="text-[42px] font-bold">GAMES</div>
								<div className="text-[28px] font-bold">Colony: Code Red</div>
								<div className="v_lined left-0 px-0 py-5">
									&nbsp; GENRE
									<br />
									&nbsp; Sci-Fi
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; SESSION
									<br />
									&nbsp; 30 min
								</div>
								<div className="v_lined left-0 px-0">
									&nbsp; PLAYERS
									<br />
									&nbsp; 1-4
								</div>
								<div className="v_lined left-0 px-20">
									&nbsp; AGE
									<br />
									&nbsp; 12+
								</div>
								<div className=" text-base">
									The year is 2041. The world is in ruins after the nuclear war
									that ended several years ago.
								</div>
								<div>
									Radiation incinerated every living thing, turning most of the
									survivors into mutant monsters. Only a few have retained their
									mind, including your team, a group of tired and hungry
									travelers on their way to a military base, protected and free
									from radiation. In search of a shelter from irradiated
									pursuers, you got to the agreed point of evacuation.
								</div>
								<div className="relative">
									<div className="absolute flex top-[280px] left-[50%] gap-x-6 -translate-y-64 -translate-x-1/2 transform-gpu text-nowrap text-secondary">
										<button className="btn-lg rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lghover:bg-rose-500 text-secondary text-sm">
											<a href="/games">ABOUT THE ADVENTURE</a>
										</button>
										<button className="btn-lg  rounded py-2 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
											<a href="/experience">BOOK YOUR EXPERIENCE</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
