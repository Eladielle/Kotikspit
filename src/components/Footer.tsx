export default function Footer(): JSX.Element {
	return (
		<>
			<div className="footer flex relative top-0 w-full min-h-full mt-[300px] mb-0">
				<div className="flex flex-col gap-5 items-center justify-center  bottom-0 w-full">
					<div>
						<img
							src="/img/logo29.png"
							alt="BR29 Logo"
							width={100}
							height={100}
						/>
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
