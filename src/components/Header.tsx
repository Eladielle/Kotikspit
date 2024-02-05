import Navigation from './navigation/navMainPage'
import './bg-header.css'

export default function Header(): JSX.Element {
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="bg-header">
				<div className="absolute top-[14%] left-[24%]">
					<img
						src="/img/logo-2.png"
						alt="Logo-2"
						width={innerHeight}
						height={innerHeight}
					/>
				</div>
				<div className="new_main">
					<span className="text-secondary">PARK </span>
					<span className="text-primary">
						VIRTUAL REALITY
						<br />
						FRANKFURT AM MAIN
					</span>
					<br />
					<span className="text-secondary">WITH FREE MOVEMENT</span>
				</div>
				<div className="absolute top-[45%] left-[10%]">
					<div className="text-sm text-primery">
						<ul className="flex gap-x-12 list-disc text-primary text-lg">
							<li>
								<span className="text-secondary hover:text-primary">
									<a href="/birthday">birthday parties</a>
								</span>
							</li>
							<li>
								<span className="text-secondary hover:text-primary">
									<a href="/birthday">corporate events</a>
								</span>
							</li>
							<li>
								<span className="text-secondary hover:text-primary">
									<a href="/experience">experiences</a>
								</span>
							</li>
						</ul>
					</div>
					<div className="py-6">
						<button className="btn-xs rounded py-4 px-8 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
							<a href="/experience">BOOK YOUR EXPERIENCE</a>
						</button>
					</div>
				</div>
				<div className="absolute top-[20%] left-[50%]">
					<img src="/img/people.png" alt="People" width={710} height={60} />
				</div>
				<div className="absolute flex flex-col items-center justify-center top-[70%] left-1/2 -translate-x-1/2 -translate-y-0  text-[32px] font-black">
					<p className="text-primary">BEYOND REALMS PARK</p>
					<p className="text-secondary">- THIS IS</p>
				</div>
			</div>
		</>
	)
}
