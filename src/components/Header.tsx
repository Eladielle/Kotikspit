import Navigation from './navigation/navMainPage'
import styles from './Header.module.css'

export default function Header(): JSX.Element {
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div
				style={{
					position: 'relative',
					top: '0',
					left: '0',
					backgroundImage: "url('/img/bg-header.png')",
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100%',
					width: 'inherit',
					height: '64.313rem',
				}}
			>
				<div className="absolute top-[150px] left-[200px]">
					<img src="/img/logo-2.png" alt="Logo-2" width={1000} height={60} />
				</div>
				<div
					style={{
						position: 'absolute',
						width: 'fit-content',
						height: 'min-content',
						fontSize: '45px',
						fontFamily: 'Arial Black',
						lineHeight: '1.2',
						top: '270px',
						left: '100px',
					}}
				>
					<span className="text-secondary">PARK </span>
					<span className="text-primary">
						VIRTUAL REALITY
						<br />
						FRANKFURT AM MAIN
					</span>
					<br />
					<span className="text-secondary">WITH FREE MOVEMENT</span>
				</div>
				<div className="absolute top-[450px] left-[100px]">
					<div className="text-sm text-primery">
						<ul className="flex gap-x-24 list-disc text-primary text-lg">
							<li>
								<span className="text-secondary">birthday parties</span>
							</li>
							<li>
								<span className="text-secondary">corporate events</span>
							</li>
							<li>
								<span className="text-secondary">experiences</span>
							</li>
						</ul>
					</div>
					<div className="py-6">
						<button className="btn-xs rounded py-4 px-6 btn-rounded bg-primary sm:btn-sm md:btn-md lg:btn-lg hover:bg-rose-500 text-secondary text-sm">
							<a href="/experience">BOOK YOUR EXPERIENCE</a>
						</button>
					</div>
				</div>
				<div className="absolute top-[225px] left-[760px]">
					<img src="/img/people.png" alt="People" width={710} height={60} />
				</div>
				<div className="absolute flex flex-col gap-3 items-center justify-center top-[700px] left-[500px] text-[32px] font-black">
					<p className="text-primary">BEYOND REALMS PARK</p>
					<p className="text-secondary">- THIS IS</p>
				</div>
			</div>
		</>
	)
}
