export default function Footer(): JSX.Element {
	return (
		<>
			<div className="container flex relative w-[100%] h-[100%] mb-20">
				<div className="place-content-center w-full">
					<div className="flex justify-center">
						<img
							src="/img/logo29.png"
							alt="BR29 Logo"
							width={100}
							height={100}
						/>
					</div>
					<div className="flex gap-10 justify-center text-secondary py-10">
						<div className="v_lined left-0 text-secondary px-0">
							&nbsp;{' '}
							<a href="/adventures" className="hover:text-primary">
								Adventures
							</a>
							<br />
							&nbsp;{' '}
							<a href="/news" className="hover:text-primary">
								News
							</a>
						</div>
						<div className="v_lined left-0 text-secondary px-0">
							&nbsp;{' '}
							<a href="/about" className="hover:text-primary">
								About us
							</a>
							<br />
							&nbsp;{' '}
							<a href="/contacts" className="hover:text-primary">
								Contacts
							</a>
						</div>
						<div className="v_lined left-0 text-secondary px-0">
							&nbsp; Confidentiality Policy
							<br />
							&nbsp; User&rsquo;s Agreement
						</div>
					</div>
					<div className="flex flex-col gap-3 items-center justify-center w-full text-xs text-center text-white text-decoration-none">
						<hr className="w-1/2 h-0,5" />
						<p>
							&#34;BEYOND REALMS 29 Ltd.&#34; +49 69 12345678
							beyondrealms@gmail.com
							<br />
							The Matrix Building, unit 7, Musterstrasse 777, Frankfurt am Main,
							Germany
							<br />
							Company Info | Legal Notice | Privacy Policy
							<br />
							2024 ALL RIGHTS RESERVED ©
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
