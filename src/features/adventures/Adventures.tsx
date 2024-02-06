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
					</div>
				</div>
				<div className="relative w-full h-full py-[100px]">
					<div className="container mx-auto">
						<img src="/img/img_colony.jpg" alt="Colony: Code Red" />
					</div>
					<div className="container absolute flex-col left-32 top-[280px] w-7/12 text-secondary">
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
							The year is 2508. Your journey begins on a distant exploration and
							research station located near exoplanet Alekta in the chilling,
							harrowing emptiness of space. You’re far beyond the limits of
							communication and human knowledge. Who knows what awaits you. Will
							you make it out of the station alive?
						</div>
					</div>
					<div className="relative">
						<div className="container absolute flex bottom-[100px] place-content-center gap-x-6 text-sm text-secondary">
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
					</div>
				</div>
				<div className="relative w-full h-full">
					<div className="container mx-auto">
						<img src="/img/img_shmooter.jpeg" alt="Shmooter" />
					</div>
					<div className="container absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
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
							Dreaming of becoming a cartoony hero who runs with a gun blazing?
							Then the Shmooter game cartoony world of lawlessness is waiting
							for you!
						</div>
						<br />
						<div className=" text-base">
							Shoot robots in front of a fantastic urban landscape, move around
							the base through portals looking for weapons and enemies to kill,
							dance around with a shield like no one is pointing their guns at
							you!
						</div>
						<br />
						<div className=" text-base">
							Kick your opponents’ asses in a “player vs. player” or in a “team
							vs. team” mode.
						</div>
					</div>
					<div className="relative">
						<div className="container absolute flex bottom-[120px] place-content-center gap-x-6 text-sm text-secondary">
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
					</div>
				</div>
				<div className="relative w-full h-full py-[100px]">
					<div className="container mx-auto">
						<img src="/img/img_island.jpeg" alt="Island Assault" />
					</div>
					<div className="container absolute flex-col left-32 top-[250px] w-7/12 text-secondary">
						<div className="text-[28px] font-bold">Island Assault</div>
						<div className="v_lined left-0 px-0 py-5">
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
						<div className=" text-base">
							A group of people have arrived on your island and have decided to
							take over the island and have declared a fight against you. In
							order to retain leadership on the island you have to fight and
							show who is in charge here.
						</div>
						<br />
						<div>
							There is no chance to avoid the battle, there is nowhere to run,
							the only thing left is to fight team against team. Seize points,
							collect medical supplies and use a variety of weapons. Show who is
							a real boss here! You got an amazing chance that can&lsquo;t be
							missed! Being on an industrial island full of objects that you can
							hide behind you can&lsquo;t help yourself getting involved into
							the game because everything here is made specially for that!
						</div>
					</div>
					<div className="relative">
						<div className="container absolute flex bottom-[150px] place-content-center gap-x-6 text-sm text-secondary">
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/games">MORE DETAILS</a>
							</button>
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/experience">BOOK YOUR EXPERIENCE</a>
							</button>
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/video/29en.webm">WATCH TRAILER</a>
							</button>
						</div>
					</div>
				</div>
				<div className="relative w-full h-full">
					<div className="container mx-auto">
						<img src="/img/img_safe_night.jpeg" alt="Safe Night" />
					</div>
					<div className="container absolute flex-col left-32 top-[250px] w-7/12 text-secondary">
						<div className="text-[28px] font-bold">Safe night</div>
						<div className="v_lined left-0 px-0 py-5">
							&nbsp; GENRE
							<br />
							&nbsp; Zombie shooter
						</div>
						<div className="v_lined left-0 px-20">
							&nbsp; SESSION
							<br />
							&nbsp; 60 min
						</div>
						<div className="v_lined left-0 px-0">
							&nbsp; PLAYERS
							<br />
							&nbsp; 2-4
						</div>
						<div className="v_lined left-0 px-20">
							&nbsp; AGE
							<br />
							&nbsp; 8+
						</div>
						<div className=" text-base">
							The year is 2041. The world is in ruins after the nuclear war that
							ended several years ago.
						</div>
						<br />
						<div>
							Radiation incinerated every living thing, turning most of the
							survivors into mutant monsters. Only a few have retained their
							mind, including your team, a group of tired and hungry travelers
							on their way to a military base, protected and free from
							radiation. In search of a shelter from irradiated pursuers, you
							got to the agreed point of evacuation.
						</div>
					</div>
					<div className="relative">
						<div className="container absolute flex bottom-[100px] place-content-center gap-x-6 text-sm text-secondary">
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/games">MORE DETAILS</a>
							</button>
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/experience">BOOK YOUR EXPERIENCE</a>
							</button>
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/video/29en.webm">WATCH TRAILER</a>
							</button>
						</div>
					</div>
				</div>
				<div className="relative w-full h-full py-[100px]">
					<div className="container mx-auto">
						<img src="/img/img_ghost_mansion.jpeg" alt="Ghost Mansion" />
					</div>
					<div className="container absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
						<div className="text-[28px] font-bold">Ghost Mansion</div>
						<div className="v_lined left-0 px-0 py-5">
							&nbsp; GENRE
							<br />
							&nbsp; Adventure
						</div>
						<div className="v_lined left-0 px-20">
							&nbsp; SESSION
							<br />
							&nbsp; 60 min
						</div>
						<div className="v_lined left-0 px-0">
							&nbsp; PLAYERS
							<br />
							&nbsp; 2-8
						</div>
						<div className="v_lined left-0 px-20">
							&nbsp; AGE
							<br />
							&nbsp; 6-12
						</div>
						<div className=" text-base">
							Ghost busters have arrived at an abandoned mansion that holds many
							secrets and mysteries! Otherworldly creatures have filled this
							place, and now you need to free the house from their grasping
							clutches! But ghosts don&lsquo;t know yet that you are brave ghost
							hunters with weapons hanging around your shoulders. But be careful
							- ghosts are extremely cunning
						</div>
						<br />
						<div>
							Nice cartoon graphics, charming ghosts, free roam and full-body
							tracking will give children an unforgettable experience!
						</div>
					</div>
					<div className="relative">
						<div className="container absolute flex bottom-[200px] place-content-center gap-x-6 text-sm text-secondary">
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/games">MORE DETAILS</a>
							</button>
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/experience">BOOK YOUR EXPERIENCE</a>
							</button>
							<button className="rounded w-50 py-2 px-2 bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500">
								<a href="/video/29en.webm">WATCH TRAILER</a>
							</button>
						</div>
					</div>
				</div>
				<div className="relative w-full h-full">
					<div className="container mx-auto">
						<img src="/img/img_space_battle.jpeg" alt="Space Battle" />
					</div>
					<div className="container absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
						<div className="text-[28px] font-bold">Space Battle</div>
						<div className="v_lined left-0 px-0 py-5">
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
						<div className=" text-base">
							Feel like a soldier defending a space station from armed invaders.
							There is endless space and rain of meteorites outside, and there
							is the most modern spaceship around you. You can navigate the
							station using portals, find the latest blasters, shields and first
							aid kits to restore health, and learn to walk on walls and
							ceilings.
						</div>
						<br />
						<div>
							Fight against friends in “every man for himself” or in “team vs
							team” mode. And try not to fly to outer space.
						</div>
					</div>
					<div className="relative">
						<div className="container absolute flex bottom-[100px] place-content-center gap-x-6 text-sm text-secondary">
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
					</div>
				</div>
				<div className="relative w-full h-full py-[100px]">
					<div className="container mx-auto">
						<img src="/img/img_space_battle2.png" alt="Space Battle 2" />
					</div>
					<div className="container absolute flex-col left-32 top-[200px] w-7/12 text-secondary">
						<div className="text-[28px] font-bold">Space Battle 2</div>
						<div className="v_lined left-0 px-0 py-5">
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
						<div className=" text-base">
							There is boundless space, cold and distant stars, and battles
							continue to rage on the space station.
						</div>
						<br />
						<div>
							Alien invaders are trying to take over your station. The good news
							is that you have a new weapon in your arsenal. And teleporters
							will help you get to other floors of your station.
						</div>
						<br />
						<div>
							Battle against your friends in every man for himself mode or team
							against team. And try not to fly into outer space.
						</div>
					</div>
					<div className="relative">
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
					</div>
				</div>
			</main>
		</>
	)
}
