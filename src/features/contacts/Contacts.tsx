import Navigation from '../../components/navigation/navMainPage'
export default function Contacts(): JSX.Element {
	return (
		<>
			<Navigation />
			<div className=" flex-col py-40 px-40 w-2/4 text-5xl font-bold text-white">
				<h1>CONTACTS:</h1>
				<p>:::::::::::::::::</p>
				<br />
				<p>
					&quot;BEYOND REALMS 29 Ltd.&quot; +49 69 12345678
					beyondrealms@gmail.com The Matrix Building, unit 7, Musterstrasse 777,
					Frankfurt am Main, Germany Company Info | Legal Notice | Privacy
					Policy 2024 ALL RIGHTS RESERVED ©
				</p>
			</div>
		</>
	)
}
