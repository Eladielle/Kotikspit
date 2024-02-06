import { user } from '../../../features/auth/api'
import Button from './button'
import Logo from './logo'
export default function Navbar({ toggle }: { toggle: () => void }) {
	return (
		<>
			<div className="w-full bg-black opacity-80 fixed top-0 left-0 z-10 text-sm text-white">
				<div className="container mx-auto h-auto">
					<div className="flex flex-row items-center justify-between px-20 p-2 h-full">
						<Logo />
						<button
							type="button"
							className="inline-flex items-center md:hidden"
							onClick={toggle}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
							>
								<path
									fill="#fff"
									d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
								/>
							</svg>
						</button>
						<ul className="hidden md:flex gap-x-6 text-secondary">
							<li>
								<select
									defaultValue={'DEFAULT'}
									className="select-xs max-w-xs bg-gray-900 border-secondary border-2 text-white"
								>
									<option value="DEFAULT" disabled>
										CHOOSE YOUR CITY
									</option>
									<option>FRANKFURT</option>
									<option>BERLIN</option>
									<option>HAMBURG</option>
									<option>STUTGART</option>
									<option>DÜSSELDORF</option>
									<option>KÖLN</option>
								</select>
							</li>
							<li className="hover:text-primary">
								<a id="adventures_button" href="/adventures">
									<p>ADVENTURES</p>
								</a>
							</li>
							<li className="hover:text-primary">
								<a id="games_button" href="/games">
									<p>GAMES</p>
								</a>
							</li>
							<li className="hover:text-primary">
								<a id="experiences_button" href="/experience">
									<p>BOOK AN EXPERIENCE</p>
								</a>
							</li>
							<li className="hover:text-primary">
								<a href="/news">
									<p>NEWS</p>
								</a>
							</li>
							<li className="hover:text-primary">
								<a id="about_button" href="/about">
									<p>ABOUT</p>
								</a>
							</li>
							<li className="hover:text-primary">
								<a id="contacts_button" href="/contacts">
									<p>CONTACTS</p>
								</a>
							</li>
						</ul>
						<Button />
					</div>
				</div>
			</div>
		</>
	)
}
